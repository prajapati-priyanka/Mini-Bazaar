import { useEffect, useState } from "react";
import { Link, useParams, useSearchParams } from "react-router";
import { useProducts } from "../../hooks/useProducts";
import styles from "./ProductDetails.module.scss";
import { productMeta } from "../../data/ProductMeta";
import ProductDetailsSkeleton from "./ProductDetailsSkeleton";
import NotFound from "../NotFound/NotFound";
import { Error } from "../../components/Error/Error";
import { useCart } from "../../context/useCart";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [searchParams, setSearchParams] = useSearchParams();

  // Restore selected variants from URL query params when available
  const initialColor = searchParams.get("color") || productMeta.colors[0].name;

  const initialSize = searchParams.get("size") || productMeta.sizes[0].label;

  const { products, loading, error } = useProducts();

  const product = products.find((product) => product.id === Number(id));
  const productImages = product
    ? productMeta.getProductImages(product.image)
    : [];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const [selectedColor, setSelectedColor] = useState(
    productMeta.colors.find(
      (color) => color.name.toLowerCase() === initialColor.toLowerCase(),
    ) || productMeta.colors[0],
  );

  const [selectedSize, setSelectedSize] = useState(
    productMeta.sizes.find(
      (size) => size.label.toLowerCase() === initialSize.toLowerCase(),
    ) || productMeta.sizes[0],
  );

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {

  // Keep selected product variants in the URL
  // so the page can be refreshed or shared.
    setSearchParams({
      color: selectedColor.name.toLowerCase(),
      size: selectedSize.label.toLowerCase(),
    });
  }, [selectedColor, selectedSize, setSearchParams]);

  const incrementQuantity = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  const handleAddToCart = () => {
    if (!product) return;

  // Store selected variant and quantity in cart
    addToCart({
      productId: product?.id,
      title: product?.title,
      image: product?.image,
      price: product?.price,
      color: selectedColor.name,
      size: selectedSize.label,
      quantity,
    });
  };

  const currentImage =
    selectedImage && productImages.includes(selectedImage)
      ? selectedImage
      : productImages[0];

  if (loading) {
    return <ProductDetailsSkeleton />;
  }

  if (error) {
    return <Error />;
  }

  if (!product && !loading) {
    return <NotFound />;
  }

  return (
    <main className={styles.productDetails}>
      <Link to="/" className={styles.backLink}>
        ← Back to Products
      </Link>
      <section className={styles.productDetailsContainer}>
        <div className={styles.productImageSection}>
          <img
            loading="lazy"
            src={currentImage}
            alt={product?.title}
            className={styles.productImage}
          />
          <div className={styles.thumbnailContainer}>
            {productImages.map((image, index) => (
              <button
                key={index}
                type="button"
                className={`${styles.thumbnailButton} ${
                  currentImage === image ? styles.activeThumbnail : ""
                }`}
                onClick={() => setSelectedImage(image)}
              >
                <img
                  loading="lazy"
                  src={image}
                  alt={`${product?.title}-${index}`}
                  className={styles.thumbnailImage}
                />
              </button>
            ))}
          </div>
        </div>

        <div className={styles.productInfo}>
          <p className={styles.productCategory}>{product?.category}</p>

          <h1 className={styles.productTitle}>{product?.title}</h1>

          <p className={styles.productPrice}>${product?.price.toFixed(2)}</p>

          <div className={styles.colorSection}>
            <h3 className={styles.sectionTitle}>Color</h3>

            <div className={styles.colorContainer}>
              {productMeta.colors.map((color) => (
                <button
                  key={color.name}
                  type="button"
                  className={`${styles.colorSwatch} ${
                    selectedColor.name === color.name ? styles.activeColor : ""
                  }`}
                  style={{
                    backgroundColor: color.hex,
                  }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>

            <p className={styles.selectedColor}>{selectedColor.name}</p>
          </div>

          <div className={styles.sizeSection}>
            <h3 className={styles.sectionTitle}>Size</h3>

            <div className={styles.sizeContainer}>
              {productMeta.sizes.map((size) => (
                <button
                  key={size.label}
                  disabled={size.stock === 0}
                  className={`${styles.sizeButton} ${
                    selectedSize.label === size.label ? styles.activeSize : ""
                  }`}
                  onClick={() => setSelectedSize(size)}
                >
                  {size.label}
                </button>
              ))}
            </div>
          </div>
        
         {/* Visual stock feedback based on selected size inventory */}
          <p
            className={`${styles.stockStatus} ${
              selectedSize.stock === 0
                ? styles.soldOut
                : selectedSize.stock <= 3
                  ? styles.lowStock
                  : styles.available
            }`}
          >
            {selectedSize.stock === 0
              ? "Sold Out"
              : selectedSize.stock <= 3
                ? "Low Stock"
                : "Available"}
          </p>

          <div className={styles.quantitySection}>
            <h3 className={styles.sectionTitle}>Quantity</h3>

            <div className={styles.quantityControl}>
              <button
                type="button"
                className={styles.quantityButton}
                onClick={decrementQuantity}
              >
                -
              </button>

              <span className={styles.quantityValue}>{quantity}</span>

              <button
                type="button"
                className={styles.quantityButton}
                onClick={incrementQuantity}
              >
                +
              </button>
            </div>
          </div>

          <p className={styles.productDescription}>{product?.description}</p>

          <div className={styles.productActions}>
            <button
              className={styles.addToCartBtn}
              disabled={selectedSize.stock === 0}
              onClick={handleAddToCart}
            >
              {selectedSize.stock === 0 ? "Sold Out" : "Add To Cart"}
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetails;
