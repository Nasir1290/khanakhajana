"use client";

import { perFormLogin } from "@/app/actions";
import { useAuth } from "@/app/hooks";
import { useState } from "react";
import { useRouter } from "next/navigation";

function LoginForm() {
  const { auth, setAuth } = useAuth();
  const [error, setError] = useState(null);
  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    try {
      const formData = new FormData(event.currentTarget);
      const found = await perFormLogin(formData);
      if (found) {
        setAuth(found);
        router.push("/");
        // router.back();
      } else if (!found) {
        setError("incorrect email / password! try again..");
      }
    } catch (err) {
      setError("Something went wrong! Please try again..");
    }
  };

  const handleChange = (event) => {
    setError(null);
  };

  return (
    <form className="login-form" onSubmit={handleLogin}>
      <div>
        <label htmlhtmlFor="email">Email Address</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
        />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
        />
      </div>

      {error ? (
        <div className=" p-2 bg-red-300 text-red600 rounded-md mx-2">
          {error}
        </div>
      ) : (
        ""
      )}

      <button
        type="submit"
        className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4"
      >
        Login
      </button>
    </form>
  );
}

export default LoginForm;
