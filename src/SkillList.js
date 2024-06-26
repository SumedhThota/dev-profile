import Skill from "./Skill";
export default function SkillList() {
    return (
      <div className="skill-list">
        <Skill skill="React" emoji="💪" color="blue" />
        <Skill skill="HTML+CSS" emoji="💪" color="orange" />
        <Skill skill="JavaScript" emoji="💪" color="yellow" />
        <Skill skill="Next.js" emoji="💪" color="green" />
        <Skill skill="JSON/XML/AJAX" emoji="👶" color="orangered" />
        <Skill skill="System Design" emoji="👶" color="gray" />
        
      </div>
    );
  }