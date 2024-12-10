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
        <div className="flex flex-col justify-center items-center bg-[#ddc69d] text-[#4B2E2E] min-h-screen p-6">
            <h1 className="text-4xl font-bold underline mb-6">İletişim</h1>
            <p className="text-center mb-6">
                Bize ulaşmak için aşağıdaki formu doldurun veya iletişim bilgilerimizi kullanın.
            </p>

            <form onSubmit={handleSubmit} className="w-full max-w-lg bg-white p-6 shadow-md rounded-lg space-y-4">
                <div className="mb-4">
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Ad Soyad"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B2E2E] text-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        placeholder="E-mail"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B2E2E] text-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Konu"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B2E2E] text-black"
                    />
                </div>
                <div className="mb-4">
                    <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Mesaj"
                        required
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#4B2E2E] text-black"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full py-2 bg-[#4B2E2E] text-white rounded-md hover:bg-[#3a2323] transition"
                >
                    Gönder
                </button>
            </form>

            <div className="mt-6 text-center">
                <h2 className="text-xl font-semibold mb-2">İletişim Bilgilerimiz</h2>
                <p>E-posta: <a href="mailto:destek@kultursanat.com" className="underline">destek@kultursanat.com</a></p>
                <p>Telefon: +90 555 555 55 55</p>
                <p>Adres: Konya, Türkiye</p>
            </div>
        </div>
    );
}