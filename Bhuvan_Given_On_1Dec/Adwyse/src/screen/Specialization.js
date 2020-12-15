import React from 'react';
import '../assets/css/specialization.css';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import TextField from '@material-ui/core/TextField';

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },

  root: {
    '& > *': {
      margin: theme.spacing(1),
      margin: '14px',
      width: '340px',
      height: '50px',
    },
  },
}));

export default function Specialization() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    // <div className="card2r">
    <div
      style={modalStyle}
      className={classes.paper}
      style={{ height: '587px', width: '378px', top: '6%', left: '2%' }}
    >
      {/* <h2 id="simple-modal-title"></h2> */}

      {/* closeicon */}
      <div
        className="closeiconr"
        style={{ display: 'flex', justifyContent: 'space-around' }}
      ></div>

      {/* label */}
      <div className="textuser1r">
        <label className="image1r">
          <span className="text12r">Specialisation</span>
        </label>
      </div>

      {/* paragraph */}
      <div
        className="parar"
        style={{ display: 'flex', justifyContent: 'center' }}
      >
        Please select your specialisation so your<br></br> patients can connect
        with you easily.
      </div>

      {/*input filled search icon */}
      <TextField
        id="outlined-basic"
        label="Please enter your email or phone number"
        variant="outlined"
        style={{ width: '340px', marginTop: '16px' }}
      />
      <div className="searchiconr"></div>

      {/* 3cards in one row */}
     
          <div className="card3r">
            <label className="image22r">
              <span className="title32r">Cardiologist</span>
            </label>
          </div>
          <div className="card4r">
            <label className="image23">
              <span className="title32">Neurologist</span>
            </label>
          </div>
          <div className="card5r">
            <label className="image24r">
              <span className="title32r">ENT</span>
            </label>
          </div>
       

      {/* 3cards in one row */}
      
          <div className="card3r">
            <label className="image25r">
              <span className="title32r">Ophthalmologist</span>
            </label>
          </div>
          <div className="card4r">
            <label className="image26r">
              <span className="title32r">Dentist</span>
            </label>
          </div>
          <div className="card5r">
            <label className="image27r">
              <span className="title32r">Orthopedic</span>
            </label>
          </div>
       

      {/* 3cards in one row */}
     
          <div className="card3r">
            <label className="image28r">
              <span className="title32r">pulmonologist</span>
            </label>
          </div>
          <div className="card4r">
            <label className="image29r">
              <span className="title32r">Urologist</span>
            </label>
          </div>
          <div className="card5r">
            <label className="image30r">
              <span className="title32r">Neurosurgeon</span>
            </label>
          </div>
       

      {/* caurosel indicators */}
      <div className="indicatorsr"> </div>
      <div className="indicators1r"> </div>
      <div className="indicators2r"> </div>
      <div className="indicators3r"> </div>

      {/* </div> */}

      {/* <SimpleModal /> */}
    </div>
  );

  return (
    <form className="cardr">
      {/* arrow */}
      <div className="header00"></div>

      {/* logo */}
      <div className="header100"></div>

      {/* small title */}
      <div className="subtitle00">Lets get started!</div>

      {/* label */}
      <div className="textuser00">
        <label className="images00">
          <span className="text00"> Email/Phone Number</span>
        </label>
      </div>

      <TextField
        id="outlined-basic"
        label="Please enter your email or phone number"
        variant="outlined"
        style={{ width: '340px', marginTop: '16px' }}
      />
      {/* <br></br>
      <br></br>
<span className="p-float-label">
               <InputText id="username" value={this.state.value2} onChange={(e) => this.setState({value2: e.target.value})} />
               <label htmlFor="username">Please enter your email or phone number</label>
           </span> */}

      {/* text with anchortag */}
      <div className="regtext00">
        Don’t have an account?
        <span className="anch00">Register Now</span>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button type="button" onClick={handleOpen}>
          Open Modal
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      </div>
    </form>
  );
}
