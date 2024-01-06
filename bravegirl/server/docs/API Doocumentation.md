# Welcome To BraveGirls API Documentation

This is the documentation for the BraveGirls API. The API is organized around REST. Our API has predictable resource-oriented URLs, accepts form-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.

## Overview

* [Authentication](#authentication)
* [Error Codes](#error-codes)
* [Endpoints](#endpoints)
  * [POST /users](#post-users)
  * [POST /users/register](#post-usersregister)
  * [POST /users/login](#post-userslogin)
  * [GET /users/logout](#get-userslogout)
  * [GET /users/:id](#get-usersid)
* [AUTHORS](#authors)

## Authentication

The BraveGirls API uses JWT for authentication. To authenticate a request, you should first register a user and then login to get a JWT token. The token should be included in the `Authorization` header as a `Bearer` token.

## Error Codes

The BraveGirls API uses conventional HTTP response codes to indicate the success or failure of an API request. In general, codes in the `2xx` range indicate success, codes in the `4xx` range indicate an error that failed given the information provided (e.g., a required parameter was omitted, a charge failed, etc.), and codes in the `5xx` range indicate an error with BraveGirls's servers (these are rare).

## Endpoints

At a high level, BraveGirls Provides following endpoints:
[ACTION] /users/*
[ACTION] /blogs/*
[ACTION] /donation/*
[ACTION] /volunteeropportunities/*

### POST /users/register

#### Description

Creates a new user.

#### Parameters

None.

#### Request Body

* `username`: (String) The username of the user.
* `email`: (String) The email of the user. This must be a valid email address.
* `password`: (String) The password of the user. This must be at least 6 characters long

#### Response

* if the request is successful, the response will be a JSON object with the following properties: 201 status code and created user object.
* If the request body does not meet the validation rules, the server responds with a 400 status code and an array of errors.
* If a user with the same email already exists, the server responds with a 400
* status code and an error message.
* If there's an error while creating the user, the server responds with a 500 status code and an error message.

#### Example

Copy code
```url -X POST -H "Content-Type: application/json" -d '{"username":"User1", "email":"user1@example.com", "password":"password123"}' http://localhost:3000/api/v1/users/register```

#### Frontend Usage Tips

* The frontend should validate the request body before sending the request to the server.
* The frontend should display the error messages if the server responds with a 400 status code.
* The frontend should display a generic error message if the server responds with a 500 status code.
* The frontend should do inline validation for the email field.

### POST /users/login

#### Description

Logs in a user.
currently the Bravegirl API does not support login with OAUTH.

#### Parameters

* `email` (string, required): The user's email address.
* `password` (string, required): The user's password.

#### Request Body

```
{
  "email": "user@example.com",
  "password": "userpassword"
}

```

#### Response

* If the request is successful, the response will be a JSON object with the following properties: 200 status code and user object.
* If the request body does not meet the validation rules, the server responds with a 400 status code and an array of errors.
* If the user does not exist, the server responds with a 400 status code and an error message.
* If the password is incorrect, the server responds with a 400 status code and an error message.
* If there's an error while logging in the user, the server responds with a 500 status code and an error message.

#### Example

Copy code
```url -X POST -H "Content-Type: application/json" -d '{"email":"johndoe@email.com", "password":"password123"}' http://localhost:3000/api/v1/users/login```

##### Example Response

Copy code

```json
{
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "johndoe@email.com",
    "createdAt": "2020-01-01T00:00:00.000Z",
  }
}
```

#### Frontend Usage Tips

* The frontend should validate the request body before sending the request to the server.
* The frontend should display the error messages if the server responds with a 400 status code.
* The frontend should display a generic error message if the server responds with a 500 status code.
* The frontend should do inline validation for the email field.

### GET /users/logout

#### Description

Logs out a user.

#### Parameters

None.

#### Request Body

None.

#### Response - Example

* If the request is successful, the response will be a JSON object with the following properties: 200 status code and user object.

#### Example

Copy code
```url -X GET -H "Content-Type: application/json" http://localhost:3000/api/v1/users/logout```

##### Example Response

Copy code

```json
{
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "johndoe@email.com", 
    "createdAt": "2020-01-01T00:00:00.000Z",
  }
}

```

#### Frontend Usage Tips

* The frontend should display a generic error message if the server responds with a 500 status code.

### GET /users/:id

#### Description

Gets a user by id.

#### Parameters

`id (integer, required)`: The id of the user.

#### Request Body

{
  "id": 1
}

#### Response

* If the request is successful, the response will be a JSON object with the following properties: 200 status code and user object.
* If the user does not exist, the server responds with a 404 status code and an error message.
* If there's an error while getting the user, the server responds with a 500 status code and an error message.
* If the user is not logged in, the server responds with a 401 status code and an error message.
* If the user is logged in but the user id does not match the id in the request parameter, the server responds with a 403 status code and an error message.

#### Example

Copy code
```url -X GET -H "Content-Type: application/json" http://localhost:3000/api/v1/users/1```

##### Example Response

Copy code

```json
{
  "user": {
    "id": 1,
    "username": "johndoe",
    "email": "johndoe@email.com",
    "createdAt": "2020-01-01T00:00:00.000Z",
  }
}
```

#### Frontend Usage Tips

* The frontend should display a generic error message if the server responds with a 500 status code.
* The frontend should display a generic error message if the server responds with a 401 status code.
* The frontend should display a generic error message if the server responds with a 403 status code.
* The frontend should display a generic error message if the server responds with a 404 status code.

## AUTHORS

* [**Simontagbor**](github.com/simontagbor)
* [**@chriss1525**](github.com/chriss1525)
