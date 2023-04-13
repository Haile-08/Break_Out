import React, { useEffect, useRef } from "react";
import "../App.css";

function Boad() {
  const canvaRef = useRef(null);

  useEffect(() => {
    const canvas = canvaRef.current;
    const ctx = canvas.getContext("2d");

    ctx.beginPath();
    ctx.arc(100, 75, 50, 0, 2 * Math.PI);
    ctx.stroke();
  }, []);
  return <canvas className="canvas" ref={canvaRef} height="500" width="700" />;
}

export default Boad;
