import React from 'react';
import SmollTalkImage from '../../assets/project-images/smollTalk.png';
import EcommBackendImage from '../../assets/project-images/backendEcomm.png';
import BloggerImage from '../../assets/project-images/blogger.png';
import SocialNetworkImage from '../../assets/project-images/socialNetworkBackend.png';
import ReadMeImage from '../../assets/project-images/readmeGen.png';
import about21ioImage from '../../assets/project-images/21io.jpg';

function ProjectSection({
  project: {
    name,
    description,
    about,
    techUsed
  },
  image,
  github,
  demo
}) {

  return (
    <>
      <div className="card bg-dark text-white">
        <img className="card-img" src={image} alt="Card image" />
        <div className="card-img-overlay">
          <div className="card-top">
            <h5 className="card-title">{name}</h5>
          </div>
          <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Click to see details</button>
        </div>
      </div>
      <div>

        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">{name}</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <p>{description}</p>
                <p>{about}</p>
                <p>{techUsed}</p>
              </div>
              <div className="modal-footer">
                <a href={github} className="btn btn-info" role="button">Github</a>
                <a href={demo} className="btn btn-info" role="button">Deployed Site</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Projects() {

  const about21io = {
    name: "21io",
    description: " A MERN stack application, 21io is an application that allows it's users to login, search for & save movies to a library then pay for a movie if they choose to stream it when online.",
    about: "This project was a group project where we utilized different technology to complete this application, this was a MERN stack application.",
    techUsed: "Tech used: Mongodb, Mongoose, React, Material-UI, CSS, JavaScript, GraphQL"
  }

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

  const projectList = [
    {
      project: about21io,
      image: about21ioImage,
      demo: 'https://movie-21io.herokuapp.com/',
      github: 'https://github.com/queen-stack/21io'
    },
    {
      project: aboutSmollTalk,
      image: SmollTalkImage,
      demo: "https://github.com/queen-stack/smollTalk",
      github: "https://limitless-shelf-64509.herokuapp.com/"
    },
    {
      project: aboutBackendEcomm,
      image: EcommBackendImage,
      demo: "https://drive.google.com/file/d/1O_dkaGfU9SqFc9S3XuKH-WkM6Nktg3yP/preview",
      github: "https://github.com/mdreesen/e-commerce"
    },
    {
      project: aboutBlogger,
      image: BloggerImage,
      demo: "https://murmuring-reaches-11111.herokuapp.com/",
      github: "https://github.com/mdreesen/blogger"
    },
    {
      project: aboutSocialBackend,
      image: SocialNetworkImage,
      demo: "https://drive.google.com/file/d/1BSpR2uUyg2ozcEFSfSj6GeIwh0Z-6C19/view",
      github: "https://github.com/mdreesen/social_network_backend"
    },
    {
      project: aboutReadMeGen,
      image: ReadMeImage,
      demo: "https://drive.google.com/file/d/1Uw3jb4EZVfyN5Xb4YTNhDpcaN0uNEzQ4/edit",
      github: "https://github.com/mdreesen/readme-gen"
    }
    
  ]


  return (
    <section>
      <div className="projectContainer">
        <h2 className="projectTitle">Projects</h2>
      </div>
      {
        projectList.map((info) =>
          <ProjectSection
            project={info.project}
            image={info.image}
            github={info.github}
            demo={info.demo}
          />
        )
      }
    </section>
  );
}


export default Projects;