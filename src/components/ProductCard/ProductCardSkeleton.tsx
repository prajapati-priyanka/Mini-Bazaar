import styles from "./ProductCardSkeleton.module.scss";

const ProductCardSkeleton = () => {
  return (
    <article className={styles.skeletonCard}>
      <figure className={styles.skeletonImageWrapper}>
        <div className={styles.skeletonImage} />
      </figure>

      <div className={styles.skeletonContent}>
        <div className={styles.skeletonTitle} />
        <div className={styles.skeletonTitleShort} />

        <div className={styles.skeletonPrice} />

        <div className={styles.skeletonButton} />
      </div>
    </article>
  );
};

export default ProductCardSkeleton;