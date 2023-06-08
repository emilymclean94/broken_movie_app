import React, { useState } from 'react';
import "./MovieAPI.css";
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';

const API_IMG = 'https://image.tmdb.org/t/p/w500/';

const styles = ({ theme }) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
});

const MovieBox = ({ title, poster_path, vote_average, release_date, overview }) => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
  };

  return (
    <div className="card text-center bg-secondary mb-3">
      <div className="card-body">
        <img className="card-img-top" src={API_IMG + poster_path} alt="movies" />
        <div className="card-body">
          <button type="button" className="btn btn-dark" onClick={handleShow}>
            View More
          </button>
          <Modal
            className={styles.modal}
            open={show}
            onClose={handleClose}
            aria-labelledby="modal-title"
            aria-describedby="modal-description"
          >
            <div className={styles.paper}>
              <img className="card-img-top" style={{ width: '14rem' }} src={API_IMG + poster_path} alt="movie" />
              <h3>{title}</h3>
              <h4>TMDb: {vote_average}</h4>
              <h5>Release Date: {release_date}</h5>
              <br />
              <h6>Overview</h6>
              <p>{overview}</p>
              <Button variant="contained" color="secondary" onClick={handleClose}>
                Close
              </Button>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default MovieBox;
