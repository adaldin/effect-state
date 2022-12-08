import { Triangle, Circle, Square } from '../atoms'
import { InputGroupColor, InputGroupNumber } from '../molecules/index'
import { useState, useEffect } from 'react'
import { useAttribute } from '../../hooks/useAttribute'

export function ShapeForm() {
  const [triangle, setTriangle] = useState({
    triangleColor: 'black',
    triangleSize: '100',
  })
  const [circle, setCircle] = useState({
    circleColor: 'red',
    circleSize: '50',
  })
  const [square, setSquare] = useState({
    squareColor: 'blue',
    squareSize: '60',
  })

  useEffect(() => {
    if (
      circle.circleSize === triangle.triangleSize &&
      circle.circleSize === square.squareSize
    ) {
      alert('Shape sizes are equal')
    } else if (
      circle.circleColor === triangle.triangleColor &&
      circle.circleColor === square.squareColor
    ) {
      alert('Shape colors are equal')
    }
  }, [circle, triangle, square])

  const handleSquare = (e) => {
    const [color, size] = useAttribute(e)
  }
  // const handleSquare = (e) => {
  //   const { name, value } = e.target
  //   setSquare((prevShape) => {
  //     return { ...prevShape, [name]: value }
  //   })
  // }
  const handleTriangle = (e) => {
    const { name, value } = e.target
    setTriangle((prevShape) => {
      return { ...prevShape, [name]: value }
    })
  }
  const handleCircle = (e) => {
    const { name, value } = e.target
    setCircle((prevShape) => {
      return { ...prevShape, [name]: value }
    })
  }
  return (
    <form>
      <div>
        <InputGroupColor
          color={square.squareColor}
          name="squareColor"
          onChange={handleSquare}
          htmlFor="squareColor"
          label="Square Color"
          id="squareColor"
        />
        <InputGroupNumber
          size={square.squareSize}
          name="squareSize"
          onChange={handleSquare}
          htmlFor="squareSize"
          label="Square Size"
          id="squareSize"
        />
        <Square size={square.squareSize} color={square.squareColor} />
      </div>
      <div>
        <InputGroupColor
          color={triangle.triangleColor}
          name="triangleColor"
          onChange={handleTriangle}
          htmlFor="triangleColor"
          label="Triangle Color"
          id="triangleColor"
        />
        <InputGroupNumber
          size={triangle.triangleSize}
          name="triangleSize"
          onChange={handleTriangle}
          htmlFor="triangleSize"
          label="Triangle Size"
          id="triangleSize"
        />
        <Triangle size={triangle.triangleSize} color={triangle.triangleColor} />
      </div>
      <div>
        <InputGroupColor
          color={circle.circleColor}
          name="circleColor"
          onChange={handleCircle}
          htmlFor="circleColor"
          label="Circle Color"
          id="circleColor"
        />
        <InputGroupNumber
          size={circle.circleSize}
          name="circleSize"
          onChange={handleCircle}
          htmlFor="circleSize"
          label="Circle Size"
          id="circleSize"
        />
        <Circle size={circle.circleSize} color={circle.circleColor} />
      </div>
    </form>
  )
}
