/* eslint-disable */

import React, { useState } from "react";
import "antd/dist/antd.css";
import upload from "../../images/upload.png";
import { Upload, message } from "antd";
import { Dropdown, Input } from "semantic-ui-react";


const index = require("../../lib/e2ee.js");

const { Dragger } = Upload;

const fileStorage = ["AWS", "Fleek", "Slate"];

const SelectFiles = ({ setFileInfo, setSubmitting, setTitle, submitting }) => {
  const [selected, setSelected] = useState(false);
  const [storageType, setStorage] = useState("AWS");
  console.log(storageType);

  const props = {
    name: "file",
    multiple: true,
    customRequest: data => {
      uploadFile(data.file);
    },
    onChange(status) {
      if (status) {
        message.success(` Archivo subido exitosamente.`);
      } else {
        message.error(`Error al subir el archivo.`);
      }
    },
  };

  const uploadFile = async file => {
    let partiesInvolved = [];
    setSelected(true);
    setSubmitting(true);
    const receipt = await index.uploadDoc(file, "123", setSubmitting, storageType, setFileInfo);
    console.log("Archivo subido!", receipt);
    if (receipt) {
      return true;
    }
  };

  return (
    <div className="parties__container">
      <div className="wrapper">
        <div style={{ marginBottom: "14px" }}>
          <Dropdown
            placeholder="Selecciona el proovedor de almacenamiento"
            fluid
            selection
            options={fileStorage.map(storage => {
              return {
                key: storage,
                text: storage,
                value: storage,
              };
            })}
            onChange={(event, data) => {
              setStorage(data.value);
            }}
          />
        </div>

        <div style={{ marginBottom: "14px" }}>
          <Dragger {...props} style={{ border: "none" }}>
            <p className="ant-upload-drag-icon">
              <img src={upload} alt="" srcset="" />
            </p>
            <p className="ant-upload-text">Click aqui o arrastra a esta area para subir archivo</p>
          </Dragger>
          {selected && !submitting ? (
            <Input
              fluid
              style={{ marginTop: "16px" }}
              placeholder="Ingresa el titulo del documento"
              onChange={(event, data) => {
                setTitle(data.value);
              }}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default SelectFiles;

