import React, { useEffect, useRef } from "react";
import "../App.css";
import { BallMovement } from "./BallMovement";
import {WallCollision} from "./util/WallCollisioin";
import data from "../Data/Data";
import Paddle from "./Paddle";

function Boad() {
  const canvaRef = useRef(null);
  useEffect(() => {
    const render = () => {
      const canvas = canvaRef.current;
      const ctx = canvas.getContext("2d");

      let { ballObj, paddleProps } = data;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      //Handle Ball Movement
      BallMovement(ctx, ballObj);
      //Handle Wall collision detection
      WallCollision(ballObj, canvas);
      //Hnadle paddle movement
      Paddle(ctx, canvas, paddleProps)
      requestAnimationFrame(render);
    };
    render();
  }, []);
  return <canvas className="canvas" ref={canvaRef} height="500" width="700" />;
}

export default Boad;
