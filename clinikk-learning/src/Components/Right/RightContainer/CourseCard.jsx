import React from "react";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container:{
        border:"2px solid yellow",
        display:'flex',
        flexDirection:"row"
    },
    completed:{
        display:"flex",
        // border:"2px solid black",
        flexDirection:"row",
        height:80,
        margin:20,
        background:"#F5F5F7",
        borderRadius: 14,
        padding:10,
    },
    progress:{
        height:80,
        textAlign:'start',
        display:"flex",
        padding:10,
        // border:"2px solid black",
        flexDirection:"row",
        margin:15,
        background:"#F5F5F7",
        borderRadius: 14
    },
    number:{
        marginRight:10,
        fontWeight:800,
        fontSize:50
    },
    courses:{
        textAlign:'start',
        marginTop:10,
        width:80
    }
}));

const CourseCard = () => {
    const classes = useStyles()
    return(
        <div className={classes.container}>
            <div className={classes.completed}>
                <div className={classes.number}>11</div>
                <div className={classes.courses}>Courses <br/> completed</div>
            </div>
            <div className={classes.progress}>
                <div className={classes.number}>11</div>
                <div className={classes.courses}>Courses in<br/> Progress</div>
            </div>
        </div>
    )
}

export default CourseCard