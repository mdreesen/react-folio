import React from 'react';
import SmollTalkImage from '../../assets/project-images/smollTalk.png';
import EcommBackendImage from '../../assets/project-images/backendEcomm.png';
import BloggerImage from '../../assets/project-images/blogger.png';
import SocialNetworkImage from '../../assets/project-images/socialNetworkBackend.png';
import ReadMeImage from '../../assets/project-images/readmeGen.png';

function Projects() {

    const aboutSmollTalk = {
        name: "SmollTalk",
        description: "This site is a CMS-style chat site similar to a Wordpress site, where communities can post and comment on other friends’ posts.",
        about: "This project was a group project where we utilized different technology to complete this application.",
        techUsed: "Tech used: Express.js, MySql, Handlebars.js, bootstrap, CSS, HTML, Cypress (Testing), JavaScript."
    }

    const aboutBackendEcomm = {
      name: "Ecommerce Backend",
      description: "An e-commerce backend project that deals with Products, tags, and categories. This can help a small shop organize and keep up with their data.",
      about: "Created a Express and MySql e-commerce backend project, this is a 'CRUD' project.",
      techUsed: "Tech used: Express.js, MySql, Sequelize, Node.Js, Dotenv."
    }

    const aboutBlogger = {
      name: "Blogger",
      description: "This site is for bloggers to post their blog links to, comment on posts, and be a part of the blogging community.",
      about: "This blog site utilizes Handlbars.Js as the frontend.",
      techUsed: "Tech used: Handlebars.js, Express-Handlebars, Express-Session, Express-Session-Sequelize, Bcrypt, MySql2, Sequelize, JavaScript."
    }

    const aboutSocialBackend = {
      name: "Social Network Backend",
      description: "This backend application is made for social-media apps. In this backend application we can find users, create users, add and delete friends, add and remove thoughts, and add and remove reactions.",
      about: "A backend product that any social network can utilize.",
      techUsed: "Tech used: Mongoose, MongoDB, Express.Js, Moment.Js."
    }

    const aboutReadMeGen = {
      name: "README Generator",
      description: "This readMe-gen project is to make users a readMe with easy steps to follow so that their README.md looks professional and clean.",
      About: "This README Generator asks the user questions about their project. This is used with Node.Js through the terminal.",
      techUsed: "Javascript, Inquirer, fs."
    }

    return(
        <section>
        <div className="projectContainer">
         <h2 className="projectTitle">Projects</h2>
        </div>
            <div className="card bg-dark text-white">
                <img className="card-img" src={SmollTalkImage} alt="Card image" />
                    <div className="card-img-overlay">
                     <div className="card-top">
                        <h5 className="card-title">{aboutSmollTalk.name}</h5>
                     </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Click to see details</button>
                    </div>
                </div>
                <div>
                
        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{aboutSmollTalk.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{aboutSmollTalk.description}</p>
                <p>{aboutSmollTalk.about}</p>
                <p>{aboutSmollTalk.techUsed}</p>
              </div>
              <div className="modal-footer">
                <a href="https://github.com/queen-stack/smollTalk" className="btn btn-info" role="button">Github</a>
                <a href="https://limitless-shelf-64509.herokuapp.com/" className="btn btn-info" role="button">Deployed Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-dark text-white">
                <img className="card-img" src={EcommBackendImage} alt="Card imageTwo" />
                    <div className="card-img-overlay">
                     <div className="card-top">
                        <h5 className="card-title">{aboutBackendEcomm.name}</h5>
                     </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aboutBackendEcomm">Click to see details</button>
                    </div>
                </div>
                <div>
                
        <div className="modal fade" id="aboutBackendEcomm" tabIndex={-1} role="dialog" aria-labelledby="aboutBackendEcomm" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="aboutBackendEcomm">{aboutBackendEcomm.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{aboutBackendEcomm.description}</p>
                <p>{aboutBackendEcomm.about}</p>
                <p>{aboutBackendEcomm.techUsed}</p>
              </div>
              <div className="modal-footer">
                <a href="https://github.com/mdreesen/e-commerce" className="btn btn-info" role="button">Github</a>
                <a href="https://drive.google.com/file/d/1O_dkaGfU9SqFc9S3XuKH-WkM6Nktg3yP/preview" className="btn btn-info" role="button">Video Preview</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card bg-dark text-white">
                <img className="card-img" src={BloggerImage} alt="Card imageTwo" />
                    <div className="card-img-overlay">
                     <div className="card-top">
                        <h5 className="card-title">{aboutBlogger.name}</h5>
                     </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aboutBlogger">Click to see details</button>
                    </div>
                </div>
                <div>
                
        <div className="modal fade" id="aboutBlogger" tabIndex={-1} role="dialog" aria-labelledby="aboutBlogger" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="aboutBlogger">{aboutBlogger.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{aboutBlogger.description}</p>
                <p>{aboutBlogger.about}</p>
                <p>{aboutBlogger.techUsed}</p>
              </div>
              <div className="modal-footer">
                <a href="https://github.com/mdreesen/blogger" className="btn btn-info" role="button">Github</a>
                <a href="https://murmuring-reaches-11111.herokuapp.com/" className="btn btn-info" role="button">Deployed Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="card bg-dark text-white">
                <img className="card-img" src={SocialNetworkImage} alt="Card imageTwo" />
                    <div className="card-img-overlay">
                     <div className="card-top">
                        <h5 className="card-title">{aboutSocialBackend.name}</h5>
                     </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aboutSocialBackend">Click to see details</button>
                    </div>
                </div>
                <div>
                
        <div className="modal fade" id="aboutSocialBackend" tabIndex={-1} role="dialog" aria-labelledby="aboutSocialBackend" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="aboutSocialBackend">{aboutSocialBackend.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{aboutSocialBackend.description}</p>
                <p>{aboutSocialBackend.about}</p>
                <p>{aboutSocialBackend.techUsed}</p>
              </div>
              <div className="modal-footer">
                <a href="https://github.com/mdreesen/social_network_backend" className="btn btn-info" role="button">Github</a>
                <a href="https://drive.google.com/file/d/1BSpR2uUyg2ozcEFSfSj6GeIwh0Z-6C19/view" className="btn btn-info" role="button">Video Preview</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-dark text-white">
                <img className="card-img" src={ReadMeImage} alt="Card imageTwo" />
                    <div className="card-img-overlay">
                     <div className="card-top">
                        <h5 className="card-title">{aboutReadMeGen.name}</h5>
                     </div>
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#aboutReadMeGen">Click to see details</button>
                    </div>
                </div>
                <div>
                
        <div className="modal fade" id="aboutReadMeGen" tabIndex={-1} role="dialog" aria-labelledby="aboutReadMeGen" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="aboutReadMeGen">{aboutReadMeGen.name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{aboutReadMeGen.description}</p>
                <p>{aboutReadMeGen.about}</p>
                <p>{aboutReadMeGen.techUsed}</p>
              </div>
              <div className="modal-footer">
                <a href="https://github.com/mdreesen/readme-gen" className="btn btn-info" role="button">Github</a>
                <a href="https://drive.google.com/file/d/1Uw3jb4EZVfyN5Xb4YTNhDpcaN0uNEzQ4/edit" className="btn btn-info" role="button">Video Preview</a>
              </div>
            </div>
          </div>
        </div>
      </div>


        </section>
    );
}


export default Projects;