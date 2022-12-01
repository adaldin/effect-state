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
      circle.circleSize === triangle.triangleSize &&
      circle.circleSize === square.squareSize
    ) {
      alert("Shape sizes are equal");
    } else if (
      circle.circleColor === triangle.triangleColor &&
      circle.circleColor === square.squareColor
    ) {
      alert("Shape sizes are equal");
    }
  }, [circle, triangle, square]);

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
        <Shape
          color={triangle.triangleColor}
          size={triangle.triangleSize}
          handleChange={handleTriangle}
          shapeStyle={{
            width: `0`,
            heigth: "0",
            borderBottom: `${triangle.triangleSize}px solid ${triangle.triangleColor}`,
            borderLeft: `${triangle.triangleSize / 2}px solid white`,
            borderRight: `${triangle.triangleSize / 2}px solid white`,
          }}
        >
          Triangle
        </Shape>

        <Shape
          color={circle.circleColor}
          size={circle.circleSize}
          handleChange={handleCircle}
          shapeStyle={{
            width: "100%",
            height: "100%",
            background: `${circle.circleColor}`,
            borderRadius: "50%",
          }}
        >
          Circle
        </Shape>

        <Shape
          color={square.squareColor}
          size={square.squareSize}
          handleChange={handleSquare}
          shapeStyle={{
            width: "100%",
            height: "100%",
            background: `${square.squareColor}`,
          }}
        >
          Square
        </Shape>
      </form>
    </div>
  );
}
