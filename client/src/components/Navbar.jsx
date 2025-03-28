import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { IoMdCall } from "react-icons/io";
import ContactUsModal from "./ContactUsModal";

const services = [
  {
    title: "DevOps Development",
    description:
      "Enhancing software delivery speed and reliability through expert DevOps strategies, integrating development and operations for efficient workflows.",
    link: "/service/devops-development",
  },
  {
    title: "Quality Assurance",
    description:
      "Ensuring the highest level of quality through meticulous testing and validation processes.",
    link: "/service/quality-assurance",
  },
  {
    title: "Web Development",
    description:
      "Designing, building, maintaining, and evolving static and dynamic web applications, progressive web applications (PWAs) and single-page applications (SPAs).",
    link: "/service/web-development",
  },
  {
    title: "Data Analytics",
    description:
      "Creating scalable operational or analytical databases tailored to meet specific business needs, ensuring data integrity, security, and optimal performance.",
    link: "/service/data-analytics",
  },
  {
    title: "Front End Development",
    description:
      "Making your product’s client-side more user-friendly, SEO-optimized, compatible across devices and resistant to higher user loads from their very first contact.",
    link: "/service/frontend-development",
  },
  {
    title: "Mobile Development",
    description:
      "Developing native or cross-platform mobile applications for both iOS and Android platforms, focusing on responsive design, scalable back-end and databases, and possibilities for scaling.",
    link: "/service/mobile-development",
  },
  {
    title: "UI/UX Design",
    description:
      "We will embody your product into a physical appearance, combining aesthetics with usability, aligning it with brand identity and business goals, and tailoring it to your user personas.",
    link: "/service/ui-development",
  },
  {
    title: "Back End Development",
    description:
      "Providing powerful back-end systems that are the backbone of web applications, ensuring scalability, security, seamless data management, and high load resistance.",
    link: "/service/backend-development",
  },
  {
    title: "Business Intelligence",
    description:
      "Unlock insights, drive decisions. Harness the power of Business Intelligence for data-driven strategies and informed decision-making.",
    link: "/service/business-intelligence",
  },
];

