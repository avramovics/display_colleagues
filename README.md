Start with creating an .env file in server see .env.example 
Fill in the right information. 

To setup the project for development
Cd in to client and run `npm install`
run `npm start` to start React
React is running on http://localhost:3000/

Next cd in to server and run `npm install` and then `npm start`
Node is running on http://localhost:{ process.env.PORT }

For production: 
Cd in to client and run `npm install` ( if not installed ) and run `npm run build`
Next cd in to server and run `npm install` ( if not installed ) and then `npm start`

The app is running on port specified in .env file located under server.. 
example http://localhost:8080 

username: admin 
password: admin 



