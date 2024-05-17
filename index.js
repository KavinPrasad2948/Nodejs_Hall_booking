const express = require('express');
const bodyParser = require('body-parser');
const roomRoutes = require('./Routes/rooms');
const bookingRoutes = require('./Routes/bookings');
const mongoose = require('./DB/DB');

const HTTP_SERVER = express();
const PORT = 3000;

HTTP_SERVER.use(bodyParser.json());
HTTP_SERVER.use('/rooms', roomRoutes);
HTTP_SERVER.use('/bookings', bookingRoutes);

HTTP_SERVER.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
