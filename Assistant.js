import base64 from 'react-native-base64'
import { USERNAME, PASSWORD, URL, SKILL_ID } from 'react-native-dotenv'

// Watson Assistant API documentation:
// https://console.bluemix.net/apidocs/assistant
MessageRequest = (input, context = {}) => {
  let body = {
    alternate_intents: true,
    input: {
      'text': input
    }
  };
  if (context) {
    body.context = context;
  }
  return fetch(URL + '/v1/workspaces/' + SKILL_ID + '/message?version=2018-09-20', {
    method: 'POST',
    headers: {
      Authorization: 'Basic ' + base64.encode(USERNAME + ":" + PASSWORD),
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  })
  .then((response) => response.json())
  .then((responseJson) => {

    // console.log(responseJson);
    return responseJson;
  })
  .catch((error) => {
    console.error(error);
  });

}

module.exports = {
  MessageRequest
}