import React, { useState } from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// icons
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { BiBookOpen, BiFilterAlt, BiTimeFive } from 'react-icons/bi';

import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { FiUsers } from 'react-icons/fi';

// images
import imageOne from '../assets/images/image-1.svg';
import imageTwo from '../assets/images/image-2.svg';
import face1 from '../assets/images/face1.svg';
import face2 from '../assets/images/face2.svg';
import face3 from '../assets/images/face3.svg';
import face4 from '../assets/images/face4.svg';
import face5 from '../assets/images/face5.svg';

const selectAreaArr = [
  { name: 'London', className: 'border-bottom' },
  { name: 'Northumbria', className: 'border-bottom' },
  { name: 'Mercia', className: 'border-bottom' },
  { name: 'Bristol', className: 'border-bottom' },
  { name: 'Manchester' },
];

export const Matches = () => {
  const [toggleOne, setToggleOne] = useState(false);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [gameFilter, setGameFilter] = useState(false);
  return (
    <main className='container mb-5 pb-5'>
      <div className='px-3'>
        <h4 className='font-weight-bold text-dark mb-4'>Weekly Games</h4>
        <Row>
          <Col>
            <section className='rounded-xl bg-white p-4 mb-4'>
              <div className='row mx-0 justify-content-center align-items-center'>
                <span
                  className='mr-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm'
                  style={{
                    width: 110,
                    height: 100,
                    backgroundColor: '#FFF3EE',
                  }}
                >
                  <img width='70%' height='70%' src={imageOne} alt='' />
                </span>
                <span>
                  <h6 className='font-weight-bold mb-2 mt-2 mt-sm-0'>
                    <span className='text-uppercase'>FCL</span>
                    <span className='mx-1'>vs</span>
                    <span className='text-uppercase'>FCV</span>
                  </h6>
                  <div className='small text-black-50'>5:00 pm, London</div>

                  <div className='d-flex mt-3'>
                    <span>
                      <img
                        className='rounded-circle object-cover'
                        width={30}
                        height={30}
                        src={face1}
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src={face2}
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src={face3}
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src={face4}
                        alt=''
                      />
                    </span>
                    <span
                      className='ml-n2 showing bg-white rounded-circle d-flex align-items-center justify-content-end'
                      style={{ width: 30, height: 30 }}
                    >
                      <img
                        className='rounded-circle object-cover'
                        width='93%'
                        height='93%'
                        src={face5}
                        alt=''
                      />
                    </span>
                  </div>
                </span>
                <span className='mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3'>
                  <Button
                    as={Link}
                    to='/join-game'
                    block
                    variant='three'
                    className='rounded-pill py-3 d-flex justify-content-center align-items-center'
                  >
                    Join Now
                  </Button>
                </span>
              </div>
            </section>

            <main>
              <div className='mb-4 d-flex'>
                <BiBookOpen color='#ff8252' size={20} className='mr-2' />
                <span className='font-weight-bold text-capitalize'>
                  Games Nearby
                </span>
              </div>
              <section className='rounded-xl bg-white p-4 mb-4 position-relative'>
                <div className='text-right mb-2 mb-md-0'>
                  <Button variant='link' className='p-0'>
                    <AiFillHeart color='#ff8252' size={26} />
                  </Button>
                </div>
                <div className='row mx-0 justify-content-center align-items-center'>
                  <span
                    className='mr-sm-2 mr-md-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm'
                    style={{
                      width: 220,
                      height: 180,
                      backgroundColor: '#FFF3EE',
                    }}
                  >
                    <img
                      className='rounded-xl object-cover'
                      width='100%'
                      height='100%'
                      src={imageTwo}
                      alt=''
                    />
                  </span>
                  <div className='text-center text-sm-left mt-3 mt-md-0'>
                    <h5 className='font-weight-bold mb-2'>
                      <span className='text-uppercase'>FCL</span>
                      <span className='mx-1'>vs</span>
                      <span className='text-uppercase'>FCV</span>
                    </h5>
                    <div className='small text-black-50 mb-2'>
                      Location: London
                    </div>
                    <div className='small text-black-50 mb-2'>
                      Ground: Middlesex
                    </div>
                    <div className='d-flex mt-3'>
                      <span className='mr-4 d-flex align-items-center'>
                        <BiTimeFive color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>4:00 pm</span>
                      </span>

                      <span className='d-flex align-items-center'>
                        <FiUsers color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>5 Players</span>
                      </span>
                    </div>
                  </div>
                  <span className='mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3'>
                    <Button
                      block
                      variant='three'
                      className='rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize'
                    >
                      More info
                    </Button>
                  </span>
                </div>
              </section>

              <section className='rounded-xl bg-white p-4 mb-4 position-relative'>
                <div className='text-right mb-2 mb-md-0'>
                  <Button variant='link' className='p-0'>
                    <AiOutlineHeart color='#ff8252' size={26} />
                  </Button>
                </div>
                <div className='row mx-0 justify-content-center align-items-center'>
                  <span
                    className='mr-sm-2 mr-md-4 d-flex align-items-center justify-content-center rounded-xl shadow-sm'
                    style={{
                      width: 220,
                      height: 180,
                      backgroundColor: '#FFF3EE',
                    }}
                  >
                    <img
                      className='rounded-xl object-cover'
                      width='100%'
                      height='100%'
                      src={imageTwo}
                      alt=''
                    />
                  </span>
                  <div className='text-center text-sm-left mt-3 mt-md-0'>
                    <h5 className='font-weight-bold mb-2'>
                      <span className='text-uppercase'>FCL</span>
                      <span className='mx-1'>vs</span>
                      <span className='text-uppercase'>FCV</span>
                    </h5>
                    <div className='small text-black-50 mb-2'>
                      Location: London
                    </div>
                    <div className='small text-black-50 mb-2'>
                      Ground: Middlesex
                    </div>
                    <div className='d-flex mt-3'>
                      <span className='mr-4 d-flex align-items-center'>
                        <BiTimeFive color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>4:00 pm</span>
                      </span>

                      <span className='d-flex align-items-center'>
                        <FiUsers color='#ff8252' size={18} />
                        <span className='text-black-50 ml-2'>5 Players</span>
                      </span>
                    </div>
                  </div>
                  <span className='mt-3 mt-md-0 ml-md-auto col-12 col-md-3 col-lg-4 col-xl-3'>
                    <Button
                      block
                      variant='three'
                      className='rounded-pill py-3 d-flex justify-content-center align-items-center text-capitalize'
                    >
                      More info
                    </Button>
                  </span>
                </div>
              </section>
            </main>
          </Col>
          <Col lg={4} className='d-none d-lg-block'>
            <div className='rounded-xl bg-white p-4 mb-4'>
              <div className='mb-4 d-flex align-items-center'>
                <BiFilterAlt size={22} className='mr-2 im-text-primary' />
                <span className='font-weight-bold text-capitalize'>
                  Game Filter
                </span>
              </div>

              <div className='mb-4'>
                <Button
                  onClick={() => setToggleOne(!toggleOne)}
                  type='button'
                  block
                  variant='outline-primary'
                  className='rounded-pill py-3 px-4 mt-3 d-flex align-items-center'
                >
                  <span className='font-weight-bold mr-auto'>
                    Recently Published
                  </span>
                  {toggleOne ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </Button>

                {toggleOne ? (
                  <div
                    className='rounded-xl bg-white p-4 mt-2 mb-4 d-flex flex-column shadow pos-filter'
                    onMouseLeave={() => setToggleOne(false)}
                  >
                    {selectAreaArr.map((value) => (
                      <div className={` ${value.className} py-2 mb-2`}>
                        <label class='checkbox-container'>
                          <span className='text-black-50'>{value.name}</span>
                          <input type='radio' name='radio' />
                          <span class='checkmark'></span>
                        </label>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>

              <div>
                <Button
                  onClick={() => setToggleTwo(!toggleTwo)}
                  type='button'
                  block
                  variant='outline-primary'
                  className='rounded-pill py-3 px-4 mt-3 d-flex align-items-center'
                >
                  <span className='font-weight-bold mr-auto'>London</span>
                  {toggleTwo ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </Button>

                {toggleTwo ? (
                  <div
                    className='rounded-xl bg-white p-4 mt-2 mb-4 d-flex flex-column shadow pos-filter'
                    onMouseLeave={() => setToggleTwo(false)}
                  >
                    {selectAreaArr.map((value) => (
                      <div className={` ${value.className} py-2 mb-2`}>
                        <label class='checkbox-container'>
                          <span className='text-black-50'>{value.name}</span>
                          <input type='radio' name='radio' />
                          <span class='checkmark'></span>
                        </label>
                      </div>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </Col>
        </Row>
      </div>

      {/* === */}

      {gameFilter ? (
        <div className='rounded-xl shadow bg-white p-4 mb-4 game-filter-on-small d-lg-none'>
          <div className='mb-4 d-flex align-items-center'>
            <BiFilterAlt size={22} className='mr-2 im-text-primary' />
            <span className='font-weight-bold text-capitalize'>
              Game Filter
            </span>
          </div>

          <div className='mb-4'>
            <Button
              onClick={() => setToggleOne(!toggleOne)}
              type='button'
              block
              variant='outline-primary'
              className='rounded-pill py-3 px-4 mt-3 d-flex align-items-center'
            >
              <span className='font-weight-bold mr-auto'>
                Recently Published
              </span>
              {toggleOne ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Button>

            {toggleOne ? (
              <div
                className='rounded-xl bg-white p-4 mt-2 mb-4 d-flex flex-column shadow pos-filter'
                onMouseLeave={() => setToggleOne(false)}
              >
                {selectAreaArr.map((value) => (
                  <div className={` ${value.className} py-2 mb-2`}>
                    <label class='checkbox-container'>
                      <span className='text-black-50'>{value.name}</span>
                      <input type='radio' name='radio' />
                      <span class='checkmark'></span>
                    </label>
                  </div>
                ))}
              </div>
            ) : null}
          </div>

          <div>
            <Button
              onClick={() => setToggleTwo(!toggleTwo)}
              type='button'
              block
              variant='outline-primary'
              className='rounded-pill py-3 px-4 mt-3 d-flex align-items-center'
            >
              <span className='font-weight-bold mr-auto'>London</span>
              {toggleTwo ? <IoIosArrowUp /> : <IoIosArrowDown />}
            </Button>

            {toggleTwo ? (
              <div
                className='rounded-xl bg-white p-4 mt-2 mb-4 d-flex flex-column shadow pos-filter'
                onMouseLeave={() => setToggleTwo(false)}
              >
                {selectAreaArr.map((value) => (
                  <div className={` ${value.className} py-2 mb-2`}>
                    <label class='checkbox-container'>
                      <span className='text-black-50'>{value.name}</span>
                      <input type='radio' name='radio' />
                      <span class='checkmark'></span>
                    </label>
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </div>
      ) : null}

      <button
        onClick={() => setGameFilter(!gameFilter)}
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
