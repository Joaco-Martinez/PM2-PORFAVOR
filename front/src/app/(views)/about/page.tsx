/* eslint-disable @next/next/no-html-link-for-pages */
import React from "react";  

const About = () => {
    return (
            <section id="about" className="px-6 py-12 max-w-4xl mx-auto font-sans mb-24">
      <h2 className="text-4xl font-bold mb-6 text-gray-800">About Us</h2>

      <p className="text-lg text-gray-700 leading-relaxed mb-4">
        At <strong>Manzana Tech</strong>, we’re passionate about bringing you the best of the Apple universe. Founded in 2025, our store was created with one goal in mind: to offer Apple products in a simple, reliable, and accessible way.
      </p>
      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        We specialize in the sale of iPhones, iPads, MacBooks, Apple Watches, AirPods, and original accessories, always providing expert advice and personalized service. Our commitment is to help you find the perfect device for your lifestyle, with the quality and innovation that defines Apple.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Our Story</h3>
      <p className="text-lg text-gray-700 leading-relaxed mb-6">
        Manzana Tech started as an idea among friends who shared a passion for Apple products. We realized how difficult it was to find original devices at fair prices, with real guidance and support. So we built a space where people could buy Apple tech with confidence and ease.
      </p>

      <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Our Mission & Vision</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6">
        <li><strong>Mission:</strong> To provide access to original Apple products with personalized service and transparent support.</li>
        <li><strong>Vision:</strong> To become a trusted reference for Apple technology across the region, blending innovation, trust, and a personal touch.</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Why Choose Us?</h3>
      <ul className="list-disc list-inside text-lg text-gray-700 leading-relaxed mb-6">
        <li>100% original Apple products</li>
        <li>Fast nationwide shipping</li>
        <li>Specialized customer support</li>
        <li>After-sales service</li>
        <li>Warranty on all items</li>
      </ul>

      <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">What Our Customers Say</h3>
      <blockquote className="border-l-4 border-gray-300 pl-4 italic text-lg text-gray-700 mb-8">
        “I bought my first MacBook at Manzana Tech and the service was excellent. I received it in two days and everything was perfect.”<br />
        — <strong>Lucía G., Córdoba</strong>
      </blockquote>

      <h3 className="text-2xl font-semibold text-gray-800 mt-10 mb-4">Ready to explore?</h3>
      <p className="text-lg text-gray-700">
        👉 <a href="/" className="text-blue-600 font-semibold hover:underline">Browse our latest Apple products now</a>.
      </p>
    </section>

    );
};

export default About;