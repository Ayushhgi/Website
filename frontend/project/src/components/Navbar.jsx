import React, { useState, useRef, useEffect } from "react";

// Placeholder Admission component
const Admission = () => (
  <div className="p-4">
    <h3 className="font-semibold text-gray-800 mb-2">Admission Info</h3>
    <p>Details about admissions go here.</p>
  </div>
);

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [lockedDropdown, setLockedDropdown] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setActiveDropdown(null);
        setLockedDropdown(null);
        setShowNotifications(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDropdownClick = (name) => {
    if (lockedDropdown === name) {
      setLockedDropdown(null);
      setActiveDropdown(null);
    } else {
      setLockedDropdown(name);
      setActiveDropdown(name);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setActiveDropdown(null);
    setLockedDropdown(null);
  };

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications);
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
      title: "Department",
      name: "department",
      items: [
        {
          label: "Engineering",
          children: ["Computer Science", "Mechanical", "Civil", "Electrical"],
        },
        {
          label: "Management",
          children: ["MBA", "BBA"],
        },
        {
          label: "Pharmacy",
          children: ["B.Pharm", "M.Pharm"],
        },
        {
          label: "Medical",
          children: ["MBBS", "Nursing"],
        },
      ],
      isNested: true,
      width: "w-64",
    },
    {
      title: "Placement",
      name: "placement",
      items: [
        "Placement Cell",
        "Recruiters",
        "Placement Stats",
        "Internship Programs",
        "Alumni Success",
      ],
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
          <div className="px-4 py-3 border-b border-gray-200">
            <h3 className="font-semibold text-gray-800">Current Events</h3>
          </div>
          {[...Array(4)].map((_, i) => (
            <a
              key={i}
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              <div className="font-medium">Event Title {i + 1}</div>
              <div className="text-xs text-gray-500">Event Date</div>
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
    <header className="text-gray body-font sticky top-0 z-50 border-b border-black rounded-b-lg shadow-md shadow-inner bg-[rgb(217, 210, 210)]">
<div className="w-full relative">

        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <a className="flex title-font font-bold items-center text-gray-900 text-2xl sm:text-3xl lg:text-4xl" href="#">
              <img
  src="/images/lnctlogo.png"
  alt="LNCT Logo"
  className="h-12 w-auto object-contain"
/>

            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8" ref={dropdownRef}>
            {navItems.map(({ title, name, items, customComponent, width = "w-56" }) => (
              <div
                className="relative"
                key={name}
                onMouseEnter={() => !lockedDropdown && setActiveDropdown(name)}
                onMouseLeave={() => !lockedDropdown && setActiveDropdown(null)}
              >
                <button
                  onClick={() => handleDropdownClick(name)}
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {(activeDropdown === name || lockedDropdown === name) && (
                  <div className={`absolute top-full left-0 mt-2 ${width} bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto`}>
                    {customComponent || (
  <div className="py-2 px-2">
    {Array.isArray(items) &&
      items.map((item, i) =>
        typeof item === "string" ? (
          <a
            key={i}
            href="#"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-150"
          >
            {item}
          </a>
        ) : (
          <div key={i} className="mb-2">
            <div className="px-4 py-2 font-semibold text-gray-800 bg-gray-100 rounded">{item.label}</div>
            {item.children?.map((child, j) => (
              <a
                key={j}
                href="#"
                className="block px-6 py-1 text-sm text-gray-700 hover:bg-gray-50 transition"
              >
                {child}
              </a>
            ))}
          </div>
        )
      )}
  </div>
)}

                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Side Actions */}
          <div className="flex items-center space-x-2">
            {/* Notification Bell */}
            <div className="hidden lg:block relative">
              <button
                onClick={toggleNotifications}
                className="p-2 text-gray-600 hover:text-gray-900 focus:outline-none relative"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-3.5-3.5a7 7 0 11-1.414 1.414L15 17zM9 12a3 3 0 106 0c0 7-3 9-3 9s-3-2-3-9z" />
                </svg>
                <span className="absolute -top-1 -right-1 h-4 w-4 bg-red-500 text-white text-xs rounded-full flex items-center justify-center">3</span>
              </button>
              {showNotifications && (
                <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-lg border border-gray-200 z-50 max-h-96 overflow-y-auto">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <h3 className="font-semibold text-gray-800">Notifications</h3>
                  </div>
                  <div className="py-2">
                    <a href="#" className="block px-4 py-3 text-sm hover:bg-gray-50">
                      <div className="font-medium text-gray-800">New Course Available</div>
                      <div className="text-gray-600 mt-1">Data Science course now open</div>
                      <div className="text-xs text-gray-500 mt-1">2 hrs ago</div>
                    </a>
                  </div>
                  <div className="px-4 py-2 border-t border-gray-200">
                    <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">View All Notifications →</a>
                  </div>
                </div>
              )}
            </div>

            {/* Search Bar (Desktop) */}
            <div className="hidden lg:flex items-center">
              <input
                type="text"
                placeholder="Search courses, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 xl:w-64 px-3 py-2 text-sm border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <button
                onClick={() => alert(`Searching for: ${searchQuery}`)}
                className="ml-2 bg-indigo-600 text-white px-3 py-2 rounded-lg hover:bg-indigo-700 transition-colors duration-200"
              >
                Search
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden flex items-center p-2 rounded-md text-gray-600 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <nav className="lg:hidden bg-white border-t border-gray-200 shadow-md rounded-b-lg">
            <ul className="flex flex-col divide-y divide-gray-200">
              {navItems.map(({ title, name, items, customComponent }) => (
                <li key={name} className="relative">
                  <button
                    onClick={() =>
                      activeDropdown === name ? setActiveDropdown(null) : setActiveDropdown(name)
                    }
                    className="w-full text-left px-4 py-3 flex justify-between items-center text-gray-700 hover:bg-gray-100 focus:outline-none"
                  >
                    {title}
                    <svg
                      className={`w-4 h-4 ml-2 transition-transform duration-200 ${
                        activeDropdown === name ? "rotate-180" : ""
                      }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                  {activeDropdown === name && (
                    <div className="bg-gray-50">
                      {customComponent || (
                        <ul className="px-6 py-2">
                          {items?.map((item, i) => (
                            <li key={i}>
                              <a
                                href="#"
                                className="block py-2 text-gray-600 hover:text-gray-900"
                              >
                                {item}
                              </a>
                            </li>
                          ))}
                        </ul>
                      )}
                      {customComponent && <div className="px-4 py-3">{customComponent}</div>}
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
