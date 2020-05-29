import * as React from "react";
import { LeadCourseTableComponentProps } from '../interfaces'


export const LeadCourseTableComponent: React.FC<LeadCourseTableComponentProps> = props => {
    return (
        <div className="row">
            <div className="col-md-1 custom-table-col text-center main_module">
              <span className="serial-no">{(props.courseIndex + 1)}</span>
            </div>
            <div className="custom-table-col col-md-3 main_module">
              <div className="form-group top-margin">{props.courseDetails.name}</div>
            </div>
            <div className="custom-table-col col-md-3 main_module">
              <div className="form-group top-margin">{props.courseDetails.author}</div>
            </div>
            <div className="custom-table-col col-md-3 main_module">
              <div className="form-group top-margin">{props.courseDetails.categories}</div>
            </div>
            <div className="custom-table-col col-md-1 main_module">
              <div className="form-group top-margin">{props.courseDetails.popularity}</div>
            </div>
            <div className="custom-table-col col-md-1 main_module">
              <div className="form-group top-margin">{props.courseDetails.difficulty_level}</div>
            </div>
        </div>
    );
};