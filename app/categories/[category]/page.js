import { getAllRecipe, getUser, getRecipeByCategory } from "@/db/dbQueries";
import FoodItemCard from "@/components/landing/FoodItemCard";
import Recipes from "@/components/landing/Recipes";

async function CategoryPage({ params: { category } }) {

    const decodedCategory = category ? decodeURIComponent(category) : "";

    const filteredRecipe = await getRecipeByCategory(decodedCategory);


    return (
        <section className="container py-8">
            <div className=" grid grid-cols-12 py-3">
                <Recipes />
                <div className="col-span-12 md:col-span-9">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 justify-items-center">
                        {filteredRecipe.map((recipe) => (
                            <FoodItemCard key={recipe._id.toString()} recipe={recipe} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategoryPage;
