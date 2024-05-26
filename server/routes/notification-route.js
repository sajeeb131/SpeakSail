const express = require('express');
const router = express.Router();

const {createNotification, getNotifications, markAsRead} = require('../controllers/notifications/notification-controller')




router.get('/:id', getNotifications);

router.post('/', createNotification);

router.put('/:id/read', markAsRead);

module.exports = router;