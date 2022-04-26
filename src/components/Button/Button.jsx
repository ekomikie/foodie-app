import './button.css';
import PropTypes from 'prop-types';
function Button({ children, type }) {
  return (
    <button type={type} className='btn'>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: 'button',
  className: 'btn',
  bgColor: '#091c0f',
  textColor: 'white',
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Button;
