import { useEffect } from "react";

// StudentProfile Component
function StudentProfile({
  name,
  department,
  year,
  practiceCount
}) {

  // useEffect demonstrates component lifecycle behaviour
  useEffect(() => {
    // Store the current document title before changing it
    const previousTitle = document.title;

    // Update document title whenever practiceCount changes
    document.title = `Practice Sessions: ${practiceCount}`;

    // Cleanup function
    return () => {
      // Restore the previous document title
      document.title = previousTitle;
    };
  }, [practiceCount]);

  return (
    <div className="student-profile">
      <h2>Student Profile</h2>

      <p>
        <strong>Name:</strong> {name}
      </p>

      <p>
        <strong>Department:</strong> {department}
      </p>

      <p>
        <strong>Year:</strong> {year}
      </p>

      <p>
        <strong>Practice Sessions Completed:</strong>{" "}
        {practiceCount}
      </p>
    </div>
  );
}

export default StudentProfile;