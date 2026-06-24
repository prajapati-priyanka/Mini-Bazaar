import { Link } from "react-router";
import styles from "./NotFound.module.scss";

const NotFound = () => {
  return (
    <main className={styles.notFound}>
      <h1 className={styles.notFoundCode}>404</h1>

      <h2 className={styles.notFoundTitle}>
        Page Not Found
      </h2>

      <p className={styles.notFoundDescription}>
        The page you are looking for doesn't exist.
      </p>

      <Link
        to="/"
        className={styles.notFoundButton}
      >
        Back To Products
      </Link>
    </main>
  );
};

export default NotFound;