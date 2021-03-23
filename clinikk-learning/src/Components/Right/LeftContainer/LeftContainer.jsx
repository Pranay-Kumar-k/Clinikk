import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import CoursesCarousel from "./CoursesCarousel";

const useStyles = makeStyles((theme) => ({
    container:{
        border:"2px solid blue",
        display:"flex",
        flexDirection:"column",
    },
    welcome:{
        // position: "absolute",
        width: 450,
        height: 160,
        top: 55.25,
        background: "#F5F5F7",
        borderRadius: 14,
        paddingLeft:10
    },
    note:{
        width:"45%",
    },
    title:{
        marginBottom:-5,
        marginTop:60,
    },
    picture:{
        marginTop:-175,
        float:"right"
    },
    recent:{
        border:"2px solid red",
        marginTop:"30px"
    }
}));

const LeftContainer = () => {
    const classes = useStyles();

    return(
        <div className={classes.container}>
            <div className={classes.welcome}>
                <div className={classes.note}>
                    <h1 className={classes.title}>Hello Pranay!</h1>
                    <span>It's good to see you again.</span>
                </div>
                <div className={classes.picture}>
                    <img src="https://img.icons8.com/emoji/452/person-raising-hand.png" alt="person" width="220px"/>
                </div>
            </div>
            <div className={classes.recent}>
                <CoursesCarousel />
            </div>
            <div>Courses List</div>
        </div>
    )
}

export default LeftContainer