'use client'
import { useState } from "react";
export default function Sidebar({ isSidebarOpen }) {


    const sidebarClass = isSidebarOpen
    ? 'hs-overlay fixed inset-y-0 start-0 z-60 w-sidenav min-w-sidenav -translate-x-full transform overflow-y-auto bg-default-900 transition-all duration-300 hs-overlay-open:translate-x-0 lg:bottom-0 lg:end-auto lg:z-30 lg:block lg:translate-x-0 rtl:translate-x-full rtl:hs-overlay-open:translate-x-0 rtl:lg:translate-x-0 print:hidden [--body-scroll:true] [--overlay-backdrop:true] lg:[--overlay-backdrop:false] open opened'
    : 'hs-overlay fixed inset-y-0 start-0 z-60 w-sidenav min-w-sidenav -translate-x-full transform overflow-y-auto bg-default-900 transition-all duration-300 hs-overlay-open:translate-x-0 lg:bottom-0 lg:end-auto lg:z-30 lg:block lg:translate-x-0 rtl:translate-x-full rtl:hs-overlay-open:translate-x-0 rtl:lg:translate-x-0 print:hidden [--body-scroll:true] [--overlay-backdrop:true] lg:[--overlay-backdrop:false] hidden';


    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);

    const toggleAccordion = () => {
        setIsOpen(!isOpen);
      };

      const toggleAccordion2 = () => {
        setIsOpen2(!isOpen);
      };

    return (

        <aside id="app-menu"
        className={sidebarClass}>
            <div className="sticky top-0 flex h-16 items-center justify-center px-6">
                <a href="/">
                    <img src="assets/images/logo-light.png" alt="logo" className="flex h-10" />
                </a>
            </div>

            <div className="h-[calc(100%-64px)] p-4" data-simplebar>
                <ul className="admin-menu hs-accordion-group flex w-full flex-col gap-1.5">
                    <li className="menu-item">
                        <a className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5"
                            href="/">
                            <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">home</i>
                            Dashboard
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="/event"
                            className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-default-100/5">
                            <i
                                className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">article</i>
                            <span className="menu-text"> Event </span>
                        </a>
                    </li>

                    <li className="px-5 py-2 text-sm font-medium text-default-600">Member's work</li>

                    <li className="menu-item hs-accordion">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleAccordion();
                            }}
                            className={`hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 ${isOpen ? "bg-primary/10 text-primary" : ""
                                }`}
                        >
                            <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">supervisor_account</i>
                            <span className="menu-text">Member's</span>
                            <span
                                className={`i-tabler-chevron-right ms-auto text-sm transition-transform duration-300 ${isOpen ? "rotate-90" : ""
                                    }`}
                            ></span>
                        </a>

                        <div
                            className={`hs-accordion-content w-full overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[1000px]" : "max-h-0"
                                }`}
                        >
                            <ul className="mt-2 space-y-2">
                                <li className="menu-item">
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                                        href="members"
                                    >
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        Member List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                                        href="addmembers"
                                    >
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        Add member
                                    </a>
                                </li>
                                {/* Add other menu items */}
                            </ul>
                        </div>
                    </li>


                    <li className="menu-item hs-accordion">
                        <a href="#"
                            className="hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary">
                            <i
                                className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">format_ink_highlighter</i>
                            <span className="menu-text"> Editor </span>
                            <span
                                className="i-tabler-chevron-right ms-auto text-sm transition-all hs-accordion-active:rotate-90"></span>
                        </a>

                        <div className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                            <ul className="mt-2 space-y-2">
                                <li className="menu-item">
                                    <a href="forms-inputs.html"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Inputs</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-check-radio.html"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Checkbox & Radio</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-masks.html"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Input Masks</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-editor.html"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Editor</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-validation.html"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Validation</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="forms-layout.html"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Form Layout</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    {/* <li className="menu-item hs-accordion">
                        <a  href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleAccordion();
                            }}
                            className={`hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 ${isOpen ? "bg-primary/10 text-primary" : ""
                                }`}>
                            <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">event</i>
                            <span className="menu-text"> Event </span>
                        </a>
                    </li> */}

                    <li className="menu-item hs-accordion">
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault();
                                toggleAccordion2();
                            }}
                            className={`hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 ${isOpen2 ? "bg-primary/10 text-primary" : ""
                                }`}
                        >
                            <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">event</i>
                            <span className="menu-text"> Event's</span>
                            <span
                                className={`i-tabler-chevron-right ms-auto text-sm transition-transform duration-300 ${isOpen2 ? "rotate-90" : ""
                                    }`}
                            ></span>
                        </a>

                        <div
                            className={`hs-accordion-content w-full overflow-hidden transition-all duration-300 ${isOpen2 ? "max-h-[1000px]" : "max-h-0"
                                }`}
                        >
                            <ul className="mt-2 space-y-2">
                                <li className="menu-item">
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                                        href="event"
                                    >
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        Event List
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5"
                                        href="addevent"
                                    >
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        Add Event
                                    </a>
                                </li>
                                {/* Add other menu items */}
                            </ul>
                        </div>
                    </li>

                    {/* <li className="menu-item">
                        <a href="tables-basic.html"
                            className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary">
                            <i
                                className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">table_chart</i>
                            <span className="menu-text"> Tables </span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="charts-apex.html"
                            className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary">
                            <i
                                className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">leaderboard</i>
                            <span className="menu-text"> Chart </span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a href="icons.html"
                            className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5">
                            <i
                                className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">Palette</i>
                            <span className="menu-text"> Icons </span>
                        </a>
                    </li>

                    <li className="menu-item">
                        <a className="group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5"
                            href="pages-blank.html">
                            <i
                                className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">article</i>
                            Blank Pages
                        </a>
                    </li>

                    <li className="menu-item hs-accordion">
                        <a href="#"
                            className="hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary">
                            <i className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">share</i>
                            <span className="menu-text"> Level </span>
                            <span
                                className="i-tabler-chevron-right ms-auto text-sm transition-all hs-accordion-active:rotate-90"></span>
                        </a>

                        <div id="sidenavLevel"
                            className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300">
                            <ul className="mt-2 space-y-2">
                                <li className="menu-item">
                                    <a href="javascript: void(0)"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Item 1</span>
                                    </a>
                                </li>
                                <li className="menu-item">
                                    <a href="javascript: void(0)"
                                        className="flex items-center gap-x-3.5 rounded-md px-5 py-2 text-sm font-medium text-default-300 hover:bg-default-100/5">
                                        <i className="i-tabler-circle-filled scale-[.25] text-lg opacity-75"></i>
                                        <span className="menu-text">Item 2</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>

                    <li className="menu-item">
                        <a href="#"
                            className="hs-accordion-toggle group flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm font-medium text-default-300 transition-all hover:bg-default-100/5 hs-accordion-active:bg-primary/10 hs-accordion-active:text-primary">
                            <i
                                className="material-symbols-rounded font-light text-2xl transition-all group-hover:fill-1">verified</i>
                            <span className="menu-text"> Badge Items </span>
                            <span
                                className="ms-auto inline-flex items-center gap-x-1.5 py-0.5 px-2 rounded-md font-semibold text-xs bg-gray-800 text-white">Hot</span>
                        </a>
                    </li> */}
                </ul>
            </div>
        </aside>

    );
}
