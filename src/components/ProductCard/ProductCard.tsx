import { Link } from "react-router";
import type { Product } from "../../types/product";
import styles from "./ProductCard.module.scss";
import { productMeta } from "../../data/ProductMeta";
import { useCart } from "../../context/useCart";

type ProductCardProps = {
  product: Product;
};

const ProductCard = ({ product }: ProductCardProps) => {
  const { addToCart } = useCart();
  const { title, image, price, id } = product;

  // Add to cart
  const handleAddToCart = () => {
    addToCart({
      productId: product.id,
      title: product.title,
      image: product.image,
      price: product.price,
      color: productMeta.colors[0].name,
      size: productMeta.sizes[0].label,
      quantity: 1,
    });
  };

  return (
    <article className={styles.productCard}>
      <figure className={styles.productCardImageWrapper}>
        <Link to={`/product/${id}`}>
          <img
            loading="lazy"
            className={styles.productCardImage}
            src={image}
            alt={title}
          />
        </Link>
      </figure>

      <div className={styles.productCardContent}>
        <Link to={`/product/${id}`}>
          <h2 className={styles.productCardTitle}>{title}</h2>
        </Link>

        <p className={styles.productCardPrice}>${price.toFixed(2)}</p>

        <button
          aria-label="Add item"
          className={styles.productCardButton}
          onClick={handleAddToCart}
        >
          Add To Cart
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
