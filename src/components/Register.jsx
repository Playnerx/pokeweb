import { NavLink } from "react-router-dom";
import { useAuth } from "./AuthProvider";
import { useForm } from "react-hook-form";

const BACKEND_URL = import.meta.env.VITE_BACKEND_URL;

export default function Register() {

    const { fetcher, setAsLogged } = useAuth();

    const {
        register,
        handleSubmit,
        setValue,
        setError,
        formState: { errors },
    } = useForm({ mode: "all" });

    const getErrorTypes = (errors) => {
        const types = {};
        errors.forEach((error, i) => {
            types[`apiError${i + 1}`] = error
        })
        console.log(types);
        return types;
    }

    const onSubmit = (formData) => {
        fetcher(`${BACKEND_URL}/register`, {
            method: "POST",
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
            body: JSON.stringify(formData),
        })
            .then((response) => response.json())
            .then((data) => {
                if (!data.errors) {
                    setAsLogged(data.user, data["access_token"])
                } else {
                    Object.keys(data.errors).forEach(field => {
                        if (data.errors[field]) {
                            setError(field, {
                                types: getErrorTypes(data.errors[field])
                            })
                        }
                    })
                }
            })
            .catch((err) => {
                console.log(err);
            });
    };

    return (
        <>
            <div className="flex items-center justify-center min-h-screen registerBackground">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="wrapperRegister">
                    <form className="formRegister" onSubmit={handleSubmit(onSubmit)}>
                        <h2 className="text-[35px] font-semibold text-white">Registrati</h2>
                        <div className="inputField">
                            <input type="text" required {...register("username", { required: 'Field "Username" is required' })} />
                            <label>Inserisci il tuo nickname</label>
                        </div>
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
                        <div className="inputField">
                            <input type="password" required {...register("password_confirmation", {
                                required: 'Field "Password confirmation" is required',
                            })} />
                            <label>Conferma la tua password</label>
                        </div>
                        {/* <div className="forgetRegister">
                            <label htmlFor="remember" className="flex items-center cursor-pointer">
                                <input className="cursor-pointer" type="checkbox" id="remember" />
                                <p className="">Accetto termini e condizioni</p>
                            </label>
                        </div> */}
                        <button className="buttonLogin mt-6" type="submit">Registrati</button>
                        <div className="login font-semibold">
                            <p>
                                Hai già un account? <NavLink to="/login">Fai il Log In</NavLink>!
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
