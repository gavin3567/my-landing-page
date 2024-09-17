import React from "react";
import "./index.css"; // Ensure Tailwind CSS is being applied

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <header className="text-center p-8">
        <img
          src="https://via.placeholder.com/150" // Replace with your logo
          alt="Noname logo"
          className="w-36 h-36 mx-auto mb-6"
        />
        <h1 className="text-5xl font-extrabold text-gray-900 mb-4">
          Welcome to Noname
        </h1>
        <p className="text-lg text-gray-600 mb-6">
          Crafting exceptional products and experiences tailored just for you.
        </p>
        <a
          href="#contact"
          className="px-8 py-4 bg-blue-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-blue-700 transition duration-300"
        >
          Get in Touch
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
          href="mailto:contact@noname.com"
          className="px-8 py-4 bg-green-600 text-white text-lg font-semibold rounded-full shadow-md hover:bg-green-700 transition duration-300"
        >
          Email Us
        </a>
      </section>
    </div>
  );
}

export default App;
