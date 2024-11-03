// src/api/api.js

const API_URL = 'http://127.0.0.1:5000/api/users';

// Function to add a user
export const addUser = async (user) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        });
        const data = await response.json();
        return data; // Return the response data
    } catch (error) {
        console.error('Error adding user:', error);
    }
};

// Function to get users
export const getUsers = async () => {
    try {
        const response = await fetch(API_URL);
        const users = await response.json();
        return users; // Return the array of users
    } catch (error) {
        console.error('Error fetching users:', error);
    }
};
