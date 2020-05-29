import * as React from "react";
import { connect } from "react-redux";
import { Link, Redirect } from 'react-router-dom';
import * as MyTypes from "MyTypes";
import { Button, Form } from "react-bootstrap";
import {
  LeadCourseListContainerProps,
  LeadCourseListContainerState
} from "../interfaces";
import {
  Header,
  Footer,
  LeadCourseTableHeader,
  LeadCourseTableComponent
} from "../components";
import {
  getAllCourses
} from "../actions"

class LeadCourseListComponent extends React.Component<
  LeadCourseListContainerProps,
  LeadCourseListContainerState
  > {

  constructor(props: any) {
    super(props);
  }

  componentDidMount() {
    this.props.getAllCourses();
  }

  render() {
    return (
      <div>
        <Header />
        <div className="container">
          <div className="container-fluid custom-table white-box">
            <div className="row">
              <h5 className="course-heading">All Courses</h5>
            </div>
            <div className="container-fluid">
              <LeadCourseTableHeader />
              {this.props.courses.map(
                (courseDetails: any, index: number) => (
                  <LeadCourseTableComponent courseDetails={courseDetails} courseIndex={index}/>
              ))}
            </div>
          </div>
        </div>

        <Footer />
      </div>
    );
  }
}

const MapStateToProps = (store: MyTypes.ReducerState) => {
  return {
    courses: store.courses.courseDetails,
  };
};

const MapDispatchToProps = {
  getAllCourses,
};

export default connect(
  MapStateToProps,
  MapDispatchToProps
)(LeadCourseListComponent);
