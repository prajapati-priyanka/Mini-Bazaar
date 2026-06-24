import styles from "./ProductDetailsSkeleton.module.scss";

const ProductDetailsSkeleton = () => {
  return (
    <main className={styles.productDetailsSkeleton}>
      <section className={styles.productDetailsContainer}>
        <div className={styles.imageSection}>
          <div className={styles.productImage}></div>

          <div className={styles.thumbnailContainer}>
            <div className={styles.thumbnail}></div>
            <div className={styles.thumbnail}></div>
            <div className={styles.thumbnail}></div>
            <div className={styles.thumbnail}></div>
          </div>
        </div>

        <div className={styles.productInfo}>
          <div className={styles.category}></div>

          <div className={styles.title}></div>
          <div className={styles.titleShort}></div>

          <div className={styles.price}></div>

          <div className={styles.sectionLabel}></div>
          <div className={styles.colorRow}>
            <div className={styles.color}></div>
            <div className={styles.color}></div>
            <div className={styles.color}></div>
          </div>

          <div className={styles.sectionLabel}></div>
          <div className={styles.sizeRow}>
            <div className={styles.size}></div>
            <div className={styles.size}></div>
            <div className={styles.size}></div>
          </div>

          <div className={styles.quantity}></div>

          <div className={styles.description}></div>
          <div className={styles.description}></div>
          <div className={styles.descriptionShort}></div>

          <div className={styles.button}></div>
        </div>
      </section>
    </main>
  );
};

export default ProductDetailsSkeleton;