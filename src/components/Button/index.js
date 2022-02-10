import s from './Button.module.scss';

Button.defaultProps = {
  type: 'button',
  size: 'medium',
  color: 'primary', // primary, warning, error, black, white, info, success
};

function Button({ type, size, color, onClick, className, children }) {
  return (
    <button
      type={type}
      size={size}
      className={[s.btn, s[`${size}`], s[`${color}`], className].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

export default Button;
