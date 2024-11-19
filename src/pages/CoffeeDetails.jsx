import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const CoffeeDetails = () => {
const data = useLoaderData();
const {id} = useParams() 
const [coffee, setCoffee] = useState({})
    useEffect(()=>{
    const singleData = data.find(coffee =>coffee.id ==id)
    setCoffee(singleData)
    },[data,id])
    return (
        <div>
            {coffee.description}
        </div>
    );
};

export default CoffeeDetails;