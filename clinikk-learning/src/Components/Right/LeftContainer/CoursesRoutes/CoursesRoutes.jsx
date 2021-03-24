import React from "react";
import { Route, Switch } from "react-router";
import CoursesNavbar from "../CoursesNavbar";
import AllCourses from "../RoutesComponents/AllCourses";
import MostPopular from "../RoutesComponents/MostPopular";
import Newest from "../RoutesComponents/Newest";
import TopRated from "../RoutesComponents/TopRated";

const CoursesRoutes = () => {
    return(
        <div>
            <CoursesNavbar />
            <Switch>
                <Route exact path="/" render={() => <AllCourses />} />
                <Route path="/newest" render={() => <Newest />} />
                <Route path="/rated" render={() => <TopRated />} />
                <Route path="/popular" render={() => <MostPopular />} />
            </Switch>
        </div>
    )
}

export default CoursesRoutes