# PRO03_Dani_William_Ben

## Quiz Application

### Setup

Copy `.env.example` to `.env` and complete

### Commands

#### Running Development Environment

```ts
npx ts-node src/index.ts
```

#### Installing Packages

Don't forget to add types. Check respective docs. E.g.:

```ts
npm install dotenv node-fetch
npm install @types/node-fetch --save-dev
```

#### Testing: Jest

- Add tests to /src/tests
- file name {test_object}.test.ts

```ts
npm test
```

[ts-jest documentation](https://www.npmjs.com/package/ts-jest)

#### Linter: Prettier

```ts
npm run lint
npm run formatter
```

## API

country code: ISO 3166-1 alpha-2

### Example payload

```javascript
{
  "quizId": "123456",
  "questions": [
    {
      "questionId": "1",
      "questionText": "What is the capital of France?",
      "options": ["Paris", "London", "Berlin", "Rome"],
      "correctAnswer": "Paris",
      "difficulty": "easy",
      "type": "country",
      "answeredCorrectly": null
    },
    {
      "questionId": "2",
      "questionText": "What is the capital of Germany?",
      "options": ["Vienna", "Berlin", "Madrid", "Prague"],
      "correctAnswer": "Berlin",
      "difficulty": "easy",
      "type": "country",
      "answeredCorrectly": null
    }
  ]
}
```

### setup connection to local mysql database

1.1. Install MySQL on Your System

- for Ubutu/Debian

```
sudo apt update
sudo apt install mysql-server

```

- for windows or mac: download and install mysql from the (MYSQL website)[https://dev.mysql.com/downloads/installer/]

  1.2. Verify the Installation

After installation, verify that MySQL is running by checking the service status: Linux:

```
bash

sudo systemctl status mysql
```

Windows: Open MySQL Workbench or check the MySQL service in Task Manager.

Mac: Use Homebrew or the System Preferences panel if you installed MySQL using the .dmg installer.

2.1 Login to your MYSQL locally.

```
mysql -u root -p
```

(you may change the root user to something else but you must remember to change it in the database.ts file as well)

(-p will prompt you for a password, make sure you add this to the .env file too labelled, DB_PASSWORD)

2.2 Create the databse called data (if it does not exist yet).

```
CREATE DATABASE data
```

Switch to the database.

```
USE data
```

2.3. Load the schema.sql File

Next, use the source command to load the schema.sql file into the data database. This file will automatically create all necessary tables and populate them with data.

```
SOURCE /path/to/schema.sql;

```

2.4. Verify the Database Structure

Once the schema.sql file has been successfully loaded, you can verify the structure by listing the tables:

```
SHOW TABLES
```

To inspect the contents of a table:

```
SELECT * FROM table_name;
```

Once, the database is loaded and verified, you may exit MYSQL:

```
exit
```

3. Configure the database.ts file
   To make sure you are able to connect to your database, make sure you add to your .env file:

```
DB_HOST= ip address (127.0.0.1 for local host)
DB_PASSWORD= your password to login to mysql
DB_PORT= port number (default 3306)
```

If you're successful you'll be able to access the data from the database eg:

```
http://localhost:5000/countries
```

## Logging

Enable app.use(logger); in app.ts to run console log of requests made. 


## Express Notes: 

#### Controllers

In express, we define routers which map URL paths to functions that handle the requests. In this project, see src/routes. 

Note that when you define a route in Express, it uses the existing route context. In src/app.ts we define e.g. app.use("/api/quiz", quizRoutes). Then the route modules are automatically resolved relative to the base path. This provides some potentially useful separation of concerns. 

A Controller is then the container for these functions which implement the logic for these routes. See src/controllers
