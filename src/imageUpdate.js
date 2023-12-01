const {dlg, carrillo, portola} = require('./models/commons');
const fetch = require('node-fetch');

const apiKeyD = process.env.SEARCH_KEY1
const apiKeyC = process.env.SEARCH_KEY2
const apiKeyP = process.env.SEARCH_KEY3

const apiURL = process.env.SEARCH_URL
const cx = process.env.SEARCH_ID;
const imageSize = 'large';

const iterateTableItemsDLG = async () => {
  try {
    const itemsDLG = await dlg.findAll();
    if (itemsDLG != null) {
      for (let item of itemsDLG) {
        if (item.url == null) {
          console.log('Item:', item.date, item.food, item.station);
          await updateItem(item,apiKeyD, dlg);
        }
      }

      console.log('Iteration complete.');
    }
  } catch (error) {
    console.error(error);
  }
};
const iterateTableItemsCAR = async () => {
  try {
    const itemsCAR = await carrillo.findAll();
    if (itemsCAR != null) {
      for (let item of itemsCAR) {
        if (item.url == null) {
          console.log('Item:', item.date, item.food, item.station);
          await updateItem(item, apiKeyC, carrillo);
        }
      }

      console.log('Iteration complete.');
    }
  } catch (error) {
    console.error(error);
  }
};
const iterateTableItemsPOR = async () => {
  try {
    const itemsPOR = await portola.findAll();
    if (itemsPOR != null) {
      for (let item of itemsPOR) {
        if (item.url == null) {
          console.log('Item:', item.date, item.food, item.station);
          await updateItem(item, apiKeyP, portola);
        }
      }

      console.log('Iteration complete.');
    }
  } catch (error) {
    console.error(error);
  }
};
const updateItem = async (currentItem, key, commons) => {
  try {
    const response = await fetch(
      `${apiURL}q=${encodeURIComponent(currentItem.food)}%20image&key=${key}&cx=${cx}&searchType=image&num=1&imgSize=${imageSize}`
    );
    const data = await response.json();

    if (!data.error && data.items && data.items.length > 0) {
      console.log('API:',`${apiURL}q=${encodeURIComponent(currentItem.food)}%20image&key=${key}&cx=${cx}&searchType=image&num=1&imgSize=${imageSize}`,
                  'Link:', data.items[0].link);
      
      await commons.update({ url: data.items[0].link }, { where: { food: currentItem.food } });
    } else {
      console.log('Error from Google API, image update');
    }
  } catch (error) {
    console.error(error);
  }
};

module.exports = {iterateTableItemsCAR,
                  iterateTableItemsDLG,
                  iterateTableItemsPOR};