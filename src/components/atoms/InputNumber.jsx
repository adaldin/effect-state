import PropTypes from 'prop-types'

export function InputNumber({ name, id, onChange, size }) {
  return (
    <input
      type="number"
      name={name}
      id={id}
      onChange={onChange}
      placeholder={size}
    />
  )
}

InputNumber.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  size: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
