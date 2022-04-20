import React, { Component } from "react";
import * as THREE from "three";

class StarsBackground extends Component {
  componentDidMount() {
    var scene, camera, renderer;
    var container,
      aspectRatio,
      HEIGHT,
      WIDTH,
      fieldOfView,
      nearPlane,
      farPlane,
      mouseX,
      mouseY,
      windowHalfX,
      windowHalfY,
      geometry,
      starStuff,
      materialOptions,
      stars;

    let animate = function () {
      requestAnimationFrame(animate);
      render();
    };

    let render = function () {
      camera.position.x += (mouseX - camera.position.x) * 0.01;
      camera.position.y += (-mouseY - camera.position.y) * 0.01;
      camera.lookAt(scene.position);
      renderer.render(scene, camera);
    };

    let webGLSupport = function () {
      /* 	The wizard of webGL only bestows his gifts of power
          to the worthy.  In this case, users with browsers who 'get it'.		*/

      try {
        var canvas = document.createElement("canvas");
        return !!(
          window.WebGLRenderingContext &&
          (canvas.getContext("webgl") ||
            canvas.getContext("experimental-webgl"))
        );
      } catch (e) {
        // console.warn('Hey bro, for some reason we\'re not able to use webGL for this.  No biggie, we\'ll use canvas.');
        return false;
      }
    };

    let onWindowResize = function () {
      // Everything should resize nicely if it needs to!
      var WIDTH = window.innerWidth,
        HEIGHT = window.innerHeight;

      camera.aspect = aspectRatio;
      camera.updateProjectionMatrix();
      renderer.setSize(WIDTH, HEIGHT);
    };

    let starForge = function () {
      /* 	Yep, it's a Star Wars: Knights of the Old Republic reference,
          are you really surprised at this point? 
                              */
      var starQty = 45000;
      geometry = new THREE.SphereGeometry(1000, 100, 50);

      let sprite = new THREE.TextureLoader().load("star.png");

      materialOptions = {
        size: 1.0, //I know this is the default, it's for you.  Play with it if you want.
        //transparency: true,
        opacity: 0.7,
        map: sprite,
        //color: 0x11ABB0, //star color
      };

      starStuff = new THREE.PointsMaterial(materialOptions);

      // The wizard gaze became stern, his jaw set, he creates the cosmos with a wave of his arms

      for (var i = 0; i < starQty; i++) {
        var starVertex = new THREE.Vector3();
        starVertex.x = Math.random() * 2000 - 1000;
        starVertex.y = Math.random() * 2000 - 1000;
        starVertex.z = Math.random() * 2000 - 1000;

        geometry.vertices.push(starVertex);
      }

      stars = new THREE.Points(geometry, starStuff);
      scene.add(stars);
    };

    let onMouseMove = function (e) {
      mouseX = e.clientX - windowHalfX;
      mouseY = e.clientY - windowHalfY;
    };

    let onTouchMove = function (e) {
      mouseX = e.touches[0].clientX - windowHalfX;
      mouseY = e.touches[0].clientY - windowHalfY;
    };

    let deviceOrientationHandler = function (tiltX, tiltY) {
      mouseX = tiltX;
      mouseY = tiltY;
    };

    let init = function () {
      container = document.createElement("div");
      document.body.appendChild(container);

      HEIGHT = window.innerHeight;
      WIDTH = window.innerWidth;
      aspectRatio = WIDTH / HEIGHT;
      fieldOfView = 75;
      nearPlane = 1;
      farPlane = 1000;
      mouseX = 0;
      mouseY = 0;

      windowHalfX = WIDTH / 2;
      windowHalfY = HEIGHT / 2;

      /* 	fieldOfView — Camera frustum vertical field of view.
        aspectRatio — Camera frustum aspect ratio.
        nearPlane — Camera frustum near plane.
        farPlane — Camera frustum far plane.	
  
        - https://threejs.org/docs/#Reference/Cameras/PerspectiveCamera
  
         In geometry, a frustum (plural: frusta or frustums) 
         is the portion of a solid (normally a cone or pyramid) 
         that lies between two parallel planes cutting it. - wikipedia.		*/

      camera = new THREE.PerspectiveCamera(
        fieldOfView,
        aspectRatio,
        nearPlane,
        farPlane
      );

      //Z positioning of camera

      camera.position.z = farPlane / 2;

      scene = new THREE.Scene({ antialias: true });
      scene.fog = new THREE.FogExp2(0x000000, 0.0003);

      // The wizard's about to get busy.
      starForge();

      //check for browser Support
      if (webGLSupport()) {
        //yeah?  Right on...
        renderer = new THREE.WebGLRenderer({ alpha: true });
      } else {
        //No?  Well that's okay.
        renderer = new THREE.CanvasRenderer();
      }

      renderer.setClearColor(0x000011, 1);
      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(WIDTH, HEIGHT);
      container.appendChild(renderer.domElement);

      window.addEventListener("resize", onWindowResize, false);
      document.addEventListener("mousemove", onMouseMove, false);

      if (window.DeviceOrientationEvent) {
        window.addEventListener(
          "deviceorientation",
          function (eventData) {
            var tiltX = Math.round(eventData.gamma * 10);
            var tiltY = Math.round(eventData.beta * 10);
            deviceOrientationHandler(tiltX, tiltY);
          },
          false
        );
      } else {
        document.addEventListener("touchmove", onTouchMove, false);
      }
    };

    init();
    animate();
  }

  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default StarsBackground;
