export default function DashboardContent() {
    return (
        <main>

            {/* @@include("partials/page-title.html", {"subtitle":"Menu","title":"Dashboard"}) */}

            <div className="grid xl:grid-cols-4 md:grid-cols-2 gap-6 mb-6">
                <div className="card group">
                    <div className="p-5 flex items-center justify-between">
                        <span>
                            <div className="text-slate-600 font-semibold block">Total Order</div>
                            <div className="text-2xl text-slate-800 font-semibold mt-2">₹1982</div>
                        </span>

                        <span
                            className="rounded-full flex justify-center items-center size-16 bg-primary/10 text-primary">
                            <i
                                className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">person</i>
                        </span>
                    </div>
                </div>

                <div className="card group">
                    <div className="p-5 flex items-center justify-between">
                        <span>
                            <div className="text-slate-600 font-semibold block">Today's Sales</div>
                            <div className="text-2xl text-slate-800 font-semibold mt-2">₹50</div>
                        </span>

                        <span
                            className="rounded-full flex justify-center items-center size-16 bg-success/10 text-success">
                            <i
                                className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">shopping_cart</i>
                        </span>
                    </div>
                </div>

                <div className="card group">
                    <div className="p-5 flex items-center justify-between">
                        <span>
                            <div className="text-slate-600 font-semibold block">Today's Revenue </div>
                            <div className="text-2xl text-slate-800 font-semibold mt-2">₹200</div>
                        </span>

                        <span className="rounded-full flex justify-center items-center size-16 bg-info/10 text-info">
                            <i
                                className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">favorite</i>
                        </span>
                    </div>
                </div>

                <div className="card group">
                    <div className="p-5 flex items-center justify-between">
                        <span>
                            <div className="text-slate-600 font-semibold block">Today's Visits </div>
                            <div className="text-2xl text-slate-800 font-semibold mt-2">7.2k</div>
                        </span>

                        <span
                            className="rounded-full flex justify-center items-center size-16 bg-danger/10 text-danger">
                            <i
                                className="material-symbols-rounded text-4xl transition-all group-hover:fill-1">visibility</i>
                        </span>
                    </div>
                </div>
            </div>

            <div className="grid xl:grid-cols-3 gap-6 mb-6">
                <div className="card">
                    <div className="card-header flex justify-between items-center">
                        <h4 className="card-title">Recent Buyers</h4>
                        <a href="#!" className="btn btn-sm bg-light !text-sm text-gray-800 ">Export</a>
                    </div>
                    <div className="card-body">
                        <div id="month-sales-chart" className="apex-charts"></div>

                        <div className="flex justify-evenly text-center w-full mt-6">
                            <div>
                                <div className="flex items-center">
                                    <span className="inline-block size-2.5 bg-primary text-sm rounded-full me-1"></span>
                                    <p className="text-sm text-gray-600">Products A</p>
                                </div>
                                <p className="font-medium text-gray-600 text-base mt-2 ms-4">₹125</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <span className="inline-block size-2.5 bg-success text-sm rounded-full me-1"></span>
                                    <p className="text-sm text-gray-600">Products B</p>
                                </div>
                                <p className="font-medium text-gray-600 text-base mt-2 ms-4">₹763</p>
                            </div>
                            <div>
                                <div className="flex items-center">
                                    <span className="inline-block size-2.5 bg-danger text-sm rounded-full me-1"></span>
                                    <p className="text-sm text-gray-600">Products C</p>
                                </div>
                                <p className="font-medium text-gray-600 text-base mt-2 ms-4">₹73</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="xl:col-span-2">
                    <div className="card">
                        <div className="card-header flex justify-between items-center">
                            <h4 className="card-title">Last Month Sales</h4>
                            <a href="#!" className="btn btn-sm bg-light !text-sm text-gray-800 ">Export</a>
                        </div>

                        <div className="card-body">
                            <div id="recent-buyers-chart" className="apex-charts"></div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="grid xl:grid-cols-2 gap-6">

                <div className="card overflow-hidden">
                    <div className="card-header flex justify-between items-center">
                        <h4 className="card-title">Top Member</h4>
                        <a href="#!" className="btn btn-sm bg-light !text-sm text-gray-800 ">Export</a>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle whitespace-nowrap">
                            <div className="overflow-hidden">
                                <table className="min-w-full">
                                    <thead className="bg-light/40 border-b border-gray-200">
                                        <tr>
                                            <th className="px-6 py-3 text-start">Company</th>
                                            <th className="px-6 py-3 text-start">Member</th>
                                            <th className="px-6 py-3 text-start">Product</th>
                                            <th className="px-6 py-3 text-start">Popularity</th>
                                            <th className="px-6 py-3 text-start">Amount</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">XYZ pvt ltd</td>
                                            <td className="px-6 py-3">Mr Lalit</td>
                                            <td className="px-6 py-3">
                                                <span
                                                    className="px-2 py-1 bg-success/10 text-success text-xs rounded">Cricket</span>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div
                                                    className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                                    <div className="progress-bar progress-bar-striped bg-success w-[85%]"
                                                        role="progressbar" aria-valuenow="85" aria-valuemin="20"
                                                        aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">₹ 1200.00</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">ABC Enterprises</td>
                                            <td className="px-6 py-3">Ms Priya</td>
                                            <td className="px-6 py-3">
                                                <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">Football</span>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                                    <div className="progress-bar progress-bar-striped bg-success w-[75%]" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">₹ 1500.00</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">XYZ Pvt Ltd</td>
                                            <td className="px-6 py-3">Mr Lalit</td>
                                            <td className="px-6 py-3">
                                                <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">Cricket</span>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                                    <div className="progress-bar progress-bar-striped bg-success w-[85%]" role="progressbar" aria-valuenow="85" aria-valuemin="20" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">₹ 1200.00</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">DEF Corp</td>
                                            <td className="px-6 py-3">Mr Rakesh</td>
                                            <td className="px-6 py-3">
                                                <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">Tennis</span>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                                    <div className="progress-bar progress-bar-striped bg-success w-[65%]" role="progressbar" aria-valuenow="65" aria-valuemin="0" aria-valuemax="100" ></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">₹ 1800.00</td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">GHI Industries</td>
                                            <td className="px-6 py-3">Ms Neha</td>
                                            <td className="px-6 py-3">
                                                <span className="px-2 py-1 bg-success/10 text-success text-xs rounded">Hockey</span>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="flex w-full h-1.5 bg-light rounded-full overflow-hidden">
                                                    <div className="progress-bar progress-bar-striped bg-success w-[65%]" role="progressbar" aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"></div>
                                                </div>
                                            </td>
                                            <td className="px-6 py-3">₹ 2100.00</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="card overflow-hidden">
                    <div className="card-header flex justify-between items-center">
                        <h4 className="card-title">Account Transactions</h4>
                        <a href="#!" className="btn btn-sm bg-light !text-sm text-gray-800 ">Export</a>
                    </div>

                    <div className="overflow-x-auto">
                        <div className="min-w-full inline-block align-middle whitespace-nowrap">
                            <div className="overflow-hidden">
                                <table className="min-w-full text-sm">
                                    <tbody>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">
                                                <div className="font-medium">4257 **** **** 7852</div>
                                                <div className="text-xs">11 April 2023</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">₹9.49</div>
                                                <div className="text-xs">Amount</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Visa</div>
                                                <div className="text-xs">Card</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Helen Warren</div>
                                                <div className="text-xs">Pay</div>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">
                                                <div className="font-medium">4427 **** **** 4568</div>
                                                <div className="text-xs">28 Jan 2023</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">₹254.00</div>
                                                <div className="text-xs">Amount</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Visa</div>
                                                <div className="text-xs">Card</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Kayla Lambie</div>
                                                <div className="text-xs">Pay</div>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">
                                                <div className="font-medium">4265 **** **** 0025</div>
                                                <div className="text-xs">08 Dec 2022</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">₹84.25</div>
                                                <div className="text-xs">Amount</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Master</div>
                                                <div className="text-xs">Card</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Hugo Lavarack</div>
                                                <div className="text-xs">Pay</div>
                                            </td>
                                        </tr>
                                        <tr className="border-b border-gray-200">
                                            <td className="px-6 py-3">
                                                <div className="font-medium">7845 **** **** 5214</div>
                                                <div className="text-xs">03 Dec 2022</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">₹85.24</div>
                                                <div className="text-xs">Amount</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Stripe</div>
                                                <div className="text-xs">Card</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Amber Scurry</div>
                                                <div className="text-xs">Pay</div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">4257 **** **** 7852</div>
                                                <div className="text-xs">12 Nov 2022</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">₹964.04</div>
                                                <div className="text-xs">Amount</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Maestro</div>
                                                <div className="text-xs">Card</div>
                                            </td>
                                            <td className="px-6 py-3">
                                                <div className="font-medium">Caitlyn Gibney</div>
                                                <div className="text-xs">Pay</div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    );
}
