import React from 'react';

function Footer() {
  return (
    <footer className="bg-blue-600 text-white p-4">
      <div className="container mx-auto text-center">
        <p className="text-sm">© 2024 My Website. All rights reserved.</p>
        <div className="mt-2">
          <ul className="flex justify-center space-x-4">
            <li>
              <a href="#" className="hover:text-blue-300">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Terms of Service
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-blue-300">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

