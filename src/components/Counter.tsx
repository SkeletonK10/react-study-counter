import React from 'react';

import Button from './Button';

interface CounterProps {
}

interface CounterState {
  count: number;
}

export default class Counter extends React.Component<CounterProps, CounterState> {
  constructor(props: CounterProps) {
    super(props);
    this.state = {
      count: 0,
    }
  }

  handleClick(isPlus: boolean, value: number): void {
    const newCount = this.state.count + value * (isPlus ? 1 : -1);
    this.setState({count: newCount});
  }

  renderButton(isPlus: boolean, value: number) {
    return (
      <Button
        isPlus={isPlus}
        value={value}
        onClick={() => this.handleClick(isPlus, value)} />
    );
  }
  
  render(): React.ReactNode {
      return (
        <div>
          <div>
            {this.state.count}
          </div>
          <div>
            {this.renderButton(false, 1)}
            {this.renderButton(true, 1)}
          </div>
        </div>

      )
  }
}
