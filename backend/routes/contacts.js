const express = require('express');
const router = express.Router();

// Importing the controller functions
const { addContact, getContacts, updateContact, deleteContact } = require('../controllers/contactController');

/*Route to get all contacts
router.get('/', (req, res) => {
  res.json({ message: 'Here are your contacts' });
  // If you want to fetch real contacts from the database:
  // getContacts(req, res);
});*/

// Route to add a new contact
router.post('/', addContact); 

// Route to get all contacts (this can be used to fetch the list from your database)
router.get('/', getContacts);  // This will call getContacts controller

// Route to update a contact by ID
router.put('/:id', updateContact);  // Call the updateContact controller to update by id

// Route to delete a contact by ID
router.delete('/:id', deleteContact);  // Call the deleteContact controller to delete by id

module.exports = router;
