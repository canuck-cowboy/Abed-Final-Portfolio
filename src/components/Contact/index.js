import { useEffect, useState } from "react";
import Loader from "react-loaders";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Sidebar from "../Sidebar";
import StarfieldAnimation from "react-starfield-animation";

const Contact = () => {
  const [letterClass, setLetterClass] = useState("text-animate");
  const form = useRef();
  const contactArray = "Contact Me".split("");

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // process.env.REACT_APP_EMIAL_SERVICE_ID,
        "service_abed",
        // process.env.REACT_APP_TEMPLATE_ID,
        "template_mptrxos",
        form.current,
        // process.env.REACT_APP_PUBLIC_KEY
        "cZDL5fSe9zVn05Vso"
      )
      .then(
        () => {
          // alert('Message successfully sent!')
          toast.success("Message successfully sent!", {
            position: "bottom-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
          const timeout = setTimeout(() => {
            window.location.reload(false);
          }, 3900);

          return () => clearTimeout(timeout);
        },
        () => {
          // alert('Failed to send the message, please try again')
          toast.error("Failed to send the message, please try again", {
            position: "bottom-center",
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });
        }
      );
  };

  return (
    <div className="contact-main">
      <Sidebar />
      <StarfieldAnimation
        numParticles={500}
        lineWidth={2.0}
        depth={800}
        alphaFactor={0.2}
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
        }}
      />
      <div className="contact-container">
        <span className="tags-top">&lt;body&gt;</span>
        <div className="contact-map-info-div">
          <div className="content-div">
            <div className="text-content">
              <h1>
                <AnimatedLetters
                  letterClass={letterClass}
                  strArray={contactArray}
                  idx={15}
                />
              </h1>
              <p>
                I want to work with people who are willing to take risks and push the boundaries. 
                I want to work with someone who's as passionate about Technology as I am. 
                I'm always open to new ideas. If you need a hand, I'm only a message away! 
              </p>
            </div>
            <div className="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <ul>
                  <li className="half">
                    <input
                      placeholder="Name"
                      type="text"
                      name="name"
                      required
                    />
                  </li>
                  <li className="half">
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      required
                    />
                  </li>
                  <li>
                    <input
                      placeholder="Subject"
                      type="text"
                      name="subject"
                      required
                    />
                  </li>
                  <li>
                    <textarea
                      placeholder="Message"
                      name="message"
                      required
                    ></textarea>
                  </li>
                  <li>
                    <input type="submit" className="flat-button" value="SEND" />
                  </li>
                </ul>
                <ToastContainer />
              </form>
            </div>
          </div>
          <div className="info-map">
            Abed Nassar
            <br />
            1520 Queen St. E, P6A 2G4 <br />
            Sault Ste. Marie, Ontario <br />
            Canada
            <br />
          </div>
          <div className="map-wrap">
            <MapContainer center={[46.502421, -84.287392]} zoom={13}>
              <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
              <Marker position={[46.502421, -84.287392]}>
                <Popup>
                  Here's my home address. I'll leave the door unlocked ;)
                </Popup>
              </Marker>
            </MapContainer>
          </div>
        </div>
        <span>
          <span className="tags-top body-tag">&lt;/body&gt;</span>
          <br />
          <span className="tags-bottom html-tag">&lt;/html&gt;</span>
        </span>
      </div>
      <Loader type="pacman" />
    </div>
  );
};

export default Contact;
