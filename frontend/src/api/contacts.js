import axios from 'axios';

const API_URL = 'http://localhost:5000/api/contacts'; // Your backend API URL

// Fetch all contacts
export const fetchContacts = async () => {
    const response = await axios.get(API_URL);
    return response.data;
};

// Add a new contact
export const addContact = async (contact) => {
    const response = await axios.post(API_URL, contact);
    return response.data;
};

// Update a contact by ID
export const updateContact = async (id, updatedContact) => {
    const response = await axios.put(`${API_URL}/${id}`, updatedContact);
    return response.data;
};

// Delete a contact by ID
export const deleteContact = async (id) => {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response.data;
};
