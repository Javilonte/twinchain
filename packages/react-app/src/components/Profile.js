/* eslint-disable */
import React, { useEffect, useState } from "react";

import { Header, Image, Grid, Card, Icon, Table } from "semantic-ui-react";
// import { Form, Input, Button, Checkbox } from "antd";
import "./Profile.css";
const index = require("../lib/e2ee.js");

export default function Profile(props) {
  const [user, setUser] = useState({});

  useEffect(() => {
    index.getAllUsers(props.address, props.tx, props.writeContracts).then(result => {
      if (result.caller) {
        console.log(result.caller);
        setUser(result.caller);
      }
    });
  }, [props.writeContracts]);

  const extra = (
    <a>
      <Icon name="user" />
      Notario
    </a>
  );

  return (
    <div className="profile__container">
      <Grid columns="two">
        <Grid.Row>
          <Grid.Column width={4}>
            <Card
              image="https://media-exp1.licdn.com/dms/image/C4D03AQE-yi9K3pVU0Q/profile-displayphoto-shrink_200_200/0/1597187034013?e=1645660800&v=beta&t=k7snfQtd-mgqm4Q-AKPIv5oK43cR-nZeiB7Yu3bb-18"
              header={user.name}
              extra={extra}
              style={{ height: "387.2px" }}
            />
          </Grid.Column>

          <Grid.Column width={12}>
            <Card.Group>
              <Card fluid>
                <Card.Content>
                  <Table padded="very">
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>
                          <h3>Nombre de usuario</h3>
                        </Table.Cell>
                        <Table.Cell>
                          <h3>{user.name}</h3>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <h3>Correo</h3>
                        </Table.Cell>
                        <Table.Cell>
                          <h3>name@domain.com</h3>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <h3>Direccion de usuario</h3>
                        </Table.Cell>
                        <Table.Cell>
                          <h3>0x337b2aF19e840E8761Ef7a90Ce05Fedf4E91E2B2</h3>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <h3>Tipo de usuario</h3>
                        </Table.Cell>
                        <Table.Cell>
                          <h3>Notario</h3>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>
                          <h3>Miembro desde </h3>
                        </Table.Cell>
                        <Table.Cell>
                          <h3>October 2020</h3>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </Card.Content>
              </Card>
            </Card.Group>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  );
}
