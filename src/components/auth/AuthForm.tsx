import { toast } from 'react-hot-toast'
import { FormEvent, useState } from 'react'


const AuthForm = () => {
    const [variant, setVariant] = useState('LOGIN');
    const [isLoading, setIsLoading] = useState(false);


    // form states
    const [name, setName] = useState('Abc');
    const [email, setEmail] = useState('abc@gmail.com');
    const [password, setPassword] = useState('password');


    // toggle variant
    const toggleVariant = () => {
        if (variant === "LOGIN") { setVariant('REGISTER') }
        else setVariant('LOGIN')
    }


    // submit handler
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        const toastId = toast.loading("Processing...");

        if (variant === "LOGIN") {
            if (!email || !password) {
                setIsLoading(false);
                return toast.error('Please fill in all the required fields.', { id: toastId });
            }

            toast.success("Logged in successfully.", { id: toastId })
            setIsLoading(false);

        }

        if (variant === "REGISTER") {

            if (!name || !email || !password) {
                setIsLoading(false);
                return toast.error('Please fill in all the required fields.', { id: toastId });
            }

            toast.success("Registered successfully.", { id: toastId })
            setIsLoading(false);
        }
    }


    return (
        <section className='h-[100vh] p-[1rem] flex relative'>
            {/* login form */}
            <form
                className={`
                    h-full w-[60%] px-[5rem] py-[4rem] flex flex-col justify-center gap-[2rem] items-center duration-1000 
                    ${variant === "REGISTER" ? "translate-x-[66.66667%] opacity-0 invisible" : "opacity-100 visible"}
                `}
            >
                <div className='w-[40rem] mb-[2rem]'>
                    <h1 className='text-[3rem]'>Welcome to Shop</h1>
                    <p className='text-[1.45rem] text-[#767676]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sed odio!</p>
                </div>

                <label htmlFor="email" className='w-[40rem] text-[1.45rem]'>
                    <p>Email</p>
                    <input
                        type="text"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full mt-[0.75rem] p-[1rem] border text-[1.25rem] placeholder:text-[1.25rem]'
                    />
                </label>

                <label htmlFor="password" className='w-[40rem] text-[1.45rem]'>
                    <p>Password</p>
                    <input
                        type="text"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full mt-[0.75rem] p-[1rem] border text-[1.25rem] placeholder:text-[1.25rem]'
                    />
                </label>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className='w-[40rem] py-[2rem] text-[1.25rem] bg-[#ededed]'
                >
                    Login
                </button>

                <button type='button' onClick={toggleVariant} className='mt-[1rem] text-[1.25rem] text-[#767676]'>New here? <u>Register</u></button>
            </form>


            {/* register form */}
            <form
                className={`
                    h-full w-[60%] px-[5rem] py-[4rem] flex flex-col justify-center items-center gap-[2rem] duration-1000 absolute top-0 left-0 
                    ${variant === "REGISTER" ? "translate-x-[66.66667%] opacity-100 visible" : "invisible opacity-0"}
                `}
            >
                <div className='w-[40rem] mb-[2rem]'>
                    <h1 className='text-[3rem]'>Welcome to Shop</h1>
                    <p className='text-[1.45rem] text-[#767676]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, sed odio!</p>
                </div>

                <label htmlFor="name" className='w-[40rem] text-[1.45rem]'>
                    <p>Name</p>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className='w-full mt-[0.75rem] p-[1rem] border text-[1.25rem] placeholder:text-[1.25rem]'
                    />
                </label>

                <label htmlFor="email" className='w-[40rem] text-[1.45rem]'>
                    <p>Email</p>
                    <input
                        type="text"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='w-full mt-[0.75rem] p-[1rem] border text-[1.25rem] placeholder:text-[1.25rem]'
                    />
                </label>

                <label htmlFor="password" className='w-[40rem] text-[1.45rem]'>
                    <p>Password</p>
                    <input
                        type="text"
                        id="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className='w-full mt-[0.75rem] p-[1rem] border text-[1.25rem] placeholder:text-[1.25rem]'
                    />
                </label>

                <button
                    type="submit"
                    onClick={handleSubmit}
                    disabled={isLoading}
                    className='w-[40rem] py-[2rem] text-[1.25rem] bg-[#ededed]'
                >
                    Register
                </button>

                <button type='button' onClick={toggleVariant} className='mt-[1rem] text-[1.25rem] text-[#767676]'>Have an account? <u>Login</u></button>
            </form>

            <div className={`w-[40%] ml-[auto] bg-[#ededed] duration-1000 ${variant === "REGISTER" ? "translate-x-[-150%]" : ""}`}></div>
        </section>
    )
}

export default AuthForm;