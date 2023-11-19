const {dlg, carrillo, portola }= require("../models/commons");
const fetch = require('node-fetch');

const apiURL = process.env.API_URL
const apiKey = process.env.API_KEY


const findItem = async function (formattedDate,commons) {
    try {
      const result = await commons.findOne({
        where: {
          date: formattedDate,
        },
      });
      return !!result;
    } catch (error) {
      console.error('Error checking for item:', error);
      throw error;
    }
  };
module.exports = {
    fetchAndStoreDLG: async (date_time, commons = 'de-la-guerra') => {
        try {
          
          const response = await fetch(`${apiURL}/${date_time}/${commons}/dinner`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'ucsb-api-key': apiKey,
            },
          });
          // console.log('API URL:', `${apiURL}/${date_time}/${commons}/dinner`);
          // console.log('API Key:', apiKey);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          const mappedData = data.map(item => ({
            date: date_time,
            food: item.name,
            station: item.station,
          }));
          const itemExists = await findItem(date_time, dlg);
          if(!itemExists) {
            await dlg.bulkCreate(mappedData,{ returning: true });
            console.log('Data stored in the database successfully.');
          }
          else {
            console.log('this date\'s menu exists', date_time)
          }
        } catch (error) {
          console.error(error.message);
        }
      },
      fetchAndStoreCarrillo: async (date_time, commons = 'carrillo') => {
        try {
          
          const response = await fetch(`${apiURL}/${date_time}/${commons}/dinner`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'ucsb-api-key': apiKey,
            },
          });
          // console.log('API URL:', `${apiURL}/${date_time}/${commons}/dinner`);
          // console.log('API Key:', apiKey);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          const mappedData = data.map(item => ({
            date: date_time,
            food: item.name,
            station: item.station,
          })); 
          const itemExists = await findItem(date_time, carrillo);
          if(!itemExists) {
            await carrillo.bulkCreate(mappedData,{ returning: true });
            console.log('Data stored in the database successfully.');
          }
          else {
            console.log('this date\'s menu exists', date_time)
          }
        } catch (error) {
          console.error(error.message);
        }
      },
      fetchAndStorePortola: async (date_time, commons = 'portola') => {
        try {
          
          const response = await fetch(`${apiURL}/${date_time}/${commons}/dinner`, {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
              'ucsb-api-key': apiKey,
            },
          });
          // console.log('API URL:', `${apiURL}/${date_time}/${commons}/dinner`);
          // console.log('API Key:', apiKey);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
      
          const data = await response.json();
          const mappedData = data.map(item => ({
            date: date_time,
            food: item.name,
            station: item.station,
          })); 
          const itemExists = await findItem(date_time, portola);
          if(!itemExists) {
            await portola.bulkCreate(mappedData,{ returning: true });
            console.log('Data stored in the database successfully.');
          }
          else {
            console.log('this date\'s menu exists', date_time)
          }
        } catch (error) {
          console.error(error.message);
        }
      }     
}