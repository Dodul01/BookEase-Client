import React from 'react'

const Footer = () => {
  return (
    <footer className=" p-10 bg-base-200 text-base-content">
      <div className='max-w-7xl mx-auto'>
        <div className='footer'>

          <aside>
            <h1 className='text-5xl font-bold'>BookEase</h1>
            <p>BookEase Private Ltd.<br />Providing Hotel service since 2005</p>
          </aside>
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
        </div>
      </div>
    </footer>
  )
}

export default Footer
