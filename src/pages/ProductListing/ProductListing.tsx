import { Error } from "../../components/Error/Error";
import ProductCard from "../../components/ProductCard/ProductCard";
import ProductCardSkeleton from "../../components/ProductCard/ProductCardSkeleton";
import { useProducts } from "../../hooks/useProducts";
import styles from "./ProductListing.module.scss";

const ProductListing = () => {
  const { products, loading, error } = useProducts();
  if (error) return <Error />

  return (
    <>
      {loading ? (
        <main className={styles.productListing}>
          <section className={styles.productListingHeader}>
            <div className={styles.skeletonHeading}></div>

            <div className={styles.skeletonSubHeading}></div>
          </section>

          <section className={styles.productListingGrid}>
            {Array.from({ length: 8 }).map((_, index) => (
              <ProductCardSkeleton key={index} />
            ))}
          </section>
        </main>
      ) : (
        <main className={styles.productListing}>
          <section className={styles.productListingHeader}>
            <h1 className={styles.productListingTitle}>All Products</h1>

            <p className={styles.productListingCount}>
              Showing {products.length} products
            </p>
          </section>

          <section className={styles.productListingGrid}>
            {products?.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </section>
        </main>
      )}
    </>
  );
};

export default ProductListing;
