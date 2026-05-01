'use client'
import Link from "next/link";

const LoginPage = () => {

    const handleLoginFunc = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password);
    }

  return (
    <div className="container mx-auto min-h-[90vh] flex justify-center items-center">
      <div className="p-4 rounded-xl bg-white">
        <form action="" onSubmit={handleLoginFunc}>
          <fieldset className="fieldset bg-white border-base-300 rounded-box w-xs  p-4">
            <legend className="fieldset-legend text-xl">
              Login You Account
            </legend>

            <label className="label font-bold text-black">Email</label>
                      <input
                          name="email"
              type="email"
              className="input bg-pink-50"
              placeholder="Email"
            />

            <label className="label font-bold text-black">Password</label>
                      <input
                          name="password"
              type="password"
              className="input bg-pink-50"
              placeholder="Password"
            />

            <button className="btn bg-pink-800 text-white mt-4 ">Login</button>
          </fieldset>
        </form>

        <div className="font-semibold text-xs text-center">
          <p>
            Don&apos;t have an account?{" "}
            <Link className="text-pink-800 " href={`/register`}>
              Register
            </Link>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
