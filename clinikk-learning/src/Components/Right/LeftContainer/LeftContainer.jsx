import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import CoursesCarousel from "./CoursesCarousel";
import CoursesRoutes from "./CoursesRoutes/CoursesRoutes";
import { useSelector } from "react-redux";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    container:{
        display:"flex",
        flexDirection:"column",
    },
    welcome:{
        // position: "absolute",
        width: 450,
        height: 160,
        top: 15.25,
        background: "#F5F5F7",
        borderRadius: 14,
        paddingLeft:10
    },
    note:{
        width:"45%",
    },
    Title:{
        marginBottom:-5,
        marginTop:60,
        // width:"100px"
    },
    picture:{
        marginTop:-175,
        float:"right"
    },
    recent:{
        marginTop:"30px"
    },
    courses:{
        textAlign:"start"
    }
}));

const LeftContainer = () => {
    const classes = useStyles();
    const User = useSelector(state => state.user.user)
    return(
        <div className={classes.container}>
            <div className={classes.welcome}>
                <div className={classes.note}>
                    <h3 className={classes.Title}>Hello Pranay Kumar!</h3>
                    <Typography variant="caption">It's good to see you again.</Typography>
                </div>
                <div className={classes.picture}>
                    <img src="https://img.icons8.com/emoji/452/person-raising-hand.png" alt="person" width="220px"/>
                </div>
            </div>
            <div className={classes.recent}>
                {/* <CoursesCarousel data={courses_enrolled} progress={progress}/> */}
            </div>
            <div className={classes.courses}>
                <h2>Courses</h2>
                <CoursesRoutes />
            </div>
        </div>
    )
}

export default LeftContainer