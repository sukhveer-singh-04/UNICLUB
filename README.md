#UNICLUB
=======

### Running the application in local

#### Client (React UI)
- Install the client dependencies by using command `npm run client-install`
- Run the client by using command `npm run client`

#### Server (Express API)
- Install the server dependencies by using command `npm run server-install`
- Add a .env file inside the server directory
- Create a new mongo DB [cluster](https://cloud.mongodb.com/) (ignore if already created)
- Update the .env file with required env variable as shown in the below format
```
PORT=<Port number>
MONGO_DB_CONNECTION_STRING=<mongo db connection string with username and password>
```
