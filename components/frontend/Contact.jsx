import React from 'react';
import { Home, ChevronRight, MapPin, Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div>
      <div id="page-banner-area" className="page-banner bg-gray-900 text-white py-12">
        <div className="page-banner-title text-center">
          <h2 className="text-3xl font-bold">Contact Us</h2>
          <a href="#" className="flex items-center justify-center mt-4">
            <Home className="mr-1" />
            Home
          </a>
          <div className="flex items-center justify-center mt-1">
            <ChevronRight />
            <span className="current ml-1">Contact Us</span>
          </div>
        </div>
      </div>

      <section id="contact-section" className="section-padding py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-5/12 md:w-6/12 px-4">
              <div className="contact-right-area">
                <h2 className="text-2xl font-bold mb-4">Get In Touch</h2>
                <p className="mb-6">
                  If you are interested in working with us, <br /> please get in touch.
                </p>
                <div className="contact-right">
                  <div className="single-contact flex items-center mb-4">
                    <MapPin className="text-gray-600 mr-4" />
                    <p>63130 St. York Blvd, Los Angeles, US</p>
                  </div>
                  <div className="single-contact flex items-center mb-4">
                    <Mail className="text-gray-600 mr-4" />
                    <p><a href="mailto:Feedback@property.com">Feedback@property.com</a></p>
                  </div>
                  <div className="single-contact flex items-center mb-4">
                    <Phone className="text-gray-600 mr-4" />
                    <p><a href="tel:+1234567478">+1-234-567-478</a></p>
                  </div>
                </div>
                <div className="social-icon flex space-x-4 mt-6">
                  <a className="facebook" href="#"><Facebook /></a>
                  <a className="twitter" href="#"><Twitter /></a>
                  <a className="instagram" href="#"><Instagram /></a>
                  <a className="linkedin" href="#"><Linkedin /></a>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-7/12 md:w-6/12 px-4">
              <h2 className="text-2xl font-bold mb-4">Feedback</h2>
              <form role="form" method="post" id="contactForm" name="contact-form">
                <div className="form-group mb-4">
                  <input
                    type="text"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
                    id="name"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="email"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
                    id="email"
                    name="email"
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <input
                    type="tel"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
                    id="msg_subject"
                    name="subject"
                    placeholder="Subject"
                    required
                  />
                </div>
                <div className="form-group mb-4">
                  <textarea
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-lg"
                    rows="5"
                    id="message"
                    name="message"
                    placeholder="Message"
                    required
                  ></textarea>
                </div>
                <div className="form-submit">
                  <button type="submit" className="btn bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-lg py-2 px-4 flex items-center">
                    <i className="fa fa-paper-plane mr-2" aria-hidden="true"></i> Send Message
                  </button>
                  <div id="msgSubmit" className="h3 text-center hidden"></div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="google-map-area" className="my-12">
        <div className="container-fluid px-0">
          <div className="row mx-0">
            <div className="col-12 px-0">
              <div id="container-map" className="w-full h-96 bg-gray-300"></div>
            </div>
          </div>
        </div>
      </section>

      <footer id="footer" className="footer-area section-padding bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:mb-0 px-4">
              <h3 className="footer-title text-xl font-semibold mb-4">About <span className="text-lime-500">Us</span></h3>
              <ul className="footer-link">
                <li className="mb-2"><a href="#">Company</a></li>
                <li className="mb-2"><a href="#">Team</a></li>
                <li className="mb-2"><a href="#">Career</a></li>
                <li className="mb-2"><a href="#">Graphic Design</a></li>
                <li className="mb-2"><a href="#">Documentation</a></li>
              </ul>
            </div>
            <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:mb-0 px-4">
              <h3 className="footer-title text-xl font-semibold mb-4">Useful <span className="text-lime-500">Links</span></h3>
              <ul className="footer-link">
                <li className="mb-2"><a href="#">Bayonne, New York</a></li>
                <li className="mb-2"><a href="#">Greenville, Chicago</a></li>
                <li className="mb-2"><a href="#">The Heights, New Jersey</a></li>
                <li className="mb-2"><a href="#">Bayonne, Washington DC</a></li>
                <li className="mb-2"><a href="#">Greenville, San Francisco</a></li>
              </ul>
            </div>
            <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:mb-0 px-4">
              <h3 className="footer-title text-xl font-semibold mb-4">Contact <span className="text-lime-500">Info</span></h3>
              <ul className="address">
                <li className="mb-2">
                  <a href="#" className="flex items-center">
                    <MapPin className="mr-2" /> York Blvd, Los Angeles, US<br /> View, CA 94041USA
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="flex items-center">
                    <Phone className="mr-2" /> (518) 2014-040 43
                  </a>
                </li>
                <li className="mb-2">
                  <a href="mailto:hello@example.com" className="flex items-center">
                    <Mail className="mr-2" /> hello@example.com
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full lg:w-3/12 md:w-6/12 mb-8 lg:mb-0 px-4">
              <h3 className="footer-title text-xl font-semibold mb-4">Subscribe <span className="text-lime-500">on Our News</span></h3>
              <form method="post" id="subscribe-form" name="subscribe-form" className="validate mb-4">
                <div className="flex items-center">
                  <input
                    type="email"
                    name="Email"
                    className="form-control w-full px-4 py-2 border border-gray-300 rounded-l-lg"
                    id="EMAIL"
                    placeholder="Email address"
                    required
                  />
                  <button
                    type="submit"
                    name="subscribe"
                    id="subscribes"
                    className="btn bg-lime-500 hover:bg-lime-600 text-white font-semibold rounded-r-lg py-2 px-4"
                  >
                    <Mail />
                  </button>
                </div>
              </form>
              <div className="social-icon flex space-x-4">
                <a className="facebook" href="#"><Facebook /></a>
                <a className="twitter" href="#"><Twitter /></a>
                <a className="instagram" href="#"><Instagram /></a>
                <a className="linkedin" href="#"><Linkedin /></a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      <section id="copyright" className="bg-gray-800 text-gray-500 py-4">
        <div className="container mx-auto px-4 text-center">
          <p>Copyright © 2024 <a rel="nofollow" href="https://uideck.com" className="text-lime-500">UIdeck</a> All Right Reserved</p>
        </div>
      </section>

      <a href="#" className="back-to-top fixed bottom-4 right-4 bg-lime-500 hover:bg-lime-600 text-white p-2 rounded-full">
        <ChevronRight className="transform rotate-90" />
      </a>
    </div>
  );
};

export default ContactPage;
