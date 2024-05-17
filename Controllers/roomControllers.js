const { rooms } = require('../Models/dataStore');

exports.createRoom = (req, res, next) => {
    const { numberOfSeats, amenities, pricePerHour } = req.body;
    const newRoom = { id: rooms.length + 1, numberOfSeats, amenities, pricePerHour };
    rooms.push(newRoom);
    res.status(201).json(newRoom);
};

exports.listRooms = (req, res, next) => {
    res.json(rooms);
    
};