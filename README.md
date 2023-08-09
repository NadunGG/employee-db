# employee-db
> A Simple REST API with Sequelize, Express and MYSQL for employee management

## Pre-requisites
1. MYSQL Installation
- Install MYSQL Server and Shell by following the tutorial mentioned [here](https://dev.mysql.com/doc/refman/8.1/en/installing.html).

2. Node JS Runtime - Simply download & install it from [here](https://nodejs.org/en/download).
  
3. Node Package Manager
* Run the following command on your terminal
 ```sh
  npm install npm@latest -g
  ```  
4. Postman (Optional) - This will be used to demonstrate functionality. Download from [here](https://www.postman.com/downloads/)

## Initial Setup
1. Run MYSQL Server on `localhost`
- Then login to MYSQL shell and create a database to store employee data.

2. Clone the repository to your local machine.
```sh
   git clone https://github.com/YOUR_USERNAME_HERE/employee-db.git
```
3. Open Command Line Terminal inside the Root of the Project
  >  ex: `PS E:\employee-db>`
5. First, execute `npm install` to install the dependencies
6. Create a .env file in the root of the project and initialize the local database values.
```sh
   // .env
   MYSQL_DB_USER="<Enter the MYSQL root user here>"
   MYSQL_DB_PASSWORD="<Enter the password for root user here>"
   MYSQL_DB_NAME="<Enter the name of the database you created here>"
   PORT="<(Optional) - Enter the local port you desire to host the API server>"
```
7. (Optional) - To initialize dummy data, run `npx sequelize-cli db:seed:all` in CLI of root of the project.
8. Then, execute `npm run dev` to start the server on local port `(default - 3000)`.

