import { Form, Input, Popconfirm, Table, Typography } from "antd";
import { Upload, Button, Modal, message } from "antd";
import { LoadingOutlined, PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { modifyNotice, deleteNotice } from "../../Redux/Actions/Index";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const AllNotice = useSelector((state) => state.allNotices);

  const dispatch = useDispatch();

  const [form] = Form.useForm();

  const [data, setData] = useState(AllNotice);

  const [editingKey, setEditingKey] = useState("");

  const isEditing = (record) => record.id === editingKey;

  const edit = (record) => {
    form.setFieldsValue([
      {
        title: "",
        description: "",
        image: "",
      },
    ]);

    setEditingKey(record.id);
  };
  const cancel = () => {
    Modal.confirm({
      title: "Si cancelas, perderas los cambios, deseas continuar?",
      onOk: async () => {
        setEditingKey("");
        setImageUrl("");
      },
      onCancel: () => {},
    });
  };

  const save = async (id) => {

    const newData = [...data];

    const index = newData.filter((item) => id === item.id);

    const row = await form.validateFields();
    
    const newForm = {...row}

    newForm.image = imageUrl;
    
    if (index) {

    try {
      await dispatch(modifyNotice(id, newForm));
      message.success("La noticia se modifico correctamente")

    } catch (error) {
      message.error("La noticia no ha sido modificada")
      console.log(error);
    }
  }
  };

  const Delete = async (id) => {

    try {
      Modal.confirm({
        title: "Estas seguro que quiere borrar la noticia?",
        onOk: async () => {
          await dispatch(deleteNotice(id));
          message.success("La noticia se ha eliminado correctamente.");
        },
        onCancel: () => {},
      });
    } catch (error) {
      // Si ocurre un error, podrías manejarlo aquí mostrando un mensaje de error o realizando otras acciones necesarias.
    }
  };

  //APARTADO DEL INPUT IMAGE//

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
      message.error("Image must smaller than 2MB!");
    }
    return isJpgOrPng && isLt2M;
  };

  const [loading, setLoading] = useState(false);

  const [imageUrl, setImageUrl] = useState("");

  const handleChange = (info) => {
    if (info.file) {
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, (url) => {
        setLoading(false);
        setImageUrl(url);
      });
    }
  };

  const uploadButton = (
    <div>
      {loading ? <LoadingOutlined /> : <PlusOutlined />}
      <div
        style={{
          marginTop: 8,
        }}
      >
        Upload
      </div>
    </div>
  );

  //APARTADO DEL INPUT IMAGE//

  const EditableCell = ({
    editing,
    dataIndex,
    title,
    inputType,
    record,
    index,
    children,
    ...restProps
  }) => {
    const inputNode =
      inputType === "file" ? (
        <Upload
          name="avatar"
          listType="picture-card"
          className="avatar-uploader"
          showUploadList={false}
          action="/upload.do"
          beforeUpload={beforeUpload}
          onChange={handleChange}
        >
          {imageUrl ? (
            <img
              src={imageUrl}
              alt="avatar"
              style={{
                width: "100%",
              }}
            />
          ) : (
            uploadButton
          )}
        </Upload>
      ) : (
        <Input />
      );
    return (
      <td {...restProps}>
        {editing ? (
          <Form.Item
            name={dataIndex}
            style={{
              margin: 0,
            }}
            rules={[
              {
                required: true,
                message: `Please Input ${title}!`,
              },
            ]}
          >
            {inputNode}
          </Form.Item>
        ) : (
          children
        )}
      </td>
    );
  };

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      width: "15%",
      editable: true,
    },
    {
      title: "Sub-Title",
      dataIndex: "subtitle",
      width: "20%",
      editable: true,
    },
    {
      title: "Descripción",
      dataIndex: "description",
      width: "30%",
      editable: true,
    },
    {
      title: "Imagen",
      dataIndex: "image",
      width: "20%",
      editable: true,
      render: (text, record) => (
        <img src={record.image} alt="Imagen" style={{ maxWidth: 100 }} />
      ),
    },
    {
      title: "operation",
      dataIndex: "operation",
      render: (_, record) => {
        const editable = isEditing(record);

        return editable ? (
          <span>
            <Typography.Link
              onClick={() => save(record.id)}
              style={{
                marginRight: 8,
              }}
            >
              Save
            </Typography.Link>
            <Typography.Link onClick={cancel}>
              <a>Cancel</a>
            </Typography.Link>
          </span>
        ) : (
          <>
            <Typography.Link
              disabled={editingKey !== ""}
              onClick={() => edit(record)}
              style={{
                marginRight: 8,
              }}
            >
              Edit
            </Typography.Link>

            <Typography.Link onClick={() => Delete(record.id)} disabled={editingKey !== ""} >
              <a>Delete</a>
            </Typography.Link>
          </>
        );
      },
    },
  ];
  const mergedColumns = columns.map((col) => {
    if (!col.editable) {
      return col;
    }
    return {
      ...col,
      onCell: (record) => ({
        record,
        inputType: col.dataIndex === "image" ? "file" : "text",
        dataIndex: col.dataIndex,
        title: col.title,
        editing: isEditing(record),
      }),
    };
  });

  return (
    <Form
      layout="horizontal"
      form={form}
      component={false}
      enctype="multipart/form-data"
    >
      <Table
        components={{
          body: {
            cell: EditableCell,
          },
        }}
        bordered
        dataSource={AllNotice}
        columns={mergedColumns}
        rowClassName="editable-row"
      />
    </Form>
  );
};
export default App;
