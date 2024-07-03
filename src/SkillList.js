import Skill from "./Skill";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "System Design",
    level: "beginner",
    color: "#FF3B00"
  }
];
export default function SkillList() {
    return (
      <div className="skill-list">
        {skills && skills.map(
          (s) => (
            <Skill skill = {s.skill} color ={s.color} level ={s.level}/>
          )
        )}
      </div>
    );
  }