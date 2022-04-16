import Card from './Card.jsx';
import "../App.css";
export default function Cards({cities, onClose}) {
  if(cities){
    return (
      <div className='cards'>
        {cities.map(c => <Card
            temp={c.temp}
            feels_like={c.feels_like}
            humidity={c.humidity}
            min={c.min}
            max={c.max}
            img={c.img}
            id={c.id}
            name={c.name}
            weather={c.weather}
            wind={c.wind}
            onClose={() => onClose(c.id)}
          /> )}
      </div>
    );
  } else {
    return(
      <div>without cities</div>
    )
  }
}
