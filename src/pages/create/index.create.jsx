import { Button, Fab, TextField } from '@material-ui/core';
import React, { useState } from 'react';
import FileBase from 'react-file-base64';
import styles from './index.module.scss';
import { useNavigate } from 'react-router-dom';
const CreateEvent = ({ eventData, setEventData }) => {
  const [event, setEvent] = useState(eventData?.event);

  const handleChage = (e) => {
    setEvent({ ...event, [e.target.name]: e.target.value });
  };

  const navigate = useNavigate();
  const handleCreateEvent = () => {
    setEventData({ ...eventData, event });
    navigate('/event');
  };

  return (
    <>
      <div className={styles.wrapper}>
        <p className={styles.titletext}>Enter your event details</p>

        <div className={styles.formContainer}>
          <TextField
            name='eventName'
            variant='outlined'
            label='Event Name'
            style={{ color: 'black !important' }}
            value={event?.eventName}
            onChange={(e) => handleChage(e)}
          />
          <TextField
            name='hostName'
            variant='outlined'
            label='Host Name'
            style={{ color: 'black !important' }}
            value={event?.hostName}
            onChange={(e) => handleChage(e)}
          />
          <TextField
            name='location'
            variant='outlined'
            label='Location'
            style={{ color: 'black !important' }}
            value={event?.location}
            onChange={(e) => handleChage(e)}
          />

          <TextField
            name='startTime'
            label='Start Time'
            type='datetime-local'
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={event?.startTime}
            onChange={(e) => handleChage(e)}
          />
          <TextField
            name='endTime'
            label='End Time'
            type='datetime-local'
            sx={{ width: 250 }}
            InputLabelProps={{
              shrink: true,
            }}
            value={event?.endTime}
            onChange={(e) => handleChage(e)}
          />

          <div
            className={styles.fileInput}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Fab
              color='secondary'
              size='small'
              component='span'
              aria-label='add'
              variant='extended'
            >
              <FileBase
                type='file'
                mutiple={false}
                onDone={({ base64 }) =>
                  setEvent({ ...event, photoUrl: base64 })
                }
              />
            </Fab>
          </div>
        </div>

        <Button
          className={styles.buttonSubmit}
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          fullWidth
          style={{ width: '20%' }}
          onClick={handleCreateEvent}
        >
          Next
        </Button>
      </div>
    </>
  );
};

export default CreateEvent;
