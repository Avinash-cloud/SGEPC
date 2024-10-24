"use client"
// components/useSidebar.js
import { useState } from "react";

export const useSidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };

  const sliderfromathor = () => {
    setIsSidebarOpen(false);
  };

  const sidebarClass = isSidebarOpen
    ? 'hs-overlay-backdrop transition duration fixed inset-0 bg-gray-900 bg-opacity-50 dark:bg-opacity-80 dark:bg-neutral-900 lg:hidden'
    : 'hidden';

  return {
    isSidebarOpen,
    toggleSidebar,
    sliderfromathor,
    sidebarClass,
  };
};
