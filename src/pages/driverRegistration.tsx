import { useState, ChangeEvent } from "react";

interface DriverFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  vehicleType: string; 
  vehicleNo: string;
  nicNo: string;
  password: string;
  licenseImage: File | null; 
  nicImage: File | null;     
  vehicleFront: File | null;  
  vehicleRear: File | null; 
  vehicleSide: File | null;   
}

export default function DriverRegister() {
  const [formData, setFormData] = useState<DriverFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    vehicleType: "",
    vehicleNo: "",
    nicNo: "",
    password: "",
    licenseImage: null,
    nicImage: null,
    vehicleFront: null,
    vehicleRear: null,
    vehicleSide: null,
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData({ ...formData, [name]: files[0] });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-rose-100 to-pink-200">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-center">Driver Registration</h2>
        <form className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {[
            "firstName", "lastName", "email", "phone", "vehicleType",
            "vehicleNo", "nicNo", "password",
          ].map((field) => (
            <input
              key={field}
              name={field}
              type={field === "password" ? "password" : "text"}
              placeholder={field.replace(/([A-Z])/g, " $1")}
              onChange={handleChange}
              className="px-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-400"
            />
          ))}

          {/* Vehicle Type Dropdown */}
          <select
            name="vehicleType"
            value={formData.vehicleType}
            onChange={handleChange}
            className="px-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-400"
          >
            <option value="">Select Vehicle Type</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="Van">Van</option>
          </select>

          {/* Image Upload Fields */}
          {["licenseImage", "nicImage", "vehicleFront", "vehicleRear", "vehicleSide"].map((field) => (
            <input
              key={field}
              name={field}
              type="file"
              onChange={handleFileChange}
              className="px-4 py-2 border rounded-xl focus:ring-2 focus:ring-pink-400"
            />
          ))}

          <button className="col-span-full bg-pink-500 text-white py-2 rounded-xl hover:bg-pink-600 transition">
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
