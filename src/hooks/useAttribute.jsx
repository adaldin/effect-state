import { useEffect, useState } from 'react'

export function useAttribute(attribute) {
  const [color, setColor] = useState('')
  const [size, setSize] = useState('')

  useEffect(() => {
    function setAtribute() {
      const { type } = attribute
      if (type === 'color') {
        setColor(attribute)
      } else if (type === 'number') {
        setSize(attribute)
      }
    }

    setAtribute()
  }, [attribute])
  return { color, size }
}
