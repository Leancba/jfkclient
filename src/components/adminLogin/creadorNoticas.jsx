import { PlusOutlined, LoadingOutlined } from "@ant-design/icons";
import { Button, message, Form, Input, Upload } from "antd";
import { useState } from "react";

import { createNotice } from "../../Redux/Actions/Index";
import { useDispatch } from "react-redux";

const { TextArea } = Input;

export default function Creador() {
  const dispatch = useDispatch();

  const [form] = Form.useForm();
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  const getBase64 = (img, callback) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => callback(reader.result));
    reader.readAsDataURL(img);
  };

  const beforeUpload = (file) => {
    const isJpgOrPng = file.type === "image/jpeg" || file.type === "image/png";
    if (!isJpgOrPng) {
      message.error("You can only upload JPG/PNG file!");
    }
    const isLt2M = file.size / 1024 / 1024 < 2;
    if (!isLt2M) {
      message.error("Image must be smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const handleChange = (info) => {
    if (info.file) {
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const onFinish = async (values) => {
    await form.validateFields();

    const newValues = { ...values };

    newValues.image = imageUrl;

    try {
      console.log(newValues)
      await dispatch(createNotice(newValues));

      form.setFieldsValue({
        title: '',
        subtitle: '',
        description: '',
        imagen: '',
      });

      setImageUrl('')

      message.success("La noticia se ha creado correctamente.");
    } catch (error) {
      console.log(error);
      message.failed("La noticia no se ha creado.");
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div style={{ marginTop: 8 }}>Upload</div>
    </div>
  );

  return (
    <>
      <Form
        form={form}
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="vertical"
        style={{ maxWidth: 600 }}
        onFinish={onFinish}
      >
        <Form.Item
          label="Titulo"
          name="title"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Sub-Titulo"
          name="subtitle"
          rules={[{ required: true, message: "Please input the title!" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Descripción"
          name="description"
          rules={[{ required: true, message: "Please input the description!" }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item
          label="Imagen"
          name="imagen"
          rules={[{ required: true, message: "Please input the imagen!" }]}
        >
          <Upload
            name="avatar"
            listType="picture-card"
            className="avatar-uploader"
            showUploadList={false}
            beforeUpload={beforeUpload}
            onChange={handleChange}
          >
            {imageUrl ? (
              <img src={imageUrl} alt="avatar" style={{ width: "100%" }} />
            ) : (
              uploadButton
            )}
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 4 }}>
          <Button type="secondary" htmlType="submit">
            Crear Noticia
          </Button>
        </Form.Item>
      </Form>
    </>
  );
}
