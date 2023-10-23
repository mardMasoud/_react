import Skill from "./Skill";
const skillList = [
  { skill: "React", emoji: "💪", color: "#FF33F3", level: "advanced" },
  { skill: "Bootstrap", emoji: "👍", color: "#33FFEC", level: "beginner" },
  { skill: "Node Js", emoji: "💪", color: "#FF9F3C", level: "intermediate" },
  { skill: "Mongo Db", emoji: "💪", color: "#FF334C", level: "intermediate" },
  { skill: "Css", emoji: "💪", color: "#FF33F3", level: "beginner" },
  { skill: "Tailwind", emoji: "👍", color: "#33FFEC", level: "advanced" },
  {
    skill: "Machin learning",
    emoji: "💪",
    color: "#FF9F3C",
    level: "intermediate",
  },
  { skill: "Sql server", emoji: "💪", color: "#FF334C", level: "advanced" },
  { skill: "Oracle", emoji: "💪", color: "#FF33F3", level: "beginner" },
  { skill: "Power bi", emoji: "👍", color: "#33FFEC", level: "intermediate" },
  { skill: "Python", emoji: "💪", color: "#FF9F3C", level: "beginner" },
  { skill: "Vue", emoji: "💪", color: "#FF334C", level: "intermediate" },
];
function SkillList() {
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill
          skill={skill.skill}
          color={skill.color}
          level={skill.level}
          key={skill.color}
        />
      ))}
    </div>
  );
}

export default SkillList;
