import './App.css';
import Profile from './Profile';
import Intro from './Intro';
import SkillList from './SkillList';

function App() {
  return (
    <div className="card">
      <Profile />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

export default App;
