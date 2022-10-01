import { Button } from '@material-ui/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {
  PRIMARY_SPAN_COLOR,
  PRIMARY_TEXT_COLOR,
  SECONDARY_TEXT_COLOR,
} from '../../assests/color';
import { HOME_PAGE_IMG_URL } from '../classes/constant';
import styles from './idnex.module.scss';
const Home = ({ eventData }) => {
  const navigate = useNavigate();
  const handleCreateEvent = () => {
    navigate('/create');
  };

  return (
    <div className={styles.parentContainer}>
      <div className={styles.upperContainer}>
        <h1 style={{ color: PRIMARY_TEXT_COLOR, textAlign: 'center' }}>
          Imagine if{' '}
          <span style={{ color: PRIMARY_SPAN_COLOR, textAlign: 'center' }}>
            <br />
            Snapchat
            <br />
          </span>
          had events.
        </h1>
        <h5 style={{ color: SECONDARY_TEXT_COLOR, textAlign: 'center' }}>
          Easily host and share events with your friends across any social
          media.
        </h5>
      </div>
      <div className={styles.lowerContainer}>
        <div className={styles.card}>
          <img src={HOME_PAGE_IMG_URL} alt='home ' />
        </div>
        <Button
          className={styles.buttonSubmit}
          onClick={handleCreateEvent}
          color='primary'
          size='large'
          type='submit'
        >
          <p>Create my event</p>
        </Button>
      </div>
    </div>
  );
};

export default Home;
