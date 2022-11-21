import SuperHeroes from './../CardSuperHeroes/card_superheroes.jsx';
import data from './../../data/data.json';
import './../../styles/App.css';

function App() {
  return (
    <div className="App"> {
      data.map((data) =>
        <SuperHeroes name={data.name} univers={data.univers} alter_ego={data.alter_ego} career={data.career} friend={data.friends} superpower={data.superpower} img={data.img} />
      )
    }
    </div> 
  );
}

export default App;
