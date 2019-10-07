# Portphilio API Backend

[![Build Status](https://travis-ci.org/portphilio/portphilio_api.svg?branch=master)](https://travis-ci.org/portphilio/portphilio_api)
[![Coverage Status](https://coveralls.io/repos/github/portphilio/portphilio_api/badge.svg?branch=master)](https://coveralls.io/github/portphilio/portphilio_api?branch=master)
![GitHub](https://img.shields.io/github/license/portphilio/portphilio_api)

This is the API backend project for the [Portphilio](https://portphil.io) project. This project uses [Feathers](http://feathersjs.com). An open source web framework for building modern real-time applications.

## How To Set Up a Dev Environment

If you would like to contribute to Portphilio development, here's how you can get the API up and running locally.

1. Install necessary software:
    1. [NodeJS](https://nodejs.org/) Please install the v10.x LTS version.
    2. [MongoDB Community Edition](https://docs.mongodb.com/manual/administration/install-community/)
    3. [Git](https://git-scm.com/)
    4. [`mkcert`](https://github.com/FiloSottile/mkcert)
    5. [VSCode](https://code.visualstudio.com/)
    6. [MongoDB Compass](https://www.mongodb.com/products/compass) (optional, but nice for seeing what's in the DB)
2. Clone this repo to your local `dev` folder and install NPM dependencies:

    ```
    cd ~/dev
    git clone https://github.com/portphilio/portphilio_api.git
    cd portphilio_api
    npm install
    ```

3. Edit your `hosts` file ([here's a tutorial](https://www.howtogeek.com/howto/27350/beginner-geek-how-to-edit-your-hosts-file/)) so you can use a "real" domain name on your dev server. Add the entry `127.0.0.1 api.portphilio.test`
4. Install a local SSL certificate in the root `portphilio_api` directory (command with example output)

    ```
    $ mkcert api.portphilio.test
    Using the local CA at "/Users/yourusername/Library/Application Support/mkcert" ✨

    Created a new certificate valid for the following names 📜
    - "api.portphilio.test"

    The certificate is at "./api.portphilio.test.pem" and the key at "./api.portphilio.test-key.pem" ✅
    ```

5. Create a new directory called `config` in the root `portphilio_api` folder. Inside it copy the three files that are in the `protected/config` directory of [our shared Google Drive folder](https://drive.google.com/open?id=1MIBtHlkTsv0v1Wsjl4I66Euu8nhBhUkB). If you don't have access to the `protected` folder, please contact Morgan.
6. Run `npm install` from the root of the project in your terminal to install all of the dependencies.
7. Start up the server by running `npm run dev:ngrok` from the terminal. This will not only startup the server, but also create a tunnel to the web using [ngrok](https://ngrok.com). You should see a random URL that looks like `https://a837cf3.ngrok.io` show up as a terminal message. **You'll need that URL for when you startup the frontend server.**

## License

Copyright (c) 2019 Morgan C. Benton

Licensed under the [MIT license](LICENSE).
