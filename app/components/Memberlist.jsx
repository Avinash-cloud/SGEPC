"use client"
import { useState } from "react"
import Sidebar from "./Sidebar";
import Topbar from "./Topbar";
import * as XLSX from 'xlsx';


const initialData = [
    { id: 1, name: 'John Doe', age: 28, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 34, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 45, email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', age: 23, email: 'alice@example.com' },
    { id: 5, name: 'Tom Wilson', age: 30, email: 'tom@example.com' },
    { id: 6, name: 'Tom Wilson', age: 34, email: 'tom@example2.com' },
    // Add more data as needed
];
export default function Member() {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const toggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    const sliderfromathor = () => {
        setIsSidebarOpen(false);

    }

    const sidebarClass = isSidebarOpen
        ? 'hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900 z-50 lg:hidden '
        : 'hidden';

    const [data, setData] = useState(initialData);
    const [sortColumn, setSortColumn] = useState('id');
    const [sortDirection, setSortDirection] = useState('asc');
    const [searchTerm, setSearchTerm] = useState('');
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [visibleColumns, setVisibleColumns] = useState(['id', 'name', 'age', 'email']);
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
          .filter(item => selectedRows[item.id])  // Filter selected rows
          .map(item => {
            // Include only visible columns
            const filteredItem = {};
            if (visibleColumns.includes('id')) filteredItem.id = item.id;
            if (visibleColumns.includes('name')) filteredItem.name = item.name;
            if (visibleColumns.includes('age')) filteredItem.age = item.age;
            if (visibleColumns.includes('email')) filteredItem.email = item.email;
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
        <div >
            <Sidebar isSidebarOpen={isSidebarOpen} />
            <div className="page-content" >
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
                                                {visibleColumns.includes('name') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('name')}>
                                                        Name {sortColumn === 'name' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                {visibleColumns.includes('age') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('age')}>
                                                        Age {sortColumn === 'age' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                {visibleColumns.includes('email') && (
                                                    <th className="border p-2 cursor-pointer" onClick={() => handleSort('email')}>
                                                        Email {sortColumn === 'email' && (sortDirection === 'asc' ? '↑' : '↓')}
                                                    </th>
                                                )}
                                                <th className="border p-2">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {currentItems.length > 0 ? (
                                                currentItems.map(item => (
                                                    <tr key={item.id}>
                                                        <td className="border p-2">
                                                            <input
                                                                type="checkbox"
                                                                checked={!!selectedRows[item.id]}
                                                                onChange={() => handleRowSelect(item.id)}
                                                            />
                                                        </td>
                                                        {visibleColumns.includes('id') && <td className="border p-2">{item.id}</td>}
                                                        {visibleColumns.includes('name') && <td className="border p-2">{item.name}</td>}
                                                        {visibleColumns.includes('age') && <td className="border p-2">{item.age}</td>}
                                                        {visibleColumns.includes('email') && <td className="border p-2">{item.email}</td>}
                                                        <td className="border p-2">
                                                            <button className="bg-green-500 text-white p-1 rounded">Edit</button>
                                                            <button className="bg-red-500 text-white p-1 rounded ml-2">Delete</button>
                                                        </td>
                                                    </tr>
                                                ))
                                            ) : (
                                                <tr>
                                                    <td colSpan={5} className="border p-2 text-center">No Data Found</td>
                                                </tr>
                                            )}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>

                        <div className="overflow-x-auto m-5">
                            <div className="min-w-full inline-block align-middle whitespace-nowrap">
                                <div className="overflow-hidden">
                                    <div className="flex justify-between items-center mt-4">
                                        <div>
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                                                className="bg-gray-300 p-2 rounded"
                                                disabled={currentPage === 1}
                                            >
                                                Previous
                                            </button>
                                            <span className="mx-2">Page {currentPage} of {totalPages}</span>
                                            <button
                                                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                                                className="bg-gray-300 p-2 rounded"
                                                disabled={currentPage === totalPages}
                                            >
                                                Next
                                            </button>
                                        </div>
                                        <div>
                                            <span className="mr-2">Visible Columns:</span>
                                            <label>
                                                <input
                                                    type="checkbox"
                                                    checked={visibleColumns.includes('id')}
                                                    onChange={() => toggleColumnVisibility('id')}
                                                /> ID
                                            </label>
                                            <label className="ml-2">
                                                <input
                                                    type="checkbox"
                                                    checked={visibleColumns.includes('name')}
                                                    onChange={() => toggleColumnVisibility('name')}
                                                /> Name
                                            </label>
                                            <label className="ml-2">
                                                <input
                                                    type="checkbox"
                                                    checked={visibleColumns.includes('age')}
                                                    onChange={() => toggleColumnVisibility('age')}
                                                /> Age
                                            </label>
                                            <label className="ml-2">
                                                <input
                                                    type="checkbox"
                                                    checked={visibleColumns.includes('email')}
                                                    onChange={() => toggleColumnVisibility('email')}
                                                /> Email
                                            </label>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>
                </div>

            </div>
        </div >
    )
}