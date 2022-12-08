import PropTypes from 'prop-types'

export function Circle({ size, color }) {
  return (
    <svg width={size} height={size}>
      <circle cx={size / 2} cy={size / 2} r={size / 2} fill={color} />
    </svg>
  )
}

Circle.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
