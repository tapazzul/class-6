import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";

const Home = () => {
const categories = useLoaderData()
console.log(categories);
    return (
        <div>
            <Banner></Banner>
            <Heading title='Browse Coffees by Category' subtitle='Choose your desired coffee
             category to browse through specific coffees that fit in your taste.'></Heading>

            {/* tab */}
            <Categories categories={categories} />
            <Outlet/>
            
        </div>
    );
};

export default Home;