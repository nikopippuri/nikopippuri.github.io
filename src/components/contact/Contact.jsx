import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  return (
    <section id='contact' className="w-full py-16 bg-gradient-to-b from-stone-900 to-stone-800 text-white text-center border-2 rounded-lg border-orange-400 mt-10">
      <h2 className="text-4xl font-bold mb-6">Get in Touch</h2>
      <p className="text-xl mb-12">
        Feel free to reach out if you want to connect, ask questions, or just say hi! I'm always happy to chat.
      </p>

      <div className="max-w-4xl mx-auto space-y-8">
        <div className="flex justify-center gap-12">
          {/* GitHub Link */}
          <a
            href="https://github.com/nikopippuri"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-white hover:text-orange-400 transition-colors duration-300"
          >
            <div className="bg-stone-800 p-6 rounded-full hover:bg-orange-400 transition duration-300 transform group-hover:scale-105">
              <FaGithub className="h-10 w-10 mx-auto text-white group-hover:text-stone-800 transition duration-300" />
            </div>
            <span className="mt-2 block text-sm">GitHub</span>
          </a>

          {/* LinkedIn Link */}
          <a
            href="http://www.linkedin.com/in/niko-pippuri"
            target="_blank"
            rel="noopener noreferrer"
            className="group text-white hover:text-orange-400 transition-colors duration-300"
          >
            <div className="bg-stone-800 p-6 rounded-full hover:bg-orange-400 transition duration-300 transform group-hover:scale-105">
              <FaLinkedin className="h-10 w-10 mx-auto text-white group-hover:text-stone-800 transition duration-300" />
            </div>
            <span className="mt-2 block text-sm">LinkedIn</span>
          </a>

          {/* Email Link */}
          <a
            href="mailto:niko.pippuri@gmail.com"
            className="group text-white hover:text-orange-400 transition-colors duration-300"
          >
            <div className="bg-stone-800 p-6 rounded-full hover:bg-orange-400 transition duration-300 transform group-hover:scale-105">
              <FaEnvelope className="h-10 w-10 mx-auto text-white group-hover:text-stone-800 transition duration-300" />
            </div>
            <span className="mt-2 block text-sm">Email</span>
          </a>
        </div>
      </div>

      <div className="mt-12">
        <p className="text-lg font-light text-stone-400">
          Or, just use the buttons above to connect. I'm always happy to chat!
        </p>
      </div>
    </section>
  );
};

export default Contact;
