/* eslint-disable no-unused-vars */
import React from 'react';

import tutorials from '../data/tutorials';

import TutorialPage from './TutorialPage';
import TutorialPagination from './TutorialPagination';
import Box from './Box';

import close from '../theme/close.svg';
import '../styles/TutorialOverview.scss';

export default function TutorialOverview({ onCloseTutorial }) {
  const [tutorialIndex, setTutorialIndex] = React.useState(0);
  const [tutorialPageIndex, setTutorialPageIndex] = React.useState(0);

  // event handlers
  const handlePrev = () => {
    if (tutorialPageIndex > 0) {
      setTutorialPageIndex(tutorialPageIndex - 1);
    } else if (tutorialIndex > 0) {
      setTutorialIndex(tutorialIndex - 1);
      setTutorialPageIndex(tutorials[tutorialIndex - 1].pages.length - 1);
    }
  };
  const handleNext = () => {
    if (tutorialPageIndex < tutorials[tutorialIndex].pages.length - 1) {
      setTutorialPageIndex(tutorialPageIndex + 1);
    } else if (tutorialIndex < tutorials.length - 1) {
      setTutorialIndex(tutorialIndex + 1);
      setTutorialPageIndex(0);
    }
  };

  // render
  return (
    <Box
      className="TutorialOverview"
    >
      <div className="header">
        <h2>Tutorials</h2>
        <button
          className="iconButton"
          type="button"
          onClick={onCloseTutorial}
        >
          <img src={close} alt="close" />
        </button>
      </div>
      <div className="tutorialBody">
        <div className="tutorialList">
          {
            tutorials.map((tutorial, index) => (
              <button
                className={`primary ${tutorialIndex === index ? 'selected' : ''}`}
                key={tutorial.label}
                type="button"
                onClick={() => {
                  setTutorialIndex(index);
                  setTutorialPageIndex(0);
                }}
              >
                <span>{tutorial.label}</span>
              </button>
            ))
          }
        </div>
        <div className="tutorial">
          <TutorialPage
            img={tutorials[tutorialIndex].pages[tutorialPageIndex].img}
            video={tutorials[tutorialIndex].pages[tutorialPageIndex].video}
            title={tutorials[tutorialIndex].pages[tutorialPageIndex].title}
            paragraphs={tutorials[tutorialIndex].pages[tutorialPageIndex].paragraphs}
            forceVideo={tutorialIndex === 0 && tutorialPageIndex === 0}
          />
          <TutorialPagination
            onPrev={handlePrev}
            onNext={handleNext}
            pageNumber={tutorialPageIndex}
            total={tutorials[tutorialIndex].pages.length}
          />
        </div>
      </div>
    </Box>
  );
}
