
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
      username:'e',
      link:""
  },
    {
      title:'github',
      tagline:'Follow me on github',
      username:'e',
      link:""
  }
]
  return (
    <div className="container">
      <h2 className='heading'>Link-Tree</h2>
      {
        data.map((cardinfo)=>{
          return<LinkCard title={cardinfo.title} 
                          username={cardinfo.username} 
                          tagline={cardinfo.tagline} 
                          link={cardinfo.link}/>
                          
        })
      }
    </div>
  );
}

export default App;
