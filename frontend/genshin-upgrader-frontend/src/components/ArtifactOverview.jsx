/* eslint-disable no-unused-vars */
import React from 'react';
import { useSelector } from 'react-redux';

import { getBuildsBySets } from '../data/characters';

import Box from './Box';
import ArtifactEvaluation from './ArtifactEvaluation';
import Artifact from './Artifact';
import SpacerPiece from './SpacerPiece';
import TextPiece from './TextPiece';

// import '../styles/ArtifactOverview.scss';

export default function ArtifactOverview({ artifactData, characterData }) {
  const characterBuilds = getBuildsBySets(characterData);
  const filter = useSelector((state) => state.filter);

  return (
    <Box
      className="ArtifactOverview row"
    >
      <h2>
        Artifacts
        <span className="weak">{artifactData.length}</span>
      </h2>
      {
        artifactData
          // .slice(150, 200)
          .map((artifact, i) => (
            <ArtifactEvaluation
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              data={artifact}
              characterBuilds={characterBuilds[artifact.setKey] || []}
              filteredCharacter={filter.character}
            />
          ))
      }
      {
        artifactData.length === 0 && (
          <div className="row">
            <Artifact set="empty" piece="flower" />
            <SpacerPiece />
            <TextPiece canOverflow>No matching artifact found</TextPiece>
            <SpacerPiece />
          </div>
        )
      }
    </Box>
  );
}
