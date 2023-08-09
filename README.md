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
![image](https://github.com/NadunGG/employee-db/assets/80123728/74f36b06-626b-4adb-beab-baf3d012764a)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/1d9067ed-632f-4e84-9b70-69940436e502)

<hr/>

> `GET /employees` - this will be used to list out all the employee records in the database.

#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/a491bb3c-71ae-4aee-a8cb-7c28a3405e20)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/fa34f804-97ed-4406-a549-d1145c63cdca)

<hr/>

> `GET /employees/:id` - this will be used to find an employee with their employee ID.
- Here, `:id` will be replaced with Employee's unique id (Which is set when the employee record is created).
#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/d3f32f52-1141-4b30-a209-d15102b49696)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/3562d0bf-0302-4a41-bac7-ca117c104e39)

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
![image](https://github.com/NadunGG/employee-db/assets/80123728/e4bc10d4-150b-48aa-9a1e-8b3288094273)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/292f4150-0c7f-499c-a163-79b20db7ceb0)

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
![image](https://github.com/NadunGG/employee-db/assets/80123728/0d51f460-b4fb-4abf-bd88-f9625ee088b4)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/82785218-bdbb-44fe-a4e3-604aa7214266)

<hr/>

> `DELETE /employees/:id` - this will be used to find and delete an employee with their employee ID.
- Here, `:id` will be replaced with Employee's unique id (Which is set when the employee record is created).

#### Request 
![image](https://github.com/NadunGG/employee-db/assets/80123728/912b6af8-2170-4b49-86f4-7fdc67a1881d)

#### Response
![image](https://github.com/NadunGG/employee-db/assets/80123728/226e46cc-ca9b-4fad-ad8f-0fa17591c59d)

-------------------------------------------------------------------------------------------------------
##### Employee Search
![image](https://github.com/NadunGG/employee-db/assets/80123728/614a533c-882b-46a2-8bc9-2ff6a81580f5)
