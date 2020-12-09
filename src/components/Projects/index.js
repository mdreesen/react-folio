import React from 'react';
import SmollTalk from '../../assets/project-images/smollTalk.png'

function Projects() {

    const aboutSmollTalk = {
        name: "SmollTalk",
        description: "This site is a CMS-style chat site similar to a Wordpress site, where communities can post and comment on other friends’ posts.",
        about: "This project was a group project where we utilized different technology to complete this application.",
        techUsed: "Tech used: Express.js, MySql, Handlebars.js, bootstrap, CSS, HTML, Cypress (Testing)."
    }

    return(
        <section>
        <div className="projectContainer">
         <h2>Projects</h2>
        </div>
            <div className="card bg-dark text-white">
                <img className="card-img" src={SmollTalk} alt="Card image" />
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
          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
          <button type="button" className="btn btn-primary" href="https://github.com/queen-stack/smollTalk">See Github</button>
        </div>
      </div>
    </div>
  </div>
</div>


        </section>
    );
}


export default Projects;