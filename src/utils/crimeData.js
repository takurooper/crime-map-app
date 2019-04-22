const API_KEY = 'AIzaSyAiOIgnzJ1jGnHs9OoZpHxaae44XYlr_8w';

const fs = require('fs');
const csvSync = require('csv-parse/lib/sync');

const crimeData = csvSync(fs.readFileSync('../../static/crimeDataH30.csv'))
  .filter((town, index) => index !== 0 && !town[0].includes('計'))
  .map(town => town.slice(0, 2));

crimeData.forEach(town => {
  town[1] = Number(town[1]);
});

export default {
  crimeData
}
