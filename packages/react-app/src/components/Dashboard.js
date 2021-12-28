import React from "react";
import { Card, Grid } from "semantic-ui-react";
import "./Dashboard.css";
import Secure from "../images/secure.png";
import Sign from "../images/sign.png";
import Verify from "../images/verify.png";
import { Link } from "react-router-dom";

const Dashboard = () => (
  <>
    <div className="dashboard__container">
      <div className="">
        <Grid container columns={2}>
          <Grid.Column>
            <div className="wrapper">
              <Link to="/sign">
                <div className="card">
                  <div className="card__container">
                    <div className="img">
                      <img src={Sign} alt="" srcset="" />
                    </div>
                    <p className="title">Firmar y enviar</p>
                  </div>
                </div>
              </Link>
            </div>
          </Grid.Column>
          {/* <Grid.Column>
            <div className="wrapper">
              <Link to="/sign">
                <div className="card">
                  <div className="card__container">
                    <div className="img">
                      <img src={Secure} alt="" srcset="" />
                    </div>
                    <p className="title">Asegurar y compartir</p>
                  </div>
                </div>
              </Link>
            </div>
          </Grid.Column> */}
          <Grid.Column>
            <div className="wrapper">
              <Link to="/verify">
                <div className="card">
                  <div className="card__container">
                    <div className="img">
                      <img src={Verify} alt="" srcset="" />
                    </div>
                    <p className="title">Verificar documento</p>
                  </div>
                </div>
              </Link>
            </div>
          </Grid.Column>
        </Grid>
      </div>
    </div>
  </>
);

export default Dashboard;
