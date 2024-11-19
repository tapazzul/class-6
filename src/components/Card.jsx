import { Link } from "react-router-dom";


const Card = ({coffee}) => {
const {name, image, category, origin, type, id, rating, popularity} = coffee || {}
    return (
        <div className="flex relative ">
            <Link to={`/coffee/${id}`} className="transition hover:scale-105 shadow-xl rounded-xl overflow-hidden   my-12">
            <figure className=" w-full h-48 overflow-hidden">
                <img className="" src={image} alt="" />
            </figure>
            <div className="p-4">
                <h1 className="text-xl">Name : {name}</h1>
                <p>Type : {type}</p>
                <p>Category : {category}</p>
                <p>Origin {origin}</p>
                <p>Rating : {rating}</p>
                <p>popularity : {popularity}</p>

            </div>
            
            </Link>
            
        </div>
    );
};

export default Card;