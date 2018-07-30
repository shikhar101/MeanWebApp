# MEAN-Stack


Better and faster option is to go to the directory and use `npm install` (it will automatically insatll all the dependencies mentioned in the package.json file

Use `npm install 'dependency name' --save` to install the dependency

## Tasks to be completed:
1. Make the mongoose schema for the following entities:-
    1. Student
    2. Authentication Details 
    3. Results
    4. Faculty
    5. Department
    6. Programme
    7. Courses
    8. Offering
    9. Teaching Staff
2. Add the mongoose schema to app/model directory. **Make sure to export these models and then include these in the required areas**
3. Make the server file to serve the app. (I have created the file index.js for this purpose). Task is to deit this file for our purpose.
4. Make the app/routes/api for the app. This will be the main api of the api. I have added the some boilerplate code for making api and some required requests like /api/users -- this will contain the registeration post request that is whenever the user enters data for registration it should go to make a call to that API and that API will save the data in the data base
  Then /api/authenticate/ -- this will authenticate the user i.e. login the user and generate a token which will be stored in local storage
  Then /api/me -- will fetch the details of user and send to the front-end

5. The public folder will be having all the front-end code. Now we have to make a route file (/public/app/routes.js) to serve the front-end i.e. feed the views into the browser 

6. Make the views i.e. the html
7. Make the controllers and services for controlling the data given by API and feeding to front end
8. Create different types of users different permissions and roles
9. Adding different tests scores and link them with correct subject
10. Autopopulate the db using python and pandas 
