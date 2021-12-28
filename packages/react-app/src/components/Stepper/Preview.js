/* eslint-disable */

import React from "react";
import { Table, Icon } from "semantic-ui-react";
import "./Preview.css";

const index = require("../../lib/e2ee.js");

const Preview = ({ parties, fileInfo, title }) => {
  return (
    <div className="preview__container">
      <div className="wrapper">
        <div>
          <h3 clasdName="h2__medium" style={{ textAlign: "left", color: "#4A5568" }}>
            Seleccionar grupo 
          </h3>
          <div style={{ marginBottom: "14px" }}>
            <Table singleLine>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell style={{ color: "#4A5568" }}>Nombre del grupo</Table.HeaderCell>
                  <Table.HeaderCell style={{ color: "#4A5568" }}>Direccion del grupo</Table.HeaderCell>
                </Table.Row>
              </Table.Header>

              <Table.Body>
                {parties.map(party => {
                  return (
                    <Table.Row>
                      <Table.Cell>{party.name}</Table.Cell>
                      <Table.Cell>{party.address}</Table.Cell>
                    </Table.Row>
                  );
                })}
              </Table.Body>
            </Table>
          </div>
        </div>
        <h3 clasdName="h2__medium" style={{ textAlign: "left", color: "#4A5568" }}>
          Documento seleccionado
        </h3>
        <Table singleLine>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell style={{ color: "#4A5568" }}>Titulo del documento</Table.HeaderCell>
              <Table.HeaderCell style={{ color: "#4A5568" }}>Tipo de documento</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <span>
                  <Icon name="file pdf outline" />
                </span>
                {title}
              </Table.Cell>
              <Table.Cell>{fileInfo.fileFormat}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </div>
    </div>
  );
};

export default Preview;
