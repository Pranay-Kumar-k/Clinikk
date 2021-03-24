import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import Statistics from "./Statistics";
import { Premium } from "./Premium";
import CourseProgress from "./CourseProgress";

const useStyles = makeStyles((theme) => ({
    container:{
        display:'flex',
        flexDirection:"column"
    }
}));

const RightContainer = () => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Navbar />
            <CourseProgress />
            {/* <Statistics /> */}
            <Premium />
        </div>
    )
}

export default RightContainer