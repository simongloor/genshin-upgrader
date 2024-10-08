/* eslint-disable no-unused-vars */
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Box from './Box';
import ArtifactEvaluation from './ArtifactEvaluation';
import Artifact from './Artifact';
import SpacerPiece from './SpacerPiece';
import togglePinnedArtifact from '../data/actions/pinboard';

import '../styles/ArtifactOverview.scss';
import QualitySection from './QualitySection';

export default function ArtifactOverview({
  artifacts,
}) {
  // console.log(artifacts);
  // console.log(artifactsAsList);
  const dispatch = useDispatch();
  const { pinnedArtifactData } = useSelector((state) => state.pinboard);
  const pinnedArtifactString = pinnedArtifactData ? JSON.stringify(pinnedArtifactData.substats) : '';

  // handle pinning artifact
  const handleClickPinArtifact = (artifactData) => {
    dispatch(togglePinnedArtifact(artifactData));
  };

  const renderQualitySection = (artifactsOfQuality, label) => {
    if (artifactsOfQuality.length === 0) {
      return null;
    }
    return (
      <>
        <QualitySection label={label} />
        {
          artifactsOfQuality.map((data, i) => (
            <ArtifactEvaluation
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              artifact={data}
              handleClickPinArtifact={handleClickPinArtifact}
              pinnedArtifactString={pinnedArtifactString}
            />
          ))
        }
      </>
    );
  };

  // if (!artifacts) {
  //   return null;
  // }

  // render
  return (
    <Box
      className="ArtifactOverview"
    >
      <h2>
        Artifacts
        <span className="weak">{artifacts ? artifacts.totalCount : 0}</span>
      </h2>
      { artifacts && renderQualitySection(artifacts.chance100, '100% upgrade chance') }
      { artifacts && renderQualitySection(artifacts.chance75, '~75% upgrade chance') }
      { artifacts && renderQualitySection(artifacts.chance50, '~50% upgrade chance') }
      { artifacts && renderQualitySection(artifacts.chance30, '~30% upgrade chance') }
      { artifacts && renderQualitySection(artifacts.chanceLow, 'low upgrade chance') }
      { artifacts && renderQualitySection(artifacts.noUpgrade, 'no upgrade') }
      { artifacts && renderQualitySection(artifacts.notNeeded, 'not needed') }
      {
        // placeholder
        (
          !artifacts || artifacts.totalCount === 0
        ) && (
          <div className="placeholder row">
            <Artifact set="empty" />
            <SpacerPiece />
            <span>No artifacts found</span>
            <SpacerPiece />
          </div>
        )
      }
    </Box>
  );
}
