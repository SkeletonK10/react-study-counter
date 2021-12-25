import React from 'react';

interface ButtonProps {
  isPlus: boolean;
  value: number;
  onClick: React.MouseEventHandler;
}

const Button: React.FC<ButtonProps> = (props) => {
  const text = (props.isPlus ? '+' : '-') + props.value.toString();
  return (
    <button onClick={props.onClick}>
      {text}
    </button>
  );
}

export default Button;
