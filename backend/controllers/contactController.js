const Contact = require('../models/Contact');

// Add new contact
const addContact = async (req, res) => {
    try {
        const { firstName, lastName, email, phone, company, jobTitle } = req.body;

        // Validate required fields
        if (!firstName || !lastName || !email || !phone) {
            return res.status(400).json({ message: 'All required fields must be filled' });
        }

        // Create and save the new contact
        const newContact = new Contact({ firstName, lastName, email, phone, company, jobTitle });
        const contact = await newContact.save();

        // Return the created contact
        res.status(201).json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get all contacts
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find();
        res.status(200).json(contacts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Update contact by ID
const updateContact = async (req, res) => {
    try {
        const { id } = req.params;
        const { firstName, lastName, email, phone, company, jobTitle } = req.body;

        const contact = await Contact.findByIdAndUpdate(
            id,
            { firstName, lastName, email, phone, company, jobTitle },
            { new: true }
        );

        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json(contact);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete contact by ID
const deleteContact = async (req, res) => {
    try {
        const { id } = req.params;

        const contact = await Contact.findByIdAndDelete(id);
        if (!contact) {
            return res.status(404).json({ message: 'Contact not found' });
        }

        res.json({ message: 'Contact deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { addContact, getContacts, updateContact, deleteContact };
