const express = require('express');
const db = require('./db');
const cors = require('cors');

const loginRoute = require('./routes/login');
const candidateRoutes = require('./routes/candidates'); 
const gradeRoutes = require('./routes/gardes');
const countRoute = require('./routes/count');

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));


app.use('/login', loginRoute);
app.use('/candidates', candidateRoutes);
app.use('/grades', gradeRoutes);
app.use('/count', countRoute);

app.listen(9000, function(err){
    if(err) throw err;
    console.log('Server is running on http://localhost:9000');
});