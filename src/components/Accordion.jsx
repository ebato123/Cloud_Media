import Accordion from "react-bootstrap/Accordion";

function AllCollapseExample(props) {
  let movies = props.movies;
  let URL_IMAGE = props.URL_IMAGE;
  
  // Languaje Changing Variables
  let [accordionTitle] = "";

  // EN case
  if (props.lang === "en"){
    accordionTitle = "Results";
  // ES case
  }else{
    accordionTitle = "Resultados";
  }

  return (
    <Accordion defaultActiveKey={['0']} alwaysOpen>
      <Accordion.Item eventKey="0">
        <Accordion.Header>{accordionTitle}</Accordion.Header>
        <Accordion.Body>
          <div className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-12 col-sm-6 mb-3">
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt="movie-img"
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
