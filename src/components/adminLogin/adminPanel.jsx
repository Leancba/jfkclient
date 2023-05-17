import { AppstoreOutlined } from "@ant-design/icons";
import React, { useEffect } from "react";
import { Menu } from "antd";

import { useSelector, useDispatch } from "react-redux";
import { getAllNotices } from "../../Redux/Actions/Index";

import Novedades from "../novedades/novedades";
import Editor from "./editorNoticias";
import Creador from "./creadorNoticas";
import "./adminLogin.css";

import escudo from '../adminLogin/escudo.png'

function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    children,
    label,
    type,
  };
}

const items = [
  getItem("Panel noticias", "sub1", <AppstoreOutlined />, [
    getItem("Visor de noticias", "5"),
    getItem("Editor de noticias", "6"),
    getItem("Creador de noticias", "7"),
  ]),
];

const App = () => {
  const dispatch = useDispatch();

  const AllNotice = useSelector((state) => state.allNotices);

  useEffect(() => {
    dispatch(getAllNotices());
  }, []);

  const [selectedKey, setSelectedKey] = React.useState("5");

  const onClick = ({ key }) => {
    setSelectedKey(key);
  };

  return (
    <div className="panel-container">
      <div className="colum-menu" >
        <img src={escudo} alt='Logo de la institución' />
        <Menu
          onClick={onClick}
          defaultSelectedKeys={["1"]}
          defaultOpenKeys={["sub1"]}
          mode="inline"
          selectedKeys={[selectedKey]}
          items={items}
        />
      </div>

      {selectedKey === "5" ? (
        <div className="novedades-panel">
          <Novedades />
        </div>
      ) : (
        <div></div>
      )}
      {selectedKey === "6" ? (
        <div className="editor-panel">
          <Editor />
        </div>
      ) : (
        <div></div>
      )}
      {selectedKey === "7" ? (
        <div className="creador-panel">
          <Creador />
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
};

export default App;
