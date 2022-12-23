# Marvel App!

This application is dockerized, to run it simply run the following command from the root folder:

' docker-compose up ' 

NB: You will need to create a .env file in the root folder and use this template: 

```
REACT_APP_PRIVATE_KEY={YOUR_KEY}
REACT_APP_PUBLIC_KEY={YOUR_KEY}
REACT_APP_API_URL=http://gateway.marvel.com/v1/public/
```

You can get a public and private api key from the marvel website by signing up: https://developer.marvel.com/


### Testing 

This app uses the cypress testing framework so to run the tests run the following command in the root folder: 

' npx cypress run '# marvel_diox
