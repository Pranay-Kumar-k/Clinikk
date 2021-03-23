import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Navbar from "./Navbar";
import CourseCard from "./CourseCard";
import Statistics from "./Statistics";
import { Premium } from "./Premium";

const useStyles = makeStyles((theme) => ({
    container:{
        border:"2px solid red",
        display:'flex',
        flexDirection:"column"
    }
}));

const RightContainer = () => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <Navbar />
            <CourseCard />
            {/* <Statistics /> */}
            <Premium />
        </div>
    )
}

export default RightContainer