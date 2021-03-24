import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { useSelector } from 'react-redux';
import CourseCard from './CourseCard';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexDirection:"column",
      margin:theme.spacing(2)
    }
  }));

const AllCourses = () => {
    const classes = useStyles()
    const allCourses = useSelector((state) => state.courses.courses)
    // console.log(allCourses)
    return (
        <div className={classes.root}>
                {allCourses && allCourses.map((item) => {
                    return (
                        <CourseCard course={item} key={item.id}/>
                    )
                })}
        </div>
    )
}
export default AllCourses