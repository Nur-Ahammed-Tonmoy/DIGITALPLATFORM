function CartPanel({ cartItems, totalPrice, onRemoveFromCart, onCheckout }) {
  return (
    <div className="mx-auto mt-10 max-w-4xl rounded-2xl border border-slate-200 bg-white p-6 shadow-soft">
      <h3 className="text-2xl font-bold text-slate-800">Your Cart</h3>
      {!cartItems.length ? (
        <p className="mt-5 rounded-xl bg-slate-50 p-6 text-center text-slate-500">
          Your cart is empty. Select a product to get started.
        </p>
      ) : (
        <div className="mt-5 space-y-3">
          {cartItems.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-xl bg-slate-50 p-4"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={`${item.name} icon`}
                  className="h-9 w-9 rounded-md bg-white p-1"
                />
                <div>
                  <p className="font-semibold text-slate-700">{item.name}</p>
                  <p className="text-sm text-slate-500">${item.price}</p>
                </div>
              </div>
              <button
                className="text-sm font-semibold text-rose-500 hover:text-rose-600"
                onClick={() => onRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
      <div className="mt-6 flex items-center justify-between border-t border-slate-200 pt-4">
        <span className="text-slate-500">Total:</span>
        <span className="text-2xl font-bold text-slate-800">${totalPrice}</span>
      </div>
      <button
        className="btn mt-5 w-full rounded-full border-none bg-brand-gradient text-white hover:opacity-90"
        onClick={onCheckout}
      >
        Proceed To Checkout
      </button>
    </div>
  );
}

export default CartPanel;
