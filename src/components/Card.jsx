import "../App.css";
export default function Card ({temp, feels_like, humidity, min, max, img, id, name, weather, wind, onClose}) {
  return (
    <div className="card">
      <div id="closeIcon">
        <span className="material-icons-sharp" onClick={onClose}>highlight_off</span>
      </div>
      <div className="card_body">
        <h2>{name}</h2>
        <p className="text-muted">{weather}</p>
        <div className="card_row">
          <div>
            <h1>{temp}°</h1>
            <p className="text-muted">Min: {min}°</p>
            <p className="text-muted">Max: {max}°</p>
            <p className="text-muted">Humidity: {humidity}%</p>
          </div>
          {/* <img className="weatherIcon" src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} width="150rem" height="150rem" alt="" /> */}
          <img src={"/" + weather + ".svg"} alt="" />
        </div>
      </div>
    </div>
    );
};