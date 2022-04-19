import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import StarsBackground from "./StarsBackground";

class Header extends Component {
  render() {
    // let test = function () {
    //   e.preventDefault();

    //   // Request permission for iOS 13+ devices
    //   if (
    //     DeviceMotionEvent &&
    //     typeof DeviceMotionEvent.requestPermission === "function"
    //   ) {
    //     DeviceMotionEvent.requestPermission();
    //   }

    //   if (is_running) {
    //     window.removeEventListener("devicemotion", handleMotion);
    //     window.removeEventListener("deviceorientation", handleOrientation);
    //     demo_button.innerHTML = "Start demo";
    //     demo_button.classList.add("btn-success");
    //     demo_button.classList.remove("btn-danger");
    //     is_running = false;
    //   } else {
    //     window.addEventListener("devicemotion", handleMotion);
    //     window.addEventListener("deviceorientation", handleOrientation);
    //     document.getElementById("start_demo").innerHTML = "Stop demo";
    //     demo_button.classList.remove("btn-success");
    //     demo_button.classList.add("btn-danger");
    //     is_running = true;
    //   }
    // };

    if (this.props.data) {
      var name = this.props.data.name;
      var occupation = this.props.data.occupation;
      var description = this.props.data.description;
      var city = this.props.data.address.city;
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
      <header id="home">
        <StarsBackground />

        <div className="row banner">
          <div className="banner-text">
            <h1 className="responsive-headline">Hello World!</h1>
            <h1 className="responsive-headline">I'm {name}</h1>
            <hr />
            <ul className="social">{networks}</ul>
          </div>
        </div>
        {/* <p className="requestOrientation">
          <FontAwesomeIcon icon={faCirclePlay} onClick={test} />
        </p> */}
        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
