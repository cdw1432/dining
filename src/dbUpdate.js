// dbUpdate.js
const schedule = require('node-schedule');
const dbController = require('./controllers/dbController');

const dbUpdateJob = () => {
  const job = schedule.scheduleJob('11 14 * * *', async () => {
    const today = new Date();
    const tomorrow = new Date();
    const dayAfterTomorrow = new Date();

    tomorrow.setDate(today.getDate() + 1);
    dayAfterTomorrow.setDate(today.getDate() + 2);

    const formattedToday = `${today.getFullYear()}-${today.getMonth() + 1}-${today.getDate()}`;
    const formattedTomorrow = `${tomorrow.getFullYear()}-${tomorrow.getMonth() + 1}-${tomorrow.getDate()}`;
    const formattedDayAfterTomorrow = `${dayAfterTomorrow.getFullYear()}-${dayAfterTomorrow.getMonth() + 1}-${dayAfterTomorrow.getDate()}`;
    try {
      // Call your database update functions with the current date
      await dbController.fetchAndStoreDLG(formattedToday);
      await dbController.fetchAndStoreCarrillo(formattedToday);
      await dbController.fetchAndStorePortola(formattedToday);

      await dbController.fetchAndStoreDLG(formattedTomorrow);
      await dbController.fetchAndStoreCarrillo(formattedTomorrow);
      await dbController.fetchAndStorePortola(formattedTomorrow);

      await dbController.fetchAndStoreDLG(formattedDayAfterTomorrow);
      await dbController.fetchAndStoreCarrillo(formattedDayAfterTomorrow);
      await dbController.fetchAndStorePortola(formattedDayAfterTomorrow);

      console.log('Database update completed.');
    } catch (error) {
      console.error('Error updating database:', error.message);
    }
  });

  return { job };
};

module.exports = dbUpdateJob;
