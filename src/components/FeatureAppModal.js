import React from "react";
import { useState, useEffect } from "react";
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";

import Modal from "./Modal";

import "./css/FeatureAppModal.scss";

function FeatureAppModal(props) {
  const { visible, setVisible, featureApp } = props;

  const [iframe, setIframe] = useState("");
  const [iframeLoaded, setIframeLoaded] = useState(false);

  useEffect(() => {
    setIframeLoaded(false);
  }, [featureApp]);

  return (
    <Modal visible={visible} setVisible={setVisible}>
      <div id="modal-left" className="modal-control">
        <button>
          <FaArrowAltCircleLeft />
        </button>
      </div>
      <div className="feature-app">
        <div className="feature-app-info">
          <h1>{featureApp.title}</h1>
        </div>
        <div className="feature-app-iframe">
          <iframe
            width="100%"
            height="100%"
            src={featureApp.deployed_url}
            onLoad={() => {
              setIframeLoaded(true);
            }}
          ></iframe>
        </div>
      </div>
      <div id="modal-right" className="modal-control">
        <button>
          <FaArrowAltCircleRight />
        </button>
      </div>
    </Modal>
  );
}

export default FeatureAppModal;
