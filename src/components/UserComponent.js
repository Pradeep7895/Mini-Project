// src/components/UserComponent.js

import React, { useEffect, useState } from 'react';
import { addUser, getUsers } from '../api/api';

const UserComponent = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
            const usersList = await getUsers();
            setUsers(usersList);
        };
        fetchUsers();
    }, []);

    const handleAddUser = async () => {
        const newUser = { name: 'John Doe', email: 'john@example.com' };
        const response = await addUser(newUser);
        console.log(response); // Log the response from the backend
        // Optionally refresh the user list
        const usersList = await getUsers();
        setUsers(usersList);
    };

    return (
        <div>
            <h1>User List</h1>
            <button onClick={handleAddUser}>Add User</button>
            <ul>
                {users.map((user, index) => (
                    <li key={index}>{user.name} - {user.email}</li>
                ))}
            </ul>
        </div>
    );
};

export default UserComponent;
