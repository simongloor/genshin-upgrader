/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';

import {
  countArtifactsByQuality,
  // countArtifactsNotNeeded,
  // countArtifactsWithoutUpgrade,
} from '../data/countArtifacts';

export default function useRecommendations(
  artifacts,
  builds,
  counts,
) {
  // console.log(artifacts, builds, counts);
  const [recommendations, setRecommendations] = useState(null);

  // initialize
  useEffect(() => {
    if (artifacts.isEvaluated) {
      // prepare data
      let newRecommendations = {};
      let recommendedGroups = null;

      // level these

      // UPGRADE100: '100% upgrade',

      // UPGRADE75: '~75% upgrade',

      // UPGRADE50: '~50% upgrade',

      // bring to lvl 4

      // MAYBE_UPGRADE_100: 'might be ~100% upgrade',

      // MAYBE_UPGRADE_30: 'might be ~30% upgrade',

      // reduct these

      // TOO_MANY: 'too many pieces',
      recommendedGroups = { ...counts };
      recommendedGroups.sortedGroups = recommendedGroups.sortedGroups
        .filter((group) => recommendedGroups.groups[group].count >= 10);

      newRecommendations.TOO_MANY = {
        ...recommendedGroups,
        totalCount: 0,
      };

      const artifactGroupsByQuality = countArtifactsByQuality(artifacts.asList, builds);

      newRecommendations = {
        ...newRecommendations,
        ...artifactGroupsByQuality,
      };

      setRecommendations(newRecommendations);
    }

    // console.log('useRecommendations initialized');
  }, [artifacts, builds]);

  return recommendations;
}
