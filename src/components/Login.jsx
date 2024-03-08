export default function Login() {
    return (
        <>
            <div className="flex items-center justify-center min-h-screen loginBackground">
                <div className="absolute inset-0 bg-black opacity-50"></div>
                <div className="wrapperLogin">
                    <form className="formLogin" action="#">
                        <h2 className="text-[35px] font-semibold text-white">Login</h2>
                        <div className="inputField">
                            <input type="text" required />
                            <label>Inserisci la tua email</label>
                        </div>
                        <div className="inputField">
                            <input type="password" required />
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
                                Non hai un account? <a href="#">Registrati</a>!
                            </p>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}
