import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample(props) {
  let movies = props.movies;
  let URL_IMAGE = props.URL_IMAGE;
  return (
    <Accordion>
      <Accordion.Item eventKey="0">
        <Accordion.Header>Resultados</Accordion.Header>
        <Accordion.Body>
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-6 col-sm-4 mb-3">
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt="movie-img"
                  height={200}
                  width="%50"
                ></img>
                <h4 className="text-center">{movie.title}</h4>
              </div>
            ))}
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AllCollapseExample;
