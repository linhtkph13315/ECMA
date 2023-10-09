const DetailPage = async (productId) => {
    try {
      // Gọi API để lấy thông tin chi tiết sản phẩm dựa vào productId
      const res = await fetch(`http://localhost:3000/products/${productId}`, {
        method: "GET",
      });
  
      if (!res.ok) {
        throw new Error("Không thể tải chi tiết sản phẩm.");
      }
  
      const product = await res.json();
  
      return `
        <div class= "text-center">
          <h2>${product.name}</h2>
          <p>Giá: ${product.price}</p>
          <p>Mô tả: ${product.desc}</p>
          <!-- Thêm các thông tin chi tiết sản phẩm khác nếu cần -->
        </div>
      `;
    } catch (error) {
      console.error(error);
      return "<p>Có lỗi xảy ra khi tải chi tiết sản phẩm.</p>";
    }
  };
  
  export default DetailPage;
  