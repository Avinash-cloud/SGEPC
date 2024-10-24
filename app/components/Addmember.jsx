'use client'
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useSidebar } from "./useSidebar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
export default function Addmember() {
    const { isSidebarOpen, toggleSidebar, sliderfromathor, sidebarClass } = useSidebar();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        address: "",
        membershipType: "",
    });
    const [formErrors, setFormErrors] = useState({});

    // Handle input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Form validation function
    const validateForm = () => {
        const errors = {};

        if (!formData.name) {
            errors.name = "Name is required";
        }

        if (!formData.email) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }

        if (!formData.phone) {
            errors.phone = "Phone number is required";
        }

        if (!formData.address) {
            errors.address = "Address is required";
        }

        if (!formData.membershipType) {
            errors.membershipType = "Membership type is required";
        }

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            // Success message with Toastify
            toast.success("Member added successfully!");
            setFormErrors({})

            // Reset the form after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                address: "",
                membershipType: "",
            });
        } else {
            // Show validation errors with Toastify
            toast.error("Please fill all required fields correctly.");
            setFormErrors(errors);
        }
    };

    return (
        <div >
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <div className="page-content" >
                <Topbar toggleSidebar={toggleSidebar} />
                <div className={sidebarClass} onClick={sliderfromathor}></div>
                <div className="h-screen">
                    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                        <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add New Member </h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {formErrors.name && <p className="text-sm text-red-500 mt-1">{formErrors.name}</p>}
                                </div>

                                {/* Email */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {formErrors.email && <p className="text-sm text-red-500 mt-1">{formErrors.email}</p>}
                                </div>

                                {/* Phone */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="phone">Phone</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {formErrors.phone && <p className="text-sm text-red-500 mt-1">{formErrors.phone}</p>}
                                </div>

                                {/* Address */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="address">Address</label>
                                    <textarea
                                        id="address"
                                        name="address"
                                        value={formData.address}
                                        onChange={handleInputChange}
                                        rows="3"
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    ></textarea>
                                    {formErrors.address && <p className="text-sm text-red-500 mt-1">{formErrors.address}</p>}
                                </div>

                                {/* Membership Type */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="membershipType">Membership Type</label>
                                    <select
                                        id="membershipType"
                                        name="membershipType"
                                        value={formData.membershipType}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option value="">Select membership type</option>
                                        <option value="standard">Standard</option>
                                        <option value="premium">Premium</option>
                                    </select>
                                    {formErrors.membershipType && <p className="text-sm text-red-500 mt-1">{formErrors.membershipType}</p>}
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Add Member
                                    </button>
                                </div>
                            </form>

                            {/* Toastify Container */}
                            <ToastContainer />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}