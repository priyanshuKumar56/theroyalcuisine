import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingBag, ArrowRight, Facebook, Twitter, Instagram, Calendar, Clock } from "lucide-react"

export default function BlogPage() {
  // Blog posts data
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Crafting the Perfect Milkshake",
      excerpt:
        "Discover the secrets behind our award-winning milkshakes and how we create the perfect balance of flavors and textures.",
      date: "May 15, 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Behind the Scenes",
    },
    {
      id: 2,
      title: "Seasonal Ingredients: Summer Berry Edition",
      excerpt:
        "Learn about the seasonal berries we're featuring in our summer menu and the local farms we partner with.",
      date: "June 3, 2023",
      readTime: "4 min read",
      image:
        "https://images.unsplash.com/photo-1586917049352-8f3c9a3d34a1?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Ingredients",
    },
    {
      id: 3,
      title: "Meet Our Pastry Chef: An Interview with Michael Rodriguez",
      excerpt: "Get to know the creative mind behind our delicious desserts and his journey to becoming a pastry chef.",
      date: "June 20, 2023",
      readTime: "7 min read",
      image:
        "https://images.unsplash.com/photo-1551024506-0bccd828d307?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Team Spotlight",
    },
    {
      id: 4,
      title: "The History of Milkshakes: From Medicine to Dessert",
      excerpt:
        "Explore the fascinating evolution of milkshakes from their medicinal origins to the beloved dessert we know today.",
      date: "July 8, 2023",
      readTime: "6 min read",
      image:
        "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Food History",
    },
    {
      id: 5,
      title: "Dessert Photography Tips from Our Food Stylist",
      excerpt:
        "Learn how to capture Instagram-worthy photos of your desserts with tips from our professional food stylist.",
      date: "July 25, 2023",
      readTime: "5 min read",
      image:
        "https://images.unsplash.com/photo-1541658016709-82535e94bc69?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Tips & Tricks",
    },
    {
      id: 6,
      title: "Hosting the Perfect Dessert Party at Home",
      excerpt:
        "Get inspiration and practical tips for hosting a memorable dessert-themed gathering with friends and family.",
      date: "August 12, 2023",
      readTime: "8 min read",
      image:
        "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3",
      category: "Entertaining",
    },
  ]

  // Blog categories
  const categories = [
    "All Categories",
    "Behind the Scenes",
    "Ingredients",
    "Team Spotlight",
    "Food History",
    "Tips & Tricks",
    "Entertaining",
    "Recipes",
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
            <Link href="/menu" className="text-gray-600 hover:text-amber-500 transition-colors">
              Menu
            </Link>
            <Link href="/about" className="text-gray-600 hover:text-amber-500 transition-colors">
              About us
            </Link>
            <Link href="/reservation" className="text-gray-600 hover:text-amber-500 transition-colors">
              Reservation
            </Link>
            <Link href="/blog" className="text-amber-500 font-medium">
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Blog</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover stories, tips, and insights from the world of desserts and our journey at The Royal Cuisine
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-gray-50 rounded-3xl overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="h-full">
              <Image
                src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1527&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Featured Post"
                width={600}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <span className="text-amber-500 font-medium mb-2">Featured Post</span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                The Secret Behind Our Award-Winning Chocolate Milkshake
              </h2>
              <div className="flex items-center text-gray-500 mb-4">
                <Calendar size={16} className="mr-2" />
                <span className="mr-4">September 5, 2023</span>
                <Clock size={16} className="mr-2" />
                <span>10 min read</span>
              </div>
              <p className="text-gray-600 mb-6">
                Dive deep into the creation process of our signature chocolate milkshake that won the City Food Awards.
                From sourcing the finest cocoa to our special blending technique, discover what makes it so special.
              </p>
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-600 transition-colors"
              >
                Read Full Article <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Categories */}
      <section className="container mx-auto px-4">
        <div className="flex items-center justify-center space-x-4 overflow-x-auto py-4">
          {categories.map((category, index) => (
            <button
              key={index}
              className={`px-4 py-2 rounded-full whitespace-nowrap transition-colors ${
                index === 0 ? "bg-amber-500 text-white" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-3xl shadow-md overflow-hidden transition-transform hover:-translate-y-2"
            >
              <div className="h-56 overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="inline-block bg-amber-100 text-amber-600 text-xs font-medium px-3 py-1 rounded-full mb-3">
                  {post.category}
                </span>
                <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-gray-500 mb-4">
                  <Calendar size={16} className="mr-2" />
                  <span className="mr-4">{post.date}</span>
                  <Clock size={16} className="mr-2" />
                  <span>{post.readTime}</span>
                </div>
                <Link
                  href="#"
                  className="inline-flex items-center gap-2 text-amber-500 font-medium hover:text-amber-600 transition-colors"
                >
                  Read More <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-amber-500 text-white font-medium px-8 py-3 rounded-full hover:bg-amber-600 transition-colors">
            Load More Articles
          </button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">Subscribe to Our Newsletter</h2>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Stay updated with our latest blog posts, recipes, and special offers delivered straight to your inbox
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
