/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';

import iconChevronDown from '../theme/chevron_down.svg';
import iconChevronUp from '../theme/chevron_up.svg';
import { getStaticImagePath } from '../data/paths';
import '../styles/Header.scss';
import Box from './Box';

export default function Header({
  className,
  buttonsLeft,
  buttonsRight,
  buttonsDropdown,
}) {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div
      className={`Header ${className || ''}`}
    >
      <div className="row">
        <div>
          <div className="brand">
            <img
              src={getStaticImagePath('/logo.png')}
              alt="noblesse logo"
            />
            <h1>Genshin <strong>Up</strong>grader</h1>
          </div>
          {buttonsLeft}
          {
            buttonsDropdown && (
              <div className="dropdown">
                <button
                  className="primary"
                  type="button"
                  onClick={() => setDropdownOpen((state) => !state)}
                >
                  <img
                    src={dropdownOpen ? iconChevronUp : iconChevronDown}
                    alt="dropdown"
                  />
                </button>
                {dropdownOpen && (
                  <Box className="dropdown">
                    {buttonsDropdown}
                  </Box>
                )}
              </div>
            )
          }
        </div>
        {buttonsRight}
      </div>
    </div>
  );
}
