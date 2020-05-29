
export interface LeadCourseInitialState {
  courseDetails: CourseDetailInterface[];
}

export interface CourseDetailInterface {
  id: number;
  name: string;
  author: string;
  difficulty_level: number;
  popularity: number;
  categories: string;
  created_date: string;
  updated_date: string;
  updated_by: number;
}

export interface LeadCourseTableComponentProps {
  courseDetails: CourseDetailInterface;
  courseIndex: number;
}

export interface LeadCourseListContainerState {

}

export interface LeadCourseListContainerProps {
  courses: CourseDetailInterface[]
  getAllCourses: () => void;
}