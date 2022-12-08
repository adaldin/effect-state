import PropTypes from 'prop-types'

export function Label({ label, htmlFor }) {
  return <label htmlFor={htmlFor}>{label}</label>
}

Label.propTypes = {
  label: PropTypes.string.isRequired,
  htmlFor: PropTypes.string.isRequired,
}
