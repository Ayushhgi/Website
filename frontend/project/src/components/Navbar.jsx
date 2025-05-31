import React, { useState, useRef, useEffect } from "react";

import Admission from "../NavbarComponent/Admission";

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lockedDropdown, setLockedDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false); // Dark mode state
  const dropdownRef = useRef(null);

  // Apply/remove dark class on <html> when darkMode changes
  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  const toggleDropdown = (dropdownName) => {
    if (lockedDropdown === dropdownName) {
      setLockedDropdown(null);
      setActiveDropdown(null);
      return;
    }
    if (activeDropdown === dropdownName) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown(dropdownName);
    }
  };

  const handleDropdownClick = (name) => {
    if (lockedDropdown === name) {
      setLockedDropdown(null);
      setActiveDropdown(null);
    } else {
      setLockedDropdown(name);
      setActiveDropdown(name);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
        setLockedDropdown(null);
        setShowNotifications(false);
        setShowSearch(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setLockedDropdown(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) setSearchQuery("");
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
  };

  const toggleDarkMode = () => {
    setDarkMode((prev) => !prev);
  };

  const navItems = [
    {
      title: "Academics",
      name: "academics",
      items: ["Programs", "Courses", "Faculty", "Research"],
    },
    {
      title: "Admissions",
      name: "admissions",
      customComponent: <Admission />,
      width: "w-[32rem]",
    },
    {
      title: "About Colleges",
      name: "about",
      items: [
        "Our Story",
        "Mission & Vision",
        "Leadership",
        "Campus Tour",
        "Achievements",
        "Accreditations",
      ],
    },
    {
      title: "Ongoing Events",
      name: "events",
      customComponent: (
        <div>
          <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
            <h3 className="font-semibold text-gray-800 dark:text-gray-200">
              Current Events
            </h3>
          </div>
          {[
            { title: "Tech Fest 2025", date: "May 25-30, 2025" },
            { title: "Cultural Week", date: "June 1-7, 2025" },
            { title: "Sports Championship", date: "June 10-15, 2025" },
            { title: "Job Fair 2025", date: "June 20-22, 2025" },
          ].map((event, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
            >
              <div className="font-medium">{event.title}</div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                {event.date}
              </div>
            </a>
          ))}
          <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
            <a
              href="#"
              className="text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-600"
            >
              View All Events →
            </a>
          </div>
        </div>
      ),
      width: "w-64",
    },
    {
      title: "Contact",
      name: "contact",
      items: [
        "📞 +91-761-123-4567",
        "✉️ info@lnct.ac.in",
        "📍 Campus Location",
        "💬 Live Chat Support",
        "📝 Contact Form",
      ],
    },
  ];

  return (
    <header className="text-gray-600 dark:text-gray-300 body-font bg-white dark:bg-gray-900 sticky top-0 z-50 border-b border-black dark:border-gray-700 rounded-b-lg shadow-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a className="flex title-font font-bold items-center text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl">
              LNCT
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            ref={dropdownRef}
          >
            {navItems.map(({ title, name, items, customComponent, width = "w-56" }) => (
              <div
                className="relative"
                key={name}
                onMouseEnter={() => {
                  if (!lockedDropdown) setActiveDropdown(name);
                }}
                onMouseLeave={() => {
                  if (!lockedDropdown) setActiveDropdown(null);
                }}
              >
                <button
                  className="hover:text-gray-900 dark:hover:text-white flex items-center focus:outline-none py-2 transition-colors duration-200"
                  onClick={() => handleDropdownClick(name)}
                  aria-expanded={activeDropdown === name}
                >
                  {title}
                  <svg
                    className={`w-4 h-4 ml-1 transition-transform duration-200 ${
                      activeDropdown === name ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {(activeDropdown === name || lockedDropdown === name) && (
                  <div
                    className={`absolute top-full left-0 mt-2 ${width} bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-y-auto`}
                  >
                    {customComponent ? (
                      customComponent
                    ) : (
                      <div className="py-2">
                        {items?.map((item, i) => (
                          <a
                            key={i}
                            href="#"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-150"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side actions */}
          <div className="flex items-center space-x-2">
            {/* Notification Bell (Desktop) */}
            <div className="hidden lg:block relative">
              <button
                onClick={toggleNotifications}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none relative"
                aria-label="Notifications"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 17h5l-3.5-3.5a7 7 0 11-1.414 1.414L15 17zM9 12a3 3 0 106 0c0 7-3 9-3 9s-3-2-3-9z"
                  />
                </svg>
                {/* Notification badge */}
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                  3
                </span>
              </button>

              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 z-50 max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 border-b border-gray-200 dark:border-gray-700">
                    <h3 className="font-semibold text-gray-800 dark:text-gray-200">
                      Notifications
                    </h3>
                  </div>
                  <div className="py-2">
                    {[
                      {
                        title: "New Course Available",
                        message:
                          "Data Science Fundamentals course is now open for registration",
                        time: "2 hours ago",
                        unread: true,
                      },
                      {
                        title: "Exam Schedule Updated",
                        message: "Mid-term examination dates have been revised",
                        time: "1 day ago",
                        unread: true,
                      },
                      {
                        title: "Library Hours Extended",
                        message:
                          "Library will remain open until 10 PM during exam week",
                        time: "2 days ago",
                        unread: false,
                      },
                    ].map((notification, i) => (
                      <a
                        key={i}
                        href="#"
                        className={`block px-4 py-3 text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                          notification.unread
                            ? "bg-blue-50 border-l-4 border-blue-500 dark:bg-blue-900"
                            : ""
                        }`}
                      >
                        <div className="font-medium text-gray-800 dark:text-gray-200">
                          {notification.title}
                        </div>
                        <div className="text-gray-600 dark:text-gray-300 mt-1">
                          {notification.message}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {notification.time}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200 dark:border-gray-700">
                    <a
                      href="#"
                      className="text-xs text-indigo-600 hover:text-indigo-800 dark:text-indigo-400 dark:hover:text-indigo-600"
                    >
                      View All Notifications →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Search Input (Desktop) */}
            <div className="hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search courses, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-64 px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 p-1 text-gray-500 dark:text-gray-300 hover:text-gray-700 dark:hover:text-white focus:outline-none"
                  aria-label="Clear search"
                >
                  ×
                </button>
              )}
            </div>

            {/* Dark Mode Toggle Button */}
            <button
              onClick={toggleDarkMode}
              className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle Dark Mode"
              title="Toggle Dark Mode"
            >
              {darkMode ? (
                // Sun icon for light mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 3v1m0 16v1m8.66-10h-1M4.34 12h-1m15.07 5.07l-.7-.7M6.34 6.34l-.7-.7m12.02 12.02l-.7-.7M6.34 17.66l-.7-.7M12 7a5 5 0 100 10 5 5 0 000-10z"
                  />
                </svg>
              ) : (
                // Moon icon for dark mode
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 12.79A9 9 0 1111.21 3a7 7 0 009.79 9.79z"
                  />
                </svg>
              )}
            </button>
            {/* Right side actions */}
<div className="flex items-center space-x-2">
  
  {/* Mobile Search Toggle Button (visible only on small screens) */}
  <button
    onClick={toggleSearch}
    className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
    aria-label="Toggle Search"
    title="Search"
  >
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </svg>
  </button>

  {/* Notification Bell (Desktop) */}
  <div className="hidden lg:block relative">
    {/* ...existing notification bell code... */}
  </div>

  {/* Search Input (Desktop) */}
  <div className="hidden lg:flex items-center">
    {/* ...existing desktop search input... */}
  </div>

  {/* Dark Mode Toggle Button */}
  <button
    onClick={toggleDarkMode}
    className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
    aria-label="Toggle Dark Mode"
    title="Toggle Dark Mode"
  >
    {/* ...dark mode icon... */}
  </button>

  {/* Mobile menu toggle button */}
  <button
    onClick={toggleMobileMenu}
    className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
    aria-label="Toggle menu"
  >
    {/* ...existing hamburger/close svg... */}
  </button>
</div>


            {/* Mobile menu toggle button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Search */}
        {showSearch && (
          <div className="lg:hidden px-4 pb-4">
            <input
              type="text"
              placeholder="Search courses, programs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600"
            />
          </div>
        )}

        {/* Mobile Navigation */}
        <nav
          className={`lg:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 ${
            isMobileMenuOpen ? "block" : "hidden"
          }`}
        >
          {navItems.map(({ title, name, items, customComponent }) => (
            <div key={name} className="border-b border-gray-200 dark:border-gray-700">
              <button
                className="w-full flex justify-between items-center px-4 py-3 text-gray-700 dark:text-gray-300 font-medium focus:outline-none"
                onClick={() => toggleDropdown(name)}
              >
                {title}
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    activeDropdown === name ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeDropdown === name && (
                <div className="bg-gray-50 dark:bg-gray-800 px-4 py-2">
                  {customComponent
                    ? customComponent
                    : items?.map((item, i) => (
                        <a
                          key={i}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                        >
                          {item}
                        </a>
                      ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
