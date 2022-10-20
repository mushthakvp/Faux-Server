
[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)



# FauxSpot - TurfBooking - With eCommerce

Require Env File

```bash
Create .env 

CLOUDINARY_API_KEY = "Your Cloudinary Api Key" 
CLOUDINARY_API_SECRET = "Your Cloudinary Api Secret " 
CLOUD_NAME = "Your Cloudinary Cloud Name " 

Link Cloudinary : https://cloudinary.com/

PORT = 3000
MONGO_URI = "Your Database URL "
JWT_SECRET = "musthak"
NODEMAILER_PASS = "Your Email id "
NODEMAILER_USER = "Your Email Password " 

TWILIO_ACCOUNT_SID = "Your Twilio Sid"
TWILIO_AUTH_TOKEN = "Your Twilio Token"
TWILIO_SERVICE_ID = "Your Twilio Service ID"

Link Twilio : https://www.twilio.com
```

## Installation

Use the package 

```bash
npm install
```
Download MongoDB Community Edition version(5.0) OR Atlas

Server run

```bash
npm start
```

## Account (Login/SignUp) Response through Email
Email account Create 
```python
Link: http://localhost:3000/account/signup-email

Post Method

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

Post Method

{
    "user_otp" : "7843",
    "_id": "6326e7d3b100a562a578b33d"
}

Response

{
    "status": true,
    "message": "login success"
}
```
Email Account Login 
```python
Link: http://localhost:3000/account/login-email

Post Method

{
    "user_mail" : "mail.musthak@gmail.com",
    "user_password" : "12345"
}

Response

{
    "status": true,
    "message": "Logged in success",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXCVI9.eyJpZCI6IjYzMjZlN"
}
```

## Account (Login/SignUp) Response through Phone Number

Phone number OTP sent 

support only India
```python
Link: http://localhost:3000/account/loginwith-number

Post Method

{
    "user_number" : 1234567890
}

Response

{
    "status": true,
    "_id": "6326eb838f2fb4913564bf75"
}
```
Verify OTP
```python
Link: http://localhost:3000/account/verify-number-otp

Post Method

{
    "user_otp" : "208623",
    "user_number" : 1234567890,
    "_id":"6326eb838f2fb4913564bf75"
}

Response

{
    "status": true,
    "jwt": "eyJhbGcfhjkh.kjhioudyhuy.dshuihddja6PCXcode5A1Rc"
}
```
Fetch Wishlist
```python
Link: http://localhost:3000/user/get-whishlist/"User Id"

Get Method

Response

{
  "status": true,
  "length": 5,
  "data": [
    {
      "turf_category": {
        "turf_cricket": true,
        "turf_football": false,
        "turf_badminton": false,
        "turf_yoga": false
      },
      "turf_type": {
        "turf_sevens": true,
        "turf_sixes": true
      },
      "turf_info": {
        "turf_isAvailable": true,
        "turf_rating": 3,
        "turf_map": "https://goo.gl/maps/J52rSt5Kj2byPpDTA"
      },
      "turf_amenities": {
        "turf_washroom": true,
        "turf_water": true,
        "turf_dressing": false,
        "turf_parking": true,
        "turf_gallery": true,
        "turf_cafeteria": true
      },
      "turf_images": {
        "turf_images1": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265380/FauxSpotServer/6musthak8.jpg",
        "turf_images2": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265388/FauxSpotServer/1musthak8.jpg",
        "turf_images3": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265393/FauxSpotServer/4musthak4.jpg"
      },
      "turf_time": {
        "time_morning_start": 5,
        "time_morning_end": 11,
        "time_afternoon_start": 15,
        "time_afternoon_end": 17,
        "time_evening_start": 17,
        "time_evening_end": 24
      },
      "turf_price": {
        "morning_price": 500,
        "afternoon_price": 800,
        "evening_price": 700
      },
      "_id": "6351322927a2de305de2abe1",
      "turf_creator_id": "63355665136e1b3ecb0db5d6",
      "turf_name": "Moratuwa Stadiu",
      "turf_place": "Kakkanchery",
      "turf_municipality": "Tirur",
      "turf_district": "Malappuram",
      "turf_logo": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265627/FauxTurf/neerajmohan_Order_2520_FO3E1E393886_KZ00A__u2jgvn.png"
    }
  ]
}

```

## Fetch Nearest Data

Required Header Authorization Bearer Token

```python
Link: http://localhost:3000/user/nearest-turf/"DistrictName"

Get Method

Response

{
  "status": true,
  "length": 5,
  "data": [
    {
      "turf_category": {
        "turf_cricket": true,
        "turf_football": false,
        "turf_badminton": false,
        "turf_yoga": false
      },
      "turf_type": {
        "turf_sevens": true,
        "turf_sixes": true
      },
      "turf_info": {
        "turf_isAvailable": true,
        "turf_rating": 3,
        "turf_map": "https://goo.gl/maps/J52rSt5Kj2byPpDTA"
      },
      "turf_amenities": {
        "turf_washroom": true,
        "turf_water": true,
        "turf_dressing": false,
        "turf_parking": true,
        "turf_gallery": true,
        "turf_cafeteria": true
      },
      "turf_images": {
        "turf_images1": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265380/FauxSpotServer/6musthak8.jpg",
        "turf_images2": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265388/FauxSpotServer/1musthak8.jpg",
        "turf_images3": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265393/FauxSpotServer/4musthak4.jpg"
      },
      "turf_time": {
        "time_morning_start": 5,
        "time_morning_end": 11,
        "time_afternoon_start": 15,
        "time_afternoon_end": 17,
        "time_evening_start": 17,
        "time_evening_end": 24
      },
      "turf_price": {
        "morning_price": 500,
        "afternoon_price": 800,
        "evening_price": 700
      },
      "_id": "6351322927a2de305de2abe1",
      "turf_creator_id": "63355665136e1b3ecb0db5d6",
      "turf_name": "Moratuwa Stadiu",
      "turf_place": "Kakkanchery",
      "turf_municipality": "Tirur",
      "turf_district": "Malappuram",
      "turf_logo": "https://res.cloudinary.com/fouvtycloud/image/upload/v1666265627/FauxTurf/neerajmohan_Order_2520_FO3E1E393886_KZ00A__u2jgvn.png"
    }
  ]
}

```



## Contributing
Pull requests are welcome. For significant changes, please open an issue to discuss what you would like to change.

Please make sure to update tests as appropriate.

<a href="https://www.buymeacoffee.com/mushthak" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174"></a>
