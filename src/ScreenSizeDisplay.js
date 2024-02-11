import React from 'react';

export class ScreenSizeDisplay extends React.Component {
  state = {
    width: window.innerWidth,
    height: window.innerHeight,
    outerWidth: window.outerWidth,
    outerHeight: window.outerHeight,
    scteenWidth: window.screen.width,
    screenHeght: window.screen.height,
    availableScreenWidth: window.screen.availWidth,
    availableScreenHeight: window.screen.availHeight,
    pageWidth: document.documentElement.scrollWidth,
    pageHeght: document.documentElement.scrollHeight,
  };
  increment = () => {
    this.setState((state) => ({
      width: window.innerWidth,
      height: window.innerHeight,
      outerWidth: window.outerWidth,
      outerHeight: window.outerHeight,
      scteenWidth: window.screen.width,
      screenHeght: window.screen.height,
      availableScreenWidth: window.screen.availWidth,
      availableScreenHeight: window.screen.availHeight,
      pageWidth: document.documentElement.scrollWidth,
      pageHeght: document.documentElement.scrollHeight,
    }));
  };
  //componentWillUnmount() {}
  render() {
    if (this.state.showScreenWidth) {
      return null;
    }
    return (
      <div className="screen_size">
        <p>
          Screen size: {this.state.scteenWidth} x{' '}
          {this.state.screenHeght}
        </p>
        <p>
          Avialable screen size: {this.state.availableScreenWidth} x{' '}
          {this.state.availableScreenHeight}
        </p>
        <p>
          Window outer size: {this.state.outerWidth} x{' '}
          {this.state.outerHeight}
        </p>
        <p>
          Window inner size: {this.state.width} x {this.state.height}
        </p>
        <p>
          Page size: {this.state.pageWidth} x {this.state.pageHeght}
        </p>
        <button onClick={this.increment}>Reload</button>
      </div>
    );
  }
}
