import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Truck, Shield, Headphones, RotateCcw } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const featuredProducts = [
  {
    id: 1,
    name: "Henyle Acetate Premium",
    price: 2800,
    originalPrice: 3500,
    image:
      "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "High-grade henyle acetate for premium fragrance formulations",
    rating: 4.8,
    reviews: 124,
    badge: "PREMIUM",
    quantity: 15,
  },
  {
    id: 2,
    name: "Benzyl Benzoate Pure",
    price: 2200,
    originalPrice: 2750,
    image:
      "https://images.unsplash.com/photo-1585435557343-3b092031d8eb?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Pure benzyl benzoate compound for chemical synthesis",
    rating: 4.7,
    reviews: 89,
    badge: "PURE",
    quantity: 8,
  },
  {
    id: 3,
    name: "Aldehyde C-12 MNA",
    price: 3200,
    originalPrice: 4000,
    image:
      "https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300&q=80",
    description: "Aldehyde C-12 MNA for sophisticated fragrance notes",
    rating: 4.9,
    reviews: 156,
    badge: "TOP GRADE",
    quantity: 12,
  },
]

const features = [
  {
    icon: Truck,
    title: "Free Shipping",
    description: "On orders over Rs 2000",
  },
  {
    icon: Shield,
    title: "Authentic Products",
    description: "100% genuine chemical solutions",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "Technical support available",
  },
  {
    icon: RotateCcw,
    title: "Quality Guarantee",
    description: "Premium chemical standards",
  },
]

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url('https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&auto=format&fit=crop&w=2004&q=80')`,
          }}
        />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-wider">DISCOVER THE ESSENCE OF LUXURY</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            Experience our exclusive collection of premium chemical solutions and fragrances
          </p>
          <Button asChild size="lg" className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3">
            <Link href="/shop">SHOP NOW</Link>
          </Button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="pt-6">
                  <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <feature.icon className="w-8 h-8 text-orange-600" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FEATURED PRODUCTS</h2>
            <p className="text-xl text-gray-600">Discover our most popular chemical compounds and solutions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProducts.map((product) => {
              const discount = product.originalPrice
                ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
                : 0
              const savings = product.originalPrice ? product.originalPrice - product.price : 0

              return (
                <Card key={product.id} className="overflow-hidden hover:shadow-xl transition-shadow group">
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {product.badge && <Badge className="absolute top-3 left-3 bg-orange-600">{product.badge}</Badge>}
                    {discount > 0 && <Badge className="absolute top-3 right-3 bg-red-500">{discount}% OFF</Badge>}
                    {product.quantity === 0 && (
                      <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                        <span className="text-white font-bold text-xl">OUT OF STOCK</span>
                      </div>
                    )}
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                    <p className="text-gray-600 text-sm mb-4">{product.description}</p>

                    <div className="flex items-center mb-4">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(product.rating) ? "text-yellow-400 fill-current" : "text-gray-300"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600 ml-2">
                        {product.rating} ({product.reviews} reviews)
                      </span>
                    </div>

                    <div className="text-center mb-6 p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-orange-600">Rs {product.price.toLocaleString()}</div>
                      {product.originalPrice && (
                        <>
                          <div className="text-lg text-gray-500 line-through mt-1">
                            Rs {product.originalPrice.toLocaleString()}
                          </div>
                          {savings > 0 && (
                            <div className="text-sm text-green-600 font-bold mt-1">
                              Save Rs {savings.toLocaleString()}
                            </div>
                          )}
                        </>
                      )}
                    </div>

                    <Button className="w-full bg-orange-600 hover:bg-orange-700" disabled={product.quantity === 0}>
                      {product.quantity === 0 ? "OUT OF STOCK" : "ADD TO CART"}
                    </Button>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          <div className="text-center">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white bg-transparent"
            >
              <Link href="/shop">VIEW ALL PRODUCTS</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-orange-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">STAY UPDATED</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter and be the first to know about new chemical solutions, exclusive offers, and
            technical updates.
          </p>
          <div className="flex flex-col sm:flex-row max-w-md mx-auto gap-4">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
            />
            <Button className="bg-orange-600 hover:bg-orange-700 px-8">SUBSCRIBE</Button>
          </div>
        </div>
      </section>

      <Footer />
      <CartSidebar />
    </div>
  )
}
