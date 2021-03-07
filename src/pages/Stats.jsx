import React from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { BiFilterAlt } from 'react-icons/bi';
import { OrganizersTable } from '../components/tables/OrganizersTable';
import { PlayersTable } from '../components/tables/PlayersTable';

export const Stats = () => {
  const [tableShow, setTableShow] = useState('true');
  return (
    <main className='container mb-5 pb-5'>
      <div className='px-3'>
        <h4 className='font-weight-bold text-dark mb-4'>Statistic</h4>
        <div className='d-flex'>
          <Button
            onClick={() => setTableShow(true)}
            variant='four'
            className={
              tableShow
                ? `mr-3 px-4 border-0 rounded-pill active`
                : `mr-3 px-4 border-0 rounded-pill`
            }
          >
            Players
          </Button>

          <Button
            onClick={() => setTableShow(false)}
            variant='four'
            className={
              tableShow
                ? `mr-3 px-4 border-0 rounded-pill`
                : `mr-3 px-4 border-0 rounded-pill active`
            }
          >
            Organizers
          </Button>

          <Button
            variant='white'
            className='ml-3 px-4 rounded-pill d-none d-md-block ml-auto'
          >
            <div className='d-flex align-items-center'>
              <BiFilterAlt size={22} className='mr-2 im-text-primary' />
              <span className='font-weight-bold text-capitalize'>
                Filter City
              </span>
            </div>
          </Button>
        </div>
      </div>
      <div className='mt-4 px-3'>
        {tableShow ? <PlayersTable /> : <OrganizersTable />}
      </div>

      <button
        type='button'
        className='btn btn-white shadow rounded-pill d-flex align-items-center justify-content-center p-3 fixed-bottom d-lg-none'
        style={{ bottom: 100, left: '50%', transform: 'translateX(-50%)' }}
      >
        <div className='d-flex align-items-center'>
          <BiFilterAlt size={22} className='mr-2 im-text-primary' />
          <span className='font-weight-bold text-capitalize'>Game Filter</span>
        </div>
      </button>
    </main>
  );
};
