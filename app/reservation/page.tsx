import Image from "next/image"
import Link from "next/link"
import { Search, User, ShoppingBag, Facebook, Twitter, Instagram, Clock, MapPin, Phone, Mail } from "lucide-react"

export default function ReservationPage() {
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
            <Link href="/reservation" className="text-amber-500 font-medium">
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
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Make a Reservation</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Reserve your table to enjoy our delicious treats in our cozy atmosphere
            </p>
          </div>
        </div>
      </section>

      {/* Reservation Form Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-serif font-bold mb-6">Book Your Table</h2>
            <p className="text-gray-600 mb-8">
              Fill out the form below to reserve your table at The Royal Cuisine. We'll confirm your reservation via email or phone.
            </p>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-700 mb-2">
                    Full Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 mb-2">
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-gray-700 mb-2">
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="guests" className="block text-gray-700 mb-2">
                    Number of Guests*
                  </label>
                  <select
                    id="guests"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select number of guests</option>
                    <option value="1">1 Person</option>
                    <option value="2">2 People</option>
                    <option value="3">3 People</option>
                    <option value="4">4 People</option>
                    <option value="5">5 People</option>
                    <option value="6">6 People</option>
                    <option value="7+">7+ People</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="date" className="block text-gray-700 mb-2">
                    Date*
                  </label>
                  <input
                    type="date"
                    id="date"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>
                <div>
                  <label htmlFor="time" className="block text-gray-700 mb-2">
                    Time*
                  </label>
                  <select
                    id="time"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  >
                    <option value="">Select time</option>
                    <option value="11:00">11:00 AM</option>
                    <option value="11:30">11:30 AM</option>
                    <option value="12:00">12:00 PM</option>
                    <option value="12:30">12:30 PM</option>
                    <option value="13:00">1:00 PM</option>
                    <option value="13:30">1:30 PM</option>
                    <option value="14:00">2:00 PM</option>
                    <option value="14:30">2:30 PM</option>
                    <option value="18:00">6:00 PM</option>
                    <option value="18:30">6:30 PM</option>
                    <option value="19:00">7:00 PM</option>
                    <option value="19:30">7:30 PM</option>
                    <option value="20:00">8:00 PM</option>
                    <option value="20:30">8:30 PM</option>
                    <option value="21:00">9:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="occasion" className="block text-gray-700 mb-2">
                  Occasion (Optional)
                </label>
                <select
                  id="occasion"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                >
                  <option value="">Select occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                  <option value="date">Date Night</option>
                  <option value="business">Business Meeting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-500"
                  placeholder="Any special requests or notes"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="bg-amber-500 text-white font-medium px-8 py-3 rounded-full hover:bg-amber-600 transition-colors"
                >
                  Book Table
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-8">
            <div className="rounded-3xl overflow-hidden h-64">
              <Image
                src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3"
                alt="Restaurant Interior"
                width={600}
                height={300}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="bg-gray-50 rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold mb-6">Reservation Information</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Opening Hours</h4>
                    <div className="space-y-1 text-gray-600">
                      <p>Monday - Thursday: 11:00 AM - 9:00 PM</p>
                      <p>Friday - Saturday: 11:00 AM - 10:00 PM</p>
                      <p>Sunday: 12:00 PM - 8:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Location</h4>
                    <p className="text-gray-600">123 Dessert Lane, Sweet City, SC 12345</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Phone</h4>
                    <p className="text-gray-600">(555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-amber-100 p-3 rounded-full text-amber-500">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h4 className="text-lg font-medium mb-1">Email</h4>
                    <p className="text-gray-600">reservations@The Royal Cuisinerestaurant.com</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-amber-50 rounded-3xl p-8">
              <h3 className="text-2xl font-serif font-bold mb-4">Reservation Policy</h3>
              <ul className="space-y-3 text-gray-600 list-disc pl-5">
                <li>Reservations are held for 15 minutes past the scheduled time.</li>
                <li>For parties of 6 or more, please call us directly.</li>
                <li>Cancellations should be made at least 4 hours in advance.</li>
                <li>Special events may require a deposit.</li>
                <li>We'll do our best to accommodate special seating requests.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Private Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold mb-4">Private Events</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Host your special occasion at The Royal Cuisine with our customized event packages
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Birthday Celebrations",
                description:
                  "Make your birthday extra sweet with our special birthday packages including custom desserts and decorations.",
                image:
                  "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?q=80&w=1536&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                title: "Corporate Events",
                description:
                  "Impress your clients or reward your team with a unique dessert experience in our private dining area.",
                image:
                  "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
              {
                title: "Special Celebrations",
                description:
                  "From anniversaries to graduations, we'll help you create a memorable event with customized menus.",
                image:
                  "https://images.unsplash.com/photo-1470753323753-3f8091bb0232?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3",
              },
            ].map((event, index) => (
              <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-md">
                <div className="h-48 overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    width={400}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{event.title}</h3>
                  <p className="text-gray-600 mb-4">{event.description}</p>
                  <button className="text-amber-500 font-medium hover:text-amber-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-6">
              For more information about private events or to discuss custom packages, please contact our events team.
            </p>
            <a
              href="mailto:events@The Royal Cuisinerestaurant.com"
              className="bg-amber-500 text-white font-medium px-8 py-3 rounded-full hover:bg-amber-600 transition-colors inline-block"
            >
              Contact Events Team
            </a>
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
