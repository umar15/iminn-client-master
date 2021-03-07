import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { AiFillStar, AiOutlinePlus, AiOutlineStar } from 'react-icons/ai';
import { BiBookContent, BiTimeFive } from 'react-icons/bi';

import { Icon2 } from '../assets/images/icon2';
import { Icon3 } from '../assets/images/icon3';

export const Profile = () => {
  return (
    <main className='container mb-5 pb-5'>
      <div className='px-md-3'>
        <h4 className='font-weight-bold mb-4 text-dark'>Profile</h4>
        <Row>
          <Col>
            <section className='rounded-xl bg-white p-4 mb-4'>
              <div className='text-center d-md-none'>
                <Button variant='primary-1' className='rounded-pill py-1 mb-4'>
                  <Icon2 className='h-w-20px mr-1' />
                  <span className='small'>Legend</span>
                </Button>
              </div>

              <div className='mb-md-4 d-flex flex-column flex-md-row justify-content-between'>
                <div className='d-flex flex-column flex-md-row align-items-center mb-3'>
                  <Button
                    variant='two'
                    className='btn rounded-pill d-flex align-items-center justify-content-center p-3 order-0'
                  >
                    <AiOutlinePlus size={30} />
                  </Button>

                  <div className='font-weight-bold h3 mx-md-3 mb-0 order-last order-md-2'>
                    John Smith
                  </div>
                  <Button
                    variant='two'
                    className='btn rounded-pill d-flex align-items-center justify-content-center py-0 px-2 bg-white order-2 mt-n3 mb-3 mt-md-0 mb-md-0'
                  >
                    <AiFillStar color='#FF8252' />
                    <span className='text-black-50'>4.8</span>
                  </Button>
                </div>
                <div className='text-center'>
                  <Button
                    variant='four'
                    className='rounded-pill py-3 px-5 border-0 mb-3'
                  >
                    Edit Profile
                  </Button>
                </div>
              </div>
              <div className='row mx-0 justify-content-around justify-content-md-between'>
                <div className='text-center mt-1 mt-lg-0'>
                  <h5 className='mb-3 font-weight-bold im-text-primary'>261</h5>
                  <span className='text-black-50 font-weight-bold text-capitalize'>
                    Followers
                  </span>
                </div>

                <div className='text-center mt-1 mt-lg-0'>
                  <h5 className='mb-3 font-weight-bold im-text-primary'>182</h5>
                  <span className='text-black-50 font-weight-bold text-capitalize'>
                    Following
                  </span>
                </div>

                <div className='text-center mt-1 mt-lg-0'>
                  <h5 className='mb-3 font-weight-bold im-text-primary'>371</h5>
                  <span className='text-black-50 font-weight-bold text-capitalize'>
                    Games played
                  </span>
                </div>

                <div className='text-center d-none d-md-block'>
                  <Button
                    variant='primary-1'
                    className='rounded-pill py-1 mb-2'
                  >
                    <Icon2 className='h-w-20px mr-1' />
                    <span className='small'>Legend</span>
                  </Button>
                  <div className='text-black-50 font-weight-bold text-capitalize'>
                    Level
                  </div>
                </div>
              </div>
            </section>
            <section className='rounded-xl bg-white p-4 mb-4'>
              <div className='d-flex justify-content-between mb-4'>
                <span className='text-capitalize font-weight-bold'>
                  Rating statistic
                </span>
                <span className='text-capitalize text-black-50 small'>
                  Last 6 months
                </span>
              </div>
              <Row className='flex-column flex-lg-row'>
                <Col lg={1}>
                  <div className='ratings-star-container d-flex flex-row-reverse flex-lg-column justify-content-between mb-4 mb-lg-0'>
                    <div className='d-flex align-items-center flex-column flex-lg-row'>
                      <AiFillStar size={14} color='#9999' />
                      <span className='mt-1 mt-lg-0 ml-lg-1 small'>5</span>
                    </div>
                    <div className='d-flex align-items-center flex-column flex-lg-row'>
                      <AiFillStar size={14} color='#9999' />
                      <span className='mt-1 mt-lg-0 ml-lg-1 small'>4</span>
                    </div>
                    <div className='d-flex align-items-center flex-column flex-lg-row'>
                      <AiFillStar size={14} color='#9999' />
                      <span className='mt-1 mt-lg-0 ml-lg-1 small'>3</span>
                    </div>
                    <div className='d-flex align-items-center flex-column flex-lg-row'>
                      <AiFillStar size={14} color='#9999' />
                      <span className='mt-1 mt-lg-0 ml-lg-1 small'>2</span>
                    </div>
                    <div className='d-flex align-items-center flex-column flex-lg-row'>
                      <AiFillStar size={14} color='#9999' />
                      <span className='mt-1 mt-lg-0 ml-lg-1 small'>1</span>
                    </div>
                  </div>
                </Col>
                <Col>
                  <section className='row mx-0 justify-content-between flex-column flex-lg-row'>
                    <main className='d-flex flex-lg-column flex-row-reverse align-items-center mb-4 mb-lg-0'>
                      <div className='ratings-statistic'>
                        <span className='bar'></span>
                        <span className='box'>
                          <AiFillStar size={16} color='#FF8252' />
                          <span className='ml-1'>4.8</span>
                        </span>
                      </div>
                      <div className='mr-3 mr-lg-0 mt-lg-2 text-capitalize small'>
                        Jan
                      </div>
                    </main>
                    <main className='d-flex flex-lg-column flex-row-reverse align-items-center mb-4 mb-lg-0'>
                      <div className='ratings-statistic'>
                        <span className='bar'></span>
                        <span className='box'>
                          <AiFillStar size={16} color='#FF8252' />
                          <span className='ml-1'>4.8</span>
                        </span>
                      </div>
                      <div className='mr-3 mr-lg-0 mt-lg-2 text-capitalize small'>
                        Feb
                      </div>
                    </main>
                    <main className='d-flex flex-lg-column flex-row-reverse align-items-center mb-4 mb-lg-0'>
                      <div className='ratings-statistic'>
                        <span className='bar'></span>
                        <span className='box'>
                          <AiFillStar size={16} color='#FF8252' />
                          <span className='ml-1'>4.8</span>
                        </span>
                      </div>
                      <div className='mr-3 mr-lg-0 mt-lg-2 text-capitalize small'>
                        Mar
                      </div>
                    </main>
                    <main className='d-flex flex-lg-column flex-row-reverse align-items-center mb-4 mb-lg-0'>
                      <div className='ratings-statistic'>
                        <span className='bar'></span>
                        <span className='box'>
                          <AiFillStar size={16} color='#FF8252' />
                          <span className='ml-1'>4.5</span>
                        </span>
                      </div>
                      <div className='mr-3 mr-lg-0 mt-lg-2 text-capitalize small'>
                        Apr
                      </div>
                    </main>
                    <main className='d-flex flex-lg-column flex-row-reverse align-items-center mb-4 mb-lg-0'>
                      <div className='ratings-statistic'>
                        <span className='bar'></span>
                        <span className='box'>
                          <AiFillStar size={16} color='#FF8252' />
                          <span className='ml-1'>4.8</span>
                        </span>
                      </div>
                      <div className='mr-3 mr-lg-0 mt-lg-2 text-capitalize small'>
                        May
                      </div>
                    </main>
                    <main className='d-flex flex-lg-column flex-row-reverse align-items-center mb-4 mb-lg-0'>
                      <div className='ratings-statistic'>
                        <span className='bar'></span>
                        <span className='box'>
                          <AiFillStar size={16} color='#FF8252' />
                          <span className='ml-1'>4.8</span>
                        </span>
                      </div>
                      <div className='mr-3 mr-lg-0 mt-lg-2 text-capitalize small'>
                        Jun
                      </div>
                    </main>
                  </section>
                </Col>
              </Row>
            </section>
          </Col>
          <Col xl={3}>
            <section className='rounded-xl bg-white p-3 mb-4'>
              <div className='d-flex align-items-center'>
                <div className='mr-3'>
                  <Button
                    variant='four'
                    className='rounded-pill border-0 p-0'
                    style={{ height: 50, width: 50 }}
                  >
                    <BiTimeFive size={25} />
                  </Button>
                </div>
                <div className='mt-1 mt-xl-0 d-flex align-items-center flex-xl-column align-items-xl-baseline'>
                  <div className='font-weight-bold im-text-primary mr-3 mr-xl-0'>
                    16
                  </div>
                  <span className='text-black-50 font-weight-bold text-capitalize small'>
                    Pending Games
                  </span>
                </div>
              </div>
            </section>

            <section className='rounded-xl bg-white p-3 mb-4'>
              <div className='d-flex align-items-center'>
                <div className='mr-3'>
                  <Button
                    variant='four'
                    className='rounded-pill border-0 p-0'
                    style={{ height: 50, width: 50 }}
                  >
                    <AiOutlineStar size={25} />
                  </Button>
                </div>
                <div className='mt-1 mt-xl-0 d-flex align-items-center flex-xl-column align-items-xl-baseline'>
                  <div className='font-weight-bold im-text-primary mr-3 mr-xl-0'>
                    25
                  </div>
                  <span className='text-black-50 font-weight-bold text-capitalize small'>
                    Players need to Rated
                  </span>
                </div>
              </div>
            </section>

            <section className='rounded-xl bg-white p-3 mb-4'>
              <div className='d-flex align-items-center'>
                <div className='mr-3'>
                  <Button
                    variant='four'
                    className='rounded-pill border-0 p-0'
                    style={{ height: 50, width: 50 }}
                  >
                    <Icon3 />
                  </Button>
                </div>
                <div className='mt-1 mt-xl-0 d-flex align-items-center flex-xl-column align-items-xl-baseline'>
                  <div className='font-weight-bold im-text-primary mr-3 mr-xl-0'>
                    982
                  </div>
                  <span className='text-black-50 font-weight-bold text-capitalize small'>
                    My credits
                  </span>
                </div>
              </div>
            </section>

            <section className='rounded-xl bg-white p-3 mb-4'>
              <div className='d-flex align-items-center'>
                <div className='mr-3'>
                  <Button
                    variant='four'
                    className='rounded-pill border-0 p-0'
                    style={{ height: 50, width: 50 }}
                  >
                    <BiBookContent size={25} />
                  </Button>
                </div>
                <div className='mt-1 mt-xl-0 d-flex align-items-center flex-xl-column align-items-xl-baseline'>
                  <div className='font-weight-bold im-text-primary mr-3 mr-xl-0 text-capitalize'>
                    Striker
                  </div>
                  <span className='text-black-50 font-weight-bold text-capitalize small'>
                    Most played role
                  </span>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </div>
    </main>
  );
};
