'use client'

import { useState } from 'react';
import ContactForm from '@/app/components/ContactForm';
import "../../globals.css";

export default function Home() {
  const [data, setData] = useState([]);
  const [notification, setNotification] = useState("");

  const handleAdd = async ({ name, value, subject, message }) => {
    try {
      const res = await fetch('/api/data', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, value, subject, message }),
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error("Failed to add data:", errorText);
        return;
      }

      const result = await res.json();
      setData([...data, result]);
      setNotification("Form başarıyla gönderildi!");
      setTimeout(() => setNotification(""), 3000);
    } catch (error) {
      console.error("Error occurred while adding data:", error);
    }
  };


  return (
    <div className="min-h-screen flex items-center justify-center">
      <div>
        {notification && (
          <div className="mb-4 p-2 text-green-700 bg-green-100 border border-green-400 rounded">
            {notification}
          </div>
        )}
        <ContactForm onSubmit={handleAdd} />
      </div>
    </div>
  );
}