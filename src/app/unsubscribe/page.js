"use client";
import { useState } from 'react';

const Unsubscribe = ({ searchParams: { email } }) => {
  const [unsubscribed, setUnsubscribed] = useState(false);

  const API_URL = process.env.NODE_ENV === 'development' ? 'http://localhost:3000' : 'https://blog.aragua.org';

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(`${API_URL}/api/emails`, {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ correo: email }),
      });
      if (response.ok) {
        setUnsubscribed(true);
      } else {
        console.error('Error unsubscribing');
      }
    } catch (error) {
      console.error('Error unsubscribing:', error);
    }
  };

  return (
    <div className="p-4 mx-2 text-center rounded-2xl bg-white/90 sm:m-10 dark:bg-transparent dark:text-white">
  <h1 className="mb-4 text-3xl font-bold">Desuscribirse</h1>
  <p className="mb-6 text-lg text-gray-600">Lamentamos que hayas decidido dejar de recibir nuestro newsletter!</p>
  <form onSubmit={handleSubmit} className="flex flex-col items-center">
    <input type="hidden" name="email" value={email} />
    {!unsubscribed && <button type="submit" className="px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700">
      Confirma la desuscripción
    </button>}
  </form>
  {unsubscribed && (
    <p className="py-2 font-bold text-green-600">Ya no recibirás nuestro newsletter.</p>
  )}
</div>
  );
};

export default Unsubscribe;