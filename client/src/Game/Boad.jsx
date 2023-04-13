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
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let { ballObj } = data;

      BallMovement(ctx, ballObj);
      requestAnimationFrame(render);
    };
    render();
  }, []);
  return <canvas className="canvas" ref={canvaRef} height="500" width="700" />;
}

export default Boad;
