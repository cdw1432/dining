const fetch = require('node-fetch');
const dotenv = require('dotenv');

// Load environment variables from the specified .env file
dotenv.config({ path: '../../.env' });

const apiURL = process.env.SEARCH_URL;
const key = process.env.SEARCH_KEY_TEST;
const cx = process.env.SEARCH_ID;
let foodName = 'Black Beans (vgn)';
foodName = foodName.replace(/\(vgn\)|\(v\)/ig, '').trim();
const imageSize = 'medium';
const searchURL = `${apiURL}q=${encodeURIComponent(foodName + ' image')}&key=${key}&cx=${cx}&searchType=image&num=1`;

const updateItem = async () => {
    try {
        const response = await fetch(searchURL);
        const data = await response.json();

        if (!data.error && data.items && data.items.length > 0) {
            console.log('Search API URL:', searchURL);
            console.log('Link:', data.items[0].link);
        } else {
            console.log('Error from Search API');
        }
    } catch (error) {
        console.error('Error during API request:', error);
    }
};

function test() {
    updateItem();
}

test();

