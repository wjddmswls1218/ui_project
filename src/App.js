import React from "react";
import { Switch } from "antd";

class App extends React.Component {
  state = {
    scv: false,
  };

  _checkHandler = (checked) => {
    console.log(checked);

    this.setState((prev) => {
      return {
        scv: checked,
      };
    });
  };

  render() {
    return (
      <section>
        <h3>Switch {this.state.scv ? "체크 되었어요" : "체크 안되었어요"}</h3>
        <Switch
          defaultChecked={false}
          checked={this.state.scv}
          onChange={this._checkHandler}
        />
      </section>
    );
  }
}

export default App;
