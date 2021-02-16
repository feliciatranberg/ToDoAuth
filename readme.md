*En app där Instruktörer kan sälja kurser till studenter.

entity/huvud aktörer /huvud object i appen ? /model/data sparas in i databasen

Model  achitecture/design: 
  - Student   : vad ska vi spara om student 
  - Lärare    :  ==

  user :   name, email, password , role: lärare

  - Kurser    : ==

----- 

Routes: 
 /register, 
 /login,  
 /resetPassword, 
 /resetPassword/:token,  
 /resetForm, 
 /instructor, 
 /student,
 
    === userRoute

 /, 
 /courses,
 /course/:id

 == courseRoute

 views: 
  register.ejs, 
  login.ejs, 
  resetPassword.ejs,
  resetForm.ejs, 
  courses.ejs, 
  error.ejs

 
MVC:- projektmapp/filer design. 

Whole app architecture: 

-----
NoSQL
  Entity relation :  
  One to one relation :  en person kan ha ett IDkort
  One to many relation: en skola kan ha flera studenter
  many to many relation : lärare kan ha flera studenter , studenter kan ha flera lärare.


** JWT, Cookie , andra alternative : ok 
** gå igenom gammal kodbasen : ok 
** reset password , mail service in i register 
** Lärare :-  skapa kurser 
** authorization 

// fixa profile , menu
// try catch , visa error meddelande


// lärare verify delen : verifyInstructor
// CRUD  
// user Read : visa kuserna 
// user ska kunna lägga till kurser i cart. 
// relationer mellan modellerna 
// egna metoder för att kunna hantera anpassad business logik. 


// Normalisation 
course - instructor - user      courseOrder ( course, user , instructor )


denormalised 
// course , user     en till lista av kurser 
// i user lagrade vi kursId som referens 
// populate för att kunna extrahera data som tillhör till kursId


Onsdag: 
// payment service med stripe   
// heroku   

Torsdag:
// Client server separat architecture 
// API gateway 
// Strapi cms  , cms   