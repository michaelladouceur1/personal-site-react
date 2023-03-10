import React from "react";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import { AiFillRobot } from "react-icons/ai";
import { FiAperture } from "react-icons/fi";
import { GiJamesBondAperture } from "react-icons/gi";

import Modal from "./Modal";

import "./css/FeatureAppModal.scss";

function FeatureAppModal(props) {
  const { visible, setVisible, featureApp, skills } = props;

  const [iframe, setIframe] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIframeLoaded(false);
  }, [featureApp]);

  return (
    <Modal
      visible={visible}
      setVisible={setVisible}
      className="feature-app-modal"
    >
      <div className="feature-app">
        {featureApp ? (
          <>
            <div className="feature-app-info">
              <div className="fai-text">
                <h1>{featureApp.title}</h1>
                <p>{featureApp.description}</p>
              </div>
              <h1>Technology</h1>
              <div className="technology">
                {featureApp.technology.map((tech) => {
                  const found = skills.find((skill) => {
                    if (skill.name.toLowerCase() === tech.toLowerCase()) {
                      return true;
                    }
                  });

                  if (found) {
                    if (found.element) {
                      return (
                        <div className="technology-item">
                          <h3>{found.element}</h3>
                          <p>{found.name}</p>
                        </div>
                      );
                    } else {
                      return (
                        <div className="technology-item">
                          <h3>
                            <GiJamesBondAperture />
                          </h3>
                          <p>{found.name}</p>
                        </div>
                      );
                    }
                  } else {
                    return (
                      <div className="technology-item">
                        <h3>
                          <GiJamesBondAperture />
                        </h3>
                        <p>{tech}</p>
                      </div>
                    );
                  }
                })}
              </div>
            </div>
            <div className="feature-app-iframe">
              <iframe
                src={featureApp.deployed_url}
                onLoad={() => {
                  setIframeLoaded(true);
                }}
              ></iframe>
            </div>
          </>
        ) : (
          <></>
        )}
      </div>
    </Modal>
  );
}

export default FeatureAppModal;
