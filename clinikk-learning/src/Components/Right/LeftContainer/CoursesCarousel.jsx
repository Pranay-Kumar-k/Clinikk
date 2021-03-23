import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import MobileStepper from '@material-ui/core/MobileStepper';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Avatar } from '@material-ui/core';
import CircularStatic from './CircularProgress';

const tutorialSteps = [
  {
    label: 'San Francisco ',
    imgPath:
      'https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bird',
    imgPath:
      'https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Bali, Indonesia',
    imgPath:
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250&q=80',
  },
  {
    label: 'NeONBRAND Digital Marketing',
    imgPath:
      'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&w=400&h=250&q=60',
  },
  {
    label: 'Goč, Serbia',
    imgPath:
      'https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60',
  },
];

const useStyles = makeStyles((theme) => ({
  root: {
    display:"flex",
    flexDirection:"row",
    height:50
},
header: {
    width:"70%",
    alignItems: 'center',
    display: 'flex',
    flexDirection:"row",
    background: "#F5F5F7",
    borderRadius: 14
  },
  img: {
    overflow: 'hidden',
    display: 'block',
    padding:5,
    width:"15%",
  },
  title:{
      width:"55%",
      // overflowY:"hidden"
  },
  continue:{
    background: "#0C0B0B",
    color:"white",
    width:"120px",
    marginLeft:20
  }
}));

const CoursesCarousel = () => {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    if(activeStep === maxSteps-1) {
        setActiveStep(0)
    } 
    console.log(activeStep,maxSteps)
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    if(activeStep === 0) {
        setActiveStep(maxSteps-1)
    }
    console.log(activeStep)

  };

  return (
    <div className={classes.root}>
      <Paper square elevation={0} className={classes.header}>
        <Avatar
            className={classes.img}
            src={tutorialSteps[activeStep].imgPath}
            alt={tutorialSteps[activeStep].label}
        />
        <Typography className={classes.title}>{tutorialSteps[activeStep].label}</Typography>
        <CircularStatic />
        <Button className={classes.continue}>Continue</Button>
      </Paper>
        <div className={classes.stepper}>
            <MobileStepper
            position="static"
            nextButton={
            <Button size="small" onClick={handleNext}>
                <img src="https://cdn4.iconfinder.com/data/icons/rounded-line-icons/16/icon_right_arrow_circle_rounded-512.png" alt="next" width="20px"/>
            </Button>
            }
            backButton={
            <Button size="small" onClick={handleBack} >
                <img src="https://cdn0.iconfinder.com/data/icons/pixon-1/24/arrow_right_left_back_circle-512.png" alt="back" width="20px"/>
            </Button>
            }
        />
        </div>
    </div>
  );
}

export default CoursesCarousel
