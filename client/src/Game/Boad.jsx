import React, { useEffect, useRef } from "react";
import "../App.css";
import { BallMovement } from "./BallMovement";
import data from "../Data/Data";

function Boad() {
  const canvaRef = useRef(null);
  useEffect(() => {
    const render = () => {
      const canvas = canvaRef.current;
      const ctx = canvas.getContext("2d");

      let { ballObj } = data;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      BallMovement(ctx, ballObj);

      if (
        ballObj.y - ballObj.rad < 0 ||
        ballObj.y + ballObj.rad > canvas.height
      ) {
        ballObj.dy *= -1;
      }
      if (
        ballObj.x + ballObj.rad >= canvas.width || ballObj.x - ballObj.rad <= 0
      ){
        ballObj.dx *= -1;
      }
      requestAnimationFrame(render);
    };
    render();
  }, []);
  return <canvas className="canvas" ref={canvaRef} height="500" width="700" />;
}

export default Boad;
