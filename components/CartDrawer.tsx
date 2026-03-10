"use client";

import { useCart } from "@/context/CartContext";
import Image from "next/image";

export default function CartDrawer() {
  const { cart, isOpen, isLoading, closeCart, updateQuantity, removeItem } =
    useCart();

  const lines = cart?.lines.edges.map((e) => e.node) ?? [];
  const total = cart?.cost.totalAmount;
  const isEmpty = lines.length === 0;

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`
          fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white z-50
          flex flex-col
          shadow-2xl
          transform transition-transform duration-500 ease-in-out
          ${isOpen ? "translate-x-0" : "translate-x-full"}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-neutral-200">
          <h2 className="text-base tracking-wide font-medium">
            Your Cart
            {cart && cart.totalQuantity > 0 && (
              <span className="ml-2 text-neutral-400 font-normal">
                ({cart.totalQuantity})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="text-neutral-400 hover:text-black transition-colors text-xl leading-none"
            aria-label="Close cart"
          >
            ✕
          </button>
        </div>

        {/* Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {isEmpty ? (
            <div className="flex flex-col items-center justify-center h-full text-neutral-400 gap-3">
              <p className="text-sm">Your cart is empty.</p>
            </div>
          ) : (
            <ul className="space-y-6">
              {lines.map((line) => {
                const image =
                  line.merchandise.product.images.edges[0]?.node;
                const unitPrice = parseFloat(
                  line.merchandise.price.amount
                ).toFixed(2);
                const lineTotal = parseFloat(
                  line.cost.totalAmount.amount
                ).toFixed(2);
                const currency = line.cost.totalAmount.currencyCode;

                return (
                  <li
                    key={line.id}
                    className="flex gap-4 py-4 border-b border-neutral-100 last:border-0"
                  >
                    {/* Image */}
                    {image && (
                      <div className="relative w-20 h-20 flex-shrink-0 rounded-lg overflow-hidden bg-white">
                        <Image
                          src={image.url}
                          alt={image.altText ?? line.merchandise.product.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}

                    {/* Details */}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate">
                        {line.merchandise.product.title}
                      </p>
                      {line.merchandise.title !== "Default Title" && (
                        <p className="text-xs text-neutral-400 mt-0.5">
                          {line.merchandise.title}
                        </p>
                      )}
                      <p className="text-xs text-neutral-500 mt-1">
                        ${unitPrice} {currency}
                      </p>

                      {/* Quantity controls */}
                      <div className="flex items-center gap-3 mt-3">
                        <button
                          disabled={isLoading}
                          onClick={() =>
                            updateQuantity(line.id, line.quantity - 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-neutral-300 rounded-full text-sm hover:border-black transition-colors disabled:opacity-40 cursor-pointer"
                        >
                          −
                        </button>
                        <span className="text-sm w-4 text-center">
                          {line.quantity}
                        </span>
                        <button
                          disabled={isLoading}
                          onClick={() =>
                            updateQuantity(line.id, line.quantity + 1)
                          }
                          className="w-7 h-7 flex items-center justify-center border border-neutral-300 rounded-full text-sm hover:border-black transition-colors disabled:opacity-40 cursor-pointer"
                        >
                          +
                        </button>

                        <button
                          disabled={isLoading}
                          onClick={() => removeItem(line.id)}
                          className="ml-auto text-xs text-neutral-400 hover:text-black transition-colors disabled:opacity-40 cursor-pointer"
                        >
                          Remove
                        </button>
                      </div>
                    </div>

                    {/* Line total */}
                    <p className="text-sm font-medium flex-shrink-0">
                      ${lineTotal}
                    </p>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        {/* Footer */}
        {!isEmpty && (
          <div className="px-6 py-6 border-t border-neutral-200 space-y-4">
            {/* Subtotal */}
            <div className="flex justify-between text-sm">
              <span className="text-black">Subtotal</span>
              <span className="font-medium">
                ${parseFloat(total?.amount ?? "0").toFixed(2)}{" "}
                {total?.currencyCode}
              </span>
            </div>

            <p className="text-xs text-neutral-500">
              Shipping and taxes calculated at checkout.
            </p>

            {/* Checkout button */}
            <a
              href={cart?.checkoutUrl}
              className="block w-full bg-black text-white text-center text-sm tracking-wide py-4 rounded-full hover:bg-neutral-800 transition-colors"
            >
              Checkout →
            </a>

            <button
              onClick={closeCart}
              className="block w-full text-center text-sm text-neutral-500 hover:text-black transition-colors cursor-pointer"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
}
