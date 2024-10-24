"use client";
import { useState } from "react";
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import * as XLSX from "xlsx";

// Initial event data
const initialEventData = [
    {
        id: 1,
        title: 'Event One',
        date: '2024-08-01',
        location: 'Location One',
        description: 'Description for Event One',
        createdBy: 'Admin',
    },
    {
        id: 2,
        title: 'Event Two',
        date: '2024-08-15',
        location: 'Location Two',
        description: 'Description for Event Two',
        createdBy: 'Admin',
    },
    // Add more events as needed
];

export default function Event() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const sliderfromathor = () => {
        setIsSidebarOpen(false);
    };

    const sidebarClass = isSidebarOpen
        ? 'hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900 z-50 lg:hidden '
        : 'hidden';

    const [data, setData] = useState(initialEventData);
    const [sortColumn, setSortColumn] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [visibleColumns, setVisibleColumns] = useState(['id', 'title', 'date', 'location', 'description', 'createdBy']);
    const [selectedRows, setSelectedRows] = useState({});

    // Sorting Logic
    const sortedData = [...data].sort((a, b) => {
        if (sortDirection === 'asc') {
            return a[sortColumn] > b[sortColumn] ? 1 : -1;
        } else {
            return a[sortColumn] < b[sortColumn] ? 1 : -1;
        }
    });

    // Filtering Logic
    const filteredData = sortedData.filter(item =>
        Object.values(item).some(value =>
            String(value).toLowerCase().includes(searchTerm.toLowerCase())
        )
    );

    // Pagination Logic
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Handlers
    const handleSort = (column) => {
        const direction = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
        setSortDirection(direction);
        setSortColumn(column);
    };

    const handleSearch = (event) => {
        setSearchTerm(event.target.value);
        setCurrentPage(1); // Reset to first page on search
    };

    const handleChangeItemsPerPage = (event) => {
        setItemsPerPage(Number(event.target.value));
        setCurrentPage(1); // Reset to first page
    };

    const toggleColumnVisibility = (column) => {
        setVisibleColumns((prev) =>
            prev.includes(column)
                ? prev.filter(col => col !== column)
                : [...prev, column]
        );
    };

    const resetFilters = () => {
        setSearchTerm('');
        setSortColumn('id');
        setSortDirection('asc');
        setItemsPerPage(5);
        setCurrentPage(1);
    };

    const handleSelectAll = (event) => {
        const isChecked = event.target.checked;
        const newSelectedRows = {};
        currentItems.forEach(item => {
            newSelectedRows[item.id] = isChecked;
        });
        setSelectedRows(newSelectedRows);
    };

    const handleRowSelect = (id) => {
        setSelectedRows((prev) => ({
            ...prev,
            [id]: !prev[id],
        }));
    };

    const exportToExcel = () => {
        const selectedData = data
            .filter(item => selectedRows[item.id]) // Filter selected rows
            .map(item => {
                // Include only visible columns
                const filteredItem = {};
                if (visibleColumns.includes('id')) filteredItem.id = item.id;
                if (visibleColumns.includes('title')) filteredItem.title = item.title;
                if (visibleColumns.includes('date')) filteredItem.date = item.date;
                if (visibleColumns.includes('location')) filteredItem.location = item.location;
                if (visibleColumns.includes('description')) filteredItem.description = item.description;
                if (visibleColumns.includes('createdBy')) filteredItem.createdBy = item.createdBy;
                return filteredItem;
            });

        if (selectedData.length === 0) {
            alert('No rows or columns selected!');
            return;
        }

        const worksheet = XLSX.utils.json_to_sheet(selectedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'SelectedData');

        // Generate Excel file
        XLSX.writeFile(workbook, 'SelectedData.xlsx');
    };

    return (
        <div>
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <div className="page-content">
                <Topbar toggleSidebar={toggleSidebar} />
                <div className={sidebarClass} onClick={sliderfromathor}></div>

                <div className="h-screen">
                    <div className="p-4">
                        <div className="mb-4">
                            <input
                                type="text"
                                placeholder="Search..."
                                value={searchTerm}
                                onChange={handleSearch}
                                className="border p-2 rounded"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="mr-2">Show rows:</label>
                            <select
                                value={itemsPerPage}
                                onChange={handleChangeItemsPerPage}
                                className="border p-2 rounded w-15"
                            >
                                <option value={5}>5</option>
                                <option value={10}>10</option>
                                <option value={15}>15</option>
                            </select>
                            <button
                                onClick={resetFilters}
                                className="ml-4 bg-blue-500 text-white p-2 rounded"
                            >
                                Reset
                            </button>

                            <button
                                onClick={exportToExcel}
                                className="mb-4 bg-green-700 text-white p-2 rounded ml-3"
                            >
                                Export to Excel
                            </button>
                        </div>

                        <div className="overflow-x-auto">
                            <div className="min-w-full inline-block align-middle whitespace-nowrap">
                                <div className="overflow-hidden">
                                    <table className="min-w-full border border-gray-300">
                                        <thead>
                                            <tr className="bg-gray-200">
                                                <th className="border p-2">
                                                    <input
                                                        type="checkbox"
                                                        onChange={handleSelectAll}
                                                        checked={currentItems.length > 0 && currentItems.every(item => selectedRows[item.id])}
                                                    />
                                                </th>
                                                {visibleColumns.includes('id') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('id')}>
                                                        ID {sortColumn === 'id' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                {visibleColumns.includes('title') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('title')}>
                                                        Title {sortColumn === 'title' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                {visibleColumns.includes('date') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('date')}>
                                                        Date {sortColumn === 'date' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                {visibleColumns.includes('location') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('location')}>
                                                        Location {sortColumn === 'location' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                {visibleColumns.includes('description') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('description')}>
                                                        Description {sortColumn === 'description' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                {visibleColumns.includes('createdBy') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('createdBy')}>
                                                        Created By {sortColumn === 'createdBy' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentItems.map(item => (
                                                <tr key={item.id} className="hover:bg-gray-100">
                                                    <td className="border p-2">
                                                        <input
                                                            type="checkbox"
                                                            checked={!!selectedRows[item.id]}
                                                            onChange={() => handleRowSelect(item.id)}
                                                        />
                                                    </td>
                                                    {visibleColumns.includes('id') && (
                                                        <td className="border p-2">{item.id}</td>
                                                    )}
                                                    {visibleColumns.includes('title') && (
                                                        <td className="border p-2">{item.title}</td>
                                                    )}
                                                    {visibleColumns.includes('date') && (
                                                        <td className="border p-2">{item.date}</td>
                                                    )}
                                                    {visibleColumns.includes('location') && (
                                                        <td className="border p-2">{item.location}</td>
                                                    )}
                                                    {visibleColumns.includes('description') && (
                                                        <td className="border p-2">{item.description}</td>
                                                    )}
                                                    {visibleColumns.includes('createdBy') && (
                                                        <td className="border p-2">{item.createdBy}</td>
                                                    )}
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        {/* Pagination */}
                        <div className="flex justify-between mt-4">
                            <div>
                                {`Showing ${indexOfFirstItem + 1} to ${Math.min(indexOfLastItem, filteredData.length)} of ${filteredData.length} entries`}
                            </div>
                            <div>
                                {Array.from({ length: totalPages }, (_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentPage(index + 1)}
                                        className={`border px-2 py-1 ${currentPage === index + 1 ? 'bg-blue-500 text-white' : ''}`}
                                    >
                                        {index + 1}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
