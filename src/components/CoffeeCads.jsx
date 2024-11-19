import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";


const CoffeeCads = () => {
const navigate = useNavigate()
    const data = useLoaderData()
   const {category} = useParams()
   const [coffees, setCoffes ] = useState([])
        useEffect(()=>{
       if (category) {
        const filterByCategoy = [...data].filter(
            coffee =>coffee.category === category
        )
        setCoffes(filterByCategoy)
       }else{
        setCoffes(data.slice(0,6))
       }
        },[category,data])
        console.log(data);
   console.log(data);
    return (
       <>
         <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {
                coffees.map(coffee =><Card key={coffee.id} coffee={coffee} />)
            }
          </div>
        <button className="btn btn-warning" onClick={() =>navigate('/coffees')}>Vew All</button>
       </>
    );
};

export default CoffeeCads;