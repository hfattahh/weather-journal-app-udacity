/* Global Variables */
const appID = '47097ea76b7aaa21404b147e396fc3c7';
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
//require fetch
// const fetch = require('node-fetch');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();

// Event listener to add function to existing HTML DOM element
document.getElementById('generate').addEventListener('click', () => {
    //functiion excute when the button clicked
    console.log('button clicked');
    const zipCode = document.getElementById('zip').value; //tested using 90201
    const userResponse = document.getElementById('feelings').value;

    getWeatherData(baseURL, zipCode, appID) //catch 'data' from API
    .then((data) => {
        let date = new Date(data.dt * 1000)
        let date_str = date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
        postData('/add', {temperature: data.main.temp, date: date_str, userResponse: userResponse});
        updateUI('/all');

    });

});

/* Function to GET Web API Data*/
const getWeatherData = async (baseURL, zipCode, appID) => {
    // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=47097ea76b7aaa21404b147e396fc3c7
    const response  = await fetch(baseURL + zipCode + '&APPID=' + appID);
    try {
        const data = await response.json();
        // console.log(data);
        return data;
    } 
    catch(error) {
        console.log('error', error);
    };
};

/* Function to POST data */
const postData = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type':'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data),
    });

    try {
        const newData = await response.json();
        return newData;
    } catch(error) {
        console.log('error', error);
    };
};


/* Function to GET Project Data */
const updateUI = async(url='') => {
    const request = await fetch(url);
    try {
        const allData = await request.json();
        // console.log(allData);
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].temperature;
        document.getElementById('content').innerHTML = allData[0].userResponse;
    } catch(error) {
        console.log('error', error);
    };
};
/* Function to update UI */

