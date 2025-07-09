import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [users, setUsers] = useState([]);
  const [form, setForm] = useState({ name: '', email: '' });

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/users', form);
    setForm({ name: '', email: '' });
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h2 className="text-2xl font-bold mb-4">Users</h2>
      <form onSubmit={handleSubmit} className="flex flex-col gap-2 mb-6">
        <input
          className="border rounded px-3 py-2"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Name"
        />
        <input
          className="border rounded px-3 py-2"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="Email"
        />
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add User
        </button>
      </form>
      <ul className="space-y-2">
        {users.map((u, idx) => (
          <li key={idx} className="border-b py-1">{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;