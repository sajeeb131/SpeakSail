const {Notifications} = require('../../models/notifications/notification-model')



// Controller function to create a new notification
const createNotification = async (req, res) => {
    try {
        const { studentID, type, lessonNumber, message } = req.body;
        console.log(studentID, type, lessonNumber, message)
        
        // Create a new notification object
        const notification = new Notifications({
            studentID: studentID,
            lessonType: type,
            lessonNumber: lessonNumber,
            message: message,
            
        });

        // Save the notification to the database
        await notification.save();

        res.status(201).json({ message: 'Notification created successfully', notification });
    } catch (error) {
        console.error('Error creating notification:', error);
        res.status(500).json({ error: 'Failed to create notification' });
    }
};


// Get all notifications for a specific student
const getNotifications = async (req, res) => {
    try {
        console.log('here')
        const studentId = req.params.id; // Assuming user ID is available in req.user
        console.log(studentId)
        const notifications = await Notifications.find({ studentID: studentId });
        console.log(notifications)
        if(!notifications){
            console.log('here')
            throw new Error('no notifications found')
            
        }
        res.json(notifications);
    } catch (error) {
        console.error('Error fetching notifications:', error);
        res.status(500).json({ error: 'Failed to fetch notifications' });
    }
};

// Mark a specific notification as read
const markAsRead = async (req, res) => {
    try {
        const notificationId = req.params.id;
        const studentId = req.user._id;

        const notification = await Notifications.findOneAndUpdate(
            { _id: notificationId, studentID: studentId },
            { read: true },
            { new: true }
        );

        if (notification) {
            res.status(200).json({ message: 'Notification marked as read', notification });
        } else {
            res.status(404).json({ error: 'Notification not found' });
        }
    } catch (error) {
        console.error('Error marking notification as read:', error);
        res.status(500).json({ error: 'Failed to mark notification as read' });
    }
};

module.exports = { createNotification, getNotifications, markAsRead };