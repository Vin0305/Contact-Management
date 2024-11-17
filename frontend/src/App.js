import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import ContactsPage from './ContactsPage';
import ContactForm from './ContactForm';

// Removed the first `function App() {}` declaration
const App = () => {
    const [refreshTrigger, setRefreshTrigger] = useState(false);

    const refreshContacts = () => {
        setRefreshTrigger(!refreshTrigger); // Trigger re-fetch of contacts
    };

    return (
        <div>
            <h1>Contact Management</h1>
            <ContactForm refreshContacts={refreshContacts} />
            <ContactsPage refreshTrigger={refreshTrigger} />
        </div>
    );
};

export default App;

