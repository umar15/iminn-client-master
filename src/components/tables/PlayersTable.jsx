import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

// icons
import { AiFillStar } from 'react-icons/ai';
import { Icon2 } from '../../assets/images/icon2';

const playersList = [
  { key: '1', pic: require('../../assets/images/face1.svg').default },
  { key: '2', pic: require('../../assets/images/face2.svg').default },
  { key: '3', pic: require('../../assets/images/face3.svg').default },
  { key: '4', pic: require('../../assets/images/face4.svg').default },
  { key: '5', pic: require('../../assets/images/face5.svg').default },
];

export const PlayersTable = () => {
  return (
    <>
      <Table hover className='shadow-sm rounded-xl small d-none d-lg-table'>
        <thead>
          <tr className='text-capitalize'>
            <th className='border-top-0 bg-primary-lighter rounded-left-xl im-text-primary font-weight-light'></th>
            <th className='border-top-0 bg-primary-lighter im-text-primary font-weight-light'>
              Name
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light'>
              Games Played
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light'>
              Average Ratings
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light'>
              Credits
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light'>
              level
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light'>
              Role
            </th>
            <th className='border-top-0 bg-primary-lighter im-text-primary font-weight-light rounded-right-xl'>
              Age
            </th>
          </tr>
        </thead>
        <tbody className='font-weight-bold'>
          {playersList.map((value) => (
            <tr>
              <td className='py-2'>
                <div>
                  <span className='im-text-primary mr-3 h6 mb-0 font-weight-bold'>
                    {value.key}
                  </span>
                  <span>
                    <img
                      src={value.pic}
                      alt='pic'
                      height={50}
                      width={50}
                      className='object-cover rounded-circle border shadow-sm'
                    />
                  </span>
                </div>
              </td>
              <td className='py-4'>Mark Otto</td>
              <td className='text-center py-4'>148</td>
              <td className='text-center py-4'>
                <div className='d-flex align-items-center justify-content-center'>
                  <AiFillStar size={18} color='#ff8252' />
                  <span className='font-weight-bold ml-2'>4.8</span>
                </div>
              </td>
              <td className='text-center py-4'>1.892</td>
              <td className='text-center py-3'>
                <span className='badge badge-success px-3 py-2 rounded-pill'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <Icon2 className='im-text-primary' />
                    <span className='ml-1'>God</span>
                  </div>
                </span>
              </td>
              <td className='text-center py-4'>Striker</td>
              <td className='py-4'>23</td>
            </tr>
          ))}
        </tbody>
      </Table>
      {playersList.map((value) => (
        <section className='rounded-xl bg-white p-4 mb-4 d-lg-none'>
          <div>
            <span className='im-text-primary h6 mb-0 font-weight-bold'>
              {value.key}
            </span>
            <span className='mx-3'>
              <img
                src={value.pic}
                alt='pic'
                height={50}
                width={50}
                className='rounded-circle border shadow-sm object-cover'
              />
            </span>
            <span className='font-weight-bold'> Mark Otto</span>
          </div>
          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>
                  Games Played
                </span>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <span className='font-weight-bold text-capitalize'>148</span>
              </div>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>
                  Average Ratings
                </span>
              </div>
            </Col>
            <Col xs={6}>
              <div className='d-flex align-items-center'>
                <AiFillStar size={18} color='#ff8252' />
                <span className='font-weight-bold ml-2'>4.8</span>
              </div>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>Credits</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className='d-flex align-items-center'>
                <span className='font-weight-bold ml-2'>1.482</span>
              </div>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>level</span>
              </div>
            </Col>
            <Col xs={6}>
              <span className='badge badge-success px-3 py-2 rounded-pill'>
                <div className='d-flex align-items-center justify-content-center'>
                  <Icon2 className='im-text-primary' />
                  <span className='ml-1'>God</span>
                </div>
              </span>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>Role</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className='d-flex align-items-center'>
                <span className='font-weight-bold ml-2'>Striker</span>
              </div>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>Age</span>
              </div>
            </Col>
            <Col xs={6}>
              <div className='d-flex align-items-center'>
                <span className='font-weight-bold ml-2'>23</span>
              </div>
            </Col>
          </Row>
        </section>
      ))}
    </>
  );
};
