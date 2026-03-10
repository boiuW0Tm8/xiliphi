const SHOPIFY_DOMAIN = process.env.NEXT_PUBLIC_SHOPIFY_DOMAIN;
const SHOPIFY_API_VERSION = "2026-01";

// ─── Base fetch helper ────────────────────────────────────────────────────────

export async function shopifyFetch<T = any>(
  query: string,
  variables: Record<string, any> = {}
): Promise<{ data: T; errors?: any[] }> {
  const response = await fetch(
    `https://${SHOPIFY_DOMAIN}/api/${SHOPIFY_API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  if (!response.ok) {
    throw new Error(`Shopify API error: ${response.status}`);
  }

  return response.json();
}

// ─── Cart fragments ───────────────────────────────────────────────────────────

const CART_FRAGMENT = `
  fragment CartFragment on Cart {
    id
    checkoutUrl
    totalQuantity
    cost {
      totalAmount {
        amount
        currencyCode
      }
    }
    lines(first: 100) {
      edges {
        node {
          id
          quantity
          cost {
            totalAmount {
              amount
              currencyCode
            }
          }
          merchandise {
            ... on ProductVariant {
              id
              title
              price {
                amount
                currencyCode
              }
              product {
                title
                handle
                images(first: 1) {
                  edges {
                    node {
                      url
                      altText
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

// ─── Mutations ────────────────────────────────────────────────────────────────

export const CREATE_CART = `
  ${CART_FRAGMENT}
  mutation cartCreate($input: CartInput!) {
    cartCreate(input: $input) {
      cart {
        ...CartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const ADD_TO_CART = `
  ${CART_FRAGMENT}
  mutation cartLinesAdd($cartId: ID!, $lines: [CartLineInput!]!) {
    cartLinesAdd(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const UPDATE_CART_LINE = `
  ${CART_FRAGMENT}
  mutation cartLinesUpdate($cartId: ID!, $lines: [CartLineUpdateInput!]!) {
    cartLinesUpdate(cartId: $cartId, lines: $lines) {
      cart {
        ...CartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const REMOVE_CART_LINE = `
  ${CART_FRAGMENT}
  mutation cartLinesRemove($cartId: ID!, $lineIds: [ID!]!) {
    cartLinesRemove(cartId: $cartId, lineIds: $lineIds) {
      cart {
        ...CartFragment
      }
      userErrors {
        field
        message
      }
    }
  }
`;

export const GET_CART = `
  ${CART_FRAGMENT}
  query getCart($cartId: ID!) {
    cart(id: $cartId) {
      ...CartFragment
    }
  }
`;

// ─── Types ────────────────────────────────────────────────────────────────────

export type CartLine = {
  id: string;
  quantity: number;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  merchandise: {
    id: string;
    title: string;
    price: {
      amount: string;
      currencyCode: string;
    };
    product: {
      title: string;
      handle: string;
      images: {
        edges: { node: { url: string; altText: string | null } }[];
      };
    };
  };
};

export type Cart = {
  id: string;
  checkoutUrl: string;
  totalQuantity: number;
  cost: {
    totalAmount: {
      amount: string;
      currencyCode: string;
    };
  };
  lines: {
    edges: { node: CartLine }[];
  };
};
