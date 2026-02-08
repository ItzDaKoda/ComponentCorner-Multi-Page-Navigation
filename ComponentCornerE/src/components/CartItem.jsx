function CartItem({ item, onRemove }) {
  return (
    <div className="cart-item">
      <div className="cart-item-info">
        <h4 className="cart-item-name">{item.name}</h4>
        <p className="cart-item-price">${item.price}</p>
      </div>

      <button
        className="cart-item-remove"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </button>
    </div>
  )
}

export default CartItem
