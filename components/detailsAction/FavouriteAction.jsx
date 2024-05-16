"use client";
// import { useRouter } from "next/navigation";
// import { useAuth } from "@/app/hooks";
// import { useEffect, useState } from "react";
// import { addRemoveFavourite, getUserById } from "@/app/actions";

// function FavouriteAction({ recipe }) {
//   const router = useRouter();
//   const { auth } = useAuth();
//   let found = auth ? getUserById(auth._id.toString()) : null;
//   const [isFavourite, setIsFavourite] = useState(
//     auth ? found.favourites : null
//   );

//   const toggleFavourite = async () => {
//     if (auth) {
//       const user = await getUserById(auth._id.toString());
//       console.log(user);
//       try {
//         // Toggle the isFavourite state directly before the API call
//         setIsFavourite((prevIsFavourite) => !prevIsFavourite);
//         // Call the API to add or remove from favourites
//         addRemoveFavourite(recipe._id.toString(), auth);
//       } catch (error) {
//         console.log(error);
//       }
//     } else {
//       router.push("/login");
//     }
//   };

//   return (
//     <div
//       onClick={toggleFavourite}
//       className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
//     >
//       {isFavourite ? (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="icon icon-tabler icons-tabler-outline icon-tabler-heart text-red-500"
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//           <path
//             d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
//             fill="red"
//           />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           width="24"
//           height="24"
//           viewBox="0 0 24 24"
//           fill="none"
//           stroke="currentColor"
//           strokeWidth="2"
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
//         >
//           <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//           <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
//         </svg>
//       )}
//       <span>Favourite</span>
//     </div>
//   );
// }


import  { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/app/hooks';
import { addRemoveFavourite, getUserById } from '@/app/actions';

function FavouriteAction({ recipe }) {
  const router = useRouter();
  const { auth } = useAuth();
  const [isFavourite, setIsFavourite] = useState(false); // Initialize as false

  useEffect(() => {
    const fetchData = async () => {
      if (auth) {
        try {
          const user = await getUserById(auth._id.toString());
          console.log("User data:", user); // Log user data to see its structure
          if (user) {
            setIsFavourite(user.favourites.includes(recipe._id.toString())); // Check if recipe is in user's favorites
          } else {
            console.log("User data is undefined");
          }
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      }
    };
  
    fetchData();
  }, [auth, recipe]); // Re-fetch user data when auth or recipe changes

  const toggleFavourite = async () => {
    if (auth) {
      try {
        // Toggle the isFavourite state based on the opposite value
        setIsFavourite((prevIsFavourite) => !prevIsFavourite);
        // Call the API to add or remove from favorites
        await addRemoveFavourite(recipe._id.toString(), auth);
      } catch (error) {
        console.log(error);
        // Revert the state back to the original value if there's an error
        setIsFavourite((prevIsFavourite) => !prevIsFavourite);
      }
    } else {
      router.push('/login');
    }
  };

  return (
    <div
      onClick={toggleFavourite}
      className="flex gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36]"
    >
      {isFavourite ? (
        // Render heart icon as filled if it's a favorite
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart text-red-500"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path
            d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"
            fill="red"
          />
        </svg>
      ) : (
        // Render heart icon as outline if it's not a favorite
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
      )}
      <span>Favourite</span>
    </div>
  );
}

export default FavouriteAction;

