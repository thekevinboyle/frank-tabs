import "./App.scss";
import Tabs from "./components/Tabs";
import hero from "./assets/images/hero.png";
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
                <h1 className="cbs-sm">Lonny Breaux</h1>
                <p className="cbs">
                  <strong>Frank Ocean</strong> born in Long Beach, California,
                  on October 28, 1987. He grew up in New Orleans, but moved to
                  Los Angeles in his late teens to pursue a career in music.
                  Ocean started out ghostwriting tracks for such pop stars as
                  Justin Bieber and Beyoncé, but soon achieved fame as an artist
                  when, in 2011, he released a mixtape of his own music, titled
                  nostalgia, ULTRA. His next effort, channel primary, was
                  unveiled in 2012 to both critical and popular acclaim, and he
                  followed with the back-to-back releases of Endless and Blonde
                  in 2016.
                </p>
                <a className="btn btn-hero" href="#wip">
                  Read More
                  <i className="arrow-icon on-btn" aria-hidden="true">
                    <img src={arrow} alt="arrow" />
                  </i>
                </a>
              </div>

              <figure
                className="hero-illy intro-pop"
                role="img"
                aria-label="Frank Ocean"
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

        {/* early life */}
        <section className="core wrapper flush">
          <div className="content-wrapper">
            <h2 className="visually-hidden">Who Is Frank Ocean?</h2>
            <Tabs />
          </div>
        </section>

        {/* other */}
        <section className="other wrapper">
          <div className="content-wrapper">
            <h2 className="title-capabilities">Who Is Frank Ocean?</h2>
            <div className="card-list">
              <article className="card">
                <section className="card-summary">
                  <h3 className="cbs">
                    <span className="accessory">Early Life</span>
                  </h3>
                  <a className="title cbs" href="#wip">
                    October 28, 1987
                  </a>
                  <p>
                    Famed musician Frank Ocean was born Christopher Edwin Breaux
                    on October 28, 1987, in Long Beach, California. When he was
                    a child, Breaux’s family moved to New Orleans, where he
                    spent the majority of his youth. He was exposed to the jazz
                    scene there, and also listened to his mother’s R&B CDs.
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
                  <h3 className="cbs">
                    <span className="accessory">Los Angeles</span>
                  </h3>
                  <a className="title cbs" href="#wip">
                    Bigger
                  </a>
                  <p>
                    Ocean moved to Los Angeles to continue his recording
                    projects, intending to stay only a short while. However, as
                    he continued to make meaningful contacts within the music
                    industry, he decided to extend his stay. To make money
                    during this time, Ocean took a job processing insurance
                    claims. Eventually, he got a songwriting deal and began
                    collaborating with producers. He contributed to the writing
                    of the Justin Bieber track “Bigger” in 2008, and the
                    following year he co-wrote the track “I Miss You” with
                    Beyoncé Knowles for her album 4.
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
                  <h3 className="cbs">
                    <span className="accessory">Breakout Success</span>
                  </h3>
                  <a className="title cbs" href="#wip">
                    nostalgia, ULTRA
                  </a>
                  <p>
                    In February 2011, Ocean released a mixtape titled nostalgia,
                    ULTRA. He released the recordings as a free download on his
                    Tumblr site, without Def Jam’s knowledge, announcing via
                    Twitter that he had done so because the label had not been
                    supportive of his efforts after signing him. Ocean’s
                    self-released recording featured a mixture of both
                    originally composed music and heavy samples of tracks from
                    the likes of Coldplay, the Eagles and MGMT.
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
