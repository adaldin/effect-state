import { Triangle, Circle, Square } from '../atoms'
import { InputGroupColor, InputGroupNumber } from '../molecules/index'
import { useState, useEffect } from 'react'

export function ShapeForm() {
  const [triangleColor, setTriangleColor] = useState('black')
  const [triangleSize, setTriangleSize] = useState('30')
  const [circleColor, setCircleColor] = useState('red')
  const [circleSize, setCircleSize] = useState('40')
  const [squareColor, setSquareColor] = useState('orange')
  const [squareSize, setSquareSize] = useState('50')

  useEffect(() => {
    if (circleSize === triangleSize && circleSize === squareSize) {
      alert('Shape sizes are equal')
    } else if (circleColor === triangleColor && circleColor === squareColor) {
      alert('Shape colors are equal')
    }
  }, [
    triangleColor,
    triangleSize,
    circleColor,
    circleSize,
    squareColor,
    squareSize,
  ])

  return (
    <form>
      <div>
        <InputGroupColor
          color={triangleColor}
          name="triangleColor"
          onChange={(e) => setTriangleColor(e.target.value)}
          htmlFor="triangleColor"
          label="Triangle Color"
          id="triangleColor"
        />
        <InputGroupNumber
          size={triangleSize}
          name="triangleSize"
          onChange={(e) => setTriangleSize(e.target.value)}
          htmlFor="triangleSize"
          label="Triangle Size"
          id="triangleSize"
        />
        <Triangle size={triangleSize} color={triangleColor} />
      </div>
      <div>
        <InputGroupColor
          color={circleColor}
          name="circleColor"
          onChange={(e) => setCircleColor(e.target.value)}
          htmlFor="circleColor"
          label="Circle Color"
          id="circleColor"
        />
        <InputGroupNumber
          size={circleSize}
          name="circleSize"
          onChange={(e) => setCircleSize(e.target.value)}
          htmlFor="circleSize"
          label="Circle Size"
          id="circleSize"
        />
        <Circle size={circleSize} color={circleColor} />
      </div>
      <div>
        <InputGroupColor
          color={squareColor}
          name="squareColor"
          onChange={(e) => setSquareColor(e.target.value)}
          htmlFor="squareColor"
          label="Square Color"
          id="squareColor"
        />
        <InputGroupNumber
          size={squareSize}
          name="squareSize"
          onChange={(e) => setSquareSize(e.target.value)}
          htmlFor="squareSize"
          label="Square Size"
          id="squareSize"
        />
        <Square size={squareSize} color={squareColor} />
      </div>
    </form>
  )
}
