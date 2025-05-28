import React from 'react'

const Admission = () => {
  return (
    <>
      <section className="bg-gradient-to-br from-slate-50 via-white to-blue-50 min-h-screen">
        <div className="container px-4 py-12 mx-auto max-w-4xl">
          {/* Header with enhanced styling */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl mb-6 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
              </svg>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent mb-4">
              Admissions 2025
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Shape your future at LNCT - Where innovation meets excellence. Applications are now open for all programs.
            </p>
            <div className="mt-6 inline-flex items-center px-4 py-2 bg-green-100 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
              <span className="text-sm font-medium text-green-800">Live Applications</span>
            </div>
          </div>

          <div className="space-y-6">
            
            {/* Undergraduate Programs - Enhanced Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-emerald-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-5 5l-7-7"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">UNDERGRADUATE PROGRAMS</h2>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                        <span className="text-sm font-semibold text-green-600">Applications Open</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-red-100 rounded-full">
                      <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-sm font-medium text-red-700">Ends July 30, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">B.Tech Programs</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Launch your engineering career with our comprehensive B.Tech programs across multiple specializations including Computer Science, Electronics & Communication, Mechanical, Civil Engineering, and more. JEE Main scores accepted for seamless admission.
                  </p>
                  
                  {/* Program highlights */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">8+</div>
                      <div className="text-xs text-gray-600">Specializations</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">4</div>
                      <div className="text-xs text-gray-600">Year Program</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">100%</div>
                      <div className="text-xs text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-indigo-600">JEE</div>
                      <div className="text-xs text-gray-600">Main Accepted</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button className="bg-gradient-to-r from-indigo-500 to-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center group">
                    Apply Now
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-indigo-300 hover:bg-indigo-50 transition-all duration-300">
                    View Details
                  </button>
                  <button className="text-indigo-600 px-4 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-all duration-300">
                    Download Syllabus
                  </button>
                </div>
              </div>
            </div>

            {/* Postgraduate Programs - Enhanced Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">POSTGRADUATE PROGRAMS</h2>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-2"></div>
                        <span className="text-sm font-semibold text-orange-600">Limited Seats Available</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-red-100 rounded-full">
                      <svg className="w-4 h-4 text-red-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-sm font-medium text-red-700">Ends Aug 15, 2025</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">M.Tech & MBA Programs</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Elevate your career with our advanced postgraduate programs designed for professional excellence. GATE scores accepted for M.Tech and CAT scores for MBA admissions.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">15+</div>
                      <div className="text-xs text-gray-600">Specializations</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">2</div>
                      <div className="text-xs text-gray-600">Year Program</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">95%</div>
                      <div className="text-xs text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">GATE</div>
                      <div className="text-xs text-gray-600">CAT Accepted</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button className="bg-gradient-to-r from-orange-500 to-red-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center group">
                    Apply Now
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-orange-300 hover:bg-orange-50 transition-all duration-300">
                    Eligibility Criteria
                  </button>
                </div>
              </div>
            </div>

            {/* Diploma Programs - Enhanced Card */}
            <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden group">
              <div className="p-8">
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
                      </svg>
                    </div>
                    <div>
                      <h2 className="text-xl font-bold text-gray-900">DIPLOMA PROGRAMS</h2>
                      <div className="flex items-center mt-1">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-2"></div>
                        <span className="text-sm font-semibold text-blue-600">Direct Admission Available</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 rounded-full">
                      <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6-2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="text-sm font-medium text-green-700">Ongoing Admissions</span>
                    </div>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">Polytechnic Programs</h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    Start your technical journey with our comprehensive 3-year diploma courses across various engineering disciplines. Direct admission available with flexible payment options.
                  </p>
                  
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">12+</div>
                      <div className="text-xs text-gray-600">Disciplines</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">3</div>
                      <div className="text-xs text-gray-600">Year Program</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">85%</div>
                      <div className="text-xs text-gray-600">Placement Rate</div>
                    </div>
                    <div className="text-center p-3 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-blue-600">Direct</div>
                      <div className="text-xs text-gray-600">Admission</div>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3">
                  <button className="bg-gradient-to-r from-blue-500 to-cyan-600 text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center group">
                    Enroll Now
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
                    </svg>
                  </button>
                  <button className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:border-blue-300 hover:bg-blue-50 transition-all duration-300">
                    Fee Structure
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Quick Actions */}
          <div className="mt-12 bg-gradient-to-r from-indigo-600 to-purple-700 rounded-2xl p-8 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Ready to Begin Your Journey?</h3>
              <p className="text-indigo-100">Get all the information you need or speak with our admissions team</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <button className="bg-white text-indigo-600 font-semibold py-4 px-6 rounded-xl hover:bg-gray-50 transition-all duration-300 flex items-center justify-center group">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                Download Brochure
              </button>
              <button className="border-2 border-white text-white font-semibold py-4 px-6 rounded-xl hover:bg-white hover:text-indigo-600 transition-all duration-300 flex items-center justify-center group">
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                Contact Admissions
              </button>
            </div>
            
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 rounded-full px-6 py-3">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                </svg>
                <span className="font-semibold text-black">Admission Helpline: +91-761-123-4567</span>
              </div>
              <p className="text-indigo-200 text-sm mt-2">Available 24/7 for your queries</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Admission