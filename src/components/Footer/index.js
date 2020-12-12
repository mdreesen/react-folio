import React from 'react';

const icon = {
  gitHub: "https://github.com/mdreesen",
  linkedIn: "https://www.linkedin.com/in/mdreesen/",
  pinterest: "https://www.pinterest.com/michaeldreesen90/"
}

function Footer() {
    return (
<footer className="page-footer font-small bg-dark">
  {/* Footer Elements */}
  <div className="container">
    {/* Grid row*/}
    <div className="row">
      {/* Grid column */}
      <div className="col-md-12 py-5">
        <div className="icon-container mb-5 flex-center">
          {/* Github */}
          <a className="fb-ic" href={icon.gitHub}>
          <i className="fab fa-github fa-4x" />
          </a>
          {/*Linkedin */}
          <a className="li-ic" href={icon.linkedIn}>
            <i className="fab fa-linkedin-in fa-4x" />
          </a>
          {/*Pinterest*/}
          <a className="pin-ic" href={icon.pinterest}>
            <i className="fab fa-pinterest fa-4x" />
          </a>
        </div>
      </div>
      {/* Grid column */}
    </div>
    {/* Grid row*/}
  </div>
</footer>
    );
}


export default Footer;