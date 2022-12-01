import { useState } from "react";
export function App() {
  const [formShape, setformShape] = useState({
    triangleSize: 100,
    triangleColor: "black",
    triangleStyle: {
      width: "0",
      heigth: "0",
      borderBottom: `${formShape.triangleSize}px solid ${formShape.triangleColor}`,
      borderLeft: `${formShape.triangleSize / 2}px solid white`,
      borderRight: `${formShape.triangleSize / 2}px solid white`,
    },
    circlesize: "50",
    circleColor: "blue",
    circleColor: {
      width: "100%",
      height: "100%",
      background: `${formShape.circleColor}`,
      borderRadius: "50%",
    },
    squareSize: 30,
    squareColor: "yellow",
    squareStyle: {
      width: "100%",
      height: "100%",
      background: `${formShape.squareColor}`,
    },
  });

  {
    /*
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
  
  */
  }

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(value);
    setformShape((prevShape) => {
      return { ...prevShape, [name]: value };
    });
  };

  return (
    <div>
      <h4>Ejercicio useEffect useState.</h4>
      <form>
        <div>
          <div>
            <label style={{ width: "50%" }}>Triangle size</label>
            <input
              type="number"
              name={formShape.t}
              onChange={handleChange}
              style={{ width: "20%" }}
            />
          </div>
          <div>
            <label>Triangle color</label>
            <input type="color" name="triangleColor" onChange={handleChange} />
          </div>
          <div
            style={{
              width: `${shape.triangle.size}px`,
              height: `${shape.triangle.size}px`,
            }}
          >
            <div
              style={{
                width: `0`,
                heigth: "0",
                borderBottom: `${shape.triangle.size}px solid ${shape.triangle.color}`,
                borderLeft: `${shape.triangle.size / 2}px solid white`,
                borderRight: `${shape.triangle.size / 2}px solid white`,
              }}
            ></div>
          </div>
        </div>
        <div>
          <label>Circle size</label>
          <input type="number" name="circleSize" onChange={handleChange} />
        </div>
        <div>
          <label>Circle color</label>
          <input type="color" name="circleColor" onChange={handleChange} />
        </div>
        <div
          style={{
            width: `${shape.circle.size}px`,
            height: `${shape.circle.size}px`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `${shape.circle.color}`,
              borderRadius: "50%",
            }}
          ></div>
        </div>
        <div>
          <label>Square size</label>
          <input type="number" name="squareSize" onChange={handleChange} />
        </div>
        <div>
          <label>Square color</label>
          <input type="color" name="squareColor" onChange={handleChange} />
        </div>
        <div
          style={{
            width: `${shape.square.size}px`,
            height: `${shape.square.size}px`,
          }}
        >
          <div
            style={{
              width: "100%",
              height: "100%",
              background: `${shape.square.color}`,
            }}
          ></div>
        </div>
      </form>
    </div>
  );
}
