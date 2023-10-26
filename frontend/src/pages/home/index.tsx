import { Table } from "antd";
import Header from "../../components/Header";
import { useGetProducts } from "../../hooks/product";
import styles from "./styles.module.scss";

export default function Home() {
  const { data } = useGetProducts();

  const dataSource = data?.data.products.map((product: any) => {
    const data = {
      key: product.id,
      name: product.name,
      description: product.description,
      color: product.color,
      category: product.category.product_type,
      price: product.price,
      promotional_price: product.promotional_price,
    };
    return data;
  });

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Color",
      dataIndex: "color",
      key: "color",
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Promotional Price",
      dataIndex: "promotional_price",
      key: "promotional_price",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
  ];

  return (
    <div className={styles.container}>
      <Header />

      <div className={styles.table}>
        <Table dataSource={dataSource} columns={columns} />;
      </div>
    </div>
  );
}
