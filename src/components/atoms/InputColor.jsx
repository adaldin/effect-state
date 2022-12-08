import PropTypes from 'prop-types'

export function InputColor({ name, id, onChange }) {
  return <input type="color" name={name} id={id} onChange={onChange} />
}

InputColor.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
}
