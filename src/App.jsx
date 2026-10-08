import { useState } from "react";

import Header from "./components/Header";
import StudentProfile from "./components/StudentProfile";
import Footer from "./components/Footer";

import "./App.css";

function App() {

  // ------------------------------------------------
  // Student details
  // These values are passed to StudentProfile using props
  // ------------------------------------------------

  const studentName = "Anu";
  const studentDepartment = "CSE";
  const studentYear = "3rd Year";


  // ------------------------------------------------
  // State
  // Practice count starts at 0
  // ------------------------------------------------

  const [practiceCount, setPracticeCount] = useState(0);


  // ------------------------------------------------
  // State for showing/hiding StudentProfile
  // Profile is visible initially
  // ------------------------------------------------

  const [showProfile, setShowProfile] = useState(true);


  // ------------------------------------------------
  // Complete Practice button
  // Increases practice count by 1
  // ------------------------------------------------

  const handleCompletePractice = () => {
    setPracticeCount((previousCount) => previousCount + 1);
  };


  // ------------------------------------------------
  // Reset button
  // Sets practice count back to 0
  // ------------------------------------------------

  const handleReset = () => {
    setPracticeCount(0);
  };


  // ------------------------------------------------
  // Show/Hide Profile button
  // ------------------------------------------------

  const handleToggleProfile = () => {
    setShowProfile((previousValue) => !previousValue);
  };


  return (
    <div className="app">

      {/* Header always remains visible */}
      <Header />


      <main className="container">

        <h2>Student Practice Tracker</h2>


        {/* -----------------------------------------
            Practice Controls
        ----------------------------------------- */}

        <div className="controls">

          <button
            className="complete-button"
            onClick={handleCompletePractice}
          >
            Complete Practice
          </button>


          <button
            className="reset-button"
            onClick={handleReset}
          >
            Reset
          </button>


          <button
            className="toggle-button"
            onClick={handleToggleProfile}
          >
            {showProfile ? "Hide Profile" : "Show Profile"}
          </button>

        </div>


        {/* -----------------------------------------
            Student Profile

            Conditional rendering is used here.
            When showProfile is false, the
            StudentProfile component is unmounted.

            practiceCount remains in App state,
            so hiding the profile does NOT reset it.
        ----------------------------------------- */}

        {showProfile && (
          <StudentProfile
            name={studentName}
            department={studentDepartment}
            year={studentYear}
            practiceCount={practiceCount}
          />
        )}


        {/* Message shown when profile is hidden */}
        {!showProfile && (
          <p className="hidden-message">
            Student profile is currently hidden.
          </p>
        )}

      </main>


      {/* Footer always remains visible */}
      <Footer />

    </div>
  );
}

export default App;