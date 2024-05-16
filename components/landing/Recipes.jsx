import { getAllRecipeCategories } from "@/db/dbQueries";
import Link from "next/link";

async function Recipes() {
  const allCategory = await getAllRecipeCategories();
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="font-bold text-xl">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-gray-500 text-sm">
        {allCategory.map((category, index) => (
          <li key={index}>
            <Link href={`/categories/${encodeURIComponent(category)}`}>
              {category}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;
