import { Link } from "react-router";
import styles from "./Navbar.module.scss";
import { HiOutlineShoppingCart } from "react-icons/hi2";
import { useCart } from "../../context/useCart";

const Navbar = () => {
  const { cartItems, setIsCartOpen } = useCart();

  // Show total quantity of cart items
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );

  return (
    <header className={styles.header}>
      <Link to="/">
        {" "}
        <h2 className={styles.logo}>Mini Bazaar</h2>
      </Link>
      <ul className={styles.headerLinks}>
        <button
          aria-label="Open cart"
          className={styles.cart}
          onClick={() => setIsCartOpen(true)}
        >
          <HiOutlineShoppingCart />

          {/* Show badge when cart contains items */}
          {totalItems > 0 && (
            <span className={styles.cartBadge}>{totalItems}</span>
          )}
        </button>
      </ul>
    </header>
  );
};

export default Navbar;
