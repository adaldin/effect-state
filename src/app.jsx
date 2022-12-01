import { useState, useEffect } from "react";
import Shape from "./Shape";
export function App() {
  const [triangle, setTriangle] = useState({
    triangleColor: "black",
    triangleSize: 100,
  });
  const [circle, setCircle] = useState({
    circleColor: "red",
    circleSize: 50,
  });
  const [square, setSquare] = useState({
    squareColor: "blue",
    squareSize: 60,
  });

  useEffect(() => {
    if (
      (circle.circleSize === triangle.triangleSize &&
        circle.circleSize === square.squareSize) ||
      (circle.circleColor === triangle.triangleColor &&
        circle.circleColor === square.squareColor)
    ) {
      alert("Shape sizes are equal");
    }
  }, [circle, triangle, square]);
  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   console.log(value);
  //   setformShape((prevShape) => {
  //     return { ...prevShape, [name]: value };
  //   });
  // };
  const handleTriangle = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setTriangle((prevShape) => {
      return { ...prevShape, [name]: value };
    });
  };
  const handleCircle = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setCircle((prevShape) => {
      return { ...prevShape, [name]: value };
    });
  };
  const handleSquare = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setSquare((prevShape) => {
      return { ...prevShape, [name]: value };
    });
  };
  return (
    <div>
      <h4>Ejercicio useEffect useState.</h4>
      <form>
        <div>
          <div>
            <label>Triangle size</label>
            <input
              type="number"
              name="triangleSize"
              onChange={handleTriangle}
            />
          </div>
          <div>
            <label>Triangle color</label>
            <input
              type="color"
              name="triangleColor"
              onChange={handleTriangle}
            />
          </div>
          <div
            style={{
              width: `${triangle.triangleSize}px`,
              height: `${triangle.triangleSize}px`,
            }}
          >
            <div
              style={{
                width: `0`,
                heigth: "0",
                borderBottom: `${triangle.triangleSize}px solid ${triangle.triangleColor}`,
                borderLeft: `${triangle.triangleSize / 2}px solid white`,
                borderRight: `${triangle.triangleSize / 2}px solid white`,
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Circle size</label>
          <input type="number" name="circleSize" onChange={handleCircle} />
        </div>
        <div>
          <label>Circle color</label>
          <input type="color" name="circleColor" onChange={handleCircle} />
        </div>
        <div
          style={{
            width: `${circle.circleSize}px`,
            height: `${circle.circleSize}px`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `${circle.circleColor}`,
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div>
          <label>Square size</label>
          <input type="number" name="squareSize" onChange={handleSquare} />
        </div>
        <div>
          <label>Square color</label>
          <input type="color" name="squareColor" onChange={handleSquare} />
        </div>
        <div
          style={{
            width: `${square.squareSize}px`,
            height: `${square.squareSize}px`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `${square.squareColor}`,
            }}
          ></div>
        </div>
        <Shape
          color={square.squareColor}
          size={square.squareSize}
          handleChange={handleSquare}
          style={
            width: "100%",
            height: "100%",
            background: `${color}`,
          }
        >
          Square
        </Shape>
      </form>
    </div>
  );
}
