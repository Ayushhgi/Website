import React, { useState, useRef, useEffect } from "react";

import Admission from "../NavbarComponent/Admission"; // Assuming you have an Admission component

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);
  const notificationIconRef = useRef(null);

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (activeDropdown) setActiveDropdown(null);
  };

  const toggleSearch = () => {
    setShowSearch(!showSearch);
    if (!showSearch) {
      setSearchQuery("");
    }
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
    closeDropdown();
  };


  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        closeDropdown();
      }

      setShowNotifications(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
 
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
      title: "Life at LNCT",
      name: "lifeAtLnct",
      items: [
        "Student Activities",
        "Clubs & Societies",
        "Sports",
        "Hostels",
        "Cultural Events",
        "Alumni Network",
      ],
    },
    {
      title: "Ongoing Events",
      name: "events",
      customComponent: (
        <div>
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Current Events</h3>
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
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <div className="font-medium">{event.title}</div>
              <div className="text-xs text-gray-500">{event.date}</div>
            </a>
          ))}
          <div className="px-4 py-2 border-t border-gray-200">
            <a
              href="#"
              className="text-xs text-indigo-600 hover:text-indigo-800"
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
    <header className="text-gray-600 body-font border-b bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a className="flex title-font font-bold items-center text-gray-900 text-2xl sm:text-3xl lg:text-4xl">
              LNCT
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav
            className="hidden lg:flex items-center space-x-8"
            ref={dropdownRef}
          >
            {navItems.map(
              ({ title, name, items, customComponent, width = "w-56" }) => (
                <div className="relative" key={name}>
                  <button
                    onClick={() => toggleDropdown(name)}
                    className="hover:text-gray-900 flex items-center focus:outline-none py-2 transition-colors duration-200"
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
                  {activeDropdown === name && (
                    <div
                      className={`absolute top-full left-0 mt-2 ${width} bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto`}
                    >
                      {customComponent ? (
                        customComponent
                      ) : (
                        <div className="py-2">
                          {items?.map((item, i) => (
                            <a
                              key={i}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
                            >
                              {item}
                            </a>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>
              )
            )}
          </nav>

          {/* Right side actions */}
          <div  className="flex items-center space-x-2">
            {/* Notification Bell (Desktop) */}
            <div className="hidden lg:block relative">
              <button
                onClick={toggleNotifications}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none relative"
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

              {/* Notification dropdown */}
              {showNotifications && (
                <div ref={dropdownRef} className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">
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
                        className={`block px-4 py-3 text-sm hover:bg-gray-50 transition-colors duration-150 ${
                          notification.unread
                            ? "bg-blue-50 border-l-4 border-blue-500"
                            : ""
                        }`}
                      >
                        <div className="font-medium text-gray-800">
                          {notification.title}
                        </div>
                        <div className="text-gray-600 mt-1">
                          {notification.message}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {notification.time}
                        </div>
                      </a>
                    ))}
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200">
                    <a
                      href="#"
                      className="text-xs text-indigo-600 hover:text-indigo-800"
                    >
                      View All Notifications →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Notification Toggle Button (Mobile/Tablet) */}
            <button
              onClick={toggleNotifications}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none relative"
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
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">
                3
              </span>
            </button>
            {/* Search Toggle Button (Mobile/Tablet) */}
            <button
              onClick={toggleSearch}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
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
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>

            {/* Desktop Search */}
            <div className="hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search courses, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-64 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>

            {/* Login Button (Desktop) */}
            <div className="hidden lg:block">
              <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200">
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
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

        {/* Mobile Search Bar */}
        {showSearch && (
          <div className="lg:hidden pb-4 border-t border-gray-200 pt-4">
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Search courses, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="flex-1 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="ml-2 p-2 text-gray-400 hover:text-gray-600"
                >
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              )}
            </div>
          </div>
        )}

        {/* Mobile Notifications */}
        {showNotifications && (
          <div id="notification" className="lg:hidden border-t border-gray-200 py-4">
            <div className="px-4 py-2">
              <h3 className="font-semibold text-gray-800 mb-3">
                Notifications
              </h3>
              <div className="space-y-3">
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
                    className={`block p-3 rounded-lg text-sm hover:bg-gray-50 transition-colors duration-150 ${
                      notification.unread
                        ? "bg-blue-50 border-l-4 border-blue-500"
                        : "bg-gray-50"
                    }`}
                  >
                    <div className="font-medium text-gray-800">
                      {notification.title}
                    </div>
                    <div className="text-gray-600 mt-1">
                      {notification.message}
                    </div>
                    <div className="text-xs text-gray-500 mt-1">
                      {notification.time}
                    </div>
                  </a>
                ))}
              </div>
              <div className="mt-3 pt-3 border-t border-gray-200">
                <a
                  href="#"
                  className="text-sm text-indigo-600 hover:text-indigo-800"
                >
                  View All Notifications →
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 py-4">
            <nav className="space-y-2">
              {navItems.map(({ title, name, items, customComponent }) => (
                <div key={name}>
                  <button
                    onClick={() => toggleDropdown(name)}
                    className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 hover:text-gray-900 hover:bg-gray-50 rounded-lg transition-colors duration-150"
                  >
                    <span className="font-medium">{title}</span>
                    <svg
                      className={`w-4 h-4 transition-transform duration-200 ${
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
                    <div className="mt-2 ml-4 space-y-1">
                      {customComponent ? (
                        <div className="bg-gray-50 rounded-lg p-2">
                          {customComponent}
                        </div>
                      ) : (
                        items?.map((item, i) => (
                          <a
                            key={i}
                            href="#"
                            className="block px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors duration-150"
                          >
                            {item}
                          </a>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Mobile Login Button */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <button className="w-full bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition-colors duration-200 font-medium">
                Login
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
