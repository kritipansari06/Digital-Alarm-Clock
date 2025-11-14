import React from 'react'

const Footer = () => {
  return (
  <>
  <footer className="bg-white/20 backdrop-blur-md text-white border-t border-white/30">
    <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
      <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
        <img src="/public/assets/Kriti-Pansari.jpg" className="w-20 h-20 text-white p-2 rounded-full" alt="Kriti Pansari"/>
        <span className="ml-3 text-xl">Kriti Pansari</span>
      </a>

    <p className="text-sm text-black sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-black-200 sm:py-2 sm:mt-0 mt-4">
      Deployed on November 12,2025. During Hands-on-MERN-Training. <br />
      Created by Kriti Pansari. <br />
      We've used ReactJS and TailwindCSS for building this Alarm Clock. <br />
      Hooks Used: useState, useEffect, useRef.
    </p>
    <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
<div className="flex space-x-4 items-center">
  {/* GitHub */}
  <a href="https://github.com/kritipansari06" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
      alt="GitHub"
      className="w-6 h-6 hover:opacity-80 transition-opacity"
    />
  </a>

  {/* Instagram */}
  <a href="https://www.instagram.com/kritipansari_06?igsh=MW16NjFrNGM3c3Bidw==" target="_blank" rel="noopener noreferrer">
    <img
      src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
      alt="Instagram"
      className="w-6 h-6 hover:opacity-80 transition-opacity"
    />
  </a>

  {/* LinkedIn */}
  <a href="https://www.linkedin.com/in/kriti-pansari-6a56a0362?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
      alt="LinkedIn"
      className="w-6 h-6 hover:opacity-80 transition-opacity"
    />
  </a>
</div>

    </span>
  </div>
</footer>
</>

  )
}

export default Footer