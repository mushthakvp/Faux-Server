# FauxSpot - TurfBooking - With eCommerce



## Installation

Use the package 

```bash
npm install
```
Download MongoDB Community Edition version(5.0)

Server run

```bash
npm start
```

## Account (Login/SignUp) Response through Email
Email account Create 
```python
Link: http://localhost:3000/account/signup-email

post

{
    "user_mail" : "fouvty@mail.com",
    "user_password" : "12345"
}

response

{
    "status": true,
    "id": "6326e7d3b100a562a578b33d"
}
```
Email account Verify 
```python
Link: http://localhost:3000/account/verify-email-otp

post

{
    "user_otp" : "7843",
    "_id": "6326e7d3b100a562a578b33d"
}

response

{
    "status": true,
    "message": "login success"
}
```
Email Account Login 
```python
Link: http://localhost:3000/account/login-email

post

{
    "user_mail" : "mail.musthak@gmail.com",
    "user_password" : "12345"
}

response

{
    "status": true,
    "message": "Loged in succsess",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjZlN"
}
```
## Account (Login/SignUp) Response through Phone Number
Phone number OTP sent 

support only India
```python
Link: http://localhost:3000/account/login-number

post

{
    "user_number" : 1234567890
}

response

{
    "status": true,
    "_id": "6326eb838f2fb4913564bf75"
}
```
Verify OTP
```python
Link: http://localhost:3000/account/verify-number-otp

post

{
    "user_otp" : "208623",
    "user_number" : 1234567890,
    "_id":"6326eb838f2fb4913564bf75"
}

response

{
    "status": true,
    "jwt": "eyJhbGcfhjkh.kjhioudyhuy.dshuihddja6PCXcwdjh5A1Rc"
}
```

## Contributing
Pull requests are welcome. For significant changes, please open an issue to discuss what you would like to change.

Please make sure to update tests as appropriate.

<a href="https://www.buymeacoffee.com/mushthak" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
