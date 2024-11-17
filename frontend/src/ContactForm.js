import React, { useState } from 'react';
import { addContact } from './api/contacts';

const ContactForm = ({ refreshContacts }) => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        jobTitle: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addContact(formData);
            refreshContacts(); // Refresh the contact list after adding a contact
            setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', jobTitle: '' }); // Clear the form
        } catch (error) {
            console.error('Error adding contact:', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required />
            <input name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required />
            <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" required />
            <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" required />
            <input name="company" value={formData.company} onChange={handleChange} placeholder="Company" />
            <input name="jobTitle" value={formData.jobTitle} onChange={handleChange} placeholder="Job Title" />
            <button type="submit">Add Contact</button>
        </form>
    );
};

export default ContactForm;