import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
        message: ""
    };
  }

  handleTextChange = event => {
    this.setState({
      message: event.target.value
    })
    console.log(this.state.message)
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
            <input type="text" 
                   onChange={event => this.handleTextChange(event)}
                   name="message" 
                   id="message" />
      </div>
    );
  }
}

export default TwitterMessage;
