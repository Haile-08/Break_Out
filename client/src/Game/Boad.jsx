import React, { useEffect, useRef } from "react";
import "../App.css";
import { BallMovement } from "./BallMovement";
import {WallCollision} from "./util/WallCollisioin";
import data from "../Data/Data";
import Paddle from "./Paddle";
import Brick from "./Brick";

let bricks = [];
let { ballObj, paddleProps,  brickObj } = data;
function Boad() {
  const canvaRef = useRef(null);
  useEffect(() => {
    const render = () => {
      const canvas = canvaRef.current;
      const ctx = canvas.getContext("2d");

      //Assign bricks
      let newBricks = Brick(2, bricks, canvas, brickObj);

      if (newBricks && newBricks.length > 0){
        bricks = newBricks;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);

      bricks.map((brick)=> {
        return brick.draw(ctx);
      })
      //Handle Ball Movement
      BallMovement(ctx, ballObj);
      //Handle Wall collision detection
      WallCollision(ballObj, canvas);
      //Hnadle paddle movement
      Paddle(ctx, canvas, paddleProps);
      requestAnimationFrame(render);
    };
    render();
  }, []);
  return <canvas className="canvas" ref={canvaRef} onMouseMove={(e)=>paddleProps.x = e.clientX / 2 - 30} height="500" width="700" />;
}

export default Boad;
