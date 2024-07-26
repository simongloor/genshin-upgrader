/* eslint-disable no-unreachable */
/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { Fragment } from 'react';

import Artifact from './Artifact';
import Character from './Character';
import SpacerPiece from './SpacerPiece';
import ArtifactStats from './ArtifactStats';
import { getBuildKey } from '../data/actions/characters';

import '../styles/ArtifactEvaluation.scss';

export default function ArtifactEvaluation({
  evaluationData,
  handleClickPinArtifact,
}) {
  return (
    <div
      className="ArtifactEvaluation row"
    >
      {
        evaluationData.artifactData.location ? (
          <Character
            characterName={evaluationData.artifactData.location}
          />
        ) : (
          <SpacerPiece size="default" />
        )
      }
      <button
        type="button"
        className="button pin"
        alt="pin artifact"
        onClick={() => handleClickPinArtifact
          && handleClickPinArtifact(evaluationData.artifactData)}
        disabled={!handleClickPinArtifact}
      >
        <Artifact
          data={evaluationData.artifactData}
        />
      </button>
      {
        evaluationData.buildEvaluations
          .map((b) => (
            <Fragment key={
              getBuildKey(
                b.build.characterName,
                b.build.mainstats,
                b.build.substats,
              )
            }>
              <SpacerPiece size="small" />
              <Character
                characterName={b.build.characterName}
                buildName={getBuildKey(
                  b.build.characterName,
                  b.build.mainstats,
                  b.build.substats,
                )}
                sets={b.build.sets}
              />
              <ArtifactStats
                totalSubstats={b.totalSubstats}
                showCounter={false}
                uniformSubststCount={9}
              />
            </Fragment>
          ))
      }
    </div>
  );
}
