import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingBag, ArrowRight, Facebook, Twitter, Instagram } from "lucide-react"

export default function MenuPage() {
  // Menu categories and items
  const menuCategories = [
    {
      id: "milkshakes",
      name: "Signature Milkshakes",
      description: "Our famous handcrafted milkshakes made with premium ingredients",
      items: [
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
        {
          name: "Caramel Pecan Delight",
          description: "Vanilla milkshake with caramel swirl, topped with pecans and whipped cream",
          price: "$8.49",
          image:
            "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Mint Chocolate Chip",
          description: "Refreshing mint milkshake with chocolate chips and chocolate drizzle",
          price: "$7.99",
          image:
            "https://images.unsplash.com/photo-1572490122747-3968b75cc699?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Cookies & Cream",
          description: "Creamy vanilla milkshake blended with chocolate cookie pieces",
          price: "$7.49",
          image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
      ],
    },
    {
      id: "specialty",
      name: "Specialty Desserts",
      description: "Unique creations from our talented pastry chefs",
      items: [
        {
          name: "Tiramisu Dream",
          description: "Coffee-infused milkshake with mascarpone cream and cocoa dusting",
          price: "$8.99",
          image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Matcha Green Tea Fusion",
          description: "Smooth matcha green tea milkshake with white chocolate chips",
          price: "$8.49",
          image:
            "https://images.unsplash.com/photo-1546039907-7fa05f864c02?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Coconut Paradise",
          description: "Tropical coconut milkshake with pineapple chunks and toasted coconut",
          price: "$8.49",
          image:
            "https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Peanut Butter Cup",
          description: "Rich chocolate and peanut butter milkshake with peanut butter cup pieces",
          price: "$8.99",
          image:
            "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
      ],
    },
    {
      id: "sundaes",
      name: "Decadent Sundaes",
      description: "Indulgent ice cream sundaes with premium toppings",
      items: [
        {
          name: "Brownie Explosion",
          description: "Warm chocolate brownie topped with vanilla ice cream, hot fudge, and whipped cream",
          price: "$9.99",
          image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Banana Split Classic",
          description: "Fresh banana with three scoops of ice cream, toppings, and whipped cream",
          price: "$10.99",
          image:
            "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Caramel Pecan Sundae",
          description: "Vanilla ice cream with warm caramel sauce, toasted pecans, and whipped cream",
          price: "$8.99",
          image:
            "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Berry Bliss",
          description: "Vanilla ice cream with fresh seasonal berries, berry sauce, and whipped cream",
          price: "$9.49",
          image:
            "https://images.unsplash.com/photo-1586917049352-8f3c9a3d34a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
      ],
    },
    {
      id: "baked",
      name: "Freshly Baked Treats",
      description: "Delicious baked goods made fresh daily",
      items: [
        {
          name: "Chocolate Chip Cookie",
          description: "Large soft-baked cookie with chocolate chunks and a gooey center",
          price: "$3.99",
          image:
            "https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Double Fudge Brownie",
          description: "Rich chocolate brownie with chocolate chunks and fudge swirl",
          price: "$4.49",
          image:
            "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Cinnamon Roll",
          description: "Warm cinnamon roll with cream cheese frosting",
          price: "$4.99",
          image:
            "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Blueberry Muffin",
          description: "Moist muffin packed with fresh blueberries and topped with streusel",
          price: "$3.99",
          image:
            "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
      ],
    },
    {
      id: "beverages",
      name: "Beverages",
      description: "Hot and cold drinks to complement your desserts",
      items: [
        {
          name: "Premium Coffee",
          description: "Freshly brewed specialty coffee",
          price: "$3.49",
          image:
            "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Hot Chocolate",
          description: "Rich hot chocolate topped with whipped cream and chocolate shavings",
          price: "$4.49",
          image:
            "https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Iced Tea",
          description: "Refreshing house-brewed iced tea with optional flavors",
          price: "$2.99",
          image:
            "https://images.unsplash.com/photo-1556679343-c1306ee3f376?q=80&w=1364&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
        {
          name: "Fresh Lemonade",
          description: "Freshly squeezed lemonade with optional fruit flavors",
          price: "$3.99",
          image:
            "https://images.unsplash.com/photo-1621263764928-df1444c5e859?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
        },
      ],
    },
  ]

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
            <Link href="/" className="text-gray-600 hover:text-amber-500 transition-colors">
              Home
            </Link>
            <Link href="/menu" className="text-amber-500 font-medium">
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
            <button aria-label="Cart" className="relative text-white bg-amber-500 rounded-full p-2">
              <ShoppingBag size={20} />
              <span className="absolute -top-1 -right-1 bg-black text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="bg-amber-50">
        <div className="container mx-auto px-4 py-16 md:py-24">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Menu</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our delicious selection of handcrafted milkshakes, desserts, and treats made with the finest
              ingredients
            </p>
          </div>
        </div>
      </section>

      {/* Menu Navigation */}
      <section className="sticky top-0 bg-white shadow-md z-10">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 py-4 overflow-x-auto">
            {menuCategories.map((category) => (
              <a
                key={category.id}
                href={`#${category.id}`}
                className="text-gray-600 hover:text-amber-500 whitespace-nowrap px-2 py-1 transition-colors"
              >
                {category.name}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Categories */}
      <section className="container mx-auto px-4 py-12">
        <div className="space-y-20">
          {menuCategories.map((category) => (
            <div key={category.id} id={category.id} className="scroll-mt-20">
              <div className="text-center mb-12">
                <h2 className="text-4xl font-serif font-bold mb-4">{category.name}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-3xl shadow-md overflow-hidden transition-transform hover:-translate-y-2"
                  >
                    <div className="h-64 overflow-hidden">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold mb-2">{item.name}</h3>
                      <p className="text-gray-600 mb-4">{item.description}</p>
                      <div className="flex justify-between items-center">
                        <span className="text-xl font-bold">{item.price}</span>
                        <button className="bg-amber-500 text-white rounded-full p-3 hover:bg-amber-600 transition-colors">
                          <ShoppingBag size={18} />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Special Dietary Needs */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Special Dietary Options</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We cater to various dietary needs with our special menu options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Vegan Delights",
                description: "Dairy-free milkshakes and desserts made with plant-based ingredients",
                icon: "🌱",
              },
              {
                name: "Gluten-Free Options",
                description: "Specially crafted treats without gluten for those with sensitivities",
                icon: "🌾",
              },
              {
                name: "Sugar-Free Selections",
                description: "Delicious options sweetened with natural alternatives",
                icon: "🍯",
              },
            ].map((option, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-md text-center">
                <div className="text-4xl mb-4">{option.icon}</div>
                <h3 className="text-xl font-bold mb-2">{option.name}</h3>
                <p className="text-gray-600">{option.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">
              Please inform our staff about any allergies or dietary restrictions when ordering.
            </p>
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 bg-amber-500 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors"
            >
              Make a Reservation <ArrowRight size={16} />
            </Link>
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
