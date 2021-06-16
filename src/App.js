import React from "react";
import img2 from "./img2.jpg";
import "./App.css"
const App = () => {
  return (
    <div>
      <div style={{border:"solid 1px black",maxWidth:"100vw"}}>
        <h1 className="title red">Nejah</h1>

        <br />

        <img src="/photo/img1.jpg" alt="" />

        <br />

        <img src={img2} alt="" />
      </div>

      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/L9ZYdShgtPE"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default App;
