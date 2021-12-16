import React from "react";
import { Switch, Button, Modal } from "antd";

class App extends React.Component {
  state = {
    scv: false,
    modalOpen: false,
  };

  _checkHandler = (checked) => {
    console.log(checked);

    this.setState((prev) => {
      return {
        scv: checked,
      };
    });
  };

  _modalToggle = () => {
    this.setState((prev) => {
      return {
        modalOpen: !prev.modalOpen,
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
        <h3>Button</h3>
        <Button type="primary" size="small">
          확인
        </Button>
        <Button type="danger" size="large">
          취소
        </Button>
        <Button type="link">링크</Button>
        <Button type="primary" loading={true}>
          로딩
        </Button>

        <h3>Modal</h3>
        <Button type="primary" onClick={() => this._modalToggle()}>
          Modal Open
        </Button>

        <Modal
          title="My frist Modal"
          width="600px"
          visible={this.state.modalOpen}
          onCancel={() => this._modalToggle()}
          onOk={() => alert("Ok Click")}
        >
          <h1>hello My First Modal </h1>
          <h2>welcome TO The My Application!</h2>
        </Modal>
      </section>
    );
  }
}

export default App;
