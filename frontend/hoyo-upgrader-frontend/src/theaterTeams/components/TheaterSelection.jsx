/* eslint-disable no-unused-vars */
import React from 'react';
import paths, { getElementImgPath } from '../../data/paths';

import Box from '../../components/Box';
import '../styles/TheaterSelection.scss';

function getTheaterCombinationsForElement(firstElement) {
  const allElements = paths.elements.filter((el) => el !== firstElement);

  // generate all combinations of 3 elements that include the selected element
  // the order of the elements in the combination does not matter
  // every combination only appears once
  // the first element is given
  const slots = 2;
  const elementCombinations = []; // array of arrays
  for (let i = 0; i < allElements.length - slots + 1; i += 1) {
    for (let j = i + 1; j < allElements.length - slots + 2; j += 1) {
      elementCombinations.push([firstElement, allElements[i], allElements[j]]);
    }
  }

  return elementCombinations;
}

export default function TheaterSelection({
  selectedElement,
  onSelectElements,
}) {
  if (!selectedElement) {
    return null;
  }
  const elementCombinations = getTheaterCombinationsForElement(selectedElement);
  return (
    <Box
      className="TheaterSelection"
    >
      <h2>select theater</h2>
      <div className="elements">
        {
          elementCombinations.map((elements) => (
            <button
              className="combination row"
              key={elements.join('-')}
              type="button"
              onClick={() => onSelectElements(elements)}
            >
              {
                elements.map((element) => (
                  <div
                    className="element tile"
                    key={element}
                  >
                    <img
                      src={getElementImgPath(element)}
                      alt={element}
                    />
                  </div>
                ))
              }
            </button>
          ))
        }
      </div>
    </Box>
  );
}
