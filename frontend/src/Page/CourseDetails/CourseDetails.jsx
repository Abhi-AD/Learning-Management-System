import { useParams } from "react-router";

const CourseDetails = () => {
  let { course_id } = useParams();
  return <div>Course Details {course_id}</div>;
};
export default CourseDetails;
