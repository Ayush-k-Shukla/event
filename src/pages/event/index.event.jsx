import React from 'react';
import { CAKE_IMG_URL } from '../classes/constant';
import styles from './index.module.scss';
import DateRangeOutlinedIcon from '@mui/icons-material/DateRangeOutlined';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Button } from '@material-ui/core';
import { Navigate, useNavigate } from 'react-router-dom';

const Event = ({ eventData }) => {
  const navigate = useNavigate();

  const handleEditEvent = () => {
    navigate('/create');
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.image}>
        <img src={eventData?.event?.photoUrl || CAKE_IMG_URL} alt='cake' />
      </div>

      <div className={styles.buttonSubmit}>
        <Button
          variant='contained'
          color='primary'
          size='medium'
          type='submit'
          fullWidth={false}
          onClick={handleEditEvent}
        >
          Edit Event
        </Button>
      </div>
      <div className={styles.information}>
        <div className={styles.title}>
          <p className={styles.titleHeading}>{eventData?.event?.eventName}</p>
          <p className={styles.titleSubHeading}>
            {`Hosted by `}
            {eventData?.event?.hostName}
          </p>
        </div>
        <div className={styles.date}>
          <DateRangeOutlinedIcon />
          <div className={styles.dates}>
            <p className={styles.starttime}>{eventData?.event?.startTime}</p>
            <p className={styles.endtime}>
              {'to '}
              {eventData?.event?.endTime}
            </p>
          </div>
        </div>
        <div className={styles.date}>
          <LocationOnOutlinedIcon />
          <div className={styles.dates}>
            <p className={styles.starttime}>Street name</p>
            <p className={styles.endtime}>{eventData?.event?.location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
