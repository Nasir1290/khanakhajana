
import Recipes from "./Recipes";
import FoodItemList from "./FoodItemList";

function RecipesAndFoods() {
  return (
    <section className="container py-8">
      <div className=" grid grid-cols-12 py-3">
        <Recipes />
        <FoodItemList />
      </div>
    </section>
  );
}

export default RecipesAndFoods;
