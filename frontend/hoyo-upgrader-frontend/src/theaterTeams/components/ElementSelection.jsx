/* eslint-disable no-unused-vars */
import React from 'react';
import ownedCharacters from '../data/mock/ownedCharacters';
import characters from '../data/characters';
import paths, { getRoleImgPath } from '../../data/paths';
import Box from '../../components/Box';
import SpacerPiece from '../../components/SpacerPiece';
import ElementCharacters from './ElementCharacters';
import '../styles/ElementSelection.scss';

export default function ElementSelection({
  onSelectElement,
}) {
  const ownedCharactersData = characters
    .filter((char) => ownedCharacters.includes(char.name));

  // get characters by role by element
  const characterByRoleByElement = paths.elements.reduce((acc, element) => {
    acc[element] = paths.roles.reduce((roleAcc, role) => {
      const roles = roleAcc;
      roles[role] = ownedCharactersData
        .filter((char) => char.element === element && char.role === role);
      return roles;
    }, {});
    return acc;
  }, {});

  // get max number of characters by role
  const MaxNumberOfCharactersByRole = paths.roles.reduce((acc, role) => {
    const roles = acc;
    roles[role] = Math.max(...paths.elements.map(
      (element) => characterByRoleByElement[element][role].length,
    ));
    return roles;
  }, {});

  // render
  return (
    <Box
      className="ElementSelection"
    >
      <h2>select element</h2>
      <div className="column">
        <div className="roles row">
          <SpacerPiece size="default" />
          {
            paths.roles.map((role) => (
              new Array(MaxNumberOfCharactersByRole[role]).fill(null).map((_, index) => (
                <img
                  className={`role tile ${role}`}
                  src={getRoleImgPath(role)}
                  alt={role}
                  // eslint-disable-next-line react/no-array-index-key
                  key={`role-${index}`}
                />
              ))
            ))
          }
        </div>
        {
          paths.elements.map((element) => (
            <button
              className="element"
              key={element}
              type="button"
              onClick={() => onSelectElement(element)}
              alt={element}
            >
              <ElementCharacters
                element={element}
                charactersByRole={characterByRoleByElement[element]}
                maxNumberOfCharactersByRole={MaxNumberOfCharactersByRole}
              />
            </button>
          ))
        }
      </div>
    </Box>
  );
}
