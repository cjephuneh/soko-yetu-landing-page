"use client"
import { useState } from "react";
import axios from "axios"
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");


  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    axios
      .post("https://sokoyangu-engine.vercel.app/earlyaccess", { name, email })
      .then((result) => {
        console.log(result);
        toast.success("Form submitted successfully"); // Show success toast
      })
      .catch((err) => {
        console.log(err);
        toast.error("An error occurred while submitting the form"); // Show error toast
      });
  };

  return (
    <div className="bg-gray-200 flex h-full items-center py-16">
      <div className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">
                🔑 Get Early Access 🔓
              </h1>
            </div>
            <div className="mt-5">
              {/* Form */}
              <form className="grid gap-y-4" onSubmit={handleSubmit}>
                {/* ... Form fields ... */}
                <div>
                  <div className="flex justify-between items-center">
                    <label className="block text-sm mb-2 text-black">
                      Name 🏷️
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="name"
                      id="name"
                      name="name"
                      // value={name}
                      className="py-3 px-4 block w-full text-black border-gray-200 border rounded-lg text-sm"
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm mb-2 text-black">
                    Email address 📧
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border-gray-200  border rounded-lg text-sm "
                      required
                      // value={email}
                      aria-describedby="email-error"
                      onChange={(e) => setEmail(e.target.value)}

                    />
                  </div>
                  <p
                    className="hidden text-xs text-red-600 mt-2"
                    id="email-error"
                  >
                    Please include a valid email address so we can get back to
                    you
                  </p>
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-blue-600"
                >
                  Continue 📨
                </button>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer position="top-center" autoClose={3000} />
    </div>
  );
};

export default SignIn;
