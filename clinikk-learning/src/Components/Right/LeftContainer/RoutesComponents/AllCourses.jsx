import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { Avatar, Button, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection:"row",
      margin:theme.spacing(2)
    },
    course:{
        display:'flex',
        flexDirection:"row",
        // border:"2px solid black",
        height:"60px",
        width:"100%",
        padding:6,
        alignItems:'center',
        background: "#F5F5F7"
    },
    img: {
        overflow: 'hidden',
        display: 'block',
        padding:10,
        background:"#FFFFFF",
        width:"10%",
        marginRight:"10px"
      },
      title:{
        //   margin:theme.spacing(2),
          height:"100%",
          textAlign:"start",
          width:"35%",
      },
      titleMain:{
          fontWeight:800
      },
      time:{
        width:"25%"
      },
      rating:{
        width:"15%"
      },
      duration:{
          margin:theme.spacing(1),
          marginRight:theme.spacing(2)
      },
      continue:{
          float:'right',
          width:"10%",
          height:"50px",
        padding:20,
        fontSize:"8px"
      } 
  }));

const AllCourses = () => {
    const classes = useStyles()
    return (
        <div className={classes.root}>
            <Paper elevation={3} className={classes.course}>
                <Avatar variant="rounded"
                className={classes.img}
                src="https://www.rlogical.com/wp-content/uploads/2020/12/MERN-Stack-considered-the-Best-for-Developing-Web-Apps.png"
                />
                <div className={classes.title}>
                    <Typography variant="h6" display="block" className={classes.titleMain} >full stack</Typography>
                    <Typography variant="caption" display="block" >by Pranay Kumar</Typography>
                </div>
                <div className={classes.time}> 
                    <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.04395 0.634033C3.63257 0.634033 0.0439453 4.22266 0.0439453 8.63403C0.0439453 13.0454 3.63257 16.634 8.04395 16.634C12.4553 16.634 16.0439 13.0454 16.0439 8.63403C16.0439 4.22266 12.4553 0.634033 8.04395 0.634033ZM11.8486 12.772C11.7186 12.902 11.548 12.9674 11.3773 12.9674C11.2067 12.9674 11.0359 12.902 10.906 12.772L7.57263 9.43872C7.44727 9.31409 7.37732 9.14465 7.37732 8.96741V4.63403C7.37732 4.26538 7.6759 3.96741 8.04395 3.96741C8.41199 3.96741 8.71057 4.26538 8.71057 4.63403V8.69141L11.8486 11.8293C12.1093 12.0901 12.1093 12.5114 11.8486 12.772Z" fill="#0C0B0B"/>
                    </svg>
                    <span className={classes.duration}>6h 15m</span>
                </div>
                <div className={classes.rating}> 
                    <svg width="12" height="17" viewBox="0 0 12 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.3211 8.42653C10.2493 9.46863 9.65511 10.2002 8.96903 10.5103C8.24157 10.8389 7.50627 10.6577 7.13916 10.059C6.5381 9.07885 6.95111 8.39666 7.3505 7.73691C7.80335 6.98881 8.31668 6.14088 7.82434 4.49194C7.43567 3.19016 6.67449 2.09725 5.56189 1.24356C5.21505 0.977471 4.88611 0.777346 4.61916 0.634033C4.99201 1.5416 5.47686 3.23044 4.9704 5.09631C4.64918 6.27985 3.80023 7.17672 2.97922 8.04406C1.89789 9.1865 0.779678 10.3678 0.779678 12.2553C0.779678 13.7195 1.28983 14.886 2.29591 15.7222C3.05778 16.3555 3.8352 16.6021 3.84295 16.604H5.69803L5.6592 16.6033C5.65205 16.5977 4.94531 16.0398 4.93314 15.4001C4.92747 15.101 5.08439 14.8142 5.39956 14.5475C5.87295 14.1469 6.13314 13.7156 6.19503 13.2289C6.23289 12.9313 6.19462 12.6167 6.0783 12.277C6.86348 12.6063 7.67567 13.3253 7.9509 14.2178C8.19808 15.0194 7.96943 15.8437 7.2903 16.604H9.3205C10.6504 15.5622 11.399 14.3136 11.5458 12.8931C11.7329 11.0819 10.9048 9.37603 10.3211 8.42653Z" fill="#0C0B0B"/>
                    </svg>
                    <span className={classes.duration}>5</span>
                </div>
                <Button className={classes.continue}>View Course</Button>
            </Paper>
        </div>
    )
}
export default AllCourses