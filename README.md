# URL-Shortener
Created a URL Shortener Using nodejs expressJS and mongoDB which includes Authentication &amp; Authorization

PROBLEM STATEMENT:  
1)Design a URL Shortener service that takes in a valid URL and returns a shortened URL, redirecting the user to the previously provided URL.  
2)Keep track of total visits/clicks on the URL  
3)Use Authentication and Authorization for various routes  

Steps to run:  
1)use the command "npm install"
2)start mongoDB server using the command "mongosh"
3)use the command "npm start"
4)open "http://localhost:8000/login" OR "http://localhost:8000/signup" and try creating a new user and login in it to access routes.
There are two roles - ADMIN & NORMAL. By default all new users get "NORMAL" role . You can change it in mongoDB to "ADMIN" in order to access the admin route i.e
"http://localhost:8000/admin/urls"
