import Header from "../../components/Header";
import { Button, Form, Input, Select } from "antd";

import styles from "./styles.module.scss";
import { useMutation } from "react-query";
import { createProductClient } from "../../api/client";
import { useGetCategories } from "../../hooks/category";

export default function AddProduct() {
  const [form] = Form.useForm();
  const { Option } = Select;

  const { data } = useGetCategories();

  const onFinish = (values: any) => {
    createProductMutation.mutate(values);
  };

  const createProductMutation = useMutation(
    async (data: any) => createProductClient(data),
    {
      onSuccess: () => {
        form.resetFields();
      },
    }
  );

  return (
    <div className={styles.container}>
      <Header />

      <Form
        form={form}
        name="control-hooks"
        onFinish={onFinish}
        style={{ maxWidth: 500 }}
        className={styles["form-container"]}
      >
        <h2>Add product</h2>
        <Form.Item name="name" label="Name" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="description"
          label="Description"
          rules={[{ required: true }]}
        >
          <Input />
        </Form.Item>
        <Form.Item name="color" label="Color" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item name="price" label="Price" rules={[{ required: true }]}>
          <Input />
        </Form.Item>
        <Form.Item
          name="category_id"
          label="Category"
          rules={[{ required: true }]}
        >
          <Select placeholder="Select a option " allowClear>
            {data?.data.map((category: any) => (
              <Option value={category.id}>{category.product_type}</Option>
            ))}
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
}
