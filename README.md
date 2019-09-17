<h1>URL Shortener for housesimple</h1> 

<h3>By Danny Wakeling</h3>

<p>I have created this project for the second interview stage applying for a react role at housesimple, the specs are as followed:</p>


<p>We would like you to create a URL shortening service using a third party API such as bit.ly or goo.gl.

The main aim of the task is to see how well you architect a solution and to create a basis for discussion. Your code doesn't have to be feature complete. However, it should be written in an extensible way. We would rather see fewer features written well than lots of features written badly.

It should include the following as a minimum:</p>

<ol>
   <li>A page with a form to enter a URL, which on submit will display a shortened URL.</li>
</ol>

<p>No designs have been provided for the front end. It doesn't need to look fancy, but it should be clean and adhere to web standards.

Technologies used to implement the service should include but are not limited to React JS, HTML, CSS. All code should be written by you.</p>


<h2>Steps taken</h2>

<ul> 
    <li>'npx create-react-app url-shortener-housesimple' to create the base project</li>
    <li>'git init' to initialize git</li>
    <li>Fill in readme, documenting as I go</li>
    <li>Update logo at the top of website, change 'react app' to actual name</li>
    <li>Obtain personal API key: 'R_dde325c90a014f31a0c98e0cc9cec107'</li>
    <li>Implement main function with a fetch request to the address using api key and my bitly username</li>
    <li>Use react library to copy short URL to clipboard</li>
    <li>After app is tested and working, start on css</li>
    <li>Background using colors from house simple website: rgb(244, 54, 76) and 246 for grey</li>
    <li>Inserted a wooden card for the form and output</li>
</ul> 

<p>The overall structure of the webpage is as follows, App.js is a high level componenet, which holds most of the logic and state. </p>

<p>It renders the homepage, which is the top section, the name of the app and some styling. It then renders a form for user input, when they do it it sent up to app.js and shortened. </p>

<p>Now that there is a shortened link to show it sends that to the shorterURL component, displaying it to the user and letting them copy it to clipboard with one click of a button</p>


<p>I would like to note that whilst I have watched many series and done some tutorials on Agile, testing and TDD, they were more general and for JavaScript,and not for React and thats why they were not added to this project. Im going to doa course now and it will be on my github within the next day.</p>
