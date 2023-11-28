const {dlg, carrillo, portola} = require('./models/commons');
const fetch = require('node-fetch');

const apiKey = process.env.SEARCH_KEY
const apiURL = process.env.SEARCH_URL
const cx = process.env.SEARCH_ID;
const imageSize = 'medium';

const iterateTableItems = async () => {
    try {
      const itemsDLG = await dlg.findAll();
      if(itemsDLG != null) {
        for (const item of itemsDLG) {
          if (item.url == null) {
            console.log('Item:', item.date, item.food, item.station);
            const response = await fetch(
              `${apiURL}q=${encodeURIComponent(item.food)}&key=${apiKey}&cx=${cx}&searchType=image&num=1&imgSize=${imageSize}`
            );
            const data = await response.json();
            console.log(data);
          }
        }
    
        console.log('Iteration complete.');
      }
    } catch (error) {
      console.error(error);
    }
  };

  module.exports = iterateTableItems