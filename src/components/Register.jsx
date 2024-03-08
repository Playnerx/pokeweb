export default function Login() {
  return (
      <>
          <div className="flex items-center justify-center min-h-screen registerBackground">
              <div className="absolute inset-0 bg-black opacity-50"></div>
              <div className="wrapperRegister">
                  <form className="formRegister" action="#">
                      <h2 className="text-[35px] font-semibold text-white">Registrati</h2>
                      <div className="inputField">
                          <input type="text" required />
                          <label>Inserisci il tuo nickname</label>
                      </div>
                      <div className="inputField">
                          <input type="text" required />
                          <label>Inserisci la tua email</label>
                      </div>
                      <div className="inputField">
                          <input type="password" required />
                          <label>Inserisci la tua password</label>
                      </div>
                      <div className="inputField">
                          <input type="password" required />
                          <label>Conferma la tua password</label>
                      </div>
                      <div className="forget">
                          <label htmlFor="remember" className="flex items-center cursor-pointer">
                              <input className="cursor-pointer" type="checkbox" id="remember" />
                              <p className="">Accetto termini e condizioni</p>
                          </label>
                      </div>
                      <button className="buttonLogin" type="submit">Registrati</button>
                      <div className="login font-semibold">
                          <p>
                              Hai già un account? <a href="#">Fai il Log In</a>!
                          </p>
                      </div>
                  </form>
              </div>
          </div>
      </>
  )
}