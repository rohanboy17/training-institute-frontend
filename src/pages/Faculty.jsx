import facultyData from "../data/facultyData";
import FacultyCard from "../components/faculty/FacultyCard";

export default function Faculty() {
  return (
    <section className="section">
      {/* Page Header */}
      <h1 className="section-title">Our Faculty</h1>
      <p className="section-subtitle">
        Leadership, professors, and industry experts guiding our programmes
      </p>

      {/* Leadership */}
      <div className="faculty-group">
        <h2 className="faculty-group-title">Leadership</h2>
        <div className="faculty-grid">
          {facultyData.leadership.map((person) => (
            <FacultyCard
              key={person.id}
              name={person.name}
              role={person.role}
              specialization={person.specialization}
            />
          ))}
        </div>
      </div>

      {/* Professors */}
      <div className="faculty-group">
        <h2 className="faculty-group-title">Core Faculty</h2>
        <div className="faculty-grid">
          {facultyData.professors.map((person) => (
            <FacultyCard
              key={person.id}
              name={person.name}
              role={person.role}
              specialization={person.specialization}
            />
          ))}
        </div>
      </div>

      {/* Visiting Faculty */}
      <div className="faculty-group">
        <h2 className="faculty-group-title">Visiting & Industry Faculty</h2>
        <div className="faculty-grid">
          {facultyData.visitingFaculty.map((person) => (
            <FacultyCard
              key={person.id}
              name={person.name}
              role={person.role}
              specialization={person.specialization}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
