import React, { Component } from "react";

class Footer extends Component {
  render() {
    if (this.props.data) {
      var networks = this.props.data.social.map(function (network) {
        return (
          <li key={network.name}>
            <a href={network.url}>
              <i className={network.className}></i>
            </a>
          </li>
        );
      });
    }

    return (
      <footer>
        <div>
          <div>
            <ul className="copyright">
              <li></li>
              <li>
                &copy; Copyright {new Date().getFullYear()} Jimmy the Developer
              </li>
              <li></li>
            </ul>
          </div>
          <p className="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
