import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import LeftContainer from "./LeftContainer/LeftContainer";
import RightContainer from "./RightContainer/RightContainer";

const useStyles = makeStyles((theme) => ({
    container:{
        width:"100%",
        border:"2px solid black",
        height:500,
        marginTop:-830,
    },
    main:{
        display:"flex",
        flexDirection:"row",
        border:"2px solid green",
        margin:"10px",
        marginLeft:180,
    },
    left:{
        flex:"58%"
    },
    right:{
        flex:"40%"
    }
}));

const RightComponent = () => {
    const classes = useStyles();
    return(
        <div className={classes.container}>
           <div className={classes.main}>
                <div className={classes.left}>
                    <LeftContainer />
                    </div>
                <div className={classes.right}>
                    <RightContainer />
                    </div> 
           </div>
        </div>
    )
}

export default RightComponent