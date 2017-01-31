## Introduction

I am building a full-stack user authentication solution from scratch using RESTful api and React-Redux. This app allows user to sign in/ sign up using both a traditional email/password approach or OAuth approach. After successful sign in, user will be assigned an auth token. All subsequent request will be authenticated with token. The token will expire after certain time or be destroyed upon sign out. The app also features simple client side validation while using traditional authentication approach.

The next step is to build a react-native version of the app in ios that consume the same api.

Here is the [Demo](https://user-authentication.herokuapp.com/)

## Features

- ReactJS
- Redux
- Redux-thunk
- AJAX
- Client Side Validation
- Token base authentication
- Oauth

## RESTful Authentication Api

This app communicate with an RESTful authentication api in the backend. I build the the Api with Rails and Devise Auht Token gem. But the app can work with any RESTful api as long as these following endpoints are exposed:

- POST     /auth/sign_in         endpoint to create user session
- POST     /auth                 endpoint to register user
- GET      /auth/:provider       endpoint to direct user to provider's oauth page
- GET      /auth/validate_token  endpoint to validate user's token 

Of course you don't have to follow the URI above. You will also need to setup cors in your Api if your api is on a different domain.

You can find the source of my Api [here](https://github.com/ypan887/auth_api)
