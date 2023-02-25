import CartContext from '../../context/CartContext'

import './index.css'

const CartSummary = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      let totalPrice = 0
      cartList.forEach(eachCartItem => {
        totalPrice += eachCartItem.price * eachCartItem.quantity
      })

      return (
        <>
          <div className="cart-summary-container">
            <h1 className="total-value">
              <span className="total-label">Order Total:</span> Rs {totalPrice}
              /-
            </h1>
            <p>{cartList.length} Items in cart</p>
            <button type="button" className="checkout-button">
              Checkout
            </button>
          </div>
          <button type="button" className="checkout-button large">
            Checkout
          </button>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartSummary
