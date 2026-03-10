import { Ingredient } from "@/lib/ingredients"

export function getProductSchema(product: {
  title: string
  description: string
  handle: string
  priceRange: { minVariantPrice: { amount: string; currencyCode: string } }
  images: { edges: { node: { url: string } }[] }
  rating?: number
  reviewCount?: number
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    url: `https://xiliphi.com/products/${product.handle}`,
    image: product.images.edges[0]?.node.url,
    brand: {
      "@type": "Brand",
      name: "Xiliphi"
    },
    offers: {
      "@type": "Offer",
      price: product.priceRange.minVariantPrice.amount,
      priceCurrency: product.priceRange.minVariantPrice.currencyCode,
      availability: "https://schema.org/InStock",
      url: `https://xiliphi.com/products/${product.handle}`
    },
    ...(product.rating && product.reviewCount ? {
      aggregateRating: {
        "@type": "AggregateRating",
        ratingValue: product.rating,
        reviewCount: product.reviewCount
      }
    } : {})
  }
}

export function getIngredientSchema(ingredient: Ingredient) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: ingredient.common
      ? `${ingredient.common} (${ingredient.inci})`
      : ingredient.inci,
    description: ingredient.description?.whatItIs,
    url: `https://xiliphi.com/almanac/${ingredient.slug}`,
    image: ingredient.image
      ? `https://xiliphi.com${ingredient.image}`
      : undefined,
    publisher: {
      "@type": "Organization",
      name: "Xiliphi",
      url: "https://xiliphi.com"
    }
  }
}

export function getBreadcrumbSchema(crumbs: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: crumb.name,
      item: crumb.url
    }))
  }
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Xiliphi",
    url: "https://xiliphi.com",
    logo: "https://xiliphi.com/logo.png",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: "hello@xiliphi.com",
    },
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Xiliphi",
    url: "https://xiliphi.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://xiliphi.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  };
}