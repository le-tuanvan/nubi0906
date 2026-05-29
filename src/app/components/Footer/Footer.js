// src/app/components/Footer/Footer.js
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <section className={styles.footerSection}>
        <div>
          <strong>Thông tin liên hệ</strong>
          <ul>
            <li>Điện thoại: 0909 123 456</li>
            <li>Email: xedieukhienshop@gmail.com</li>
            <li>Địa chỉ: Bình Chánh và Quận 12</li>
          </ul>
        </div>

        <div>
          <strong>Về cửa hàng xe điều khiển</strong>
          <ul>
            <li>Giới thiệu</li>
            <li>Tuyển dụng</li>
            <li>Chính sách đổi trả</li>
          </ul>
        </div>

        <div>
          <strong>Hỗ trợ khách hàng</strong>
          <ul>
            <li>Hướng dẫn đặt hàng</li>
            <li>Chính sách giao hàng</li>
            <li>Câu hỏi thường gặp</li>
          </ul>
        </div>
      </section>

      <div className={styles.copyright}>
        © 2026 Cửa hàng xe điều khiển Nubi. Địa chỉ liên hệ: TP. HCM. Email: xedieukhienshop@gmail.com. Điện thoại: 0909 123 456. Chịu trách nhiệm nội dung: Cửa hàng xe điều khiển.
      </div>
    </footer>
  );
}