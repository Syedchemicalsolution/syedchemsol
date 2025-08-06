import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CartSidebar } from "@/components/cart-sidebar"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Handshake, Leaf, Lightbulb } from "lucide-react"
import Image from "next/image"

const values = [
  {
    icon: Award,
    title: "Quality First",
    description:
      "We never compromise on quality. Every product goes through rigorous testing to ensure it meets our high standards.",
  },
  {
    icon: Handshake,
    title: "Customer Trust",
    description:
      "Building long-term relationships with our customers through transparency, reliability, and exceptional service.",
  },
  {
    icon: Leaf,
    title: "Sustainability",
    description: "We are committed to environmentally responsible practices in all aspects of our business operations.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Continuously exploring new products and technologies to better serve our customers' evolving needs.",
  },
]

const team = [
  {
    name: "Ahmed Khan",
    role: "Founder & CEO",
    specialty: "Chemical Engineering Expert",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Sarah Ali",
    role: "Quality Control Manager",
    specialty: "Chemistry Specialist",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Hassan Sheikh",
    role: "Sales Director",
    specialty: "Business Development",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
  {
    name: "Fatima Malik",
    role: "Customer Service Manager",
    specialty: "Client Relations Expert",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&h=150&q=80",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <div className="pt-20">
        {/* Page Header */}
        <section className="bg-gradient-to-r from-orange-600 to-orange-700 text-white text-center py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl font-bold mb-4">About The Century Scents</h1>
            <p className="text-xl opacity-90">Learn about our journey in premium chemical solutions</p>
          </div>
        </section>

        {/* About Content */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Founded in 2020, The Century Scents has been at the forefront of providing premium chemical solutions
                  and fragrances to professionals and enthusiasts alike. Our journey began with a simple vision: to make
                  high-quality chemical compounds accessible to everyone.
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Over the years, we have built strong relationships with manufacturers and suppliers worldwide,
                  ensuring that our customers receive only the finest products. Our commitment to quality and customer
                  satisfaction has made us a trusted name in the industry.
                </p>

                <h3 className="text-xl font-semibold text-orange-600 mb-3">Our Mission</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To provide premium chemical solutions that meet the highest standards of quality and purity, while
                  maintaining competitive prices and exceptional customer service.
                </p>

                <h3 className="text-xl font-semibold text-orange-600 mb-3">Our Vision</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  To become the leading supplier of chemical solutions in Pakistan and expand our reach globally, while
                  maintaining our commitment to quality and innovation.
                </p>

                <h3 className="text-xl font-semibold text-orange-600 mb-3">Why Choose Us?</h3>
                <p className="text-gray-600 leading-relaxed">
                  With years of experience in the chemical industry, we understand the importance of quality,
                  reliability, and customer service. Our team of experts is always ready to help you find the right
                  products for your needs.
                </p>
              </div>

              <div className="relative h-96 lg:h-full">
                <Image
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&h=600&q=80"
                  alt="About The Century Scents"
                  fill
                  className="object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="w-20 h-20 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-orange-600" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Our Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="relative w-32 h-32 mx-auto mb-4">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
                    <p className="text-orange-600 font-medium mb-1">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.specialty}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
      <CartSidebar />
    </div>
  )
}
