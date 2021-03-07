import React from 'react';
import { Popover } from 'react-bootstrap';
import { OverlayTrigger } from 'react-bootstrap';
import {
  AiFillStar,
  AiOutlinePlus,
  AiOutlineStar,
  AiOutlineWindows,
} from 'react-icons/ai';
import { BiBookContent, BiExit, BiStats } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';

const popover1 = (
  <Popover id='key-1' className='rounded-xl  shadow-sm border-0'>
    <div className='p-3'>
      <div className='font-weight-bold'>
        <span className='im-text-primary mr-1'>1.</span>
        <span>Let’s Setting Up Your Profile</span>
      </div>
      <p className='text-black-50 mt-4 small'>
        Let’s setting up your profile by uploading a profile picture, and then
        you are ready to go!
      </p>
    </div>
  </Popover>
);

export const Sidebar = ({ location }) => {
  let hideSidebar =
    location.pathname === '/role-select' ||
    location.pathname === '/game-success' ||
    location.pathname === '/join-success' ||
    location.pathname === '/login' ||
    location.pathname === '/404' ||
    location.pathname === '/signup';
  

  return (
    <>
      {hideSidebar ? (
        ''
      ) : (
        <section className='sidebar d-none d-lg-flex pt-5 mt-4'>
          <header className='p-4 mb-5'>
            <div className='d-flex align-items-center mb-3'>
              <NavLink
                to='/profile'
                type='button'
                className='btn btn-two rounded-pill d-flex align-items-center justify-content-center p-3 mr-3'
              >
                <AiOutlinePlus size={20} />
              </NavLink>

              <OverlayTrigger
                trigger='click'
                placement='auto'
                overlay={popover1}
              >
                <button
                  type='button'
                  className='btn btn-two rounded-pill d-flex align-items-center justify-content-center py-0 px-2 bg-white'
                >
                  <AiFillStar color='#FF8252' />
                  <span className='text-black-50'>4.8</span>
                </button>
              </OverlayTrigger>
            </div>
            <div className='font-weight-bold h5'>John Smith</div>
          </header>
          <main className='pl-4'>
            <NavLink
              to='/'
              className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
            >
              <span className='mr-3'>
                <AiOutlineWindows size={24} />
              </span>
              <span className='btn-sidebar__text'>Dashboard</span>
            </NavLink>

            <NavLink
              to='/stats'
              className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
            >
              <span className='mr-3'>
                <BiStats size={24} />
              </span>
              <span className='btn-sidebar__text'>Stats</span>
            </NavLink>

            <NavLink
              to='/ratings'
              className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
            >
              <span className='mr-3'>
                <AiOutlineStar size={24} />
              </span>
              <span className='btn-sidebar__text'>Ratings</span>
            </NavLink>

            <NavLink
              to='/matches'
              className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
            >
              <span className='mr-3'>
                <BiBookContent size={24} />
              </span>
              <span className='btn-sidebar__text'>Matches</span>
            </NavLink>
          </main>

          <footer className='pl-4 mt-auto'>
            <NavLink
              to='/login'
              className='btn btn-sidebar p-0 w-100 text-left rounded-0 d-flex align-items-center mb-5'
            >
              <span className='mr-3'>
                <BiExit size={24} />
              </span>
              <span className='btn-sidebar__text'>Logout</span>
            </NavLink>
          </footer>
        </section>
      )}
    </>
  );
};
