# 1. Watch the app working!

Please go to http://prowidgets.s3-website-sa-east-1.amazonaws.com/#!/welcome to see the four chosen widgets alive.

# 2. User Manual

Please take time to see all the widgets from both mobile and desktop devices. You will see how they all perfectly accommodate the browser window size.

## 2.1. Menu

The menu gives the user access to the other three widgets.  It also allows the user to switch between languages.
  
## 2.2. Welcome Page

The welcome page reads a json file to initialize the number of views, messages and loves.  
The user can click to toggle the Love It button (heart). That will change the corresponding number accordingly.
Every time the user visits the welcome page the number of views will change as well.
Those changes will persist!

## 2.3 Upload Files

This page also reads a json file to initialize its values.  The user can change those default values by clicking  the “Mock Upload” button.  Those changes will persist too!

## 2.4 Send Message

This page allows the user to enter multiple email addresses in the Contacts field.  It will validate email address format for each and the send button will be enabled only when there is at least one valid email address in this field.

# 3.  Technical Manual

This is an angularjs application built with netbeans.  Its structure is based on the angular1 style guide: https://github.com/johnpapa/angular-styleguide/blob/master/a1/README.md 

I wanted to show my skills as a frontend developer and I had time to do an awesome job.  That is the main reason that I chose those four widgets.  

Across all components of the application I used angular material design and w3.css frameworks to help me with style and layout respectively.
The application has only one module called prodigious created in the app.js file.

I created some angular services to help me divide concerns and share data across components:

`dataReader`:  I used this service to get application data from json files.
`localStore`:   I used this service to read and write data to $window.localStore
`languageReader`: I used this service to switch languages and to read a json file to get words in a specific language.

To manage routes I used uiRouter.  I always prefer uiRouter over ngRouter because It allows the use of nested states, although for this application that feature was not needed.

For the doughnut chart  in the upload window I used Angular Chart, which requires chart.js. 

For the Contacts field in the message window I used ngTagsInput.  Its allowed-tags-pattern allowed me to define the path for a correct email address.  That regex was found on the internet, and it is supposed to be a standard for email validation.

In the upload window I used $mdDialog to call a modal window to let the user enter new values for files size.  $mdDialog is an angular material service that allows the developer to create such kind of dialogs.

The $watch service was included in all the controllers to notify views of the change in language.

I hope you enjoyed using the prowidget application, I really enjoyed building it and I honestly hope I can get the job since this has been the test that I have had more fun taking it throughout my whole life.
