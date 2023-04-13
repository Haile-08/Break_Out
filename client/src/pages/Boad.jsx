import React, { useEffect, useRef } from "react";
import "../App.css";

let x = 0;
function Boad() {
  const canvaRef = useRef(null);
  useEffect(() => {
    const render = () => {
      const canvas = canvaRef.current;
      const ctx = canvas.getContext("2d");

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();
      ctx.arc(x, 75, 50, 0, 2 * Math.PI);
      ctx.stroke();
      x++;
      console.log("render");
      requestAnimationFrame(render);
    };
    render();
  }, []);
  return <canvas className="canvas" ref={canvaRef} height="500" width="700" />;
}

export default Boad;
