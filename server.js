const express = require('express');
// needed to access stylesheet
const path = require('path');
const db = require('./config/connection');
const htmlRoutes = require('./routes/htmlRoutes');
// const apiRoutes = require('./routes/apiRoutes');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }) );
app.use(express.json());
// needed to access stylesheet
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', htmlRoutes);
// app.use('/api', apiRoutes);

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`Now listening at port ${PORT}! 🚀`);
  });
});