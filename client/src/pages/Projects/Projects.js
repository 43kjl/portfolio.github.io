import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <>
      <div className="continer project" id="projects">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          TOP RECENT PROJECTS
        </h2>
        <hr />
        <p className="pb-3 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia a
          odit ab, eligendi cupiditate, minima quasi excepturi modi et quo
          delectus, iusto dolor atque aliquam aspernatur eveniet! Ipsam eum
          nobis omnis id voluptatibus quas eos maxime ipsum facere numquam,
          voluptate qui et animi doloribus nulla eius molestiae unde tempore ad
        </p>
        {/* card design */}
        <div className="row" id="ads">
         
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Full stack</span>
                  <img
                    src="data:image/jpeg;base64,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"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>
                  <span className="card-detail-badge">react</span>
                  <span className="card-detail-badge">Mongodb</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h6 className="text-uppercase">
                      Santa Website
                    </h6>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Mobile App</span>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR356D-1YtSagN4-_ZdjZ5H9o6PKUO4h12dvw&usqp=CAU"
                    alt="project2"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">React Native</span>
                  <span className="card-detail-badge">IOS / ANDROID</span>
                  <span className="card-detail-badge">NEXT JS</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Santa Coding App</h5>
                  </div>
                  <a
                    className="ad-btn"
                    href="https://github.com/techinfo-youtube/ecommerce-app-2023"
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card rounded">
                <div className="card-image">
                  <span className="card-notify-badge">Backend</span>
                  <img
                    src="https://www.nextwebi.com/assets/img/img-source/mobile-top-banner-28.png"
                    alt="project1"
                  />
                </div>
                <div className="card-image-overly m-auto mt-3">
                  <span className="card-detail-badge">Node</span>
                  <span className="card-detail-badge">Express</span>

                  <span className="card-detail-badge">NoSQL</span>
                  <span className="card-detail-badge">IOS / ANDROID</span>
                </div>
                <div className="card-body text-center">
                  <div className="ad-title m-auto">
                    <h5 className="text-uppercase">Santa Job Portal</h5>
                  </div>
                  <a className="ad-btn" href="view">
                    View
                  </a>
                </div>
              </div>
            </div>
         
        </div>
      </div>
    </>
  );
};

export default Projects;