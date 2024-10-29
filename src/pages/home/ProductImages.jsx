// 상품 이미지 목록
import './ProductImages.css';

const ProductImages = ({ products = [] }) => {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <div className="product-images">
      {products.slice(0, 3).map((product) => (
        <img key={product.id} src={product.imageUrl} alt={product.name} />
      ))}
    </div>
  );
};

export default ProductImages;
