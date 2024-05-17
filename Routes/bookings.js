const express = require('express');
const router = express.Router();
const bookingController = require('../Controllers/bookingControllers');

router.post('/', bookingController.bookRoom);
router.get('/customers', bookingController.listCustomersWithBookings);
router.get('/customers/:customerName/bookings', bookingController.listCustomerBookings);

module.exports = router;
