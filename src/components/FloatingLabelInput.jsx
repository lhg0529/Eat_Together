import React, { useState } from 'react';
import '../styles/Register.css';

function FloatingLabelInput(props) {
  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (e.target.value !== '') {
      setIsFilled(true);
    } else {
      setIsFilled(false);
    }
  };

  return (
    <div className="register-input-container">
      <input 
        type={props.type} 
        onFocus={handleFocus} 
        onBlur={handleBlur} 
        {...props}
      />
      <label className={isFocused || isFilled ? 'label-active' : ''}>
        {props.label}
      </label>
    </div>
  );
}

export default FloatingLabelInput;
