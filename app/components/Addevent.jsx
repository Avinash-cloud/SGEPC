'use client'
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import { useSidebar } from "./useSidebar";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export default function AddEvent() {
    const { isSidebarOpen, toggleSidebar, sliderfromathor, sidebarClass } = useSidebar();
    
    // Form data state
    const [formData, setFormData] = useState({
        eventName: "",
        eventPlace: "",
        date:"",
        halls: [{ name: "", totalArea: "", totalSeating: "" }]  // Initial hall structure
    });
    const [formErrors, setFormErrors] = useState({});

    // Handle input changes for event details
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle hall field changes
    const handleHallChange = (index, e) => {
        const { name, value } = e.target;
        const updatedHalls = [...formData.halls];
        updatedHalls[index][name] = value;
        setFormData({ ...formData, halls: updatedHalls });
    };

    // Add a new hall section
    const addHall = () => {
        setFormData({ ...formData, halls: [...formData.halls, { name: "", totalArea: "", totalSeating: "" }] });
    };

    // Remove a hall section
    const removeHall = (index) => {
        const updatedHalls = formData.halls.filter((_, hallIndex) => hallIndex !== index);
        setFormData({ ...formData, halls: updatedHalls });
    };

    // Form validation
    const validateForm = () => {
        const errors = {};
        
        if (!formData.eventName) {
            errors.eventName = "Event name is required";
        }
        if (!formData.eventPlace) {
            errors.eventPlace = "Event place is required";
        }

        formData.halls.forEach((hall, index) => {
            if (!hall.name) {
                errors[`hallName_${index}`] = "Hall name is required";
            }
            if (!hall.totalArea) {
                errors[`totalArea_${index}`] = "Total area is required";
            }
            if (!hall.totalSeating) {
                errors[`totalSeating_${index}`] = "Total seating is required";
            }
        });

        return errors;
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        const errors = validateForm();

        if (Object.keys(errors).length === 0) {
            toast.success("Event added successfully!");
            setFormErrors({});
            
            // Reset the form after submission
            setFormData({
                eventName: "",
                eventPlace: "",
                halls: [{ name: "", totalArea: "", totalSeating: "" }],
            });
        } else {
            toast.error("Please fill all required fields correctly.");
            setFormErrors(errors);
        }
    };

    return (
        <div>
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <div className="page-content">
                <Topbar toggleSidebar={toggleSidebar} />
                <div className={sidebarClass} onClick={sliderfromathor}></div>
                <div className="h-screen">
                    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
                        <div className="max-w-lg w-full bg-white p-8 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">Add New Event</h2>
                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Event Name */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="eventName">Event Name</label>
                                    <input
                                        type="text"
                                        id="eventName"
                                        name="eventName"
                                        value={formData.eventName}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {formErrors.eventName && <p className="text-sm text-red-500 mt-1">{formErrors.eventName}</p>}
                                </div>

                                {/* Event Place */}
                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="eventPlace">Event Place</label>
                                    <input
                                        type="text"
                                        id="eventPlace"
                                        name="eventPlace"
                                        value={formData.eventPlace}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {formErrors.eventPlace && <p className="text-sm text-red-500 mt-1">{formErrors.eventPlace}</p>}
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700" htmlFor="eventPlace">Event Date</label>
                                    <input
                                        type="date"
                                        id="eventPlace"
                                        name="eventPlace"
                                        value={formData.date}
                                        onChange={handleInputChange}
                                        className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    />
                                    {formErrors.eventPlace && <p className="text-sm text-red-500 mt-1">{formErrors.eventPlace}</p>}
                                </div>

                                {/* Halls Section */}
                                {formData.halls.map((hall, index) => (
                                    <div key={index} className="space-y-4 border-t pt-4">
                                        <h3 className="text-xl font-semibold text-gray-600">Hall {index + 1}</h3>

                                        {/* Hall Name */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700" htmlFor={`hallName_${index}`}>Hall Name</label>
                                            <input
                                                type="text"
                                                id={`hallName_${index}`}
                                                name="name"
                                                value={hall.name}
                                                onChange={(e) => handleHallChange(index, e)}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {formErrors[`hallName_${index}`] && <p className="text-sm text-red-500 mt-1">{formErrors[`hallName_${index}`]}</p>}
                                        </div>

                                        {/* Total Area */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700" htmlFor={`totalArea_${index}`}>Total Area</label>
                                            <input
                                                type="text"
                                                id={`totalArea_${index}`}
                                                name="totalArea"
                                                value={hall.totalArea}
                                                onChange={(e) => handleHallChange(index, e)}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {formErrors[`totalArea_${index}`] && <p className="text-sm text-red-500 mt-1">{formErrors[`totalArea_${index}`]}</p>}
                                        </div>

                                        {/* Total Seating */}
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700" htmlFor={`totalSeating_${index}`}>Total Seating</label>
                                            <input
                                                type="text"
                                                id={`totalSeating_${index}`}
                                                name="totalSeating"
                                                value={hall.totalSeating}
                                                onChange={(e) => handleHallChange(index, e)}
                                                className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                            />
                                            {formErrors[`totalSeating_${index}`] && <p className="text-sm text-red-500 mt-1">{formErrors[`totalSeating_${index}`]}</p>}
                                        </div>

                                        {/* Remove Hall Button */}
                                        {formData.halls.length > 1 && (
                                            <button
                                                type="button"
                                                onClick={() => removeHall(index)}
                                                className="text-red-600 text-sm mt-2"
                                            >
                                                Remove Hall
                                            </button>
                                        )}
                                    </div>
                                ))}

                                {/* Add Hall Button */}
                                <div>
                                    <button
                                        type="button"
                                        onClick={addHall}
                                        className="w-full px-4 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                                    >
                                        Add Hall
                                    </button>
                                </div>

                                {/* Submit Button */}
                                <div>
                                    <button
                                        type="submit"
                                        className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Add Event
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
    );
}
