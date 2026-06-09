/* eslint-disable no-unused-vars */
import React from 'react';
import paths, { getCharacterImgPath, getElementImgPath } from '../../data/paths';
import '../styles/ElementCharacters.scss';
import characters from '../data/characters';
import ownedCharacters from '../data/mock/ownedCharacters';

export default function ElementCharacters({
  element,
  charactersByRole,
  maxNumberOfCharactersByRole,
}) {
  return (
    <div
      className="ElementCharacters row"
    >
      <img
        className="tile"
        src={getElementImgPath(element)}
        alt={element}
      />
      {
        // add an element for the number of max roles
        paths.roles.map((role) => (
          new Array(maxNumberOfCharactersByRole[role]).fill(null).map((_, index) => (
            index < charactersByRole[role].length
              ? (
                <img
                  className="tile character"
                  src={getCharacterImgPath(
                    Object.keys(paths.character).find(
                      (key) => paths.character[key] === charactersByRole[role][index].name,
                    ),
                  )}
                  alt={charactersByRole[role][index].name}
                  key={charactersByRole[role][index].name}
                />
              ) : (
                <div
                  className="tile"
                  // eslint-disable-next-line react/no-array-index-key
                  key={`empty-${role}-${index}`}
                />
              )
          ))
        ))
      }
    </div>
  );
}
