import { useContext } from "react";
import loginPic from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Component/AuthProvider/AuthProvider";
import { Link } from "react-router-dom";

const SignUp = () => {

    const {createUser} = useContext(AuthContext);

    const handleSignUp = (e)=>{
        e.preventDefault();

        const email = e.target.email.value;
        const password = e.target.password.value;

        createUser(email, password)
        .then(result => {
            console.log(result.user);
        })
        .catch(err=>{
            console.log(err.message);
        })
    }

    return (
        <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content">
          <div className="text-center lg:text-left w-1/2 mr-6">
            <img src={loginPic} alt="" />
          </div>
          <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSignUp} className="card-body">
              <h1 className="text-3xl lg:text-5xl font-bold text-center">
              Sign Up
              </h1>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                  required
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn bg-[#FF3811] text-white">Sign Up</button>
              </div>
              <h4>Already have an account ? <Link to={"/login"}>Login</Link></h4>
            </form>
          </div>
        </div>
      </div>
    </div>
    );
};

export default SignUp;