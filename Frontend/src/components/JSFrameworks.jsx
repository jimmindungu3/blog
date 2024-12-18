import React from "react";

const JSFrameworks = () => {
  return (
    <div className="p-6 mx-auto">
      <h1 className="text-4xl font-bold mb-4 text-blue-500 dark:text-yellow-500">
        Exploring Popular JavaScript Frameworks
      </h1>
      <p className="text-lg mb-6">
        JavaScript frameworks have transformed the way web applications are
        built. They provide tools, structures, and patterns to streamline the
        development process. In this guide, we'll explore some of the most
        popular frameworks, including React, Angular, and Vue, and see why they
        are worth learning.
      </p>

      <h2 className="text-2xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        React.js: The Library for Building UIs
      </h2>
      <p className="text-lg mb-6">
        React.js, developed by Facebook, is a widely-used JavaScript library for
        building user interfaces, especially for single-page applications. It
        allows you to build components that manage their own state, making it
        easy to create interactive UIs. React's virtual DOM optimizes rendering,
        which improves app performance.
      </p>

      <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Why Choose React?
      </h3>
      <ul className="list-disc ml-6 mb-6">
        <li>Component-based architecture for reusable code.</li>
        <li>Strong community support and a vast ecosystem.</li>
        <li>Compatibility with other libraries and frameworks.</li>
        <li>
          Widely used in both front-end and mobile development (React Native).
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Angular: The Full-Featured Framework
      </h2>
      <p className="text-lg mb-6">
        Angular, developed by Google, is a comprehensive front-end framework
        designed for building large-scale, complex web applications. Angular
        uses TypeScript, a superset of JavaScript, providing features like
        static typing and enhanced development tools. It follows the
        Model-View-Controller (MVC) architecture, which helps maintain a clean
        code structure.
      </p>

      <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Why Choose Angular?
      </h3>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Complete solution with routing, state management, and forms handling.
        </li>
        <li>Built-in tools for testing and debugging.</li>
        <li>Strong performance with optimizations for large applications.</li>
        <li>
          Ideal for enterprise-level applications with complex requirements.
        </li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Vue.js: The Progressive Framework
      </h2>
      <p className="text-lg mb-6">
        Vue.js is a lightweight and flexible JavaScript framework that focuses
        on the view layer. It's easy to integrate with other projects or
        libraries, making it ideal for gradual adoption. Vue's simplicity,
        combined with its powerful features, makes it perfect for building
        dynamic user interfaces and single-page applications.
      </p>

      <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Why Choose Vue?
      </h3>
      <ul className="list-disc ml-6 mb-6">
        <li>Simple and easy to learn with a gentle learning curve.</li>
        <li>Flexible integration into existing projects.</li>
        <li>Small size, which contributes to faster load times.</li>
        <li>Clear and concise documentation with a supportive community.</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Other JavaScript Frameworks to Consider
      </h2>
      <p className="text-lg mb-6">
        In addition to React, Angular, and Vue, there are other frameworks worth
        exploring:
      </p>
      <ul className="list-disc ml-6 mb-6">
        <li>
          Ember.js: A full-featured framework with strong conventions for
          building ambitious web apps.
        </li>
        <li>
          Svelte: A next-generation framework that compiles components to highly
          optimized vanilla JavaScript.
        </li>
        <li>
          Backbone.js: A lightweight framework that provides minimal structure
          and is best for smaller applications.
        </li>
      </ul>

      <h3 className="text-xl font-semibold mb-3 text-blue-500 dark:text-yellow-500">
        Conclusion
      </h3>
      <p className="text-lg">
        When choosing a JavaScript framework, consider the complexity of your
        project and your long-term goals. React is perfect for creating
        interactive UIs with a modular approach, Angular is ideal for
        large-scale enterprise applications, and Vue provides a balanced option
        for both small and large apps. No matter your choice, mastering a
        JavaScript framework is an essential skill for modern web developers.
      </p>
    </div>
  );
};

export default JSFrameworks;