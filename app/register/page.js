import RegisterForm from "@/components/auth/RegisterForm"
import { registerUser } from "../actions"


function RegisterPage() {

    return (
        <main className=" mt-2 ">
            <div className="h-screen grid place-items-center">

                <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md bg-gray-100">
                    <h4 className="font-bold text-2xl">Sign Up</h4>
                    <RegisterForm />

                    <p className="text-center text-xs text-gray-600">Or</p>

                    <a href="/login" className="underline text-sm mx-auto block text-gray-600 mt-4 text-center">
                        Login
                    </a>

                </div>
            </div>
        </main>
    )
}

export default RegisterPage
