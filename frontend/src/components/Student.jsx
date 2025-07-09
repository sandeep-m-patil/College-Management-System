import { useEffect, useState } from 'react';
import axios from 'axios';

function Student() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({
    rollno: '',
    addmission_date: '',
    full_name: '',
    email: '',
    date_of_birth: '',
    gender: '',
    address: '',
    contact_number: '',
    department_id: '',
    year_of_study: '',
    year_of_passing: ''
  });

  const fetchStudents = async () => {
    const res = await axios.get('http://localhost:5000/api/students');
    setStudents(res.data);
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('http://localhost:5000/api/students', form);
    setForm({
      rollno: '',
      addmission_date: '',
      full_name: '',
      email: '',
      date_of_birth: '',
      gender: '',
      address: '',
      contact_number: '',
      department_id: '',
      year_of_study: '',
      year_of_passing: ''
    });
    fetchStudents();
  };

  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:5000/api/students/${id}`);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div className="p-8 max-w-full mx-auto">
      <h2 className="text-3xl font-extrabold mb-6 text-blue-700 text-center">Student Registration</h2>
      <form
        onSubmit={handleSubmit}
        className="p-8 max-w-200 mx-auto bg-white shadow-lg rounded-lg  grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 mb-10 border"
      >
        <div>
          <label htmlFor="rollno" className="block mb-1 font-medium text-gray-700">Roll No</label>
          <input type="text" id="rollno" className="input w-full" name="rollno" value={form.rollno} onChange={handleChange} placeholder="Roll No" required />
        </div>
        <div>
          <label htmlFor="addmission_date" className="block mb-1 font-medium text-gray-700">Admission Date</label>
          <input type="date" id="addmission_date" className="input w-full" name="addmission_date" value={form.addmission_date} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="full_name" className="block mb-1 font-medium text-gray-700">Full Name</label>
          <input type="text" id="full_name" className="input w-full" name="full_name" value={form.full_name} onChange={handleChange} placeholder="Full Name" required />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
          <input type="email" id="email" className="input w-full" name="email" value={form.email} onChange={handleChange} placeholder="Email" required />
        </div>
        <div>
          <label htmlFor="date_of_birth" className="block mb-1 font-medium text-gray-700">Date of Birth</label>
          <input type="date" id="date_of_birth" className="input w-full" name="date_of_birth" value={form.date_of_birth} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="gender" className="block mb-1 font-medium text-gray-700">Gender</label>
          <select id="gender" className="input w-full" name="gender" value={form.gender} onChange={handleChange} required>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </div>
        <div>
          <label htmlFor="address" className="block mb-1 font-medium text-gray-700">Address</label>
          <input type="text" id="address" className="input w-full" name="address" value={form.address} onChange={handleChange} placeholder="Address" required />
        </div>
        <div>
          <label htmlFor="contact_number" className="block mb-1 font-medium text-gray-700">Contact Number</label>
          <input type="tel" id="contact_number" className="input w-full" name="contact_number" value={form.contact_number} onChange={handleChange} placeholder="Contact Number" required />
        </div>
        <div>
          <label htmlFor="department_id" className="block mb-1 font-medium text-gray-700">Department ID</label>
          <input type="numbe" id="department_id" className="input w-full" name="department_id" value={form.department_id} onChange={handleChange} placeholder="Department ID" required />
        </div>
        <div>
          <label htmlFor="year_of_study" className="block mb-1 font-medium text-gray-700">Year of Study</label>
          <input type="number" id="year_of_study" className="input w-full" name="year_of_study" value={form.year_of_study} onChange={handleChange} placeholder="Year of Study" required />
        </div>
        <div>
          <label htmlFor="year_of_passing" className="block mb-1 font-medium text-gray-700">Year of Passing</label>
          <input type="number" id="year_of_passing" className="input w-full" name="year_of_passing" value={form.year_of_passing} onChange={handleChange} placeholder="Year of Passing" required />
        </div>
        <div className="md:col-span-2 flex justify-center items-end">
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition w-full md:w-auto"
          >
            Add Student
          </button>
        </div>
      </form>
      <h3 className="text-xl font-bold mb-4 text-gray-700">Student List</h3>
      <div className="bg-white shadow rounded-lg overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-blue-50">
            <tr>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Roll No</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Admission Date</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Full Name</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Email</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Date of Birth</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Gender</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Address</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Contact Number</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Department ID</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Year of Study</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Year of Passing</th>
              <th className="px-4 py-2 text-left text-xs font-medium text-gray-700 uppercase">Actions</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {students.map((s, idx) => (
              <tr key={idx} className="hover:bg-blue-50">
                <td className="px-4 py-2">{s.rollno}</td>
                <td className="px-4 py-2">{s.addmission_date}</td>
                <td className="px-4 py-2">{s.full_name}</td>
                <td className="px-4 py-2">{s.email}</td>
                <td className="px-4 py-2">{s.date_of_birth}</td>
                <td className="px-4 py-2">{s.gender}</td>
                <td className="px-4 py-2">{s.address}</td>
                <td className="px-4 py-2">{s.contact_number}</td>
                <td className="px-4 py-2">{s.department_id}</td>
                <td className="px-4 py-2">{s.year_of_study}</td>
                <td className="px-4 py-2">{s.year_of_passing}</td>
                <td className="px-4 py-2">
                  <button
                    onClick={() => handleDelete(s.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {students.length === 0 && (
          <div className="p-4 text-center text-gray-500">No students found.</div>
        )}
      </div>
    </div>
  );
}

export default Student;
