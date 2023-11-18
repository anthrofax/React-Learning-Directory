import "./styles.css";

export default function App() {
  return (
    <div className="card">
      <Avatar />

      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="profile.jpg" alt="card-avatar" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1> Afridho Ikhsan </h1>
      <p>
        {" "}
        Hi, I'm Afridho Ikhsan, studying Informatics Engineering at
        Singaperbangsa University in Karawang. I have a deep interest in website
        programming. I've learned a lot about things that related to Frontend
        Web Development such as HTML, CSS, JavaScript, CSS Pre-Processor &
        Framework like SASS and Tailwind, as well as the basics of using Git and
        GitHub. Additionally, I have basic skills in design software like
        Photoshop, Adobe Illustrator, Figma, and Canva too. Currently, I am
        learning the React Framework to make me even more confident to partipate
        any competition later.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      <Skill skill="React" emoji="👍" color="blue" />
      <Skill skill="Node Js" emoji="😬" color="green" />
      <Skill skill="Next JS" emoji="🫥" color="grey" />
      <Skill skill="Tailwind CSS" emoji="🤞" color="aqua" />
      <Skill skill="Laravel" emoji="✊" color="orange" />
    </div>
  );
}

function Skill({ skill, emoji, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>
        {skill} {emoji}
      </p>
    </div>
  );
}
