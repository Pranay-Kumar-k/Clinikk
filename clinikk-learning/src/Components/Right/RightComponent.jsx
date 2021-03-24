import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";
import { useSelector } from "react-redux";

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
    return(
        <div className={classes.container}>
           <div className={classes.main}>
                <div className={classes.left}>
                    <LeftContainer/>
                    </div>
                <div className={classes.right}>
                    <RightContainer />
                    </div> 
           </div>
        </div>
    )
}

export default RightComponent