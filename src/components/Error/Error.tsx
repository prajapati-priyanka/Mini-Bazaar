import { useProducts } from '../../hooks/useProducts'
import styles from "./Error.module.scss";

export const Error = () => {
    const {error} = useProducts();

  return (
    <main className={styles.errorState}>
      <h2>Something went wrong</h2>

      <p>{error}</p>

      <button
        onClick={() => window.location.reload()}
        className={styles.retryButton}
      >
        Try Again
      </button>
    </main>
  )
}
