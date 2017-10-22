import { Link } from 'react-router-dom';
import React, { Component } from 'react';
import fire from './fire';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { messages: [] }; // <- set up react state
  }
  componentWillMount() {
    /* Create reference to messages in Firebase Database */
    const messagesRef = fire
      .database()
      .ref('messages')
      .orderByKey()
      .limitToLast(100);
    messagesRef.on('child_added', (snapshot) => {
      /* Update React state when message is added at Firebase Database */
      const message = snapshot.val();

      fire
        .storage()
        .ref()
        .child(`${message.toString()}.jpg`)
        .getDownloadURL()
        .then((url) => {
          this.setState({ messages: this.state.messages.concat([url]) });

          console.log(url);
        })
        .catch((error) => {
          // Handle any errors
        });
    });
  }

  addMessage(e) {
    e.preventDefault(); // <- prevent form submit from reloading the page
    /* Send the message to Firebase */
    fire
      .database()
      .ref('messages')
      .push(this.inputEl.value);
    this.inputEl.value = ''; // <- clear the input
  }

  render() {
    return (
      <div>
        <Link to="/admin">
          <button>Go to admin</button>
        </Link>
        <form onSubmit={this.addMessage.bind(this)}>
          <input type="text" ref={el => (this.inputEl = el)} />
          <input type="submit" />
          <ul>
            {/* Render the list of messages */
            this.state.messages.map(url => (
              <li id={url.id}>
                <img src={url.toString()} alt="" />
              </li>
            ))}
          </ul>
        </form>
      </div>
    );
  }
}
export default App;
