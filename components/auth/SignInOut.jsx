"use client";
import Link from "next/link";
import { useAuth } from "@/app/hooks";
import { useRouter } from "next/navigation";

function SignInOut() {
  const router = useRouter();
  const { auth, setAuth } = useAuth();
  const handleLogInOut = () => {
    if (auth) {
      setAuth(null);
      router.push("/login");
    }
  };

  if (auth) {
    return (
      <div>
        <li className="py-2">
          <Link
          href={"/login"}
            onClick={handleLogInOut}
            className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
          >
            Logout
          </Link>
        </li>
      </div>
    );
  }

  if (!auth) {
    return (
      <li className="py-2">
        <Link
        href={"/login"}
          onClick={handleLogInOut}
          className="bg-red-500 cursor-pointer text-white px-4 py-2 rounded-md hover:bg-red-600 transition duration-300"
        >
          Login
        </Link>
      </li>
    );
  }
}

export default SignInOut;
