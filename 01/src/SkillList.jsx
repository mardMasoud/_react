import Skill from "./Skill";
const skillList = [
  { skill: "React", emoji: "💪", color: "#FF33F3" },
  { skill: "Bootstrap", emoji: "👍", color: "#33FFEC" },
  { skill: "Node Js", emoji: "💪", color: "#FF9F3C" },
  { skill: "Mongo Db", emoji: "💪", color: "#FF334C" },
  { skill: "React", emoji: "💪", color: "#FF33F3" },
  { skill: "Bootstrap", emoji: "👍", color: "#33FFEC" },
  { skill: "Node Js", emoji: "💪", color: "#FF9F3C" },
  { skill: "Mongo Db", emoji: "💪", color: "#FF334C" },
  { skill: "React", emoji: "💪", color: "#FF33F3" },
  { skill: "Bootstrap", emoji: "👍", color: "#33FFEC" },
  { skill: "Node Js", emoji: "💪", color: "#FF9F3C" },
  { skill: "Mongo Db", emoji: "💪", color: "#FF334C" },
];
function SkillList() {
  return (
    <div className="skill-list">
      {skillList.map((skill) => (
        <Skill skill_obj={skill} key={skill.color} />
      ))}
    </div>
  );
}

export default SkillList;
