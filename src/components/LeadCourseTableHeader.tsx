import * as React from "react";


export const LeadCourseTableHeader: React.FC<{}> = () => {
    return (
      <div className="row">
        <div className="custom-table-col table-heading col-md-1">
          Sr.No.
        </div>
        <div className="custom-table-col table-heading col-md-3">
          Course Name
        </div>
        <div className="custom-table-col table-heading col-md-3">
          Categories
        </div>
        <div className="custom-table-col table-heading col-md-3">
          Author
        </div>
        <div className="custom-table-col table-heading col-md-1">
          Popularity
        </div>
        <div className="custom-table-col table-heading col-md-1">
          Difficulty Level
        </div>
    </div>
    );
};