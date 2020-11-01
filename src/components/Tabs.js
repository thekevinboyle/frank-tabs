import React, { useEffect } from "react";
import { useState } from "react";
import "./Tabs.scss";

const Tabs = ({ children }) => {
  // activeTab is the current tab that is active
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
    console.log("perogi", e.keyCode);
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
          aria-selected="true"
          aria-controls="panel-1"
          id="tab-1"
          tabindex={isActive(1) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(1)}`}
          aria-selected={isActive(1)}
          onClick={() => setActiveTab(1)}
        >
          Client-Side Apps
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-2"
          id="tab-2"
          tabindex={isActive(2) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(2)}`}
          aria-selected={isActive(2)}
          onClick={() => setActiveTab(2)}
        >
          Craft CMS
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-3"
          id="tab-3"
          tabindex={isActive(3) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(3)}`}
          aria-selected={isActive(3)}
          onClick={() => setActiveTab(3)}
        >
          Mobile Apps
        </button>
        <button
          role="tab"
          aria-selected="false"
          aria-controls="panel-4"
          id="tab-4"
          tabindex={isActive(4) ? `0` : `-1`}
          className={`tab-item ${getActiveClass(4)}`}
          aria-selected={isActive(4)}
          onClick={() => setActiveTab(4)}
        >
          React
        </button>
      </nav>
      <div
        id="panel-1"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-1"
        className={`tab-content ${getActiveClass(1)}`}
        aria-hidden={!isActive(1)}
      >
        <h3 className="tab-content-title">Client-Side Apps</h3>
        <p>
          Powering modern web experiences. Client-side apps bring the
          productivity-enhancing and user-pleasing experience of native software
          to the web. If your web app needs an exceptionally fluid and
          interactive interface, look no further.
        </p>
        <p>
          Possit quaestio euripidis pri eu, ei quod dico mel. Mei diceret
          placerat dissentiunt cu, pri debitis nostrum in. Usu ea tritani
          tibique, ne vel nulla oporteat facilisis. Magna utamur rationibus at
          mei, cum ei aliquip dissentiet. Dicta viris accommodare at cum.
        </p>
      </div>
      <div
        id="panel-2"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-2"
        className={`tab-content ${getActiveClass(2)}`}
        aria-hidden={!isActive(2)}
      >
        <h3 className="tab-content-title">Craft CMS</h3>
        <p>
          Craft is a flexible and practical content management system — easy to
          use for members of any team, from designers to developers to content
          producers. At Viget, we’ve been using Craft to create usable and
          accessible websites since its inception. We’ve authored numerous
          plugins and are committed to sharing our knowledge with the
          development community.
        </p>
      </div>
      <div
        id="panel-3"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-3"
        className={`tab-content ${getActiveClass(3)}`}
        aria-hidden={!isActive(3)}
      >
        <h3 className="tab-content-title">Mobile Apps</h3>
        <p>
          We create polished and functional iOS &amp; Android mobile apps for
          clients. These mobile apps are products of careful planning, strong
          design, and agile development. Using technologies like React Native,
          we create powerful mobile experiences across platforms.
        </p>
      </div>
      <div
        id="panel-4"
        role="tabpanel"
        tabindex="0"
        aria-labelledby="tab-4"
        className={`tab-content ${getActiveClass(4)}`}
        aria-hidden={!isActive(4)}
      >
        <h3 className="tab-content-title">React</h3>
        <p>
          We use React to build rich, interaction-driven experiences on the web.
          Since 2013, Viget has been using React as our JavaScript (JS) library
          of choice for building user interfaces due to its component-based
          design, outstanding performance, and improved developer productivity.
          In addition to powering many immersive, interactive experiences across
          our websites and web applications, we've shared a number of React
          tools and components with the community.
        </p>
      </div>
    </div>
  );
};

export default Tabs;
