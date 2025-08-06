"use client"
import { useState, useEffect } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { useCart } from "@/components/cart-context"
import CartSidebar from "@/components/cart-sidebar"

export default function ShopPage() {
  const { addToCart } = useCart()
  const [products, setProducts] = useState([])
  const [filteredProducts, setFilteredProducts] = useState([])
  const [sortBy, setSortBy] = useState("name")

  // Default chemical products
  const defaultProducts = [
    {
      id: 1,
      name: "Henyle Acetate Premium",
      price: 2800,
      originalPrice: 3500,
      image: "/placeholder.svg?height=300&width=200&text=Henyle+Acetate",
      description: "High-grade henyle acetate for premium fragrance formulations",
      quantity: 15,
      rating: 4.8,
      reviews: 124,
      badge: "PREMIUM",
    },
    {
      id: 2,
      name: "Benzyl Benzoate Pure",
      price: 2200,
      originalPrice: 2750,
      image: "/placeholder.svg?height=300&width=200&text=Benzyl+Benzoate",
      description: "Pure benzyl benzoate compound for chemical synthesis",
      quantity: 8,
      rating: 4.7,
      reviews: 89,
      badge: "PURE",
    },
    {
      id: 3,
      name: "Aldehyde C-12 MNA",
      price: 3200,
      originalPrice: 4000,
      image: "/placeholder.svg?height=300&width=200&text=Aldehyde+C12",
      description: "Aldehyde C-12 MNA for sophisticated fragrance notes",
      quantity: 12,
      rating: 4.9,
      reviews: 156,
      badge: "TOP GRADE",
    },
    {
      id: 4,
      name: "Essential Oil Base",
      price: 1800,
      originalPrice: 2250,
      image: "/placeholder.svg?height=300&width=200&text=Essential+Oil",
      description: "Premium essential oil base for natural fragrances",
      quantity: 20,
      rating: 4.6,
      reviews: 67,
      badge: "NATURAL",
    },
    {
      id: 5,
      name: "Aromatic Compound Mix",
      price: 2500,
      originalPrice: 3125,
      image: "/placeholder.svg?height=300&width=200&text=Aromatic+Mix",
      description: "Complex aromatic compound mixture for advanced formulations",
      quantity: 10,
      rating: 4.5,
      reviews: 78,
      badge: "COMPLEX",
    },
    {
      id: 6,
      name: "Synthetic Musk Base",
      price: 3500,
      originalPrice: 4375,
      image: "/placeholder.svg?height=300&width=200&text=Synthetic+Musk",
      description: "High-quality synthetic musk for long-lasting fragrances",
      quantity: 6,
      rating: 4.9,
      reviews: 203,
      badge: "EXCLUSIVE",
    },
  ]

  useEffect(() => {
    // Load products from admin panel or use defaults
    const savedProducts = localStorage.getItem("adminProducts")
    if (savedProducts) {
      const adminProducts = JSON.parse(savedProducts)
      setProducts(adminProducts)
      setFilteredProducts(adminProducts)
    } else {
      setProducts(defaultProducts)
      setFilteredProducts(defaultProducts)
    }

    // Listen for product updates
    const handleStorageChange = () => {
      const savedProducts = localStorage.getItem("adminProducts")
      if (savedProducts) {
        const adminProducts = JSON.parse(savedProducts)
        setProducts(adminProducts)
        setFilteredProducts(adminProducts)
      }
    }

    window.addEventListener("storage", handleStorageChange)
    window.addEventListener("websiteSettingsUpdated", handleStorageChange)

    return () => {
      window.removeEventListener("storage", handleStorageChange)
      window.removeEventListener("websiteSettingsUpdated", handleStorageChange)
    }
  }, [])

  useEffect(() => {
    let filtered = [...products]

    // Sort products
    filtered = filtered.sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price
        case "price-high":
          return b.price - a.price
        case "rating":
          return (b.rating || 0) - (a.rating || 0)
        default:
          return a.name.localeCompare(b.name)
      }
    })

    setFilteredProducts(filtered)
  }, [products, sortBy])

  const handleAddToCart = (product) => {
    if (product.quantity > 0) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: 1,
      })
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white text-center py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">Our Products</h1>
            <p className="text-xl opacity-90">Discover our complete collection of premium chemical solutions</p>
          </div>
        </section>

        {/* Coming Soon Content */}
        <section className="py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Shop Coming Soon</h2>
            <p className="text-gray-600 mb-8">We're working on bringing you the best shopping experience.</p>
            <p className="text-gray-600">Please check back soon or contact us for product inquiries.</p>
          </div>
        </section>
      </div>

      <Footer />
      <CartSidebar />
    </div>
  )
}
