import React from "react";
import "./adminLogin.css";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../Redux/Actions/Index";
import logo from "../adminLogin/escudo.png";

export default function AdminLogin() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const token = useSelector((state) => state.token);

  console.log("el token?", token);

  const onFinish = async (values) => {

    console.log("Received values of form: ", values);

    try {

      await dispatch(login(values));

      navigate('/panel');

    } catch (error) {

      const messageError = error.response.data.message;

      if (messageError === "Usuario no encontrado") {
        
        message.error("Usuario no encontrado!");

      } else if (messageError === "Contraseña incorrecta") {

        message.error("Contraseña incorrecta!");

      }
    }
  };

  return (
    <section id="login" className="login">
      <div className="login-container">
        <div className="logo-container">
          <img
            src={logo}
            alt="logo"
            width={200}
            height={200}
            className="logo"
          />
        </div>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your Password!",
              },
            ]}
          >
            <Input
              prefix={<LockOutlined className="site-form-item-icon" />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>
          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="login-form-button"
            >
              Login
            </Button>
            
          </Form.Item>
          <a href="/" onClick={() => navigate('/')}>Volver a la página principal</a>
        </Form>
      </div>
    </section>
  );
}
