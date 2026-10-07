import "./App.css";

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Student Management System</h1>
    </header>
  );
}

// StudentProfile Component
function StudentProfile({ name, department, year }) {
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
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <p>© 2026 Student Management System</p>
    </footer>
  );
}

// Main App Component
function App() {
  // Student 1 details
  const student1Name = "SANJAY";
  const student1Department = "CSE";
  const student1Year = "3rd Year";

  // Student 2 details
  const student2Name = "SAM";
  const student2Department = "Computer Science";
  const student2Year = "3rd Year";

  return (
    <div className="app">
      <Header />

      <main className="content">
        <h3>Student 1</h3>

        <StudentProfile
          name={student1Name}
          department={student1Department}
          year={student1Year}
        />

        <h3>Student 2</h3>

        <StudentProfile
          name={student2Name}
          department={student2Department}
          year={student2Year}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;