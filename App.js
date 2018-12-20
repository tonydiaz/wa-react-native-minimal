import React from 'react';
import { StyleSheet, WebView} from 'react-native';
import { MessageRequest } from './Assistant'
import WatsonIcon from './WatsonIcon'
import { GiftedChat } from 'react-native-gifted-chat';
export default class App extends React.Component {
  constructor (props) {
    super (props);

    this.state = {
      messages: [],
      conversationID: null,
      context: null,
    }
  }

  componentDidMount () {
    this.initalMessage();
  }

  render() {
    return (
      <GiftedChat
        placeholder="Send your message to Watson..."
        messages={this.state.messages}
        onSend={(messages) => this.onSend(messages)}
        renderAvatar={this.renderAvatar}
        multiline={false}
        user={{
          _id: '1',
        }}
      />
    );
  }

  renderCustomView = (props) => {
    if (props.currentMessage.text.includes('Welcome')) {
      return (
        <WebView
        style={styles.container}
        javaScriptEnabled={true}
        source={{
          uri: 'https://www.youtube.com/embed/phOW-CZJWT0?rel=0&autoplay=0&showinfo=0&controls=0',
        }}
      />
      );
    }
    return null;
  }

  onSend = (message = []) => {
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message),
    }), () => {
      this.getMessage(message[0].text.replace(/[\n\r]+/g, ' '), );
    });
  }

  initalMessage = async () => {
    let response = await MessageRequest("");
    this.setState({
      context: response.context,
    })
    let message = {
      _id: Math.round(Math.random() * 1000000).toString(),
      text: response.output.text.join(' '),
      createdAt: new Date(),
      user: {
        _id: '2',
        name: 'Watson Assistant',
      },
      image: 'https://i.ebayimg.com/00/s/MTYwMFgxNjAw/z/d4IAAOSw-CpX~8b~/$_35.JPG',
    };
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  }

  getMessage = async (text) => {
    let response = await MessageRequest(text, this.state.context);
      this.setState({
        context: response.context,
      })
    let message = {
      _id: Math.round(Math.random() * 1000000).toString(),
      text: response.output.text.join(' '),
      createdAt: new Date(),
      user: {
        _id: '2',
        name: 'Watson Assistant',
      },
    };
    this.setState((previousState) => ({
      messages: GiftedChat.append(previousState.messages, message),
    }));
  }

  renderAvatar = () => {
    return (
      <WatsonIcon />
    );
  }

}

const styles = StyleSheet.create({
});
