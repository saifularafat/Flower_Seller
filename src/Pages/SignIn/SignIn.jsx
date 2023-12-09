import signBanner from "../../assets/signUp/sign.jpg";
import logoImag from "../../assets/logo/logo.webp"
import celebrations from "../../assets/signUp/celebrations.webp"
import { useForm } from "react-hook-form";
import { AiOutlineEye } from "react-icons/ai"
import { PulseLoader } from "react-spinners";
import useAuth from "../../api/useAuth";
import { Link } from "react-router-dom";
import SocialSignUp from "../../Share/SocialSignUp/SocialSignUp";
const SignIn = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();
    const { 
        loading,
    
    } = useAuth();
    const onSubmit = (data) => console.log(data)
    return (
        <div className="">
            <div
                style={{
                    backgroundImage: `url(${signBanner})`,
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    height: "100vh",
                    width: "",
                }}
                className="flex items-center justify-center min-h-screen"
            >
                <div className="w-8/12 mx-auto grid grid-cols-8 gap-5">
                    <div className="bg-white/70 p-5 col-span-3 rounded-md relative md:block hidden">
                        <div className="bg-black/10 py-2 px-3 rounded-md ">
                            <Link to="/">
                                <img src={logoImag} alt="" className="w-1/2 mx-auto object-cover" />
                            </Link>
                        </div>
                        {/* <div className=" "> */}
                        <p className="absolute top-1/2 left-6 mx-3 text-center text-xl font-semibold">Lorem ipsum dolor sit. Lorem ipsum dolor sit amet.</p>
                        {/* </div> */}
                        <img src={celebrations} alt="" className="w-10/12 mx-auto object-cover absolute bottom-3" />
                    </div>
                    <div className="bg-white/80 p-5 md:col-span-5 col-span-8 w-full mx-auto rounded-md">
                        <h3 className="text-2xl text-slate-950 font-semibold border-0 border-b-[2px] border-slate-500 pb-3">Sign In</h3>
                        {/* Sign Up From */}

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3 pt-3">
                            <div>
                                <label htmlFor='email' className='formLabel'>
                                    Email address*
                                </label>
                                <input
                                    type='email'
                                    name='email'
                                    id='email'
                                    required
                                    placeholder='Enter Your Email Here'
                                    className='formInput'
                                    data-temp-mail-org='0'
                                    {...register("email", { required: true })}
                                />
                                {errors.email?.type === "required" && (
                                    <p className="text-red-600">Email is required</p>
                                )}
                            </div>
                            <div>
                                <div className='flex justify-between'>
                                    <label htmlFor='password' className='formLabel'>
                                        Password*
                                    </label>
                                </div>
                                <div className="relative">
                                    <input
                                        type='password'
                                        name='password'
                                        id='password'
                                        required
                                        placeholder='*******'
                                        className='formInput'
                                        {...register("password",
                                            {
                                                required: true,
                                                minLength: 6,
                                                maxLength: 20,
                                                pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z].*[a-z]).{6}/
                                            })}
                                    />
                                    {errors.password?.type === 'required' &&
                                        <p className="text-red-600 mt-1">Password is required</p>
                                    }
                                    {errors.password?.type === 'minLength' &&
                                        <p className="text-red-600 mt-1">Password must be 6 character</p>
                                    }
                                    {errors.password?.type === 'maxLength' &&
                                        <p className="text-red-600 mt-1">Password must be 20 character</p>
                                    }
                                    {errors.password?.type === 'pattern' &&
                                        <p className="text-red-600 mt-1">Password must have one Uppercase
                                            two lowercase one number and special character</p>
                                    }
                                    <AiOutlineEye
                                        // onClick={handleShowPass}
                                        className="absolute top-3 right-3 cursor-pointer text-lg"
                                    ></AiOutlineEye>
                                </div>

                            </div>

                            <div className="">
                                <button
                                    type='submit'
                                    className='bg-blue-700 w-full text-xl font-semibold font-mono uppercase tracking-wider rounded-md py-1 text-white hover:bg-transparent hover:text-blue-900 border-2 hover:border-blue-900 border-blue-900 transition duration-200'
                                >
                                    {
                                        loading ? <PulseLoader className="mx-auto 
                                    animate-pulse"
                                            color="#FF3811"
                                            size={18} />
                                            :
                                            'Sign In'
                                    }

                                </button>
                            </div>
                            <p className='px-6 text-lg text-center text-title-color'>
                                Already have an account?{' '}
                                <Link
                                    to='/signUp'
                                    className='hover:underline hover:text-color-btn text-teal-900 font-medium'
                                >
                                    Sign UP
                                </Link>
                            </p>
                            <SocialSignUp />

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignIn;