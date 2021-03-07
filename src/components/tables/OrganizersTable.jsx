import React from 'react';
import { Col, Row, Table } from 'react-bootstrap';

// icons
import { Icon2 } from '../../assets/images/icon2';

const playersList = [
  { key: '1', pic: require('../../assets/images/face1.svg').default },
  { key: '2', pic: require('../../assets/images/face2.svg').default },
  { key: '3', pic: require('../../assets/images/face3.svg').default },
  { key: '4', pic: require('../../assets/images/face4.svg').default },
  { key: '5', pic: require('../../assets/images/face5.svg').default },
];

export const OrganizersTable = () => {
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
              Games Oganized
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light'>
              Distinct Centre
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light'>
              Distinct Player
            </th>
            <th className='border-top-0 text-center bg-primary-lighter im-text-primary font-weight-light rounded-right-xl'>
              Level
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
              <td className='text-center py-4'>65</td>
              <td className='text-center py-4'>72</td>
              <td className='text-center py-4'>281</td>
              <td className='text-center py-3'>
                <span className='badge badge-success px-3 py-2 rounded-pill'>
                  <div className='d-flex align-items-center justify-content-center'>
                    <Icon2 className='im-text-primary' />
                    <span className='ml-1'>God</span>
                  </div>
                </span>
              </td>
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
                className='object-cover rounded-circle border shadow-sm'
              />
            </span>
            <span className='font-weight-bold'> Mark Otto</span>
          </div>
          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>
                  Games Oganized
                </span>
              </div>
            </Col>
            <Col xs={6}>
              <div>
                <span className='font-weight-bold text-capitalize'>63</span>
              </div>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>
                  Distinct Centre
                </span>
              </div>
            </Col>
            <Col xs={6}>
              <div className='d-flex align-items-center'>
                <span className='font-weight-bold'>56</span>
              </div>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>
                  Distinct Player
                </span>
              </div>
            </Col>
            <Col xs={6}>
              <div className='d-flex align-items-center'>
                <span className='font-weight-bold'>1.465</span>
              </div>
            </Col>
          </Row>

          <Row className='mt-3'>
            <Col xs={6}>
              <div>
                <span className='im-text-primary text-capitalize'>Level</span>
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
        </section>
      ))}
    </>
  );
};
