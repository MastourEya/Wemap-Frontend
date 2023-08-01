import './Content.css';

const Content = ({ content }) => {
  const SeeOnMap = (mapUrl) => {
    window.location.href = mapUrl;}

  return (
      <div className="container">
        {content.map((item) => (
          <div key={item.id} className="card">
            <div className="box">
            <img src={item.image_url} alt={item.name} className="card-image" />
            </div>
              <div className="card-details">
                <div className="card-name">{item.name}</div>
                <div className="card-address">{item.address}</div>
              </div>
              <div className="card-button">
              <button onClick={() => SeeOnMap(`https://livemap.getwemap.com/#/pinpoints/${item.id}`)}>
              Voir sur la carte
            </button>
          </div>
          </div>
        ))}
      </div>
  );
};

export default Content;
