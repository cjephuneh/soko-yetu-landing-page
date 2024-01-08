import { useState } from 'react';

const SignIn = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
  
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Add your login logic here
//   };

  return (
    <div className="bg-gray-200 flex h-full items-center py-16">
      <main className="w-full max-w-md mx-auto p-6">
        <div className="mt-7 bg-white border border-gray-200 rounded-xl shadow-sm">
          <div className="p-4 sm:p-7">
            <div className="text-center">
              <h1 className="block text-2xl font-bold text-gray-800">🔑 Get Early Access 🔓</h1>
            </div>
            <div className="mt-5">
              

              {/* Form */}
              <form className="grid gap-y-4">
                {/* ... Form fields ... */}
                <div>
                  <div className="flex justify-between items-center">
                    <label className="block text-sm mb-2 text-black">Name 🏷️</label>
                  </div>
                  <div className="relative">
                    <input type="password" id="name" name="name" className="py-3 px-4 block w-full border-gray-200 border rounded-lg text-sm" />
                    
                  </div>
                </div>

                <div>
                  <label  className="block text-sm mb-2 text-black">Email address 📧</label>
                  <div className="relative">
                    <input type="email" id="email" name="email" className="py-3 px-4 block w-full border-gray-200  border rounded-lg text-sm " required aria-describedby="email-error"/>
                    
                  </div>
                  <p className="hidden text-xs text-red-600 mt-2" id="email-error">Please include a valid email address so we can get back to you</p>
                </div>

               

                <button type="submit" className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none focus:outline-none focus:ring-1 focus:ring-blue-600">
                  Continue
                </button>
              </form>
              {/* End Form */}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default SignIn;