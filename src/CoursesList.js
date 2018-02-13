import React from "react";
import courses from './coursesData';
import CourseItem from './CourseItem';

export default class CoursesList extends React.Component{
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    {courses.map(course => {
                        return <CourseItem 
                            key={course.id}
                            {...course}
                            img='assets/1.jpg'
                        />;
                    })}
                </div>
            </div>
        )
    }
}