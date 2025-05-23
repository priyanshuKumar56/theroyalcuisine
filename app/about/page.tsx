import Image from "next/image"
import Link from "next/link"
import { Star, Search, User, ShoppingBag, Facebook, Twitter, Instagram } from "lucide-react"

export default function AboutPage() {
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
            <Link href="/about" className="text-amber-500 font-medium">
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Story</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Learn about our journey, our passion for desserts, and our commitment to quality
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif font-bold mb-6">How It All Began</h2>
            <p className="text-gray-600 mb-6">
              Founded in 2018, The Royal Cuisine began with a simple mission: to create the most delicious and satisfying milkshakes
              and desserts using only the finest ingredients. What started as a small corner shop has grown into a
              beloved destination for dessert enthusiasts.
            </p>
            <p className="text-gray-600 mb-6">
              Our founder, Emma Chen, had a passion for creating unique flavor combinations and perfecting the art of
              the milkshake. After years of experimenting in her home kitchen and sharing her creations with friends and
              family, she decided to turn her passion into a business.
            </p>
            <p className="text-gray-600">
              The first The Royal Cuisine location opened in downtown Sweet City with just five signature milkshakes on the menu.
              Word quickly spread about our incredible desserts, and within months, lines were forming out the door.
              Today, we've expanded our menu and our locations, but we remain committed to the same principles of
              quality, creativity, and exceptional service.
            </p>
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
      </section>

      {/* Our Values */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">The principles that guide everything we do at The Royal Cuisine</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Quality Ingredients",
                description:
                  "We use only the finest, freshest ingredients in all our creations. From premium ice cream to locally sourced fruits, quality is never compromised.",
                icon: "🍦",
              },
              {
                title: "Creativity & Innovation",
                description:
                  "We're constantly experimenting with new flavors and combinations to bring you unique dessert experiences you won't find anywhere else.",
                icon: "✨",
              },
              {
                title: "Community Connection",
                description:
                  "We believe in being an active part of our community, supporting local suppliers and creating a welcoming space for everyone.",
                icon: "🤝",
              },
            ].map((value, index) => (
              <div key={index} className="bg-white rounded-3xl p-8 shadow-md text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">Meet Our Team</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">The talented individuals who make the magic happen at The Royal Cuisine</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {[
            {
              name: "Emma Chen",
              role: "Founder & Head Chef",
              bio: "Emma's passion for desserts and innovative flavor combinations is the heart of The Royal Cuisine.",
              image:
                "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              name: "Michael Rodriguez",
              role: "Executive Chef",
              bio: "With 15 years of pastry experience, Michael brings expertise and creativity to our menu.",
              image:
                "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              name: "Sarah Johnson",
              role: "Operations Manager",
              bio: "Sarah ensures everything runs smoothly so we can focus on creating amazing desserts.",
              image:
                "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
            {
              name: "David Park",
              role: "Customer Experience",
              bio: "David is dedicated to making sure every customer leaves with a smile.",
              image:
                "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3",
            },
          ].map((member, index) => (
            <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md">
              <div className="h-64 overflow-hidden">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  width={300}
                  height={300}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                <p className="text-amber-500 font-medium mb-3">{member.role}</p>
                <p className="text-gray-600">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Our Journey Timeline */}
      <section className="bg-amber-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Our Journey</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              The milestones that have shaped The Royal Cuisine into what it is today
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {[
              {
                year: "2018",
                title: "The Beginning",
                description: "The Royal Cuisine opens its first location in downtown Sweet City with five signature milkshakes.",
              },
              {
                year: "2019",
                title: "Menu Expansion",
                description: "We expanded our menu to include sundaes, baked goods, and specialty desserts.",
              },
              {
                year: "2020",
                title: "Community Support",
                description:
                  "During challenging times, we pivoted to delivery and donated desserts to healthcare workers.",
              },
              {
                year: "2021",
                title: "Second Location",
                description: "We opened our second location in Riverside to meet growing demand.",
              },
              {
                year: "2022",
                title: "Award-Winning Desserts",
                description: "The Royal Cuisine won 'Best Dessert Shop' in the City Food Awards.",
              },
              {
                year: "2023",
                title: "Sustainability Initiative",
                description: "We launched our eco-friendly packaging and local sourcing program.",
              },
              {
                year: "Today",
                title: "Growing & Innovating",
                description: "We continue to create new dessert experiences while staying true to our core values.",
              },
            ].map((milestone, index) => (
              <div key={index} className="flex mb-12 last:mb-0">
                <div className="mr-8 text-center">
                  <div className="bg-amber-500 text-white rounded-full w-16 h-16 flex items-center justify-center font-bold">
                    {milestone.year}
                  </div>
                  <div className="h-full w-0.5 bg-amber-200 mx-auto mt-4"></div>
                </div>
                <div className="bg-white rounded-2xl p-6 shadow-md flex-1">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-serif font-bold mb-4">What People Say About Us</h2>
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
      </section>

      {/* CTA Section */}
      <section className="bg-amber-500 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-serif font-bold text-white mb-6">Ready to Experience The Royal Cuisine?</h2>
          <p className="text-white/90 max-w-2xl mx-auto mb-8">
            Visit us today or make a reservation to enjoy our delicious desserts in our cozy atmosphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-white text-amber-500 font-medium px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="/reservation"
              className="bg-black text-white font-medium px-8 py-3 rounded-full hover:bg-gray-900 transition-colors"
            >
              Make a Reservation
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
