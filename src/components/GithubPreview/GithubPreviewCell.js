import React from "react";
import { useState } from "react";

function GithubPreviewCell(props) {
  const { day } = props;

  const [modalVisible, setModalVisible] = useState(false);

  const color = day.color === "#ebedf0" ? "#363636" : day.color;

  return (
    <div
      className="cell"
      style={{ backgroundColor: color }}
      onMouseEnter={() => setModalVisible(true)}
      onMouseLeave={() => setModalVisible(false)}
    >
      <div
        className={`cell-modal ${modalVisible ? "visible" : "hidden"}`}
        style={{ border: `1px solid ${color}` }}
      >
        <p>
          {day.contributionCount} contributions on {day.date}
        </p>
      </div>
    </div>
  );
}

export default GithubPreviewCell;
