import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffee = () => {
const data = useLoaderData();
const [coffee,setCoffee] = useState(data);

const handleShort = sortBy =>{
    if ( sortBy === 'popularity') {
        const sorted = [...data].sort((a,b) =>b.popularity-a.popularity)
        setCoffee(sorted)
        
    } else if (sortBy === 'rating') {
        const sorted = [...data].sort((a,b) =>b.rating -a.rating )
        setCoffee(sorted)
    }
}
    return (
        <>
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-thin">Sort Coffee&apos;s by Popularity &Rating-&gt</h1>
                </div>
                <div className="space-x-4">
                    <button onClick={()=>handleShort('popularity')} className="btn btn-warning">Sort By Popularity</button>
                    <button onClick={()=>handleShort('rating')} className="btn btn-warning">Sort By Rating</button>
                </div>
            </div>
           <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
         {
             coffee.map(coffee =><Card key={coffee.id} coffee={coffee} />)
         }
         </div>
        </>

    );
};

export default Coffee;