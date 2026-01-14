import facultyData from "../../data/facultyData";
import FacultyCard from "./FacultyCard";

export default function FacultyGrid({ limit }) {
  // Flatten all categories into one list (for Home preview)
  const allFaculty = [
    ...facultyData.leadership,
    ...facultyData.professors,
    ...facultyData.visitingFaculty,
  ];

  const list = limit ? allFaculty.slice(0, limit) : allFaculty;

  return (
    <div className="faculty-grid">
      {list.map((person) => (
        <FacultyCard
          key={person.id}
          name={person.name}
          role={person.role}
          specialization={person.specialization}
          image={person.image}
        />
      ))}
    </div>
  );
}
