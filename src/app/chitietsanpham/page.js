"use client";

import styles from "../page.module.css"; 
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function ChiTietSanPham() {
  return (
    <div className={styles.container}>
      <Header />

      <main style={{ minHeight: '70vh', padding: '50px' }}>
  
        {/* CHI TIẾT */}
        <div style={{
          display: "flex",
          gap: "40px",
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#fff",
          borderRadius: "20px",
          padding: "30px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
        }}>

          <div style={{ flex: 1 }}>
            <img 
              src="/car1.jpg"
              alt="Xe điều khiển"
              style={{ width: "100%", borderRadius: "15px" }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h1>Xe điều khiển địa hình 🚗</h1>

            <h2>1.200.000₫</h2>

            <p style={{ color: "#555", lineHeight: "1.6" }}>
              Xe điều khiển địa hình mạnh mẽ, tốc độ cao, chạy tốt mọi địa hình.
            </p>

            <ul style={{ color: "#555" }}>
              <li>✔ Điều khiển ổn định</li>
              <li>✔ Pin sạc</li>
              <li>✔ Bền chắc</li>
            </ul>

            <button style={{
              marginTop: "20px",
              padding: "12px 20px",
              background: "#111",
              color: "white",
              border: "none",
              borderRadius: "10px"
            }}>
              🛒 Thêm vào giỏ hàng
            </button>
          </div>
        </div>

        {/* SẢN PHẨM LIÊN QUAN */}
        <div style={{ maxWidth: "1000px", margin: "40px auto 0" }}>
          <h3>Sản phẩm liên quan</h3>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(5, 1fr)",
            gap: "15px"
          }}>

            {[
              { img: "/car2.jpg", name: "Xe drift", price: "950.000₫" },
              { img: "/car3.jpg", name: "Xe tốc độ cao", price: "1.500.000₫" },
              { img: "/car4.jpg", name: "Xe mini", price: "450.000₫" },
              { img: "/car5.jpg", name: "Xe địa hình mini", price: "600.000₫" },
              { img: "/car6.jpg", name: "Xe thể thao", price: "1.100.000₫" },
            ].map((p, i) => (
              <div key={i} style={{
                background: "#fff",
                border: "1px solid #eee",
                borderRadius: "10px",
                padding: "10px",
                textAlign: "center"
              }}>
                <img src={p.img} style={{ width: "100%", borderRadius: "8px" }} />
                <p>{p.name}</p>
                <b>{p.price}</b>
              </div>
            ))}

          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}