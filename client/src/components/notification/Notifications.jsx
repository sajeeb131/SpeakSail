import React, { useState, useEffect } from 'react';
import './notifications.css'

const Notifications = () => {

    const [notifications, setNotifications] = useState([]);
    const studentID = localStorage.getItem('user')
    useEffect(() => {
        const fetchNotifications = async () => {
            try {
                const response = await fetch(`http://localhost:4000/notifications/${studentID}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch notifications');
                }
                const data = await response.json();
                setNotifications(data);
                console.log(notifications)
            } catch (error) {
                console.error('Error fetching notifications:', error);
            }
        };

        fetchNotifications();
    }, []);

    return (
        <div className="notifications-container">
            <h1>Notifications</h1>
            <ul className="notifications-list">
                {notifications.map(notification => (
                    <li key={notification._id} className="notification-item">
                        <h2>{notification.lessonType}: {notification.lessonNumber}</h2>
                        <p>{notification.message}</p>
                        <span className="notification-time">{new Date(notification.time).toLocaleString()}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Notifications;
