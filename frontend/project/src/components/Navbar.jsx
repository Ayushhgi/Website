import React, { useState } from 'react'
import Admission from '../NavbarComponent/Admission'

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null)
  const [showNotifications, setShowNotifications] = useState(false)
  const [showSearch, setShowSearch] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')

  const toggleDropdown = (dropdownName) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName)
  }

  const closeDropdown = () => {
    setActiveDropdown(null)
  }

  const toggleNotifications = () => {
    setShowNotifications(!showNotifications)
  }

  const toggleSearch = () => {
    setShowSearch(!showSearch)
    if (showSearch) {
      setSearchQuery('')
    }
  }

  return (
    <header className="text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
          <span className="ml-3 text-4xl">LNCT</span>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400 flex flex-wrap items-center text-base justify-center">
          
          {/* Academics Dropdown */}
          <div className="relative mr-5">
            <button 
              onClick={() => toggleDropdown('academics')}
              className="hover:text-gray-900 flex items-center focus:outline-none"
            >
              Academics
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'academics' && (
              <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Programs</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Courses</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Faculty</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Research</a>
              </div>
            )}
          </div>

          {/* Admissions Dropdown */}
          <div className="relative mr-5">
            <button 
              onClick={() => toggleDropdown('admissions')}
              className="hover:text-gray-900 flex items-center focus:outline-none"
            >
              Admissions
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'admissions' && (
              <div className="absolute top-full left-0 mt-2 w-[32rem] bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-[28rem] overflow-y-auto">
                <div className="p-6">
                  <Admission/>
                </div>
              </div>
            )}
          </div>

          {/* About Colleges Dropdown */}
          <div className="relative mr-5">
            <button 
              onClick={() => toggleDropdown('about')}
              className="hover:text-gray-900 flex items-center focus:outline-none"
            >
              About Colleges
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'about' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Our Story</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Mission & Vision</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Leadership</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Campus Tour</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Achievements</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Accreditations</a>
              </div>
            )}
          </div>

          {/* Life at LNCT Dropdown */}
          <div className="relative mr-5">
            <button 
              onClick={() => toggleDropdown('lifeAtLnct')}
              className="hover:text-gray-900 flex items-center focus:outline-none"
            >
              Life at LNCT
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'lifeAtLnct' && (
              <div className="absolute top-full left-0 mt-2 w-52 bg-white rounded-md shadow-lg z-50">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Student Activities</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Clubs & Societies</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Sports</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Hostels</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Cultural Events</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Alumni Network</a>
              </div>
            )}
          </div>

          {/* Ongoing Events Dropdown */}
          <div className="relative mr-5">
            <button 
              onClick={() => toggleDropdown('events')}
              className="hover:text-gray-900 flex items-center focus:outline-none"
            >
              Ongoing Events
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'events' && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg z-50 max-h-80 overflow-y-auto">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Current Events</h3>
                </div>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="font-medium">Tech Fest 2025</div>
                  <div className="text-xs text-gray-500">May 25-30, 2025</div>
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="font-medium">Cultural Week</div>
                  <div className="text-xs text-gray-500">June 1-7, 2025</div>
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="font-medium">Sports Championship</div>
                  <div className="text-xs text-gray-500">June 10-15, 2025</div>
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="font-medium">Job Fair 2025</div>
                  <div className="text-xs text-gray-500">June 20-22, 2025</div>
                </a>
                <div className="px-4 py-2 border-t border-gray-200">
                  <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">View All Events →</a>
                </div>
              </div>
            )}
          </div>

          {/* Contact Dropdown */}
          <div className="relative mr-5">
            <button 
              onClick={() => toggleDropdown('contact')}
              className="hover:text-gray-900 flex items-center focus:outline-none"
            >
              Contact
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === 'contact' && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-md shadow-lg z-50">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Get in Touch</h3>
                </div>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📞 +91-761-123-4567
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  ✉️ info@lnct.ac.in
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📍 Campus Location
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  💬 Live Chat Support
                </a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  📝 Contact Form
                </a>
              </div>
            )}
          </div>

        </nav>

        {/* Search Section - Between nav and right buttons */}
        <div className="flex items-center mr-4">
          {/* Search Input - Shows when search is active */}
          {showSearch && (
            <div className="flex items-center mr-3 ">
              <input
                type="text"
                placeholder="Search courses, programs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 px-3 py-2 text-sm border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
                autoFocus
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="ml-2 p-1 text-gray-400 hover:text-gray-600 "
                >
                  <svg className="w-4 h-4 " fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              )}
            </div>
          )}
          
          {/* Search Button */}
          <button
            // onClick={toggleSearch}
            className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-md transition-colors focus:outline-none"
            title="Search"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>

        {/* Right side buttons */}
        <div className="flex items-center space-x-3">
          {/* Notifications Button */}
          <div className="relative">
            <button 
              onClick={toggleNotifications}
              className="relative p-2 text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {/* Bell Icon */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
              </svg>
              {/* Notification Badge */}
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">3</span>
            </button>
            
            {/* Notifications Dropdown */}
            {showNotifications && (
              <div className="absolute top-full right-0 mt-2 w-80 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 max-h-96 overflow-y-auto">
                <div className="px-4 py-3 border-b border-gray-200">
                  <h3 className="font-semibold text-gray-800">Notifications</h3>
                </div>
                <div className="divide-y divide-gray-100">
                  <div className="px-4 py-3 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3">
                        <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">New admission batch starting June 1st</p>
                        <p className="text-xs text-gray-500 mt-1">2 hours ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className="bg-green-100 rounded-full p-1 mr-3">
                        <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">Tech Fest registrations are now open</p>
                        <p className="text-xs text-gray-500 mt-1">1 day ago</p>
                      </div>
                    </div>
                  </div>
                  <div className="px-4 py-3 hover:bg-gray-50">
                    <div className="flex items-start">
                      <div className="bg-yellow-100 rounded-full p-1 mr-3">
                        <svg className="w-4 h-4 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm text-gray-800">Exam schedule updated for final semester</p>
                        <p className="text-xs text-gray-500 mt-1">3 days ago</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="px-4 py-2 border-t border-gray-200">
                  <a href="#" className="text-xs text-indigo-600 hover:text-indigo-800">View All Notifications →</a>
                </div>
              </div>
            )}
          </div>

          {/* Admin Login Button */}
          <button className="inline-flex items-center bg-indigo-600 text-white border-0 py-2 px-4 focus:outline-none hover:bg-indigo-700 rounded text-sm font-medium transition-colors">
            Admin Login
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Overlay to close dropdowns when clicking outside */}
      {(activeDropdown || showNotifications) && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => {
            closeDropdown()
            setShowNotifications(false)
          }}
        />
      )}
    </header>
  )
}

export default Navbar