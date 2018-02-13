import React from "react";
import courses from './coursesData';
import CourseItem from './CourseItem';
import CourseModal from './CourseModal';

export default class CoursesList extends React.Component{
    state = {
        isModalOpen: false,
        selectedCourse: {}
    };

    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    {courses.map(course => {
                        return <CourseItem 
                            key={course.id}
                            {...course}
                            selectCourse={() => this.selectCourse(course)}
                            img='assets/1.jpg'
                        />;
                    })}
                </div>
                <CourseModal 
                    isOpen={this.state.isModalOpen}  
                    handleClose={this.closeModal} 
                    course={this.state.selectedCourse}
                />
            </div>
        )
    }
    
    closeModal = () => this.setState({ isModalOpen: false });
    
    openModal = () => this.setState({ isModalOpen: true });
    
    selectCourse = (course) => {
        this.setState({ selectedCourse: course }, () => this.openModal());
    };
}