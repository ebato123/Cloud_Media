
export default function Movies(props) {
  let movies = props.movies;
  let URL_IMAGE = props.URL_IMAGE;
  
  return (
          <section className="row">
            {movies.map((movie) => (
              <div key={movie.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-3">
                <img
                  src={`${URL_IMAGE + movie.poster_path}`}
                  alt="movie-img"
                ></img>
                <h4 className="text-center">{movie.title}</h4>
              </div>
            ))}
          </section>
  );
}