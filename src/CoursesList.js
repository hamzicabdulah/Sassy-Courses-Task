import React from "react";
import courses from './coursesData';
import CourseItem from './CourseItem';
import CourseModal from './CourseModal';

export default class CoursesList extends React.Component{
    state = {
        isModalOpen: true
    };

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
                <CourseModal isOpen={this.state.isModalOpen}  handleClose={this.closeModal} />
            </div>
        )
    }
    
    closeModal = () => this.setState({ isModalOpen: false });
    
    openModal = () => this.setState({ isModalOpen: true });
}