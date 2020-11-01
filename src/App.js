import "./App.scss";
import Tabs from "./components/Tabs";
import hero from "./assets/images/hero.jpg";
import arrow from "./assets/images/right-arrow.svg";

function App() {
  return (
    <div className="App">
      <main className="site" role="main">
        {/* header */}
        <header className="greeting wrapper">
          <div className="content-wrapper">
            <div className="hero">
              <div className="hero-copy intro-fade">
                <h1 class="cbs-sm">Front-End Development</h1>
                <p class="cbs">
                  <strong>Engineering with heart.</strong> From the beginning,
                  we’ve believed that software has the power to change the
                  world. We work with small startups and global brands alike,
                  combining two decades of agile development practice with
                  strategic thinking to make clients’ digital dreams a reality.
                </p>
                <a className="btn btn-hero" href="#wip">
                  Recent Work
                  <i className="arrow-icon on-btn" aria-hidden="true">
                    <img src={arrow} alt="arrow" />
                  </i>
                </a>
              </div>

              <figure
                className="hero-illy intro-pop"
                role="img"
                aria-label="Frontend at Viget"
              >
                <img
                  className="hero-img"
                  src={hero}
                  alt="A computer on a table"
                />
              </figure>
            </div>
          </div>
        </header>

        {/* core capabilities */}
        <section className="core wrapper flush">
          <div className="content-wrapper">
            <h2 className="visually-hidden">Core Capabilities</h2>
            <Tabs />
          </div>
        </section>

        {/* other */}
        <section className="other wrapper">
          <div className="content-wrapper">
            <h2 className="title-capabilities">Other Capabilities</h2>
            <div className="card-list">
              <article className="card">
                <section className="card-summary">
                  <h3 class="cbs">
                    <span className="accessory">Creative</span>
                  </h3>
                  <a className="title cbs" href="#wip">
                    Combining style with substance.
                  </a>
                  <p>
                    The best digital experiences are ones that go beyond being
                    merely functional and efficient. To draw interest with
                    stunning visuals, provide interactive elements, and tell a
                    compelling story is to create an experience worth
                    revisiting.
                  </p>
                </section>
                <nav className="cta-wrapper">
                  <a className="cta" href="#wip">
                    Read more
                    <i className="arrow-icon on-cta" aria-hidden="true">
                      <img src={arrow} alt="arrow" />
                    </i>
                  </a>
                </nav>
              </article>

              <article className="card">
                <section className="card-summary">
                  <h3 class="cbs">
                    <span className="accessory">User Experience</span>
                  </h3>
                  <a className="title cbs" href="#wip">
                    Delightfully usable.
                  </a>
                  <p>
                    Our user-centered approach starts with discovering the
                    perceptions, behaviors, and goals of your customers and
                    visitors. We blend this knowledge with both data analysis
                    and an understanding of your business to engage users and
                    get results.
                  </p>
                </section>
                <nav className="cta-wrapper">
                  <a className="cta" href="#wip">
                    Read more
                    <i className="arrow-icon on-cta" aria-hidden="true">
                      <img src={arrow} alt="arrow" />
                    </i>
                  </a>
                </nav>
              </article>

              <article className="card">
                <section className="card-summary">
                  <h3 class="cbs">
                    <span className="accessory">Data and Analytics</span>
                  </h3>
                  <a className="title cbs" href="#wip">
                    Guided by Data.
                  </a>
                  <p>
                    We make strategic, data-informed decisions that improve the
                    performance of sites, products, and marketing efforts.
                    Through our data collection and interpretation, we’ll show
                    you how to better drive and convert visitors more
                    efficiently with your marketing budget.
                  </p>
                </section>
                <nav className="cta-wrapper">
                  <a className="cta" href="#wip">
                    Read more
                    <i className="arrow-icon on-cta" aria-hidden="true">
                      <img src={arrow} alt="arrow" />
                    </i>
                  </a>
                </nav>
              </article>
            </div>
          </div>
        </section>

        {/* footer */}
        <footer className="footer wrapper" role="contentinfo">
          <div className="content-wrapper">
            <p className="copyright">
              &#169; {new Date().getFullYear()} All rights reserved.
            </p>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
