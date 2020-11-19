import React from "react";
import { useState } from "react";
import "./Tabs.scss";

const Tabs = ({ children }) => {
  // activeTab is a number: 1, 2, 3 or 4 given that this is a static mockup and not a data-driven mock,
  const [activeTab, setActiveTab] = useState(1);

  function isActive(tabNumber) {
    return activeTab === tabNumber;
  }

  function getActiveClass(tabNumber) {
    return isActive(tabNumber) ? "is-active" : "";
  }

  function arrowHelper(e) {
    // arrow up/down button should select next/previous list element
    if (
      e.keyCode === 38 /* keycode for up arrow */ ||
      e.keyCode === 37 /* left arrow */
    ) {
      setActiveTab(Math.max(activeTab - 1, 1));
    } else if (
      e.keyCode === 40 /* down arrow */ ||
      e.keyCode === 39 /* right arrow */
    ) {
      setActiveTab(Math.min(activeTab + 1, 4)); //
    }
  }

  return (
    <div className="tabs">
      {/* For the mockup, I haven't built from data to keep the mockup workflow simple.
      As the mockups became higher fidelity, we would want to use more of React's
      capabilities to eliminate the need from repetition. */}
      <nav
        className="tabs-nav flank-lines"
        role="tablist"
        aria-label="Sample Tabs"
        onKeyDown={arrowHelper}
      >
        <button
          role="tab"
          aria-controls="panel-1"
          id="tab-1"
          tabIndex={isActive(1) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(1)}`}
          aria-selected={isActive(1)}
          onClick={() => setActiveTab(1)}
        >
          nostalgia, ULTRA
        </button>
        <button
          role="tab"
          aria-controls="panel-2"
          id="tab-2"
          tabIndex={isActive(2) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(2)}`}
          aria-selected={isActive(2)}
          onClick={() => setActiveTab(2)}
        >
          channel ORANGE
        </button>
        <button
          role="tab"
          aria-controls="panel-3"
          id="tab-3"
          tabIndex={isActive(3) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(3)}`}
          aria-selected={isActive(3)}
          onClick={() => setActiveTab(3)}
        >
          Endless
        </button>
        <button
          role="tab"
          aria-controls="panel-4"
          id="tab-4"
          tabIndex={isActive(4) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(4)}`}
          aria-selected={isActive(4)}
          onClick={() => setActiveTab(4)}
        >
          Blonde
        </button>
      </nav>
      <div
        id="panel-1"
        role="tabpanel"
        tabIndex="0"
        aria-labelledby="tab-1"
        className={`tab-content ${getActiveClass(1)}`}
        aria-hidden={!isActive(1)}
      >
        <h3 className="tab-content-title">nostalgia ULTRA</h3>
        <p>
          is the debut mixtape by American singer Frank Ocean. It was released
          on February 16, 2011.[3] Ocean was inspired to make the mixtape after
          Hurricane Katrina in his native New Orleans and his subsequent
          relocation to Los Angeles. After joining alternative hip hop group Odd
          Future in 2010, he self-released the mixtape, without initial
          promotion.
        </p>
      </div>
      <div
        id="panel-2"
        role="tabpanel"
        tabIndex="0"
        aria-labelledby="tab-2"
        className={`tab-content ${getActiveClass(2)}`}
        aria-hidden={!isActive(2)}
      >
        <h3 className="tab-content-title">channel ORANGE</h3>
        <p>
          Still riding the wave of success that followed his release of
          nostalgia, ULTRA, Ocean began to work on a follow-up album to be
          released by Def Jam records, with whom he had begun to repair his
          relationship. In June 2012, he unveiled a new track, Pyramids, again
          via his Tumblr site. The following month he performed another track
          from the album on Late Night with Jimmy Fallon. Also in July, Ocean
          posted an open letter to his website, in which he revealed that he had
          feelings for both men and women. Many of his colleagues in the music
          business immediately showed their public support for his courageous
          decision to be open about his sexuality, although he made a point not
          to label his orientation.
        </p>
      </div>
      <div
        id="panel-3"
        role="tabpanel"
        tabIndex="0"
        aria-labelledby="tab-3"
        className={`tab-content ${getActiveClass(3)}`}
        aria-hidden={!isActive(3)}
      >
        <h3 className="tab-content-title">Endless</h3>
        <p>
          is a visual album by American singer Frank Ocean. Released on August
          19, 2016, Endless was Ocean's last release with the record label Def
          Jam Recordings to fulfill his recording contract.
        </p>
      </div>
      <div
        id="panel-4"
        role="tabpanel"
        tabIndex="0"
        aria-labelledby="tab-4"
        className={`tab-content ${getActiveClass(4)}`}
        aria-hidden={!isActive(4)}
      >
        <h3 className="tab-content-title">Blonde</h3>
        <p>
          Blonde features an abstract and experimental sound in comparison to
          Ocean's previous releases, with genres encompassing R&B, avant-garde
          soul and psychedelic pop. The album draws influences from Stevie
          Wonder, the Beatles, and the Beach Boys, while Ocean's use of pitch
          shifted vocals particularly drew comparisons to Prince by critics.
        </p>
      </div>
    </div>
  );
};

export default Tabs;
