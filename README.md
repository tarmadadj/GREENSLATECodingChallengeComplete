# GREENSLATECodingChallengeComplete

#Solution

This solution uses a Springboot MVC Server with a Vue CLI Web Application front end, the database was worked on MariaDB but it is compatible with MySQL


#Spring server

The Backend Server was developed using Springboot with MVC and JPA/Hibernate, every class is documented using JavaDoc Standar.
There are also tests for the service layer of the application.

#Application Structure

In order to check application sources, the base package is located in /src/main/java on the CodeChallengeServer folder
This application consists implements a MVC Pattern with Inversion of Control in order to manage dependencies, there are  three main layers:
  - Controller: the controller layer handles the HTTP Requests and responds with the appropiate response, UserController and ProjectController
  are actually REST Controllers which return JSON on their responses.
  - Service: the service layer is composed of the Service Interface and their respective implementations, the point of this division is to 
  futher modularization of the application and to avoid problems like controllers who have dependencies on certain Data Base or Service implementation
  Thats why actual implementations are called JPA[ServiceName]Impl so they can be swapped as needed
  - Repository: Repositories are a series of interfaces which extend a comon JpaRepository Interface, UserProjectRepository is the only one 
  with named queries because common methods like findOne and findAll are already handled by the JpaRepository parent
  
 All these layers support the model that was implemented (seen in the package entities). Most classes in this package are annotated with special annotations which make them 
 Hibernate aware and ease the persistence process of the data.
 
 There is also a testing package in /src/test/java which contains some Junit testing classes for the service layer, test cases are
 not comprehensive by no means but show some of the functionality i think is important to watch for errors

#Web Application

The web application is located in the CodeChallengeWeb folder and  developed in two versions:
  - Using backend rendering with Thymeleaf and Vue JS to manage AJAX queries with Axios: i first developed this approach
  but i kept intrigued by how to create a true SPA so i developed a second approach. This can be seen in index-old.html
  - Using a true SPA approach with front end rendering using VUE.js CLI, this is a truly powerful tool which implements MVVM pattern
  using components for rendering functionality. I wish to learn more about this developing approach as i feel i could have develop a more
  dynamic interface with a little more experience. Even so i think that what was done is sufficient for this exercise.
  My solution consists of a single App component which controls both the table and the select, it Requests information using Axios
  and thanks to Vue's two way data binding, it automatically refreshes the table as soon as the data is available.
  
  IN both version of the application the data is loaded dinamically when the page is ready using an AJAX Http Request

#Limitations

Some of the limitations and areas to improve of this solution are:
- More rigorous testing: the included testing shows some very basic test cases however i would expand it to cover controllers and entities
as i had to reimplement some Equals methods
- Completion of the CRUD repository, i know is out of the scope of this project but a complete REST CRUD is a powerful tool in order to create more
connected applications and diverse interfaces.
- More exploration of the Reactive and MVVM posbilities that VUe.js and other frameworks offer


#In order to run the Application

  it is necesary to have an instance of MySQL/MariaDB running on the default port 3306 and user:root password: root
  it is also necessary to execute the database_create_and_populate.sql script
  then the application can be run directly from the Spring STS or with maven.
 


