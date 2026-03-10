"use client";

import {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  ReactNode,
} from "react";
import {
  shopifyFetch,
  CREATE_CART,
  ADD_TO_CART,
  UPDATE_CART_LINE,
  REMOVE_CART_LINE,
  GET_CART,
  Cart,
} from "@/lib/shopify";

const CART_ID_KEY = "xiliphi_cart_id";

type CartAttribute = { key: string; value: string };

// ─── Context types ────────────────────────────────────────────────────────────

type CartContextType = {
  cart: Cart | null;
  isOpen: boolean;
  isLoading: boolean;
  openCart: () => void;
  closeCart: () => void;
  addToCart: (variantId: string, quantity?: number, attributes?: CartAttribute[]) => Promise<void>;
  updateQuantity: (lineId: string, quantity: number) => Promise<void>;
  removeItem: (lineId: string) => Promise<void>;
};

const CartContext = createContext<CartContextType | null>(null);

// ─── Provider ────────────────────────────────────────────────────────────────

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Restore cart from localStorage on mount
  useEffect(() => {
    const savedCartId = localStorage.getItem(CART_ID_KEY);
    if (savedCartId) {
      shopifyFetch(GET_CART, { cartId: savedCartId })
        .then(({ data }) => {
          if (data?.cart) {
            setCart(data.cart);
          } else {
            localStorage.removeItem(CART_ID_KEY);
          }
        })
        .catch(() => localStorage.removeItem(CART_ID_KEY));
    }
  }, []);

  const addToCart = useCallback(
    async (variantId: string, quantity = 1, attributes: CartAttribute[] = []) => {
      setIsLoading(true);
      try {
        let updatedCart: Cart;

        if (cart) {
          // Add to existing cart
          const { data } = await shopifyFetch(ADD_TO_CART, {
            cartId: cart.id,
            lines: [{ merchandiseId: variantId, quantity, attributes }],
          });
          updatedCart = data.cartLinesAdd.cart;
        } else {
          // Create new cart
          const { data } = await shopifyFetch(CREATE_CART, {
            input: {
              lines: [{ merchandiseId: variantId, quantity, attributes }],
            },
          });
          updatedCart = data.cartCreate.cart;
          localStorage.setItem(CART_ID_KEY, updatedCart.id);
        }

        setCart(updatedCart);
        setIsOpen(true);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const updateQuantity = useCallback(
    async (lineId: string, quantity: number) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        if (quantity <= 0) {
          const { data } = await shopifyFetch(REMOVE_CART_LINE, {
            cartId: cart.id,
            lineIds: [lineId],
          });
          setCart(data.cartLinesRemove.cart);
        } else {
          const { data } = await shopifyFetch(UPDATE_CART_LINE, {
            cartId: cart.id,
            lines: [{ id: lineId, quantity }],
          });
          setCart(data.cartLinesUpdate.cart);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  const removeItem = useCallback(
    async (lineId: string) => {
      if (!cart) return;
      setIsLoading(true);
      try {
        const { data } = await shopifyFetch(REMOVE_CART_LINE, {
          cartId: cart.id,
          lineIds: [lineId],
        });
        setCart(data.cartLinesRemove.cart);
      } finally {
        setIsLoading(false);
      }
    },
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        isOpen,
        isLoading,
        openCart: () => setIsOpen(true),
        closeCart: () => setIsOpen(false),
        addToCart,
        updateQuantity,
        removeItem,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// ─── Hook ─────────────────────────────────────────────────────────────────────

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
