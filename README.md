# Are you Rob Base chatbot

Based on the flowchart:
![Flow chart](https://thepracticaldev.s3.amazonaws.com/i/uq2eryer8gq28ok8ak3s.jpg "Are you Rob Base")

This project requires you to set up a Watson Assistant skill to run correctly.

After cloning the repo:
```
npm install
npm start
```

## Watson Assistant

After setting up an Account and free service. Go into the Watson Assistant service and create a new Dialog skill. You can upload `skill-Are-you-Rob-Base_.json` to a new dialog skill and you should be up and running.

## Setup a .env file
Add a new `.env` file to hold your Watson Assistant credentials. This file is ignored in this repository. Add the following to the file and fill in the credentials provided by Watson Assistant:
```
# Watson Assistant credentials
USERNAME=<username>
PASSWORD=<password>
VERSION=2018-09-20
URL=https://gateway.watsonplatform.net/conversation/api
SKILL_ID=<skill_id>
```

That's it you should have a functioning chatbot!
![Rob Base Chat](https://thepracticaldev.s3.amazonaws.com/i/asdfsowfu6jilkizuudc.gif)

## Rob Base - It takes two
[![It takes two](https://i.ytimg.com/vi/phOW-CZJWT0/maxresdefault.jpg)](https://www.youtube.com/watch?v=phOW-CZJWT0)
