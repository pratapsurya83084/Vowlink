import React from 'react';

const Footer = () => {
  return (
    // bg-gray-900 text-white
    <footer className="bg-gray-100 p-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        
        {/* Quick Links Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Quick Links</h3>
          <ul>
            <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
            <li className="mb-2"><a href="/courses" className="hover:underline">Courses</a></li>
            <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
            <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
          </ul>
        </div>

        {/* Resources Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Resources</h3>
          <ul>
            <li className="mb-2"><a href="/faq" className="hover:underline">FAQ</a></li>
            <li className="mb-2"><a href="/terms" className="hover:underline">Terms of Service</a></li>
            
            <li className="mb-2"><a href="/privacy" className="hover:underline">Privacy Policy</a></li>
            <li className="mb-2"><a href="/help" className="hover:underline">Help Center</a></li>
          </ul>
        </div>

        {/* Follow Us Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Follow Us</h3>
          <ul className="sm:flex-col ">
           <div>
           <li><a href="#" className="hover:underline">Facebook</a></li>
           <li><a href="#" className="hover:underline">Twitter</a></li>
           </div>
           
        
           <div >
           <li><a href="#" className="hover:underline">Instagram</a></li>
           <li><a href="#" className="hover:underline">LinkedIn</a></li>
           </div>
            
          </ul>
        </div>

        {/* Newsletter Subscription Section */}
        <div>
          <h3 className="font-bold text-lg mb-4">Subscribe to Our Newsletter</h3>
          <p className="mb-2">Stay updated with the latest news and offers.</p>
          <form className="flex flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="p-2 mb-2 rounded border border-gray-600 bg-gray-800"
            />
            <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center">
        <p>&copy; {new Date().getFullYear()} Your Organization Name. All rights reserved.</p>
        <p className="text-sm">Powered by Your Educational Platform.</p>
      </div>
    </footer>
  );
};

export default Footer;
