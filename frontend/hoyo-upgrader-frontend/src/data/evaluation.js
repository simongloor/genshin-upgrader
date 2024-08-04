/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */

import { getRelevantSubstatsOfArtifact } from './substats';
import paths from './paths';

// ---------------------------------------------------------
// artifact evaluation

export function getArtifactTier(artifactData, relevantSubstats) {
  if (!artifactData || !relevantSubstats) {
    return '?';
  }

  switch (artifactData.slotKey) {
    case 'flower':
    case 'plume': {
      if (relevantSubstats.wastedSubstats <= 1) {
        return 'S';
      }
      if (relevantSubstats.wastedSubstats <= 2) {
        return 'A';
      }
      if (relevantSubstats.wastedSubstats <= 4) {
        return 'B';
      }
      return 'C';
    }
    case 'sands':
    case 'goblet':
    case 'circlet': {
      if (relevantSubstats.wastedSubstats <= 2) {
        return 'S';
      }
      if (relevantSubstats.wastedSubstats <= 4) {
        return 'A';
      }
      return 'B';
    }
    default: {
      return '?';
    }
  }
}

// ---------------------------------------------------------
// sorting

export function getArtifactQualitySortValue(artifactEvaluation) {
  // artifacts without builds go to the bottom
  if (artifactEvaluation.buildEvaluations.length === 0) {
    return 20;
  }

  return artifactEvaluation.buildEvaluations[0].sortValue;
}

export function getBuildQualitySortValue(build, relevantSubstats, filteredCharacterName) {
  // wasted substats is the biggest factor
  let sortValue = relevantSubstats.wastedSubstats;

  // filtered character build is pushed to be the first build in the list
  if (filteredCharacterName && build.artifactWearer === filteredCharacterName) {
    sortValue -= 100;
  }

  // artifacts that don't have valuable substats go to the bottom
  if (relevantSubstats.impossibleSubstats >= 8) {
    return 10;
  }

  // add chance as decimal
  const {
    missingRolls100,
    missingRolls75,
    missingRolls50,
    missingRolls25,
  } = relevantSubstats;

  if (missingRolls100 > 0) {
    sortValue -= 0.998;
  } else if (missingRolls75 > 0) {
    sortValue -= 0.75 ** missingRolls75;
  } else if (missingRolls50 > 0) {
    sortValue -= 0.5 ** missingRolls50;
  } else if (missingRolls25 > 0) {
    sortValue -= 0.25 ** missingRolls25;
  } else {
    sortValue -= 1;
  }

  return sortValue;
}

// ---------------------------------------------------------
// data enhancement

function getBuildOfWearer(artifact) {
  return artifact.buildEvaluations[artifact.artifactData.location];
}

export function getUpgradePotential(
  relevantSubstats,
  evaluatedCompetingArtifact,
) {
  if (!evaluatedCompetingArtifact) {
    return 0;
  }
  const competingBuild = getBuildOfWearer(evaluatedCompetingArtifact);
  return competingBuild.relevantSubstats.wastedSubstats
    - relevantSubstats.wastedSubstats;
}

function applyUpgradePotential(
  artifactData,
  characterBuilds,
  equippedArtifactsSubstats,
  filteredCharacter,
) {
  // get matching builds
  let matchingBuilds = [];
  if (artifactData.slotKey === paths.piece.flower || artifactData.slotKey === paths.piece.plume) {
    // flower and plume can be used by any character
    matchingBuilds = characterBuilds;
  } else {
    // if no main stat is set, show all builds that can use the artifact
    matchingBuilds = characterBuilds.filter((build) => (
      build.mainstats[artifactData.slotKey].includes(artifactData.mainStatKey)
    ));
  }
  // console.log(matchingBuilds);

  // generate data required for rendering
  let highestUpgradePotential = 0;
  const buildEvaluations = matchingBuilds.map((build) => {
    // console.log(build);
    const totalSubstats = getRelevantSubstatsOfArtifact(artifactData, build);
    let competingArtifact = null;
    if (equippedArtifactsSubstats[build.artifactWearer]) {
      let upgradePotential = 0;
      // eslint-disable-next-line max-len
      competingArtifact = equippedArtifactsSubstats[build.artifactWearer][artifactData.slotKey];

      // Any substats found?
      if (Object.keys(competingArtifact).some((key) => competingArtifact[key] !== 0)) {
        upgradePotential = Math.max(
          0,
          competingArtifact.wastedSubstats - totalSubstats.wastedSubstats,
        );
      } else {
        // no artifact equipped, count all possible substats
        const maxRolls = artifactData.rarity === 5 ? 9 : 7;
        upgradePotential = Math.max(
          0,
          maxRolls - totalSubstats.impossibleSubstats - totalSubstats.wastedSubstats,
        );
      }
      highestUpgradePotential = Math.max(highestUpgradePotential, upgradePotential);
    }
    return {
      build,
      totalSubstats,
      competingArtifact,
      upgradePotential: highestUpgradePotential,
      sortValue: getBuildQualitySortValue(build, totalSubstats, filteredCharacter),
    };
  }).sort((a, b) => (a.sortValue - b.sortValue)); // sort builds by quality

  // return data
  return {
    artifactData,
    buildEvaluations,
    highestUpgradePotential,
  };
}
