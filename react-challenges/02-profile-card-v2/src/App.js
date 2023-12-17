import "./styles.css";

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
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

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
      {skills.map((skill) => {
        return (
          <Skill skill={skill.skill} color={skill.color} level={skill.level} />
        );
      })}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>
        {skill}
        {level === "beginner" && "👶"}
        {level === "advanced" && "👍"}
        {level === "intermediate" && "💪"}
      </p>
    </div>
  );
}
