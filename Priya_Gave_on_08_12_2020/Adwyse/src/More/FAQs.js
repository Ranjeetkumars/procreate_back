import React from 'react';

import '../assets/css/FAQs.css'
import '../App.css';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      margin: '14px',
      width: '340px',
      height:"50px"
    },
  },
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
    <form className="card"  style={{height:'896px'}}>
   <br></br>
{/* arrow */}
<div className="fqasarrow"></div> 
     <div className="faqsname">FAQ’s</div>
     <br></br>
<div className="helptext">How can we help you ?</div>
<br></br>
<div className="asktext">Ask a question or find answers to all the <br></br>frequently asked questions!</div>
<br></br>

      <TextField id="outlined-basic" label="Ask us any question" variant="outlined" 
      style={{ width:"340px",marginLeft:'30px' }}/>
  
       {/* <div className="successarrow"></div> */}

         <div className="tsuccess">
          <label />
          <button className="successarrow" type="submit">
          <div className="rightarrow"></div>
          </button>
        </div>

<br></br>
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example"
         style={{color:'#000',backgroundColor:'#fff',padding:'0px'}}>
          <Tab label="All Queries" {...a11yProps(0)}  style={{marginLeft:'-30px'}} />
          <Tab label="Payments" {...a11yProps(1)}  style={{marginLeft:'-55px'}}/>
          <Tab label="Appointments" {...a11yProps(2)}  style={{marginLeft:'-35px'}} />
          <Tab label="Video Calling" {...a11yProps(3)}  style={{marginLeft:'-30px'}}/>
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
           <div className="q1">
           What is Adwese and how is it helping<br></br> me connect  with my patients ?
          <div className="setplus"></div>
           </div> 
           <br></br>
           <hr></hr>
           <br></br>
           <div className="q2">
           Is all my information safe and encrypted  <br></br>in the app ?
           <div className="setplus"></div>
           </div> 
           <br></br>
           <hr></hr>
           <br></br>
           <div className="q3">
           Unable to view my appointments in <br></br> my profile
           <div className="setplus"></div>
           </div>
           <br></br>
           <hr></hr>
           <br></br>
          <div className="q4">
          Can I change my availability schedule <br></br> anytime ?
          <div className="setplus"></div>
           </div>
           <br></br>
           <hr></hr>
           <br></br>
            <div className="q5">
            Can I connect with my patients only with <br></br> my clinic number ?
            <div className="setplus"></div>
           </div>
           <br></br>
 <hr></hr>
 <br></br>  
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Three
      </TabPanel>
    </div>
    </form>
    </div>
  );
}
