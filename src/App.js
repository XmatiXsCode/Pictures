import './App.css';
import { useState } from 'react';

const pictures = [
    {id: 0, alt: "Mak", filename: "obraz1.jpg", category:1, downloads: 35},
    {id: 1, alt:"Bukiet", filename: "obraz2.jpg", category: 1, downloads: 43},
    {id: 2, alt:"Dalmatyńczyk", filename: "obraz3.jpg", category:2, downloads: 2},
    {id: 3, alt:"Świnka morska", filename: "obraz4.jpg", category:2, downloads: 53},
    {id: 4, alt:"Rotwailer", filename: "obraz5.jpg", category:2, downloads: 43},
    {id: 5, alt:"Audi", filename: "obraz6.jpg", category:3, downloads: 11},
    {id: 6, alt:"kotki", filename: "obraz7.jpg", category:2, downloads: 22},
    {id: 7, alt:"Róża", filename: "obraz8.jpg", category:1, downloads: 33},
    {id: 8, alt:"Świnka morska", filename: "obraz9.jpg", category:2, downloads: 123},
    {id: 9, alt:"Foksterier", filename: "obraz10.jpg", category:2, downloads: 22},
    {id: 10, alt:"Szczeniak", filename: "obraz11.jpg", category:2, downloads: 12},
    {id: 11, alt:"Garbus", filename: "obraz12.jpg", category:3, downloads: 321}
];

function App() {
  const [filters, changeFilters] = useState([true, true, true, {}]);
  return (
    <div>
      <h1>Kategorie zdjęć</h1>
      <input type='checkbox' name='flowers' checked={filters[0]} onChange={() => (changeFilters([!filters[0], filters[1], filters[2]]))}></input>
      <label for='flowers'>Kwiaty</label>
      <input type='checkbox' name='animals' checked={filters[1]} onChange={() => (changeFilters([filters[0], !filters[1], filters[2]]))}></input>
      <label for='animals'>Zwierzęta</label>
      <input type='checkbox' name='cars' checked={filters[2]} onChange={() => (changeFilters([filters[0], filters[1], !filters[2]]))}></input>
      <label for='cars'>Samochody</label>
      <div>
        {pictures.map((picture) => (
          filters[picture.category-1] == true ? <div style={{float: 'left'}}>
            <img src={'/assets/' + picture.filename} alt={picture.alt} style={{margin: 5, borderRadius: 5}}></img>
            <h4 style={{marginLeft: 5, marginTop: 0, marginBottom: 0}}>Pobrań: {picture.downloads}</h4>
            <button onClick={() => (changeFilters([filters[0], filters[1], filters[2], pictures[picture.id].downloads += 1]))} style={{marginLeft: 5}}>Pobierz</button>
          </div> : null
        ))}
      </div>
    </div>
  );
}

export default App;
