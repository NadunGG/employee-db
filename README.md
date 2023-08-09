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

## Resources
This Server consists of one main sub-route
1. `/employees`

- BaseURL - 'localhost:3000' - (default)
* You can follow these links via `baseurl/links`format.
> ex: `POST http://localhost:3000/employees`
- Note: When passing body parameters, setup `Content-Type` header to `application/json`

### Employee
This will be used to carryout Employee related transactions in DB.
> `POST /employees/`- This will be used to create a new employee in DB

- this request requires 6 mandatory body parameters.
  ```
  empNo -	String(non-unicode), Length[10], unique
  empName - String(non-unicode), Length[100]
  empAddressLine1	- String(unicode), Length[100]
  empAddressLine2	- String(unicode), Length[100] --> Optional
  empAddressLine3	- String(unicode), Length[100] --> Optional
  empDateOfJoin - Date
  empStatus - Boolean
  empImage - String(LONGTEXT) - can use URL for a image
  ```
#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/74fff07f-573e-4df3-a285-754810337282)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/b1dbce1c-325f-4913-8ba2-cb334f6a3035)

<hr/>

> `GET /employees` - this will be used to list out all the employee records in the database.

#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/b620d79e-20a1-45f1-a1ee-b168126e0dd7)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/f6a604b6-0747-47f0-ab7b-2b908aac5a58)

<hr/>

> `GET /employees/:id` - this will be used to find an employee with their employee ID.
- Here, `:id` will be replaced with Employee's unique id (Which is set when the employee record is created).
#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/b6ae70fe-c30d-4195-a03a-04160879eed4)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/9153c351-5216-441c-9955-d504260c5113)

<hr/>

> `PUT /employees/:id` - this will be used to update an employee record completely (without unique values).
- Here, `:id` will be replaced with Employee's unique id (Which is set when the employee record is created).
- this request requires 6 mandatory body parameters
  ```
  empNo -	String(non-unicode), Length[10], unique --> this cannot change
  empName -String(non-unicode), Length[100]
  empAddressLine1	- String(unicode), Length[100]
  empAddressLine2	- String(unicode), Length[100] --> Optional
  empAddressLine3	- String(unicode), Length[100] --> Optional
  empDateOfJoin - Date
  empStatus - Boolean
  empImage - String(LONGTEXT) - can use URL for a image
  ```

#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/ff1d98a7-289d-4247-937c-0368ab75445f)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/4e16e742-6904-4e58-8b69-9caf1e16a8df)

<hr/>

> `PATCH /employees/:id` - this will be used to update an employee record attribute/s (without replacing whole record).
- Here, `:id` will be replaced with Employee's unique id (Which is set when the employee record is created).
- this request only requires attribute/s that needs change as body parameters
  ```
  empName - String(non-unicode), Length[100] --> Optional
  empAddressLine1	- String(unicode), Length[100] --> Optional
  empAddressLine2	- String(unicode), Length[100] --> Optional
  empAddressLine3	- String(unicode), Length[100] --> Optional
  empDateOfJoin	-	Date --> Optional
  empStatus	- Boolean --> Optional
  empImage - String(LONGTEXT) - can use URL for a image --> Optional
  ```
#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/2c68a41f-b42d-4d93-8ab5-a649c00736a2)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/6b1cd9b4-a044-4112-b245-f7fb4f23e0a2)

<hr/>

> `DELETE /employees/:id` - this will be used to find and delete an employee with their employee ID.
- Here, `:id` will be replaced with Employee's unique id (Which is set when the employee record is created).

#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/bf9e7fdc-b5e0-47ec-bd40-12ad06121ead)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/6cba125f-4a2a-4092-99c5-66f3ebab7b93)

-------------------------------------------------------------------------------------------------------
##### Employee Search
![image](https://github.com/NadunGG/employee-db/assets/80123728/d22ca897-b652-4e11-9a19-7b3f7d275612)


