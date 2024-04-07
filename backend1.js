const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;


const jobListings = [
    { id: 1, title: 'Software Engineer', company: 'TechCo', location: 'CityA' },
    { id: 2, title: 'Data Scientist', company: 'DataCorp', location: 'CityB' },

];

app.use(bodyParser.json());


app.get('/api/featured-jobs', (req, res) => {
    res.json(jobListings.slice(0, 3)); 
});


app.get('/api/job-listings', (req, res) => {
    res.json(jobListings);
});

app.listen(port, () => {
    console.log('Server is running on port ${port}');
});