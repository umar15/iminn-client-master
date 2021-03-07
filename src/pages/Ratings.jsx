import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import ReactStars from 'react-rating-stars-component';
import { IoIosArrowDown, IoIosArrowUp } from 'react-icons/io';
import { AiFillStar } from 'react-icons/ai';

const ratingChanged = (newRating) => {
  console.log(newRating);
};

export const Ratings = () => {
  const [toggleOne, setToggleOne] = useState(true);
  const [toggleTwo, setToggleTwo] = useState(false);
  const [toggleThree, setToggleThree] = useState(false);
  return (
    <main className='container mb-5 pb-5'>
      <div className='px-md-3'>
        <h4 className='font-weight-bold mb-4 text-dark'>Rate People</h4>
        <Row>
          <Col>
            <div>
              <section className='rounded-xl bg-white p-4 mb-4'>
                <div className='d-flex align-items-baseline'>
                  <div>
                    <span className='mr-1 mr-md-3'>
                      <img
                        src={require('../assets/images/face1.svg').default}
                        alt='pic'
                        height={60}
                        width={60}
                        className='rounded-circle border shadow-sm object-cover'
                      />
                    </span>
                    <span className='font-weight-bold h6 mb-0'>Mark Otto</span>
                  </div>
                  <div className='ml-auto'>
                    <Button
                      onClick={() => setToggleOne(!toggleOne)}
                      type='button'
                      block
                      variant='link'
                      className='p-0 d-flex align-items-center'
                    >
                      <span className='font-weight-bold mr-2'>Rate</span>
                      {toggleOne ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </Button>
                  </div>
                </div>
              </section>

              {toggleOne ? (
                <section className='rounded-xl bg-white pb-4 px-4 pt-2 mb-4'>
                  <div className='mb-4 d-flex justify-content-between align-items-center'>
                    <span>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={40}
                        color='#ddd'
                        activeColor='#ff8252'
                      />
                    </span>
                    <span className='small font-weight-bold text-black-50'>
                      5th December 2020
                    </span>
                  </div>
                  <Form>
                    <Form.Control
                      className='p-3'
                      as='textarea'
                      rows={2}
                      placeholder='Review Message'
                    />
                    <div className='mt-4 text-right'>
                      <Button
                        variant='three'
                        className='rounded-pill py-3 px-5'
                      >
                        Rate Player
                      </Button>
                    </div>
                  </Form>
                </section>
              ) : null}
            </div>

            <div>
              <section className='rounded-xl bg-white p-4 mb-4'>
                <div className='d-flex align-items-baseline'>
                  <div>
                    <span className='mr-1 mr-md-3'>
                      <img
                        src={require('../assets/images/face4.svg').default}
                        alt='pic'
                        height={60}
                        width={60}
                        className='rounded-circle border shadow-sm object-cover'
                      />
                    </span>
                    <span className='font-weight-bold h6 mb-0'>
                      Abram Passaquindici
                    </span>
                  </div>
                  <div className='ml-auto'>
                    <Button
                      onClick={() => setToggleTwo(!toggleTwo)}
                      type='button'
                      block
                      variant='link'
                      className='p-0 d-flex align-items-center'
                    >
                      <span className='font-weight-bold mr-2'>Rate</span>
                      {toggleTwo ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </Button>
                  </div>
                </div>
              </section>

              {toggleTwo ? (
                <section className='rounded-xl bg-white pb-4 px-4 pt-2 mb-4'>
                  <div className='mb-4 d-flex justify-content-between align-items-center'>
                    <span>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={40}
                        color='#ddd'
                        activeColor='#ff8252'
                      />
                    </span>
                    <span className='small font-weight-bold text-black-50'>
                      5th December 2020
                    </span>
                  </div>
                  <Form>
                    <Form.Control
                      className='p-3'
                      as='textarea'
                      rows={2}
                      placeholder='Review Message'
                    />
                    <div className='mt-4 text-right'>
                      <Button
                        variant='three'
                        className='rounded-pill py-3 px-5'
                      >
                        Rate Player
                      </Button>
                    </div>
                  </Form>
                </section>
              ) : null}
            </div>

            <div>
              <section className='rounded-xl bg-white p-4 mb-4'>
                <div className='d-flex align-items-baseline'>
                  <div>
                    <span className='mr-1 mr-md-3'>
                      <img
                        src={require('../assets/images/face5.svg').default}
                        alt='pic'
                        height={60}
                        width={60}
                        className='rounded-circle border shadow-sm object-cover'
                      />
                    </span>
                    <span className='font-weight-bold h6 mb-0'>
                      Jakob Workman
                    </span>
                  </div>
                  <div className='ml-auto'>
                    <Button
                      onClick={() => setToggleThree(!toggleThree)}
                      type='button'
                      block
                      variant='link'
                      className='p-0 d-flex align-items-center'
                    >
                      <span className='font-weight-bold mr-2'>Rate</span>
                      {toggleThree ? <IoIosArrowUp /> : <IoIosArrowDown />}
                    </Button>
                  </div>
                </div>
              </section>

              {toggleThree ? (
                <section className='rounded-xl bg-white pb-4 px-4 pt-2 mb-4'>
                  <div className='mb-4 d-flex justify-content-between align-items-center'>
                    <span>
                      <ReactStars
                        count={5}
                        onChange={ratingChanged}
                        size={40}
                        color='#ddd'
                        activeColor='#ff8252'
                      />
                    </span>
                    <span className='small font-weight-bold text-black-50'>
                      5th December 2020
                    </span>
                  </div>
                  <Form>
                    <Form.Control
                      className='p-3'
                      as='textarea'
                      rows={2}
                      placeholder='Review Message'
                    />
                    <div className='mt-4 text-right'>
                      <Button
                        variant='three'
                        className='rounded-pill py-3 px-5'
                      >
                        Rate Player
                      </Button>
                    </div>
                  </Form>
                </section>
              ) : null}
            </div>
          </Col>
          <Col xl={4}>
            <section className='rounded-xl bg-white p-4 mb-4'>
              <h5 className='mb-4'>
                <small className='font-weight-bolder text-dark text-capitalize'>
                  My Ratings
                </small>
              </h5>
              <div>
                <div className='text-capitalize im-text-primary small mb-3'>
                  This Week
                </div>
                <div>
                  <div className='d-flex align-items-center mb-3'>
                    <div className='mr-3'>
                      <img
                        src={require('../assets/images/face4.svg').default}
                        alt='pic'
                        height={60}
                        width={60}
                        className='rounded-circle border shadow-sm object-cover'
                      />
                    </div>
                    <div>
                      <h6 className='font-weight-bold text-dark text-capitalize'>
                        Alfredo Rhielden
                      </h6>
                      <span>
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar size='18' color='#ddd' className='mr-1' />
                      </span>
                    </div>
                  </div>
                  <p>
                    <small>
                      Hope we can play again bro, good game yesterday. Let’s
                      plan another match and I will ask my friends to join us.
                      Stay healthy bro!
                    </small>
                  </p>
                </div>
              </div>

              <div>
                <div className='text-capitalize im-text-primary small mb-3'>
                  This Month
                </div>
                <div>
                  <div className='d-flex align-items-center mb-3'>
                    <div className='mr-3'>
                      <img
                        src={require('../assets/images/face5.svg').default}
                        alt='pic'
                        height={60}
                        width={60}
                        className='rounded-circle border shadow-sm object-cover'
                      />
                    </div>
                    <div>
                      <h6 className='font-weight-bold text-dark text-capitalize'>
                        Talan Rosser
                      </h6>
                      <span>
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                      </span>
                    </div>
                  </div>
                  <p>
                    <small>
                      Good game bro, hope we can meet again and drink coffee at
                      the coffeeshop haha!
                    </small>
                  </p>
                </div>

                <div>
                  <div className='d-flex align-items-center mb-3'>
                    <div className='mr-3'>
                      <img
                        src={require('../assets/images/face3.svg').default}
                        alt='pic'
                        height={60}
                        width={60}
                        className='rounded-circle border shadow-sm object-cover'
                      />
                    </div>
                    <div>
                      <h6 className='font-weight-bold text-dark text-capitalize'>
                        Talan Rosser
                      </h6>
                      <span>
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                        <AiFillStar
                          size='18'
                          color='#ff8252'
                          className='mr-1'
                        />
                      </span>
                    </div>
                  </div>
                  <p>
                    <small>Well played bro, thanks for the time!</small>
                  </p>
                </div>
              </div>
            </section>
          </Col>
        </Row>
      </div>
    </main>
  );
};