function Navbar() {
  const [navhover, setNavhover] = useState(false);
  const [navdrop, setNavdrop] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [mobileNavdrop, setMobileNavdrop] = useState(false);
  const [contactUsModal, setContactUsModal] = useState(false);

  // Scroll window
  const handleScroll = () => {
    if (window.scrollY > 50) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      onMouseEnter={() => setNavhover(true)}
      onMouseLeave={() => {
        setNavhover(false);
      }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md text-black" : "bg-transparent"
      }`}
    >
      <div className="max-w-9xl m-auto">
        {/* PC view */}
        <div className="hidden md:flex items-center py-5 px-4">
          <div className="flex-1 text-lg">
            <Link to="/" onMouseEnter={() => setNavdrop(false)}>
              {scrolled ? (
                <img
                  loading="lazy"
                  className="h-12 w-auto"
                  src="/assets/logo/digitechii.png"
                  alt="AMNDTECH logo"
                />
              ) : (
                <img
                  loading="lazy"
                  className="h-12 w-auto"
                  src="/assets/logo/digitechii.png"
                  alt="AMNDTECH logo"
                />
              )}
            </Link>
          </div>
          <div className="flex-3">
            <ul className="grid grid-cols-7 gap-x-2 justify-center items-center">
              {/* Services */}
              <li
                onMouseEnter={() => setNavdrop(true)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
                }`}
              >
                <Link>Services</Link>
                {navdrop && (
                  <div
                    onMouseLeave={() => setNavdrop(false)}
                    className="absolute left-0 mt-7 w-screen bg-gray-200 shadow-lg overflow-hidden z-50"
                  >
                    <div className="max-w-9xl m-auto py-10 grid grid-cols-5 gap-x-10">
                      <div className="col-span-2">
                        <h2 className="text-black hover:text-purple-600 text-3xl font-semibold text-left">
                          All Expertise
                        </h2>
                        <p className="text-gray-600 text-xs text-justify mt-3">
                          We offer a wide range of services to help you achieve
                          your business goals. Our services include web
                          development, mobile development, quality assurance,
                          business intelligence, and more.
                        </p>
                      </div>
                      <div className="col-span-3 grid grid-cols-3 gap-8 text-start">
                        {services?.map((service, index) => (
                          <div key={index}>
                            <Link to={service.link}>
                              <h3 className="text-2xl font-semibold text-black hover:text-purple-600">
                                {service.title}
                              </h3>
                              <p className="text-gray-600 text-xs text-justify mt-3">
                                {service.description}
                              </p>
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </li>
              {/* Technology */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/technology">Technology</Link>
              </li>
              {/* Our work */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/our-work">Our work</Link>
              </li>
              {/* Careers */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/career">Careers</Link>
              </li>
              {/* About Us */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/about-us">About Us</Link>
              </li>
              {/* Blog */}
              <li
                onMouseEnter={() => setNavdrop(false)}
                className={`${
                  scrolled
                    ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                    : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
                }`}
              >
                <Link to="/blogs">Blog</Link>
              </li>
            </ul>
          </div>
          {/* Contact Us */}
          <div>
            <button
              onClick={() => setContactUsModal(!contactUsModal)}
              className="flex items-center gap-x-2 px-5 py-2 font-theme-font text-sm bg-purple-600 text-white rounded-2xl hover:bg-white hover:text-purple-600 hover:shadow-md hover:shadow-slate-200 transition-color delay-250"
            >
              <IoMdCall className="h-4 w-4" /> Contact Us
            </button>
          </div>
        </div>

        {/* Mobile Navbar */}
        <div className="md:hidden w-full flex items-center justify-between py-5 px-4">
          {/* button */}
          <div
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className={`${
              scrolled
                ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color hover:cursor-pointer"
                : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color hover:cursor-pointer"
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
          {/* logo */}
          <div>
            {scrolled ? (
              <img
                loading="lazy"
                className="h-12 w-auto"
                src="/assets/logo/digitechii.png"
                alt="AMNDTECH logo"
              />
            ) : (
              <img
                loading="lazy"
                className="h-12 w-auto"
                src="/assets/logo/digitechii.png"
                alt="AMNDTECH logo"
              />
            )}
          </div>
          {/* contact button */}
          <div
            className={`${
              scrolled
                ? "font-theme-font text-sm text-center text-black hover:text-purple-600 transition-color"
                : "font-theme-font text-sm text-center text-white hover:text-purpli-600 transition-color "
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
          </div>
        </div>

        {/* Sidebar */}
        {sidebarOpen && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-50">
            <div className="fixed left-0 top-0 w-3/4 h-full bg-white shadow-lg p-5">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-bold">Menu</h2>
                <button onClick={() => setSidebarOpen(false)}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-8 h-8"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
              <ul className="mt-5 space-y-3">
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/" onClick={() => setSidebarOpen(false)}>
                    Home
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <button
                    className="w-full text-left"
                    onClick={() => setMobileNavdrop(!mobileNavdrop)}
                  >
                    Services
                  </button>
                  {mobileNavdrop && (
                    <ul className="mt-2 ml-4 space-y-2">
                      <li>
                        <Link
                          to="/service/devops-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          DevOps Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/quality-assurance"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Quality Assurance
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/web-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Web Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/data-analytics"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Data Analytics
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/frontend-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Front End Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/mobile-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Mobile Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/ui-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          UI/UX Design
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/backend-development"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Back End Development
                        </Link>
                      </li>
                      <li className="hover:cursor-pointer hover:underline">
                        <Link
                          to="/service/business-intelligence"
                          onClick={() => setSidebarOpen(false)}
                        >
                          Business Intelligence
                        </Link>
                      </li>
                    </ul>
                  )}
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/technology" onClick={() => setSidebarOpen(false)}>
                    Technology
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/our-work" onClick={() => setSidebarOpen(false)}>
                    Our Work
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/career" onClick={() => setSidebarOpen(false)}>
                    Careers
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/about-us" onClick={() => setSidebarOpen(false)}>
                    About Us
                  </Link>
                </li>
                <li className="hover:cursor-pointer hover:underline">
                  <Link to="/blogs" onClick={() => setSidebarOpen(false)}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setSidebarOpen(false)}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        )}
        {/* Contact Us Modal  */}
        {
          <ContactUsModal
            open={contactUsModal}
            onClose={() => setContactUsModal(!contactUsModal)}
          />
        }
      </div>
    </nav>
  );
}

export default Navbar;
