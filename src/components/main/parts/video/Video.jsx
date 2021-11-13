import React, { useState } from "react";

export default function Video() {
  const [video, setVideo] = useState(false);
  const videoFunc = () => {
    const videoItem = document.getElementById("video");
    if (!video) {
      videoItem.play();
    } else {
      videoItem.pause();
    }
    setVideo(!video);
  };
  return (
    <section className="video">
      <div className="auto__container">
        <div className="video__inner">
          <h3>see how it works</h3>
          <div
            className={"video__inner-banner " + (video ? "paused" : "")}
            id="videoOuter"
          >
            <button
              className={"videoPlay " + (video ? "paused" : "")}
              onClick={videoFunc}
            >
              <span></span>
            </button>
            <video
              poster="images/1.png"
              src="images/video.mp4"
              id="video"
            ></video>
          </div>
        </div>
      </div>
    </section>
  );
}
