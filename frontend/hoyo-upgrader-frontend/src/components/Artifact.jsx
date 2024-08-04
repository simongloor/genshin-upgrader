/* eslint-disable no-unused-vars */
import React from 'react';
// import { getArtifactSubstats, getArtifactTier } from '../data/substats';

import iconTrash from '../theme/trash.svg';
import '../styles/Artifact.scss';

export default function Artifact({
  data,
  // characterBuild,
  tier,
  piece = 'empty',
  set = 'generic',
  count = -1,
  mainstat,
  // showTier = false,
  upgradePotential = -1,
}) {
  // console.log(data);
  // console.log(upgradePotential);
  // console.log(characterBuild);

  // What to display
  const displayedSet = data ? data.set : set;
  const displayedPiece = data ? data.piece : piece;

  // render label
  let label = null;

  // tier?
  if (tier) {
    label = (
      <h6 className="tier">{tier}</h6>
    );
  }

  // upgrade potential?
  switch (upgradePotential) {
    case 0: {
      label = (
        <img className="trash" src={iconTrash} alt="wasted" />
      );
      break;
    }
    case -1: {
      break;
    }
    default: {
      label = (
        <h6 className="upgrade">{`↑${upgradePotential}`}</h6>
      );
    }
  }

  // add widget around label
  const widget = data && (label || tier) ? (
    <div className={`tier tile-marker ${tier ? 'heavy' : ''} ${label ? '' : 'empty'}`}>
      <div className={`${data.piece === 'flower' || data.piece === 'plume' ? 'generic' : data.mainStatKey}`} />
      {label}
    </div>
  ) : null;

  // render
  return (
    <div
      className={`Artifact tile ${displayedSet} ${displayedPiece}`}
    >
      <img
        src={`${process.env.PUBLIC_URL}/genshin/artifacts/${displayedSet}/${displayedPiece}.png`}
        alt={displayedPiece}
      />
      { widget }
      {
        count !== -1 && (
          <div className={`count tile-marker ${mainstat && 'tier'}`}>
            <div className={`${mainstat || ''}`} />
            <h6 className="fine">{count}</h6>
          </div>
        )
      }
      {
        data
        && ((data.rarity === 5 && data.level !== 20) || (data.rarity === 4 && data.level !== 16))
        && (
          <span className="level fine">{ data.level }</span>
        )
      }
    </div>
  );
}
