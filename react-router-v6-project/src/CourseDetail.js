import React from 'react';
import {Link, useParams} from 'react-router-dom';
import { withRouter } from './withRouter';
function CourseDetail(props){
    const {courseId} =  useParams();
       return(
    <div>
        <h1>Course Detail</h1>
        <h2>{courseId}</h2>
    </div>
    );

}
export default withRouter(CourseDetail);