# SpringBootDemo - Employee Management System
This is a demo project for managing employees using a full-stack application. The project includes both frontend and backend components.  

## Technologies Used
### Frontend
- JavaScript
- React
- NPM
### Backend
- Java
- Spring Boot
- Maven
  
## Project Structure
### Frontend
The frontend part of the application is located in the frontend directory. It is built using React and communicates with the backend via REST API.  

Key Files
- frontend/src/App.jsx: Main application component that sets up routing.
- frontend/src/components/EmployeeComponent.jsx: Component for adding and updating employees.
- frontend/src/components/ListEmployeeComponent.jsx: Component for listing all employees.
- frontend/src/services/EmployeeService.js: Service file for making API calls to the backend.

### Backend
The backend part of the application is located in the src directory. It is built using Spring Boot and provides RESTful APIs for managing employees.  
Key Files
- src/main/java/com/example/demo/EmployeeController.java: Controller class for handling API requests.
- src/main/java/com/example/demo/EmployeeService.java: Service class for business logic.
- src/main/java/com/example/demo/EmployeeRepository.java: Repository interface for database operations.

### Database Configuration
MySQL or PostgreSQL
To use MySQL or PostgreSQL, update the application.properties file in the src/main/resources directory with the appropriate database configuration.

Example for MySQL:
  - spring.datasource.url=jdbc:mysql://localhost:3306/yourdatabase
  - spring.datasource.username=root
  - spring.datasource.password=yourpassword
  - spring.jpa.database-platform=org.hibernate.dialect.MySQL5Dialect

Example for PostgreSQL:
  - spring.datasource.url=jdbc:postgresql://localhost:5432/yourdatabase
  - spring.datasource.username=postgres
  - spring.datasource.password=yourpassword
  - spring.jpa.database-platform=org.hibernate.dialect.PostgreSQLDialect

## Setup and Running the Project
### Prerequisites
- Node.js and NPM
- Java JDK
- Maven
### Running the Backend
- Navigate to the src directory.
- Run the following command to start the Spring Boot application: mvn spring-boot:run
### Running the Frontend
- Navigate to the frontend directory.
- Install the dependencies by running: npm install
- Start the React application by running: npm start
## Usage
- Adding a New Employee
- Navigate to the "Add Employee" page.
- Fill in the employee details and click "Save".
- Updating an Employee
- Navigate to the "List of Employees" page.
- Click the "Update" button next to the employee you want to update.
- Modify the employee details and click "Save".
- Deleting an Employee
- Navigate to the "List of Employees" page.
- Click the "Delete" button next to the employee you want to delete.
