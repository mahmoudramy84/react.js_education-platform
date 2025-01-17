import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import CoruseTrack from "../CourseTrack/CoruseTrack";
import { getCoursesByTrackId } from "../../../rtk/features/courses/coursesActions";

const FrontEndCourses = () => {
  const dispatch = useDispatch();
  const frontendTrackId = "669bf117cea52da6612b8e11";
  const frontendCourses = useSelector((state) => state.courses.frontendCourses);

  useEffect(() => {
    dispatch(
      getCoursesByTrackId({
        trackId: frontendTrackId,
        track: "frontend",
      })
    );
  }, [dispatch, frontendTrackId]);

  return (
    <div className="row">
      {frontendCourses.map((course) => {
        return (
          <div className="col-12" key={course._id}>
            <CoruseTrack course={course} />
          </div>
        );
      })}
    </div>
  );
};

export default FrontEndCourses;
