import { useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send('TravelDef0101', 'TravelDef0101', form, {publicKey: 'hoeBLrd674yAQVQEd'})
      .then(
        () => {
          setStatus('✅ Gửi thành công!');
          setForm({ name: '', email: '', phone: '', message: '' });
        },
        () => setStatus('❌ Gửi thất bại. Vui lòng thử lại.')
      );
  };

  return (
    <div className="max-w-xl mx-auto p-6 bg-white dark:bg-gray-800 shadow rounded-xl my-10">
      <h2 className="text-2xl font-bold mb-4 text-center dark:text-white">Liên hệ với chúng tôi</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Họ và tên"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <input
          type="tel"
          name="phone"
          placeholder="Số điện thoại"
          value={form.phone}
          onChange={handleChange}
          className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white"
        />
        <textarea
          name="message"
          placeholder="Nội dung"
          value={form.message}
          onChange={handleChange}
          required
          className="w-full p-2 border rounded h-32 dark:bg-gray-700 dark:text-white"
        />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
          Gửi
        </button>
      </form>
      {status && <p className="mt-4 text-center text-sm">{status}</p>}
    </div>
  );
}
