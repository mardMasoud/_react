function Skill({ skill_obj }) {
  return (
    <div className="skill" style={{ backgroundColor: skill_obj.color }}>
      {skill_obj.skill + "  "}
      {skill_obj.emoji}
    </div>
  );
}

export default Skill;
