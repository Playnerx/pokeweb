import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useForm } from "react-hook-form";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Login() {

    const { fetcher, setAsLogged } = useAuth();

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm({ mode: "all" });

    const onSubmit = (formData) => {
        fetcher(`${BACKEND_URL}/api/login`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (data.status !== 'error') {
                    setAsLogged(data.user, data["access_token"])
                } else {
                    setError('email')
                    setError('password', { type: 'custom', message: data.message })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen loginBackground">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="wrapperLogin">
                    <form className="formLogin" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-[35px] font-semibold text-white">Login</h2>
                        <div className="inputField">
                            <input type="email" required {...register("email", { required: 'Field "Email" is required' })} />
                            <label>Inserisci la tua email</label>
                        </div>
                        <div className="inputField">
                            <input type="password" required {...register("password", {
                                required: 'Field "Password" is required',
                            })} />
                            <label>Inserisci la tua password</label>
                        </div>
                        <div className="forgetLogin">
                            <label htmlFor="remember" className="flex items-center cursor-pointer">
                                <input className="cursor-pointer" type="checkbox" id="remember" />
                                <p className="">Ricordami</p>
                            </label>
                            <a href="#">Password dimenticata?</a>
                        </div>
                        <button className="buttonLogin" type="submit">Log In</button>
                        <div className="register font-semibold">
                            <p>
                                Non hai un account? <NavLink to="/register">Registrati</NavLink>!
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
