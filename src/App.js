import React from "react";
import logo from "./assets/GoalGrid-Logo.png"; // Adjusted path for the logo
import "./index.css"; // Ensure Tailwind CSS is being applied

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="flex justify-between items-center p-4 bg-gray-800 text-white">
        <div className="text-2xl font-bold">GoalGrid</div>
        <div>
          <a
            href="#login"
            className="px-4 py-2 hover:bg-gray-700 rounded transition duration-300"
          >
            Login
          </a>
          <a
            href="#signup"
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition duration-300"
          >
            Signup
          </a>
        </div>
      </nav>

      <header className="text-center p-8">
        <img
          src={logo} // Use the imported logo variable
          alt="GoalGrid logo"
          className="w-36 h-36 mx-auto mb-6 shadow-lg"
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to GoalGrid
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Tracking High Performance Planning is just a click away.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get Started
        </a>
      </header>
      <section id="contact" className="text-center py-16 bg-gray-100 w-full">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">
          Contact Us
        </h2>
        <p className="text-gray-600 mb-6">
          We’re here to answer your questions. Reach out to us anytime.
        </p>
        <a
          href="mailto:contact@goalgrid.net"
          className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition duration-300"
        >
          Email Us
        </a>
      </section>
      <footer className="text-center py-4 bg-gray-200 w-full">
        <p className="text-gray-600">© 2024, GoalGrid, All Rights Reserved</p>
      </footer>
    </div>
  );
}

export default App;
