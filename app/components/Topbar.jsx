

export default function Topbar({ toggleSidebar }) {
    
    return (
        <header className="app-header">
            <div className="h-16 flex items-center px-5 gap-4 bg-white lg:rounded-t-xl border-b border-default-100">

                <a href="index.html" className="md:hidden flex">
                    <img src="assets/images/logo-sm.png" className="h-6" alt="Small logo" />
                </a>


                <button id="button-toggle-menu" className="text-default-500 hover:text-default-600 p-2 rounded-full cursor-pointer"
                    data-hs-overlay="#app-menu" aria-label="Toggle navigation"  onClick={toggleSidebar}>
                    <i className="i-tabler-menu-2 text-2xl"></i>
                </button>


                <div className="ms-auto hs-dropdown relative inline-flex [--placement:bottom-right]">
                    <button type="button" className="hs-dropdown-toggle inline-flex items-center">
                        <img src="assets/images/flags/india-flag.jpg" alt="user-image" className="h-4 w-6" />
                    </button>
                </div>


                <div className="md:flex hidden">
                    <button data-toggle="fullscreen" type="button" className="nav-link p-2">
                        <span className="sr-only">Fullscreen Mode</span>
                        <span className="flex items-center justify-center size-6">
                            <i className="i-tabler-maximize text-2xl flex group-[-fullscreen]:hidden"></i>
                            <i className="i-tabler-minimize text-2xl hidden group-[-fullscreen]:flex"></i>
                        </span>
                    </button>
                </div>


                <div className="relative">
                    <div className="hs-dropdown relative inline-flex [--placement:bottom-right] open">
                        <button type="button" className="hs-dropdown-toggle nav-link flex items-center gap-2">
                            <img src="assets/images/users/avtar.png" alt="user-image" className="rounded-full h-10" />
                            <i className="i-tabler-chevron-down text-sm ms-2"></i>
                        </button>
                        <div
                            className="hs-dropdown-menu duration mt-2 min-w-48 rounded-lg border border-default-200 bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 hidden">
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                                href="#">
                                Profile
                            </a>
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                                href="#">
                                Feed
                            </a>
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                                href="#">
                                Analytics
                            </a>
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                                href="#">
                                Settings
                            </a>
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                                href="#">
                                Support
                            </a>
                            <hr className="my-2" />
                            <a className="flex items-center py-2 px-3 rounded-md text-sm text-default-800 hover:bg-gray-100"
                                href="#">
                                Log Out
                            </a>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}