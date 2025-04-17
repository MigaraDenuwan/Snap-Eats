import { useState } from "react";

export default function Login() {
  const [formData, setFormData] = useState({ identifier: "", password: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-100 to-violet-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
        <form className="space-y-4">
          <input
            name="identifier"
            type="text"
            placeholder="Email or Phone"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-violet-400"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full px-4 py-2 border rounded-xl focus:ring-2 focus:ring-violet-400"
          />
          <button className="w-full bg-violet-500 text-white py-2 rounded-xl hover:bg-violet-600 transition">
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
