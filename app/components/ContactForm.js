"use client";

import { useState } from 'react';

export default function ContactForm({ onSubmit, initialData = {} }) {
    const [name, setName] = useState(initialData.name || '');
    const [value, setValue] = useState(initialData.value || '');
    const [subject, setSubject] = useState(initialData.subject || '');
    const [message, setMessage] = useState(initialData.message || '');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!name || !value || !subject || !message) {
            console.error("All fields are required");
            return;
        }

        onSubmit({ name, value, subject, message });
        setName('');
        setValue('');
        setSubject('');
        setMessage('');
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Value"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="subject"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="message"
                required
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-black"
            />
            <button
                type="submit"
                className="w-full py-2 bg-blue-500 text-white rounded-md hover:bg-blue-700"
            >
                Gönder
            </button>
        </form>
    );
}