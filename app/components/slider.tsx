"use client";

import { useState, useEffect } from "react";

type SliderProps = {
  width?: number;
  height?: number;
  children: React.ReactElement[];
  dotPosition?: "bottomLeft" | "bottomRight" | "bottomMiddle";
};

export default function Slider(props: SliderProps) {
  const [current, setCurrent] = useState(0);

  const duration = 4000;

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % props.children.length);
    }, duration);

    return () => clearInterval(timer);
  }, [props.children.length]);

  return (
    <div className="slider">
      <div
        className="slides"
        style={{
          transition: current === 0 ? "none" : "transform 0.6s ease",
          transform: `translateX(-${current * 100}%)`,
          width: `${props.width}rem`,
          height: `${props.height}rem`,
        }}
      >
        {props.children}
      </div>
      <div
        className={`dots ${
          props.dotPosition === "bottomLeft"
            ? "dots-bottomLeft"
            : props.dotPosition === "bottomRight"
            ? "dots-bottomRight"
            : "dots-bottomMiddle"
        }`}
      >
        {props.children.map((_, i) => (
          <span
            key={i}
            className={`dot ${i === current ? "active" : ""}`}
            onClick={() => setCurrent(i)}
          />
        ))}
      </div>
    </div>
  );
}
