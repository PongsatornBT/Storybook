import React from 'react';
import style from './../css/button.module.css';
/** Primary UI component for user interaction */
const Button = (props: IButton) => {
  const {
    primary = false,
    size = 'medium',
    label,
  } = props;
  
  const mode = primary ? style.storybook_button__primary : style.storybook_button__secondary;
  return (
    <button
      type="button"
      className={`${style.storybook_button} ${size} ${mode}`}
      {...props}
    >
      {label}
    </button>
  );
};

export default Button