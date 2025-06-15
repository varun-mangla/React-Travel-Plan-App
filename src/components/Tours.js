import Card from './Card.js';

function Tours({ tours, removeTour }) {
  return (
    <div>
      <div>
        <h2>Plan with Varun</h2>
      </div>
      <div>
        {
          tours.map((tour) => (
            <Card key={tour.id} {...tour} removeTour={removeTour} />
          ))
        }
      </div>
    </div>
  );
}

export default Tours;