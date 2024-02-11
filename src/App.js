import React from 'react';
import { ScreenSizeDisplay } from './ScreenSizeDisplay';

export class App extends React.Component {
  state = { showScreenWidth: false, buttonTxt: 'hide' };
  showInfo = (<ScreenSizeDisplay />);
  reset = () => {
    if (this.state.showScreenWidth === true) {
      this.setState({
        showScreenWidth: false,
        buttonTxt: 'show',
      });
      this.showInfo = null;
    } else {
      this.setState({
        showScreenWidth: true,
        buttonTxt: 'hide',
      });
      this.showInfo = <ScreenSizeDisplay />;
    }
  };
  render() {
    return (
      <div className="app_container">
        <h1>Screen size</h1>
        <p>Simple React App</p>
        {this.showInfo}
        <button onClick={this.reset}>{this.state.buttonTxt}</button>
      </div>
    );
  }
}
