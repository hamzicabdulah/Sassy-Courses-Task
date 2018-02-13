import React from "react";

export default class CourseItem extends React.Component{
    render(){
        return( 
            <div className="col-lg-4 col-md-6 col-sm-12 course-item">
                <div className="card course-item__container"> 
                    <div className="course-item__left col-sm-4" style={{backgroundImage: `url(${this.props.img})`}}>
                        {/*<img src='assets/1.jpg' className="course-item__img" alt="course thumbnail" />*/}
                        <p className="course-item__left__module font-weight-bold">{this.formatNumber(this.props.module_number)}</p>
                    </div>
                    <div className="course-item__right col-sm-8">
                        <div className="course-item__right__top">
                        <h4 className="mg-bottom-tiny course-item__right__top__title">
                            <strong>{this.props.title}</strong>
                        </h4> 
                        <p className="blue-grey-text mg-bottom-small">{this.props.lesson2}</p>
                        </div>
                        <div className="course-item__footer">
                            <div className="course-item__footer__left">
                                <p className="course-item__footer__left__counter font-weight-bold">x{this.formatNumber(this.props.counter)}</p>
                                <button className="btn btn-info small-padding">INFO</button>
                                <button className="btn btn-default small-padding">VIDEO</button>
                            </div>
                            <div className="course-item__footer__right">
                                <div className="course-item__footer__right__points course-item__footer__right__points--todo"></div>
                                <div className="course-item__footer__right__points course-item__footer__right__points--done"></div>
                            </div>
                         </div>
                    </div>
                </div>
            </div>
        )
    }
    
    formatNumber = (number) => number > 9 ? number : `0${number}`;

}