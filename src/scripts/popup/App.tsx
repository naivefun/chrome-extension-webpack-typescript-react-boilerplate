import './App.scss';

import React from 'react';
import { hot } from 'react-hot-loader';

declare const module: any;

class AppComponent extends React.Component<any, any>{
  render() {
    return (
      <div>
        <p>Hello, Typescript-Chrome-Extension!</p>
      </div>
    )
  }
};

export default hot(module as any)(AppComponent);
