import React, { useEffect, useState } from 'react';
import { fetchContacts, deleteContact } from './api/contacts';

const ContactsPage = () => {
    const [contacts, setContacts] = useState([]);

    // Fetch contacts on component load
    useEffect(() => {
        const getContacts = async () => {
            try {
                const data = await fetchContacts();
                setContacts(data);
            } catch (error) {
                console.error('Error fetching contacts:', error);
            }
        };

        getContacts();
    }, []);

    // Delete a contact
    const handleDelete = async (id) => {
        try {
            await deleteContact(id);
            setContacts(contacts.filter(contact => contact._id !== id)); // Update state
        } catch (error) {
            console.error('Error deleting contact:', error);
        }
    };

    return (
        <div>
            <h1>Contacts</h1>
            <table>
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        <th>Company</th>
                        <th>Job Title</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {contacts.map(contact => (
                        <tr key={contact._id}>
                            <td>{contact.firstName}</td>
                            <td>{contact.lastName}</td>
                            <td>{contact.email}</td>
                            <td>{contact.phone}</td>
                            <td>{contact.company}</td>
                            <td>{contact.jobTitle}</td>
                            <td>
                                <button onClick={() => handleDelete(contact._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ContactsPage;