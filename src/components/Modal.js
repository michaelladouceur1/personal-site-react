import React from "react";
import { useState, useEffect } from "react";
import { CSSTransition } from "react-transition-group";

import { CgClose } from "react-icons/cg";

import "./css/Modal.scss";

function Modal(props) {
  const { visible, setVisible } = props;

  const [visibleClass, setVisibleClass] = useState("hidden");

  useEffect(() => {
    visible ? setVisibleClass("visible") : setVisibleClass("hidden");
  }, [visible]);

  return (
    <div className={`modal ${visibleClass}`}>
      <button onClick={() => setVisible(false)}>
        <CgClose />
      </button>
      {props.children}
    </div>
  );
}

export default Modal;
