import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import Header from "./components/Header/Header"; // KHÔNG cần .js
import Footer from "./components/Footer/Footer";

export default function Home() {
  // Đã cập nhật lại nội dung danh sách xe điều khiển từ hình ảnh trước của bạn
  const products = [
    { id: 1, name: "Xe điều khiển địa hình", price: "1.200.000đ", oldPrice: "1.500.000đ", discount: "-20%", img: "/car1.jpg", remain: "Còn 12/20 suất" },
    { id: 2, name: "Xe điều khiển drift", price: "950.000đ", oldPrice: "1.100.000đ", discount: "-14%", img: "/car2.jpg", remain: "Còn 10/20 suất" },
    { id: 3, name: "Xe điều khiển tốc độ cao", price: "1.500.000đ", oldPrice: "1.800.000đ", discount: "-17%", img: "/car3.jpg", remain: "Còn 8/20 suất" },
    { id: 4, name: "Xe điều khiển mini", price: "450.000đ", oldPrice: "550.000đ", discount: "-18%", img: "/car4.jpg", remain: "Còn 15/20 suất" },
    { id: 5, name: "Xe điều khiển địa hình mini", price: "600.000đ", oldPrice: "700.000đ", discount: "-15%", img: "/car5.jpg", remain: "Còn 9/20 suất" },
    { id: 6, name: "Xe điều khiển thể thao", price: "1.100.000đ", oldPrice: "1.300.000đ", discount: "-16%", img: "/car6.jpg", remain: "Còn 11/20 suất" },
    { id: 7, name: "Xe điều khiển off-road", price: "1.350.000đ", oldPrice: "1.600.000đ", discount: "-15%", img: "/car7.jpg", remain: "Còn 7/20 suất" },
    { id: 8, name: "Xe điều khiển siêu tốc", price: "1.800.000đ", oldPrice: "2.000.000đ", discount: "-10%", img: "/car8.jpg", remain: "Còn 5/20 suất" }
  ];

  return (
    <div className={styles.container}>
      {/* HEADER */}
      <Header />

      {/* MAIN CONTENT */}
      <div className={styles.item2}>
        <div className={styles.mainContent}>
          {products.map((product) => (
            <div key={product.id} className={styles.product}>
              <div className={styles.mainProduct}>
                <div className={styles.productImage}>
                  <Image src={product.img} alt={product.name} width={220} height={150} style={{ objectFit: "cover" }} />
                </div>
                <div className={styles.productName}>
                  <h5>{product.name}</h5>
                </div>
                <div className={styles.productPrice}>
                  <strong className={styles.price}>{product.price}</strong>
                  <span className={styles.discount}>
                    <label className={styles.oldPrice}>{product.oldPrice}</label>
                    <small className={styles.percent}>{product.discount}</small>
                  </span>
                </div>
                <div className={styles.productRemain}>
                  <span>{product.remain}</span>
                </div>
              </div>
              <div className={styles.buyButton}>
                <Link href="/">Mua ngay</Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}