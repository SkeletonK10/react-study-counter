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
  
  render(): React.ReactNode {
      return (
        <div>
          <div>
            {this.state.count}
          </div>
          <div>
            <Button isPlus={false} value={1} />
            <Button isPlus={true} value={1} />
          </div>
        </div>

      )
  }
}
