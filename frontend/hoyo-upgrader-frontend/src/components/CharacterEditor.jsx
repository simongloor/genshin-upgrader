/* eslint-disable no-unused-vars */
import React from 'react';

import paths from '../data/paths';

import Box from './Box';
import Character from './Character';
import Artifact from './Artifact';
import SubstatButton from './SubstatButton';

import '../styles/CharacterEditor.scss';
import { possibleStats } from '../data/substats';
import { getBuildKey } from '../data/actions/characters';

function CharacterBuild({
  characterName,
  build,
  index,
  onClickDeleteBuild,
  onClickToggleSet,
  onClickToggleMainstat,
  onClickToggleSubstat,
}) {
  // console.log(build);
  // const buildKey = getBuildKey(characterName, build.mainstats, build.substats);
  const handleClickSet = (setName) => {
    onClickToggleSet(characterName, index, setName);
  };
  const handleClickMainStat = (statCategory, statName) => {
    onClickToggleMainstat(characterName, index, statCategory, statName);
  };
  const handleClickSubstat = (statName) => {
    onClickToggleSubstat(characterName, index, statName);
  };

  // render
  return (
    <Box>
      <div className="row header">
        <Character
          key={build}
          characterName={characterName}
        />
        <h2>{ paths.character[characterName] }</h2>
      </div>
      <span><strong>Sets</strong></span>
      <div className="artifacts row">
        {
          Object.keys(paths.set).map((setName) => (
            <button
              key={setName}
              className={`artifact ${setName} ${build.sets.includes(setName) ? 'active' : 'inactive'}`}
              type="button"
              onClick={() => handleClickSet(setName)}
              alt={setName}
            >
              <Artifact
                piece="flower"
                set={setName}
              />
            </button>
          ))
        }
      </div>
      <span><strong>MainStats</strong></span>
      <div className="row">
        <Artifact
          piece="sands"
          set="generic"
        />
        <div className="statButtons row">
          {
            possibleStats.sands.map((statName) => (
              <SubstatButton
                key={statName}
                statName={statName}
                onClick={() => handleClickMainStat('sands', statName)}
                isActive={build.mainstats.sands.includes(statName)}
              />
            ))
          }
        </div>
      </div>
      <div className="row">
        <Artifact
          piece="goblet"
          set="generic"
        />
        <div className="column">
          <div className="statButtons elementalDmg row">
            {
              possibleStats.gobletDmg.map((statName) => (
                <SubstatButton
                  key={statName}
                  statName={statName}
                  onClick={() => handleClickMainStat('goblet', statName)}
                  isActive={build.mainstats.goblet.includes(statName)}
                />
              ))
            }
          </div>
          <div className="statButtons row">
            {
              possibleStats.gobletPrimary.map((statName) => (
                <SubstatButton
                  key={statName}
                  statName={statName}
                  onClick={() => handleClickMainStat('goblet', statName)}
                  isActive={build.mainstats.goblet.includes(statName)}
                />
              ))
            }
          </div>
        </div>
      </div>
      <div className="row">
        <Artifact
          piece="circlet"
          set="generic"
        />
        <div className="statButtons row">
          {
            possibleStats.circlet.map((statName) => (
              <SubstatButton
                key={statName}
                statName={statName}
                onClick={() => handleClickMainStat('circlet', statName)}
                isActive={build.mainstats.circlet.includes(statName)}
              />
            ))
          }
        </div>
      </div>
      <span><strong>Substats</strong></span>
      <div className="statButtons row">
        {
          possibleStats.substat.map((statName) => (
            <SubstatButton
              key={statName}
              statName={statName}
              onClick={() => handleClickSubstat(statName)}
              isActive={build.substats.includes(statName)}
            />
          ))
        }
      </div>
      <button
        className="deleteBuild secondary"
        type="button"
        onClick={() => onClickDeleteBuild(
          characterName,
          getBuildKey(characterName, build.mainstats, build.substats),
        )}
      >
        <span>delete build</span>
      </button>
    </Box>
  );
}

export default function CharacterEditor({
  characterName,
  characterBuilds,
  onClickAddBuild,
  onClickDeleteBuild,
  onClickToggleSet,
  onClickToggleMainstat,
  onClickToggleSubstat,
}) {
  // console.log(characterBuilds);

  // render
  return (
    <div
      className="CharacterEditor"
    >
      {
        characterBuilds && characterBuilds.map((b, i) => (
          <CharacterBuild
            key={getBuildKey(characterName, b.mainstats, b.substats)}
            characterName={characterName}
            build={b}
            index={i}
            onClickDeleteBuild={onClickDeleteBuild}
            onClickToggleSet={onClickToggleSet}
            onClickToggleMainstat={onClickToggleMainstat}
            onClickToggleSubstat={onClickToggleSubstat}
          />
        ))
      }
      <Box className="row right">
        <Character
          characterName={characterName}
        />
        <h2>{ paths.character[characterName] }</h2>
        <button
          className="addBuild primary"
          type="button"
          onClick={() => onClickAddBuild(characterName)}
        >
          <span>+add build</span>
        </button>
      </Box>
    </div>
  );
}
