import React from 'react';

interface ButtonProps {
  isPlus: boolean;
  value: number;
}

interface ButtonState {
}

export default class Button extends React.Component<ButtonProps, ButtonState> {
  render(): React.ReactNode {
    const text: string = this.props.isPlus ? '+' : '-' + this.props.value.toString();
      return (
        <button>
          {text}
        </button>
      )
  }
}
