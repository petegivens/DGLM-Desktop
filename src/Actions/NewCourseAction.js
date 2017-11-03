module.exports.addNewCourse = (courseDetails) => {
  return {
    type: 'START_NEW_COURSE',
    payload: courseDetails
  }
}

module.exports.addCourseData = (courseData) => {
  return {
    type: 'ADD_COURSE_DATA',
    payload: courseData
  }
}
