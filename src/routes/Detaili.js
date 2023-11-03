import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Movie from '../components/Movie';

function Detail() {
    const [loading, setLoading] = useState(true);
    const [movie, setMovie] = useState([]);
    const { id } = useParams();
    const getMovies = async() => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setMovie(json.data.movie);
        setLoading(false);
        // console.log(json);
    };
    useEffect(() => {
        getMovies();
        console.log(movie);
    }, []);
    return (
        <div>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    <img src={movie.medium_cover_image}/>
                    <h3>{movie.title}</h3>
                    <p>{movie.description_intro}</p>
                    <ul>
                        {movie.genres.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                    </ul>
                </div>
                // <div>
                //     <ul>
                //         <li><img src={movie.medium_cover_image}/></li>
                //         <li><h3>{movie.title}</h3></li>
                //         <li><p>{movie.summary}</p></li>
                //         <li>
                //             <p>
                //                 {movie.genres.map((item, index) => {
                //                 <ul>
                //                     <li key={index}>{item}</li>
                //                 </ul>
                //                 })}
                //             </p>
                //         </li>
                //     </ul>
                // </div>
            )}
        </div>
    );
}

export default Detail;