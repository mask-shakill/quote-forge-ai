const Footer = () => {
  return (
    <footer className="bg-[#f4edf0] text-gray-700 ">
      {/* Newsletter Section */}
      <div className="bg-[#1e40af] text-center py-8 px-4 text-white">
        <h3 className="text-2xl md:text-3xl font-semibold mb-4">
          Sign up for our newsletter to get updates, news, and free insights.
        </h3>
        <button className="px-8 py-3 bg-secondary text-white font-medium rounded-md">
          Try For Free
        </button>
      </div>

      {/* Footer Content */}
      <div className="max-w-7xl mx-auto py-12 px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-sm">
        {/* Logo Section */}
        <div>
          <div className="flex items-center space-x-2 mb-4">
            <div className="bg-blue-500 p-3 rounded-full">
              {/* Placeholder for Logo */}
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <h2 className="text-lg font-bold">Socio Academy</h2>
          </div>
          <p className="text-gray-500">
            Ornare congue mus pellentesque venenatis platea suscipit gravida
            conubia feugiat nec metus.
          </p>
          {/* Social Icons */}
          <div className="flex space-x-4 mt-4">
            <a
              href="#"
              className="w-8 h-8 bg-secondary hover:bg-primary rounded-full flex justify-center items-center"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-secondary hover:bg-primary  rounded-full flex justify-center items-center"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-secondary hover:bg-primary  rounded-full flex justify-center items-center"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="#"
              className="w-8 h-8 bg-secondary hover:bg-primary  rounded-full flex justify-center items-center"
            >
              <i className="fab fa-youtube"></i>
            </a>
          </div>
        </div>

        {/* Links - Popular Categories */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Popular Categories</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-800">
                Instagram Class
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Tiktok Class
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Facebook Class
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Youtube Class
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Copywriting Class
              </a>
            </li>
          </ul>
        </div>

        {/* Links - Support */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Support</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-800">
                Help Center
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Ticket Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                FAQ
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Contact us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Community
              </a>
            </li>
          </ul>
        </div>

        {/* Links - Company */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-500">
            <li>
              <a href="#" className="hover:text-gray-800">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Leadership
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Article & News
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-800">
                Legal notice
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="bg-primary py-4">
        <div className="text-center text-white text-xs">
          Copyright &copy; 2023 SocioAcademy. All rights reserved. Powered by
          MoxCreative.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
