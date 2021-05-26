import "./style.css";
import profilePic from "./images/profilePic2.jpg";
import studentPilot1 from "./images/studentPilot1.jpg";
import studentPilot2 from "./images/studentPilot2.jpg";
import tuitor from "./images/tuiter1.mp4";
import nissan from "./images/nissan.jpg";
import waiter from "./images/waiter.mp4";
import trainee1 from "./images/trainee1.JPG";
import trainee2 from "./images/trainee2.JPG";
import trainee3 from "./images/trainee3.JPG";
import trainee4 from "./images/trainee4.JPG";

function App() {
  return (
    <div>
      <div className="sideBar">
        <div className="row d-inline-block">
          <div>
          <a className="col-12" href="#profile">
            <i className="fas fa-grip-lines"></i>
          </a>
          </div>
          <div>
          <a className="col-12" href="#education">
            <i className="fas fa-grip-lines"></i>
          </a>
          </div>
          <div>
          <a className="col-12" href="#experience">
            <i className="fas fa-grip-lines"></i>
          </a>
          </div>
          <div>
          <a className="col-12" href="#skills">
            <i className="fas fa-grip-lines"></i>
          </a>
          </div>
          <div>
          <a className="col-12" href="#contact">
            <i className="fas fa-grip-lines"></i>
          </a>
          </div>
        </div>
      </div>

      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <div className="container-fluid">
          <a href="index.html" className="navbar-brand fs-2">
            Sunshiro
          </a>
          <button
            className="navbar-toggler"
            data-bs-toggle="collapse"
            data-bs-target="#navbarToggle"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarToggle"
          >
            <ul className="navbar-nav fs-5">
              <li className="nav-item mx-1">
                <a href="#profile" className="nav-link">
                  Profile
                </a>
              </li>
              <li className="nav-item me-1">
                <a href="#education" className="nav-link">
                  Education
                </a>
              </li>
              <li className="nav-item me-1">
                <a href="#experience" className="nav-link">
                  Experiences
                </a>
              </li>
              <li className="nav-item me-1">
                <a href="#skills" className="nav-link">
                  Skills
                </a>
              </li>
              <li className="nav-item me-1">
                <a href="#contact" className="nav-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <header className="header d-flex align-items-center">
        <div className="nameBlog">
          <h1 className="name">I'm Sunshiro.</h1>
          <h4 className="firstName">Wasawat Boonhor</h4>
        </div>
      </header>
      <section id="profile" className="topicContainer">
        <p className="topic mb-5">Profile</p>
        <div className="container-fluid">
          
        <div className="row d-flex justify-content-center">
            <div className="col-7 col-lg-6 my-3 blockPicfile">
              <img src={profilePic} alt="" />
            </div>
            <div className="col-12 col-lg-6 text-start">
            <div className="container-fluid col-md-12 text-center">
              <div className="mx-0 mb-4">
                <p className="headerTopic">Date of Birth</p>
                <p>01 / 04 / 1995</p>
              </div>
              <div className="mb-4">
                <p className="headerTopic">Detail</p>
                <p>
                  I am an enthusiastic, hard working person with a logical and
                  practical thinking to analyze problems and to see things
                  through completion. <br />
                  Additionally, I am ambitious to learn and to comfront
                  challenges. I am as well excellent in communication allowing
                  me to efficiently communicate with various people.
                </p>
              </div>
              <div className="mb-4">
                <p className="headerTopic">Address</p>
                <p>Aspace Asoke-Ratchada Condo, Dindaeng, Bangkok 10400</p>
              </div>
              <div className="mb-4">
                <p className="headerTopic">Personal Skills</p>
                <ul className="profileList">
                  <li>Well time management</li>
                  <li>Reliable and professional organized</li>
                  <li>Fast learner</li>
                  <li>Team player</li>
                  <li>Able to work under pressure</li>
                </ul>
              </div>
            </div>
            </div>
          </div>

          
        </div>
      </section>
      <section id="education" className="colorChange">
        <div className="topicContainer">
          <p className="topic">Education</p>
          <div className="container">
            <div className="row mt-5 mb-5">
              <div className="col-6">
                <h4>Kasetsart University</h4>
                <p className="companyName">Bangkok, Thailand</p>
              </div>
              <div className="col-6 text-start">
                <h6 className="m-0">
                  Bachelor Degree of Aerospace Engineering
                </h6>
                <p className="companyName">2013 - 2018</p>
                <p className="m-0">
                  Program : International Double Degree Program (IDDP)
                </p>
                <p className="companyName">
                  3 years at KU and 1.5 years at RMIT
                </p>
                <p>Grade : 3.28 (second honour)</p>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <h4>RMIT</h4>
                <p className="companyName">Melbourne, Victoria, Australia</p>
              </div>
              <div className="col-6 text-start">
                <h6 className="m-0">
                  Bachelor Degree of Aerospace Engineering
                </h6>
                <p className="companyName">2016 - 2017</p>
                <p>Grade : 2.8 (2A honour)</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="experience" className="topicContainer">
        <p className="topic">Experience</p>
        <div className="container-fluid mt-4">
          <div className="row my-5 mx-0 d-flex justify-content-center align-items-center">
            <div className="col-7 col-lg-6 my-3">
              <div className="container p-0">
                <div className="row">
                  <div className="col-12 m-auto">
                    <div
                      className="carousel slide"
                      id="slide1"
                      data-bs-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <button
                          className="active"
                          data-bs-target="#slide1"
                          data-bs-slide-to="0"
                        ></button>
                        <button
                          data-bs-target="#slide1"
                          data-bs-slide-to="1"
                        ></button>
                      </ol>
                      <div className="carousel-inner">
                        <div className="blockPic">
                          <div className="carousel-item active">
                            <img src={studentPilot1} alt="" />
                          </div>
                          <div className="carousel-item">
                            <img src={studentPilot2} alt="" />
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        data-bs-slide="prev"
                        data-bs-target="#slide1"
                      >
                        <span className="carousel-control-prev-icon"></span>
                      </button>
                      <button
                        className="carousel-control-next"
                        data-bs-slide="next"
                        data-bs-target="#slide1"
                      >
                        <span className="carousel-control-next-icon"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-start">
              <p className="jobClass">STUDENT PILOT</p>
              <p className="companyName">
                Thai Airasia Company Limited | May 2019 - Present
              </p>
              <h5 className="contentBlog">Detail</h5>
              <p className="contentBlog">
                I have learned the basic knowledge of aviation and how to fly 2
                types of small aircrafts, C172 and D42. <br />
                In order to become a professional pilot, there are many
                important skills needed to be developed such as multi-tasking,
                logical thinking, problem solvoing, ability to work under
                pressure, and communication to cooperate with the other people
                in other sections.
              </p>
            </div>
          </div>
          <div className="row my-5 mx-0 d-flex justify-content-center align-items-center">
            <video className="col-7 col-lg-6 my-3" playsInline autoPlay loop muted>
              <source src={tuitor} type="video/mp4" />
            </video>
            <div className="col-12 col-lg-6 text-start">
              <p className="jobClass">TUITOR</p>
              <p className="companyName">Freelance | Jan 2019 - May 2019</p>
              <h5 className="contentBlog">Detail</h5>
              <p className="contentBlog">
                I taught Mathematics and Physics for high school students for
                university admission. With teaching limit time from each class,
                I have to well prepare in term of time and class content before
                the class begin.
              </p>
            </div>
          </div>
          <div className="row my-5 mx-0 d-flex justify-content-center align-items-center">
            <div className="col-7 col-lg-6 my-3 blockPic">
              <img src={nissan} alt="" />
            </div>
            <div className="col-12 col-lg-6 text-start">
              <p className="jobClass">RESEARCH AND EVALUATION ENGINEER</p>
              <p className="companyName">
                Nissan Motor Asia Pacific | Apr 2018 - Dec 2018
              </p>
              <h5 className="contentBlog">Detail</h5>
              <p className="contentBlog">
                I worked as an Research and Evaluation Engineer in a seciton of
                Vehicle System Test. I took responsible of interior and exterior
                structures. Most of the test were about evaluating strength,
                rigidity, and appearance of testing parts after applying load.{" "}
                <br />
                To garuntee the quality of tested products, results of the test
                must be above the standard set by Nissan. During the working
                time, I obtained various significant abilities; for example,
                learnability, interpersonal skills, empathy, and time
                management.
              </p>
            </div>
          </div>
          <div className="row my-5 mx-0 d-flex justify-content-center align-items-center">
            <video className="col-7 col-lg-6 my-3" playsInline autoPlay loop muted>
              <source src={waiter} type="video/mp4" />
            </video>
            <div className="col-12 col-lg-6 text-start">
              <p className="jobClass">WAITER</p>
              <p className="companyName">
                Rimthang Thai Cafe and Take Away | Jul 2016 - Oct 2017
              </p>
              <h5 className="contentBlog">Detail</h5>
              <p className="contentBlog">
                To support all my finances by myself during studying excluding
                tuition fee, I did a part-time service waiter job. There was
                only me in the front; Thus, my duties were taking orders,
                receiving calls, servicing and serving customers, preparing
                material, and cleaning. <br />
                There were a lot of pressure needed to be handled from customers
                and co-workers in the kitchen Good and friendly services were
                also required to make customers satisfied.
              </p>
            </div>
          </div>
          <div className="row my-5 mx-0 d-flex justify-content-center align-items-center">
            <div className="col-7 col-lg-6 my-3">
              <div className="container p-0">
                <div className="row">
                  <div className="col-12 m-auto">
                    <div
                      className="carousel slide"
                      id="slide2"
                      data-bs-ride="carousel"
                    >
                      <ol className="carousel-indicators">
                        <button
                          className="active"
                          data-bs-target="#slide2"
                          data-bs-slide-to="0"
                        ></button>
                        <button
                          data-bs-target="#slide2"
                          data-bs-slide-to="1"
                        ></button>
                        <button
                          data-bs-target="#slide2"
                          data-bs-slide-to="2"
                        ></button>
                        <button
                          data-bs-target="#slide2"
                          data-bs-slide-to="3"
                        ></button>
                      </ol>
                      <div className="carousel-inner">
                        <div className="blockPic">
                          <div className="carousel-item active">
                            <img src={trainee1} alt="" />
                          </div>
                          <div className="carousel-item">
                            <img src={trainee2} alt="" />
                          </div>
                          <div className="carousel-item">
                            <img src={trainee3} alt="" />
                          </div>
                          <div className="carousel-item">
                            <img src={trainee4} alt="" />
                          </div>
                        </div>
                      </div>
                      <button
                        className="carousel-control-prev"
                        data-bs-slide="prev"
                        data-bs-target="#slide2"
                      >
                        <span className="carousel-control-prev-icon"></span>
                      </button>
                      <button
                        className="carousel-control-next"
                        data-bs-slide="next"
                        data-bs-target="#slide2"
                      >
                        <span className="carousel-control-next-icon"></span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-6 text-start">
              <p className="jobClass">MECHANICAL TRAINEE</p>
              <p className="companyName">
                Thai Airasia Company Limited | Nov 2016 - Feb 2017
              </p>
              <h5 className="contentBlog">Detail</h5>
              <p className="contentBlog">
                My responsibilities as a trainee were inspecting, repairing, and
                maintaining aircrafts, A320. I acknowledged real working
                experiences such as collaboration, pucnctuality, and
                learnability.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section id="skills" className="colorChange">
        <div className="topicContainer">
          <p className="topic">Skills</p>
          <div className="container skills">
            <div className="row">
              <div className="col-md-4 mb-5">
                <h6>English (TOEIC 820)</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <div className="col-md-4 mb-5">
                <h6>MS Office</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="col-md-4 mb-5">
                <h6>Photoshop</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4 mb-5">
                <h6>Hyper Text Markup Language (HTML)</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="col-md-4 mb-5">
                <h6>Cascading Style Sheets (CSS)</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="col-md-4 mb-5">
                <h6>JavaScript (JS)</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
            <div className="row justify-content-center">
              <div className="col-md-5 mb-5">
                <h6>Redux</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
              <div className="col-md-5 mb-5">
                <h6>Boostrap v5</h6>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="far fa-star"></i>
                <i className="far fa-star"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="colorChangeBlack">
        <div className="topicContainer py-5">
          <p className="topicBlack">Contact</p>
          <div className="container contactLink">
            <div>
              <i className="fas fa-address-card">
                <span className="ms-2">
                  Aspace Asoke-Ratchada Condo,Dindaeng, Bangkok 10400
                </span>
              </i>
            </div>
            <div>
              <i className="fas fa-phone-square-alt">
                <span className="ms-2">062-142-5951</span>
              </i>
            </div>
            <div>
              <i className="fas fa-envelope-square">
                <span className="ms-2">wasawatboonhor@gmail.com</span>
              </i>
            </div>
            <div>
              <a
                href="https://github.com/wasawat-b"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fab fa-github-square">
                  <span className="ms-2">https://github.com/wasawat-b</span>
                </i>
              </a>
            </div>
            <a
              className="mx-2"
              data-bs-toggle="tooltip"
              title="https://www.facebook.com/w.sunshiro/"
              href="https://www.facebook.com/w.sunshiro/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-square"></i>
            </a>
            <a
              className="mx-2"
              data-bs-toggle="tooltip"
              title="https://instagram.com/sunshiro.capt?utm_medium=copy_link"
              href="https://instagram.com/sunshiro.capt?utm_medium=copy_link"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram-square"></i>
            </a>
            <a
              className="mx-2"
              data-bs-toggle="tooltip"
              title="https://www.linkedin.com/in/wasawat-boonhor-31a77b212/"
              href="https://www.linkedin.com/in/wasawat-boonhor-31a77b212/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
