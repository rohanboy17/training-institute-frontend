export default function FacultyCard({ name, role, specialization, image }) {
  return (
    <div className="faculty-card">
      {image ? (
        <img
          src={image}
          alt={name}
          className="faculty-photo"
        />
      ) : (
        <div className="faculty-avatar">
          {name.charAt(0)}
        </div>
      )}

      <h4 className="faculty-name">{name}</h4>
      <p className="faculty-role">{role}</p>

      {specialization && (
        <p className="faculty-specialization">
          {specialization}
        </p>
      )}
    </div>
  );
}
