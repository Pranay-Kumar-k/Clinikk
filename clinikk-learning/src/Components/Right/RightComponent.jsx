import React, { useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import { useSelector } from "react-redux";
import CoursesRoutes from "./LeftContainer/CoursesRoutes/CoursesRoutes";

const useStyles = makeStyles((theme) => ({
    container:{
        width:"100%",
        // height:500,
        marginTop:-830,
    },
    main:{
        display:"flex",
        flexDirection:"row",
        margin:"10px",
        marginLeft:150,
    },
    left:{
        flex:"68%"
    },
    right:{
        flex:"30%"
    }
}));

const RightComponent = () => {
    const classes = useStyles();
    const route = useSelector(state => state.user.click)
    console.log(route)
    return(
        <div className={classes.container}>
           <div className={classes.main}>
                {!route ? (<>
                    <div className={classes.left}>
                    <LeftContainer/>
                </div>
                <div className={classes.right}>
                    <RightContainer />
                </div> 
                </>) : <CoursesRoutes />}
           </div>
        </div>
    )
}

export default RightComponent