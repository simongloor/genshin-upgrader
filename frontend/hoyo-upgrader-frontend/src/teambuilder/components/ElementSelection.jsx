/* eslint-disable no-unused-vars */
import React from 'react';
import ownedCharacters from '../data/mock/ownedCharacters';
import characters from '../data/characters';
import paths from '../../data/paths';
import Box from '../../components/Box';
import ElementCharacters from './ElementCharacters';
// import '../styles/ElementSelection.scss';

export default function ElementSelection({
  onSelectElement,
}) {
  const ownedCharactersData = characters
    .filter((char) => ownedCharacters.includes(char.name));

  const characterByRoleByElement = paths.elements.reduce((acc, element) => {
    acc[element] = paths.roles.reduce((roleAcc, role) => {
      const roles = roleAcc;
      roles[role] = ownedCharactersData
        .filter((char) => char.element === element && char.role === role);
      return roles;
    }, {});
    return acc;
  }, {});

  const MaxNumberOfCharactersByRole = paths.roles.reduce((acc, role) => {
    const roles = acc;
    roles[role] = Math.max(...paths.elements.map(
      (element) => characterByRoleByElement[element][role].length,
    ));
    return roles;
  }, {});

  return (
    <Box
      className="ElementSelection"
    >
      <h2>select element</h2>
      <div className="column">
        {
          paths.elements.map((element) => {
            console.log('element', element);
            return (
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
            );
          })
        }
      </div>
    </Box>
  );
}
