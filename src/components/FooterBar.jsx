import React from 'react';
import { NavLink } from 'react-router-dom';
import { AiOutlinePlus, AiOutlineStar, AiOutlineWindows } from 'react-icons/ai';
import { BiBookContent, BiStats } from 'react-icons/bi';

export const FooterBar = ({ location }) => {
  let hideFooterBar =
    location.pathname === '/role-select' ||
    location.pathname === '/create-game' ||
    location.pathname === '/game-success' ||
    location.pathname === '/404' ||
    location.pathname === '/join-success' ||
    location.pathname === '/login' ||   location.pathname === '/signup' ||
    location.pathname === '/join-game';
  return (
    <>
      {hideFooterBar ? (
        ''
      ) : (
        <div className='footer-bar p-3 d-block d-lg-none fixed-bottom mt-4'>
          <main className='small d-flex align-items-baseline'>
            <NavLink
              to='/'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <AiOutlineWindows size={18} />
              </span>
              <span className='small'>Dashboard</span>
            </NavLink>

            <NavLink
              to='/stats'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <BiStats size={18} />
              </span>
              <span className='small'>Stats</span>
            </NavLink>

            <NavLink
              to='/ratings'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <AiOutlineStar size={18} />
              </span>
              <span className='small'>Ratings</span>
            </NavLink>

            <NavLink
              to='/matches'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span>
                <BiBookContent size={18} />
              </span>
              <span className='small'>Matches</span>
            </NavLink>

            <NavLink
              to='/profile'
              type='button'
              className='btn btn-footer-bar p-0 w-100 text-left rounded-0 d-flex flex-column align-items-center'
            >
              <span
                className='btn-two rounded-pill d-flex align-items-center justify-content-center mb-1'
                style={{ height: 18, minWidth: 18 }}
              >
                <AiOutlinePlus size={11} />
              </span>
              <span className='small'>Profile</span>
            </NavLink>
          </main>
        </div>
      )}
    </>
  );
};
