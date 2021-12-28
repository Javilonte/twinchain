/* eslint-disable */
import React, { useEffect, useState } from "react";
import "./Form.css";
import { Checkbox } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import logo from "../../images/logoInverted.png";
import Cookies from "universal-cookie";
const cookies = new Cookies();
const index = require("../../lib/e2ee.js");
import Rocket from "./img/img-2.svg";
import test from "./img/test.png";
import bg1 from "../../images/bg1.png";

function SignUpForm({ writeContracts, tx }) {
  let history = useHistory();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [notary, setNotary] = useState(false);
  const userType = { party: 0, notary: 1 };

  useEffect(() => {}, []);

  const registerUser = async () => {
    const walletStatus = await index.createWallet(password);
    if (walletStatus) {
      const accounts = await index.getAllAccounts(password);
      const registrationStatus = await index.registerUser(
        name,
        email,
        accounts[0],
        notary ? userType.notary : userType.party,
        tx,
        writeContracts,
      );
      if (registrationStatus) {
        cookies.set("userAddress", registrationStatus);
        history.push({
          pathname: "/login",
        });
      }
    }
  };

  return (
    <>
      
        <div className="form-container">
          
        
            <img src={logo} alt="" srcset="" className="logo_inverted" />
            <div className="form">
              
              <h2>Vincula tu wallet con twin</h2>
              <div className="form-inputs">
                <label className="form-label">Nombre de usuario</label>
                <input
                  className="form-input"
                  type="text"
                  name="username"
                  placeholder="Ingresa tu nombre de usuario "
                  value={name}
                  onChange={e => setName(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label className="form-label">Correo electronico</label>
                <input
                  className="form-input"
                  type="email"
                  name="email"
                  placeholder="Ingresa tu correo"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              </div>
              <div className="form-inputs">
                <label className="form-label">Firma electronica</label>
                <input
                  className="form-input"
                  type="password"
                  name="password"
                  placeholder="Ingresa tu firma electronica"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
              </div>

              <div className="form-inputs">
                <Checkbox
                  style={{ color: "#718096" }}
                  className="checkbox"
                  label="Soy notario"
                  checked={notary}
                  onChange={() => {
                    setNotary(!notary);
                  }}
                />
              </div>

              <button className="form-input-btn" onClick={registerUser}>
                Registrarse
              </button>
              <span className="form-input-login">
                Ya tienes una cuenta? Ingresa <Link to="/login">aqui</Link>
              </span>
            </div>
          
          {/* <div className="form-content-right">
            <img src={test} className="form-img" alt="left" srcset="" />
          </div> */}
        </div>
      
    </>
  );
}
export default SignUpForm;
