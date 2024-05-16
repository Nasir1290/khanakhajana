import { createUser, getAllRecipe, getUser } from "@/db/dbQueries";
import FoodItemCard from "./FoodItemCard";

async function FoodItemList() {

  const allRecipe = await getAllRecipe();
  const user = await getUser(); 

  return (
    <div className="col-span-12 md:col-span-9">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-8 justify-items-center">
        {allRecipe.map((recipe) => (
          <FoodItemCard key={recipe._id.toString()} recipe={recipe} />
        ))}
      </div>
    </div>
  );
}

export default FoodItemList;
