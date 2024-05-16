import LogoImage from "/public/logo.png";

import Image from "next/image";
import Link from "next/link";
import SignInOut from "./auth/SignInOut";

function Navbar() {
  return (
    <nav className="bg-white shadow py-6">
      <div className="container mx-auto flex flex-col md:flex-row sm:flex-col justify-between items-center">
        <div>
          {" "}
          <Link href="/" className="flex items-center space-x-2">
            <Image src={LogoImage} alt="logo" className="h-8 w-auto" />
          </Link>
        </div>
        <div>
          <ul className="flex space-x-4 text-gray-500 text-md">
            <li className="py-2">
              <Link href="/" className="hover:text-gray-800 active">
                Home
              </Link>
            </li>
            <li className="py-2">
              <Link href="/" className="hover:text-gray-800">
                Recipe
              </Link>
            </li>
            <li className="py-2">
              <Link href="/" className="hover:text-gray-800">
                About us
              </Link>
            </li>
            <SignInOut />
          </ul>
        </div>
      </div>
    </nav>

    //     <nav>
    //     <div className="container flex justify-between py-6">
    //       <Link href="/">
    //         <Image src={LogoImage} alt="logo" className="object-cover" quality={100} />
    //       </Link>

    //       <ul className="flex gap-4 text-sm text-gray-500">
    //         <li className="py-2 active">
    //           <Link href="/home">Home</Link>
    //         </li>

    //         <li className="py-2">
    //           <Link href="/recipe">Recipe</Link>
    //         </li>

    //         <li className="py-2">
    //           <Link href="/aboutUs">About us</Link>
    //         </li>

    //         <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
    //           <Link href="/login">Login</Link>
    //         </li>
    //       </ul>
    //     </div>
    //   </nav>
  );
}

export default Navbar;
