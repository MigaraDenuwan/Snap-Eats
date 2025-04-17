import { useState, ChangeEvent } from "react";

interface RestaurantFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}

export default function RestaurantRegister() {
  const [formData, setFormData] = useState<RestaurantFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-100 to-teal-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Restaurant Registration</h2>
        <form className="space-y-4">
          {["firstName", "lastName", "email", "phone", "password"].map((field) => (
            <input
              key={field}
              type={field === "password" ? "password" : "text"}
              name={field}
              placeholder={field.replace(/([A-Z])/g, " $1")}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
            />
          ))}
          <button className="w-full bg-teal-500 text-white py-2 rounded-xl hover:bg-teal-600 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
