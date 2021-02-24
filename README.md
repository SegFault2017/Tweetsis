## Table of contents

- [Tweetsis](#tweetsis)
- [Demo](#demo)
- [Figma](#figma)
- [UML](#uml)
- [Frameworks and Libraries](#frameworks-and-libraries)
- [Setup](#setup)

## Tweetsis

A SPA(single page application) where users could input a tweet link and ouput a sentiment analysis of the Tweet's contents. The analysis is decomposed into 2 parts

1. The overall document and
2. each individual sentence

## Demo

![Part 1](demos/tweetsis_part1.gif)

![Part 2](demos/tweetsis_part2.gif)

## Figma

<iframe style="border: 1px solid rgba(0, 0, 0, 0.1);" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2F50TrKSMeIRGMlM3Wz9RYgG%2FTweetsis%3Fnode-id%3D19%253A401" allowfullscreen></iframe>

## UML

## Frameworks and Libraries

Project is created with:

- NodeJs version: v14.15.4
- Typescript : ^4.1.3,
- React: ^ 17.0.1
- Redux: ^4.0.5
- Chart.js": ^2.9.4,
- Tweetsis : v 1.0

## Setup

First, clone this project to your local machine using git clone:

```bash
$ git clone https://github.com/SegFault2017/Tweetsis.git
```

Next, before running the backend you need to create a `.env` file:

```bash
PORT=8080
NODE_ENV=
BEAR_TOKEN=
CORS_ORIGIN=http://localhost:3000
TWITTER_API_BASED_URL=https://api.twitter.com/2
GOOGLE_APPLICATION_CREDENTIALS=
```

The `Bear_TOKEN` is generated by the new app you created on your [Twitter account](https://developer.twitter.com/en/apply-for-access).

The `GOOGLE_APPLICATION_CREDENTIALS` is generated by [Googel Cloud Platform](https://cloud.google.com/?utm_source=google&utm_medium=cpc&utm_campaign=na-CA-all-en-dr-bkws-all-all-trial-e-dr-1009892&utm_content=text-ad-none-any-DEV_c-CRE_491349594430-ADGP_Desk+%7C+BKWS+-+EXA+%7C+Txt+~+Storage+~+Cloud+Storage_Cloud+_General-KWID_43700060013010330-kwd-46560699950&utm_term=KW_google%20cloud%20account-ST_google+cloud+account&gclid=Cj0KCQiA7NKBBhDBARIsAHbXCB7bGsRSxtUcGvasQVENmU1qUJR7OlbIhJu1pEUvxBCG1VX4NO87Yd8aAl-VEALw_wcB).

To run the backend, go to backend and install all the dependencies using npm:

```bash
$ cd ./backend
$ npm install
$ npm start
```

Last but not least, to run the frontend, go to frontend directory and install all the dependencies using npm:

```bash
$ cd ./frontend
$ npm install
$ npm start
```
