import { IoClose, IoTrashOutline } from "react-icons/io5";
import styles from "./CartDrawer.module.scss";
import { useCart } from "../../context/useCart";

const CartDrawer = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
  } = useCart();

  const subtotal = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      <div
        className={styles.overlay}
        onClick={() => setIsCartOpen(false)}
      />

      <aside className={styles.cartDrawer}>
        <div className={styles.drawerHeader}>
          <h2 className={styles.drawerTitle}>Your Cart</h2>

          <button
            type="button"
            className={styles.closeButton}
            aria-label="Close cart"
            onClick={() => setIsCartOpen(false)}
          >
            <IoClose />
          </button>
        </div>

        {cartItems.length === 0 ? (
          <div className={styles.emptyCart}>
            <h3 className={styles.emptyCartTitle}>
              Your cart is empty
            </h3>

            <p className={styles.emptyCartText}>
              Looks like you haven't added anything yet.
            </p>

            <button
              className={styles.continueShoppingBtn}
               aria-label="Continue Shopping"
              onClick={() => setIsCartOpen(false)}
            >
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            <div className={styles.cartItemsContainer}>
              {cartItems.map((item) => (
                <div
                  key={`${item.productId}-${item.size}-${item.color}`}
                  className={styles.cartItem}
                >
                  <img
                  loading="lazy"
                    src={item.image}
                    alt={item.title}
                    className={styles.cartItemImage}
                  />

                  <div className={styles.cartItemContent}>
                    <h4 className={styles.cartItemTitle}>
                      {item.title}
                    </h4>

                    <p className={styles.cartItemVariant}>
                      Color: {item.color}
                    </p>

                    <p className={styles.cartItemVariant}>
                      Size: {item.size}
                    </p>

                    <div className={styles.cartItemFooter}>
                      <div className={styles.cartItemActions}>
                        <div className={styles.quantityControl}>
                          <button
                            className={styles.quantityButton}
                             aria-label="Decrease Quantity"
                            onClick={() =>
                              decreaseQuantity(
                                item.productId,
                                item.color,
                                item.size,
                              )
                            }
                          >
                            -
                          </button>

                          <span className={styles.quantityValue}>
                            {item.quantity}
                          </span>

                          <button
                            className={styles.quantityButton}
                             aria-label="Increase Quantity"
                            onClick={() =>
                              increaseQuantity(
                                item.productId,
                                item.color,
                                item.size,
                              )
                            }
                          >
                            +
                          </button>
                        </div>

                        <button
                          className={styles.removeButton}
                           aria-label="Remove item"
                          onClick={() =>
                            removeFromCart(
                              item.productId,
                              item.color,
                              item.size,
                            )
                          }
                        >
                          <IoTrashOutline />
                        </button>
                      </div>

                      <span>
                        ${(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className={styles.cartSummary}>
              <div className={styles.summaryRow}>
                <span>Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <div className={styles.summaryRow}>
                <span>Grand Total</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>

              <button  aria-label="Checkout item" className={styles.checkoutButton}>

                Checkout
              </button>
            </div>
          </>
        )}
      </aside>
    </>
  );
};

export default CartDrawer;