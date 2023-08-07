import React, { useEffect } from 'react';

const Navbar = () => {

    useEffect(() => {
        const closeBtn = document.getElementById('btn');
        const sidebar = document.querySelector('.sidebar');
    
        closeBtn.addEventListener('click', () => {
          sidebar.classList.toggle('open');
          menuBtnChange();
        });
    
        return () => {
          closeBtn.removeEventListener('click', () => {
            sidebar.classList.toggle('open');
            menuBtnChange();
          });
        };
      }, []);
    
      function menuBtnChange() {
        const closeBtn = document.getElementById('btn');
        const sidebar = document.querySelector('.sidebar');
    
        if (sidebar.classList.contains('open')) {
          closeBtn.classList.replace('bx-menu', 'bx-menu-alt-right');
        } else {
          closeBtn.classList.replace('bx-menu-alt-right', 'bx-menu');
        }
      }

  return (
    <>
        <div className='navbar'>
            <div className='logo'>
                <a href='/'>Sportsmash</a>
            </div>
            <div className='navmid'>
                <a className='navchild' href="/">Home</a>
                <a className='navchild' href="/about">About</a>
                <a className='navchild' href="/ranking">Rankings</a>
            </div>
        </div>

        <div className="sidebar">

            <div className="logo-details">
                <div className="logo_name">
                    <a href='/'>Sportsmash</a>
                </div>
                <div className="logoicon">
                    <i className="bx bx-menu" id="btn"></i>
                </div>
            </div>

        <ul className="nav-list">
          <li>
            <a href="/">
              <span className="links_name">Home</span>
            </a>
          </li>

          <li>
            <a href="/about">
              <span className="links_name">About</span>
            </a>
          </li>

          <li>
            <a href="/ranking">
              <span className="links_name">Ranking</span>
            </a>
          </li>

        </ul>
      </div>
    </>
  )
}

export default Navbar
