# Are you Rob Base chatbot

Based on the flow chart:
![Flow chart](https://thepracticaldev.s3.amazonaws.com/i/uq2eryer8gq28ok8ak3s.jpg "Are you Rob Base")

This project requires you to setup a Watson Assistant skill to run correctly.

After cloning the repo:
```
npm install
npm start
```

## Watson Assistant

After setting up an Account and free service. Go into the Watson Assistant service and create a new Dialofg skill. You can upload `skill-Are-you-Rob-Base_.json` to a new dialog skill and you should be up and running.

## Setup a .env file
Add a new .env file to hold your Watson Assistant credentials. This file is ignored in this repository. Add the following information provided by Watson Assistant:
```
# Watson Assistant credentials
USERNAME=<username>
PASSWORD=<password>
VERSION=2018-09-20
URL=https://gateway.watsonplatform.net/conversation/api
SKILL_ID=<skill_id>
```

## Rob Base - It takes two
[![It takes two](https://i.ytimg.com/vi/phOW-CZJWT0/maxresdefault.jpg)](https://www.youtube.com/watch?v=phOW-CZJWT0)
