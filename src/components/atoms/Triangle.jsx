import PropTypes from 'prop-types'

export function Triangle({ size, color }) {
  return (
    <svg height={size} width={size}>
      <polygon
        points={`${size / 2} 0, ${size} ${size}, 0 ${size}`}
        fill={color}
      />
    </svg>
  )
}

Triangle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
