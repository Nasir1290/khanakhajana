import Image from "next/image";
import Link from "next/link";

function FoodItemCard({recipe}) {
  // console.log(recipe)
  return (
    <div className="card">
      <Link href={`/details/${recipe._id.toString()}`}>
        <Image
          src={recipe.thumbnail}
          width={270}
          height={160}
          className="rounded-md w-[125%] max-w-[125%]"
          alt=""
        />
      </Link>
      <h4 className="my-2">{recipe.category}</h4>
      <div className="py-2 flex justify-between text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>{recipe.author}</span>
      </div>
    </div>
  );
}

export default FoodItemCard;
