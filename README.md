# nodejs-thapa-technical-guru
A NodeJS Tutorials and Projects By Thapa Technical Guru

# What is Node JS ?

1. Node.js is a Javascript runtime built on Chrome's V8 Javascript engine.

2. Node.js is a Javascript running on the server.

   The runtime environment is literally just the environment your application is running in.

3. NodeJS is a Single Threaded, Synchronous & Non-blocking IO.


# What is built on Chrome's V8 Javascript engine ?

# History of NodeJS ?

 1. In 2009 an idea come in the mind of Ryan Dahl (Google Engineer) That Why not run Javascript outside browser, so he took v8 engine and embedded in a c++ program and called it Node.exe later on become Nodejs.

 * v8 engine embbed into c++ code

Note: NodeJS is not a Framework

# When to use NodeJS ?

* I/O bound
* Data streaming applications
* Realtime chat applications

# Famous Apps Built on Node.js

1. Paypal
2. Uber
3. ebay
4. Walmart
5. Groupon
6. LinkedIn


# Download and Installation of NodeJS

Official Link To Download NodeJS : https://nodejs.org/en

Official Documentation : https://nodejs.org/docs/latest/api/

Official Package Manager for NodeJS : https://www.npmjs.com/

# Verify the NodeJS, npm Installed Successfully

  1. node -v (or) node --version

  2. npm -v (or) npm --version

# Download and Installation of Vscode

Official Link To Download vscode : https://code.visualstudio.com/

# Node JS Prerequisities [javascript running on server]
 
  * Basic Javascript (Advanced JS will be bonus)
  * ES5 & ES6 | ECMAScript 6
  * Client Server Model (optional)

# NodeJS REPL

  The REPL feature of Node is very useful in experimenting with node.js codes and to debug Javascript codes.

     * Read - Reads user's input, parses the input into Javascript data-structure, and stores in memory.

     * Eval - Takes and evaluates the data structure.

     * Print - Prints the result.

     * Loop - Loops the above command until the user presses ctrl-c twice.

# NodeJS Core Module

     * Consider modules to be the same as Javascript Libraries. A set of functions you want to include in your application.

     * Node.js has a set of built-in modules which you can use without any further installation.
     
# Challenge Time

     * Create a folder named it Thapa
     
     * Create a file in it named bio.txt and data into it.
     
     * Add more data into the file at the end of the existing data.
     
     * Read the data without getting the buffer data at first.
     
     * Rename the file name to mybio.txt.
     
     * now delete both the file and the folder. 


# OS[operating system] Module


# Path Module For Working With File and Directory Path


# npm - package manager for node js libraries

  npm init [To initialize the package.json file]

  npm i chalk [To install package into nodejs]

  npm install [To generate the node_modules/install the dependencies from package.json folder]


 
# Node.js Web Server

To access web pages of any web application, you need a web server. The web server will handle all the http requests for the web application.

Node.js provides capabilities to create your own web server which will handle HTTP requests asynchronously. Yoou can use IIS or Apache to run Node.js web application but it is recommended to use Node.js web server.

# Node.js Routing


# JSON in Nodejs

  JSON stands for Javascript Object Notation. JSON is a lightweight format for storing and transporting data.

  JSON is often used when data is send from a server to a web page.


# Create a API using Nodejs

  API is the acronym for Application Programming Interface, Which is a Software intermediary that allows two applications to talk to each other. Each time you use an app like Facebook, send an instant message, or check the weather on you phone, you're using an API.

  * https://fakestoreapi.com/users
  * https://fakestoreapi.com/products

# Events Module

  * Node.js has a builtin module called Events,
  * Where you can create- , fire-, and listen for- your own events.

# Nodejs Streams

  Streams are Objects that let you read data from a source or write data to a destination in continuous fashion. In Node.js, there are four types of streams - 

  Streaming means listening to music or watching video in 'real time', instead of downloading a file to your computer and watching it later

  Readable - Stream which is used for read operation.

  Writable - Stream which is used for write operation.

  Duplex - Stream which can be used for both read and write operation.

  Transform - A Type of duplex stream where the output is computed based on input.

  Each type of stream is an EventEmitter instance and throws several events at different instance of times. For example, some of the commonly used events are - 

  data - This event is fired when there is data is available to read.

  end - This event is fired when there is no more data to read.

  error - This event is fired when there is any error receiving or writing data.

  finish - This event is fired when all the data has been flushed to underlying system


# Stream Pipes in Nodejs

  stream.pipe(), the method used to take a readable stream and connect it to a writeable steam.

  

# Working on Sending Email In NodeJS

  Nodemailer

  - Official Link: https://www.nodemailer.com/

 SMTP Server For Demo Mail Server

  - Official Link: https://ethereal.email/

# Weather App Using NodeJS [Project Not Worked Properly But Some configurations helped me lot like Weather API, FontAwesome Icons, Flat Colors]

  SignIn or SignUp the Weather API : Official Link : https://home.openweathermap.org/users/sign_in

  API Call : https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

  API Keys : <GET_API_KEY>

  Example : https://api.openweathermap.org/data/2.5/weather?q=Hyderabad&appid=<API_KEY>

  Font Awesome Icons
       CDN Link for Icons : 
          website for CDN Link: https://cdnjs.com/libraries/font-awesome

          Select Stable Version & Asset Type in DropDown Boxes

          CDN Link : <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.0/css/all.min.css" integrity="sha512-10/jx2EXwxxWqCLX/hHth/vu2KY3jCF70dCQB8TSgNjbCVAC/8vai53GfMDrO2Emgwccf2pJqxct9ehpzG+MTw==" crossorigin="anonymous" referrerpolicy="no-referrer" /> 
      
       Official Link : https://fontawesome.com/icons/sun?f=classic&s=solid

  Colors Flat UI
       
       Official Link : flatuicolors.com/palette/cn


  # Note: [Project Got Error] [Configurations Like Weather API Call, Flat Colors UI, FontAwesome Icons Helped Me]



