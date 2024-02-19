# User API Spec
## Regiter User API
Endpoint : POST /api/users

Request Body :
```json
{
    "username": "test",
    "password" : "rahasia",
    "name":"Belajar Node Js"
}
```

Response Body Success :
```json
{
    "data" :{
        "username": "test",   
        "name":"Belajar Node Js"
    }
}
```
Response Body Error :
```json
{
    "errors" :"username already registerd"
}
```

## Login User API

Endpoin : POST /api/users/login
Request Body :
```json
{
    "username" : "test",
    "password" : "rahasia"
}
```
Response Body Success :
```json
{
    "data" :{
        "token": "unique token/ pake uuid",  
    }
}
```
Response Body Error :
```json
{
    "errors" :"username or password wrong"
}
```

## Update User API
Endpoint : PATCH /api/users/current

Request Body :
```json
{
    "name": "test name updated",//optional
    "password" : "new password" //optional
}
```
Response Body Success :
```json
{
    "data" :{
        "username": "test",
        "name": "test name updaten",  
    }
}
```
Response Body Error :
```json
{
    "errors" :"name max 100 char"
}
```
## Get User API
## Logout User API
Endpoint : POST /api/users

Request Body :
```json
{
    "x": "x",
   
}
```
Response Body Success :
```json
{
    "data" :{
        "x": "x",  
    }
}
```
Response Body Error :
```json
{
    "errors" :"username or password wrong"
}
```