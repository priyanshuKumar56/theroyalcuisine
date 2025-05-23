import Image from "next/image"
import Link from "next/link"
import {
  Star,
  Search,
  User,
  ShoppingBag,
  ArrowRight,
  Facebook,
  Twitter,
  Instagram,
  Clock,
  MapPin,
  Phone,
  Mail,
} from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center">
              <span className="text-white font-bold">C</span>
            </div>
            <span className="text-xl font-semibold">The Royal Cuisine</span>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-amber-500 font-medium">
              Home
            </Link>
            <Link href="/menu" className="text-gray-600 hover:text-amber-500 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-amber-500 transition-colors">
              About us
            </Link>
            <Link href="/reservation" className="text-gray-600 hover:text-amber-500 transition-colors">
              Reservation
            </Link>
            <Link href="/blog" className="text-gray-600 hover:text-amber-500 transition-colors">
              Blog
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <button aria-label="Search" className="text-gray-600 hover:text-amber-500">
              <Search size={20} />
            </button>
            <button aria-label="Account" className="text-gray-600 hover:text-amber-500">
              <User size={20} />
            </button>
            
          </div>
        </div>
      </header>

      {/* Hero Section - Improved to match reference image */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl md:text-7xl font-serif font-bold leading-tight">
              Enjoy healthy
              <br />
              and delicious
              <br />
              food.
            </h1>

            <div className="relative">
              <div className="w-32 h-32 bg-black rounded-full flex items-center justify-center group cursor-pointer relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <ArrowRight className="text-white" size={24} />
                </div>
                <div className="absolute inset-0 rounded-full">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
                    <text fontSize="8">
                      <textPath href="#circle" startOffset="0%" className="text-white uppercase tracking-widest">
                        ORDER NOW · ORDER NOW · ORDER NOW ·
                      </textPath>
                    </text>
                  </svg>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-gray-600">
                Hands down, the best milkshakes around. Perfectly blended with fresh ingredients and incredible flavors.
                A must-try!
              </p>

              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3"
                    alt="Customer"
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-medium">Ryan Garcia</p>
                  <div className="flex text-amber-400">
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                    <Star size={16} fill="currentColor" />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors"
              >
                <Instagram size={18} />
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="absolute top-0 right-0 bg-white rounded-full px-4 py-2 shadow-md flex items-center gap-2 z-10">
              <span className="text-lg font-medium">4.2k+ Rating</span>
              <div className="flex items-center gap-1">
                <Star size={16} className="text-amber-400" fill="currentColor" />
                <span className="font-semibold">4.8</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-100">
                <Image
                  src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Vanilla Milkshake"
                  width={300}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
              <div className="relative h-[400px] rounded-3xl overflow-hidden bg-gray-100 mt-12">
                <Image
                  src="https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Chocolate Milkshake"
                  width={300}
                  height={400}
                  className="object-cover h-full w-full"
                />
              </div>
            </div>

            <div className="mt-4 p-4 bg-white rounded-xl shadow-md max-w-xs">
              <p className="text-gray-600 text-sm">
                Our milkshakes are crafted with the finest ingredients, offering a delightful and refreshing treat
                perfect for any time.
              </p>
            </div>

            <div className="absolute -bottom-12 left-0 right-0 flex justify-center">
              <div className="flex gap-4">
                <Image
                  src="https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Cookies"
                  width={200}
                  height={120}
                  className="object-cover rounded-xl h-[120px]"
                />
                <Image
                  src="https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Pastries"
                  width={200}
                  height={120}
                  className="object-cover rounded-xl h-[120px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Menu Section */}
      <section className="container mx-auto px-4 py-32 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Our Signature Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our most popular and beloved creations, crafted with care and the finest ingredients
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Classic Vanilla Dream",
              description: "Smooth vanilla bean milkshake topped with whipped cream and sprinkles",
              price: "$6.99",
              image:
                "https://images.unsplash.com/photo-1568901839119-631418a3910d?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              name: "Double Chocolate Delight",
              description: "Rich chocolate milkshake with chocolate sauce, whipped cream and chocolate chips",
              price: "$7.99",
              image:
                "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              name: "Strawberry Sensation",
              description: "Fresh strawberry milkshake with real fruit and cream, topped with strawberry sauce",
              price: "$7.49",
              image:
                "https://images.unsplash.com/photo-1586917049352-8f3c9a3d34a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
          ].map((item, index) => (
            <div key={index} className="bg-gray-50 rounded-3xl p-6 transition-transform hover:-translate-y-2">
              <div className="h-64 rounded-2xl overflow-hidden mb-4">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
              </div>
              <h3 className="text-xl font-medium mb-2">{item.name}</h3>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-xl font-bold">{item.price}</span>
                <button className="bg-amber-500 text-white rounded-full p-3 hover:bg-amber-600 transition-colors">
                  <ShoppingBag size={18} />
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-600 transition-colors"
          >
            View Full Menu <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Special Offers Section */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Special Offers</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Enjoy our limited-time seasonal specials and exclusive deals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Summer Special"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Limited Time
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Summer Berry Blast</h3>
                <p className="text-gray-600 mb-4">
                  A refreshing blend of seasonal berries, vanilla ice cream, and a hint of mint. Perfect for hot summer
                  days!
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through mr-2">$8.99</span>
                    <span className="text-2xl font-bold text-amber-500">$6.99</span>
                  </div>
                  <button className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-3xl overflow-hidden shadow-lg">
              <div className="relative h-64">
                <Image
                  src="https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Dessert Bundle"
                  width={600}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute top-4 right-4 bg-amber-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Best Value
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">Sweet Treat Bundle</h3>
                <p className="text-gray-600 mb-4">
                  Any two milkshakes of your choice plus a freshly baked cookie or brownie. Perfect for sharing!
                </p>
                <div className="flex justify-between items-center">
                  <div>
                    <span className="text-gray-400 line-through mr-2">$18.99</span>
                    <span className="text-2xl font-bold text-amber-500">$15.99</span>
                  </div>
                  <button className="bg-amber-500 text-white px-6 py-2 rounded-full hover:bg-amber-600 transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-serif font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 2018, The Royal Cuisine began with a simple mission: to create the most delicious and satisfying
                milkshakes and desserts using only the finest ingredients. What started as a small corner shop has grown
                into a beloved destination for dessert enthusiasts.
              </p>
              <p className="text-gray-600 mb-8">
                Every item on our menu is crafted with care, creativity, and a commitment to quality. We source local
                ingredients whenever possible and create everything fresh daily.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-600 transition-colors"
              >
                Learn More About Us <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden h-[500px]">
                <Image
                  src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
                  alt="Our Restaurant"
                  width={600}
                  height={500}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="absolute -bottom-8 -left-8 bg-white rounded-xl p-6 shadow-lg max-w-xs">
                <div className="flex items-center gap-2 mb-3">
                  <div className="text-amber-400">
                    <Star size={20} fill="currentColor" />
                  </div>
                  <span className="font-bold text-xl">4.8</span>
                  <span className="text-gray-500">(2,500+ reviews)</span>
                </div>
                <p className="text-gray-600">"The best dessert experience in town. Always fresh, always delicious!"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chef's Specials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Chef's Specials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Unique creations from our talented pastry chefs that you won't find anywhere else
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              {
                name: "Caramel Pecan Delight",
                image:
                  "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                name: "Matcha Green Tea Fusion",
                image:
                  "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                name: "Coconut Paradise",
                image:
                  "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                name: "Tiramisu Dream",
                image:
                  "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
            ].map((item, index) => (
              <div key={index} className="group relative rounded-2xl overflow-hidden h-80">
                <Image
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  width={300}
                  height={400}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end p-6">
                  <h3 className="text-white text-xl font-medium">{item.name}</h3>
                </div>
                <div className="absolute inset-0 bg-amber-500/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <button className="bg-white text-amber-500 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Follow Us on Instagram</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Tag us in your photos with #The Royal CuisineDelights for a chance to be featured
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {[
              "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
              "https://images.unsplash.com/photo-1586917049352-8f3c9a3d34a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
            ].map((image, index) => (
              <div key={index} className="group relative aspect-square rounded-xl overflow-hidden">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`Instagram post ${index + 1}`}
                  width={300}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <Instagram size={24} className="text-white" />
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-600 transition-colors"
            >
              @The Royal Cuisine_delights <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-gray-50 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">What Our Customers Say</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Don't just take our word for it - hear from our satisfied customers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Emma Thompson",
                comment:
                  "The milkshakes are absolutely divine! I've never tasted anything so creamy and flavorful. This is now my go-to spot for dessert.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                name: "Michael Chen",
                comment:
                  "Great atmosphere, friendly staff, and the most incredible desserts. The chocolate milkshake is out of this world! Highly recommend.",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                name: "Sophia Rodriguez",
                comment:
                  "I celebrated my birthday here and it was perfect! The staff went above and beyond to make it special. And those milkshakes... wow!",
                rating: 5,
                image:
                  "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
            ].map((testimonial, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-md">
                <div className="flex text-amber-400 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6">"{testimonial.comment}"</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-200">
                    <Image
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <span className="font-medium">{testimonial.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Subscribe to our newsletter for exclusive offers, new menu items, and special events
          </p>

          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-1 px-4 py-3 rounded-l-lg border-y border-l border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
            />
            <button
              type="submit"
              className="bg-amber-500 text-white font-medium px-6 py-3 rounded-r-lg hover:bg-amber-600 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>

      {/* Contact & Location Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">Visit Us</h2>
            <p className="text-gray-600 mb-8">
              We'd love to see you in person! Stop by our location to enjoy our delicious treats in our cozy atmosphere.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Address</h3>
                  <p className="text-gray-600">123 Dessert Lane, Sweet City, SC 12345</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                  <Clock size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Hours</h3>
                  <div className="space-y-2 text-gray-600">
                    <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                    <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                    <p>Sunday: 12:00 PM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Phone</h3>
                  <p className="text-gray-600">(555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">Email</h3>
                  <p className="text-gray-600">hello@The Royal Cuisinerestaurant.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-3xl overflow-hidden h-[400px] bg-gray-200">
            <Image
              src="https://images.unsplash.com/photo-1543007630-9710e4a00a20?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
              alt="Restaurant Location"
              width={600}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <div className="h-10 w-10 rounded-full bg-amber-400 flex items-center justify-center">
                  <span className="text-white font-bold">C</span>
                </div>
                <span className="text-xl font-semibold">The Royal Cuisine</span>
              </div>
              <p className="text-gray-400 mb-6">Serving the most delicious milkshakes and desserts since 2018.</p>
              <div className="flex gap-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Facebook size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter size={20} />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Instagram size={20} />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/menu" className="text-gray-400 hover:text-white transition-colors">
                    Menu
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/reservation" className="text-gray-400 hover:text-white transition-colors">
                    Reservation
                  </Link>
                </li>
                <li>
                  <Link href="/blog" className="text-gray-400 hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Contact</h3>
              <ul className="space-y-3 text-gray-400">
                <li>123 Dessert Lane, Sweet City, SC 12345</li>
                <li>Phone: (555) 123-4567</li>
                <li>Email: hello@The Royal Cuisinerestaurant.com</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-medium mb-4">Opening Hours</h3>
              <ul className="space-y-3 text-gray-400">
                <li>Monday - Thursday: 11:00 AM - 9:00 PM</li>
                <li>Friday - Saturday: 11:00 AM - 10:00 PM</li>
                <li>Sunday: 12:00 PM - 8:00 PM</li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} The Royal Cuisine Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
