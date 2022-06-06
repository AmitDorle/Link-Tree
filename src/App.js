import "./App.css";
import LinkCard from "./LinkCard/LinkCard";

function App() {
  const data = [
    {
      title: "github",
      tagline: "Follow me on Github",
      username: "AmitDorle",
      link: "https://github.com/AmitDorle",
    },
    {
      title: "linkedin",
      tagline: "Follow me on Linkedin",
      username: "Amit D",
      link: "https://www.linkedin.com/in/amit-d-8a062a232/",
    },
    {
      title: "instagram",
      tagline: "Follow me on Instagram",
      username: "Amit Dorle",
      link: "https://instagram.com/bad_assasin_blooming",
    },
  ];
  return (
    <div className="container">
      <h3 className="app-title">Linktree-Alt</h3>

      {data.map((cardinfo) => {
        return (
          <LinkCard
            title={cardinfo.title}
            tagline={cardinfo.tagline}
            username={cardinfo.username}
            link={cardinfo.link}
          />
        );
      })}
    </div>
  );
}

export default App;
