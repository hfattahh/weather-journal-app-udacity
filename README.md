# Weather-Journal App Project
You have to install require package before running

## Table of Contents
* [description](#description)
* [codeflow](#codeflow)
* [ToDo](#ToDo)

## Overview
Create an asynchronous web app that uses API from Open Weather Map and user data to dynamically update the UI. 

## codeflow
* IN `server.js` file lacal server was intialized on the port 3030 then adding a GET route that returns the projectData object in your server code Then, add a POST route that adds incoming data to projectData list. 
* IN `website/app.js` file. first get free API key form OWM and the code containg 3 main functions to get data form OWM, then analysis it and post it to the server side which will store it, and then get the data form server side and update the UI

## ToDo
* Update UI in seperated function.
