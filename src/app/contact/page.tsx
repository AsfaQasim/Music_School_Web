'use client';
import { BackgroundBeams } from "../components/ui/background-beams";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';

function MusicSchoolContactUs() {


  const contactInfo = [
    {
      icon: <FaMapMarkerAlt className="h-6 w-6 text-blue-500" />,
      title: "Location",
      content: "Surjani Town, Karachi"
    },
    {
      icon: <FaEnvelope className="h-6 w-6 text-blue-500" />,
      title: "Email",
      content: "asfaqasim144@gmail.com",
      isLink: true
    },
    {
      icon: <FaPhone className="h-6 w-6 text-blue-500" />,
      title: "Phone",
      content: "123-456-7890"
    }
  ];

  return (
    <div className="relative z-0 min-h-screen overflow-hidden">
      <BackgroundBeams />

      <div id="Contact" className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="text-gray-700 dark:text-gray-300">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl mb-4">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to reach out through the contact form below.
            </p>
          </div>

          <div className="flex flex-wrap -m-4">
            {/* Contact Info with Map */}
            <div className="lg:w-2/3 md:w-1/2 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-96">
                  <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder={0}
                    title="map"
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.185022901293!2d67.06591392284105!3d25.027794289544012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb341676268af8d%3A0x73bd35b9c6f53339!2sSector%207C%20Sector%207%20B%20Surjani%20Town%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1727598969120!5m2!1sen!2s"
                    style={{ border: 0, filter: "contrast(1.2) opacity(0.4)" }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {contactInfo.map((info, index) => (
                          <div
                            key={index}
                            className="flex items-center space-x-3 hover:scale-105 transition-transform duration-200"
                          >
                            <div className="flex-shrink-0">
                              {info.icon}
                            </div>
                            <div>
                              <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                                {info.title}
                              </h3>
                              {info.isLink ? (
                                <a
                                  href={`mailto:${info.content}`}
                                  className="text-sm text-black dark:text-black hover:underline"
                                >
                                  {info.content}
                                </a>
                              ) : (
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                  {info.content}
                                </p>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:w-1/3 md:w-1/2 p-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  Send a Message
                </h2>
                <form className="space-y-6">
                  <div className="hover:scale-[1.01] transition-transform duration-200">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder='Your name'
                    />
                  </div>

                  <div className="hover:scale-[1.01] transition-transform duration-200">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200"
                      placeholder="aaa@example.com"
                    />
                  </div>

                  <div className="hover:scale-[1.01] transition-transform duration-200">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-200 resize-none"
                      placeholder="Your message here..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-black hover:bg-slate-800 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default MusicSchoolContactUs;
