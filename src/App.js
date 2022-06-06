
import './App.css';
import LinkCard from './LinkCard/LinkCard'

function App() {
  const data = [
    {
      title:'twitter',
      tagline:'Follow me on twitter',
      username:'e',
      link:""
  },
    {
      title:'linkedin',
      tagline:'Follow me on linkedin',
      username:'Amit D',
      link:"https://www.linkedin.com/in/amit-d-8a062a232/"
  },
    {
      title:'github',
      tagline:'Follow me on github',
      username:'AmitDorle',
      link:"https://github.com/AmitDorle"
  },
    {
      title:'instagram',
      tagline:'Follow me on instagram',
      username:'AmitDorle',
      link:"https://github.com/AmitDorle"
  },
    
]
return (
  <div className="container">
    <h3 className="app-title">Linktree-Alt</h3>

    {
      data.map((cardinfo) => {
        return (
          <LinkCard
            title={cardinfo.title}
            tagline={cardinfo.tagline}
            username={cardinfo.username}
            link={cardinfo.link}
          />
        );
      })
    }
  </div>
);
}

export default App;
