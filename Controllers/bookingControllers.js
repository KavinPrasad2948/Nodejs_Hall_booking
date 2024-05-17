const { rooms, bookings } = require('../Models/dataStore');

exports.bookRoom = (req, res) => {
    const { customerName, date, startTime, endTime, roomId } = req.body;
    const room = rooms.find(r => r.id === roomId);
    if (!room) {
        return res.status(404).json({ error: 'Room not found' });
    }
    const newBooking = { id: bookings.length + 1, customerName, date, startTime, endTime, roomId };
    bookings.push(newBooking);
    console.log("bookings after new booking: " + bookings)
    res.status(201).json(newBooking);
};

exports.listCustomersWithBookings = (req, res) => {
    const customersWithBookings = bookings.map(booking => {
        const room = rooms.find(r => r.id === booking.roomId);
        return { ...booking, roomName: room ? room.numberOfSeats : null };
    });
    console.log("customersWithBookings", customersWithBookings)
    res.json(customersWithBookings);
};

exports.listCustomerBookings = (req, res) => {
    const { customerName } = req.params;
    const customerBookings = bookings.filter(b => b.customerName === customerName);
    console.log("bookings for customer " + customerBookings);
    res.json(customerBookings);
};