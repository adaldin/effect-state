import PropTypes from 'prop-types'

export function Square({ size, color }) {
  return (
    <svg width={size} height={size}>
      <rect x="0" y="0" width={size} height={size} fill={color} />
    </svg>
  )
}

Square.propTypes = {
  size: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
}
