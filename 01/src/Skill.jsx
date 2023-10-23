function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span> {skill + "  "}</span>
      <span>
        {level === "advanced" && "💪"}
        {level === "beginner" && "👶"}
        {level === "intermediate" && "👍"}
      </span>
    </div>
  );
}

export default Skill;
