'use client';

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Search, Newspaper, Phone, MapPin, DollarSign, Bed, Bath, ArrowRight, Mail, Clock, Eye, Calendar, Home, Users, Award, Square, CarFront, TreesIcon as Tree } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { ImageSlideshow } from "../components/ImageSlideShow";
import Background from "../realestate.jpg";
import Image from "next/image";
import YouTube from "react-youtube";
import { Separator } from "@/components/ui/separator";
import { useState, useEffect } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";

export default function LandingPage() {
  const [featured, setFeatured] = useState([]);
  useEffect(() => {
    async function getFeatured() {
      try {
        const url = `${process.env.NEXT_PUBLIC_API_URL}/getProperty?city=Villanova&state=PA`;
        const options = {method:"GET", headers: {"Content-Type": 'application/json'}};
        //const data = await fetch(url, options);
        //console.log(data);
        // data.body is readable streams
      } catch(err) {
        console.log(err);
      }
    }

    getFeatured();
  },[]);

  const mainLineAreas = [
    { name: "Bryn Mawr", image: "https://photos.zillowstatic.com/fp/d190276102742d7b921353151816d82d-p_e.jpg" },
    { name: "Ardmore", image: Background  },
    { name: "Wayne", image: "https://photos.zillowstatic.com/fp/c0eed9e47ad141b82966658a00d05a3c-p_e.jpg" },
    { name: "Villanova", image:  "https://photos.zillowstatic.com/fp/6559a8d8fcdb7e815053ed9a17bd267e-p_e.jpg"},
    { name: "Gladwyne", image:  Background},
    { name: "Haverford", image: Background },
  ];

  const insightsAndMedia = [
    {
      type: 'blog',
      title: '10 Tips for First-Time Home Buyers',
      excerpt: 'Navigating the real estate market can be challenging. Here are our top tips for first-time buyers...',
      icon: <Newspaper className="h-5 w-5 mr-2 text-primary" />,
    },
    {
      type: 'video',
      title: 'Exploring Bryn Mawr',
      description: 'Take a tour of the charming town of Bryn Mawr and discover its rich history and vibrant community.',
      videoId: 'kZPwCNdmPEY',
      views: '10,523',
      uploadDate: '2023-05-15',
    },
    {
      type: 'blog',
      title: 'The Benefits of Living on the Main Line',
      excerpt: 'Discover why the Philadelphia Main Line is one of the most sought-after areas for homebuyers...',
      icon: <Newspaper className="h-5 w-5 mr-2 text-primary" />,
    },
    {
      type: 'video',
      title: 'Life in Ardmore',
      description: 'Experience the perfect blend of suburban tranquility and urban convenience in Ardmore.',
      videoId: 'kx0h9A4yoE8',
      views: '8,712',
      uploadDate: '2023-06-22',
    },
    {
      type: 'blog',
      title: 'Investing in Main Line Real Estate',
      excerpt: 'Learn about the potential returns and considerations when investing in Main Line properties...',
      icon: <Newspaper className="h-5 w-5 mr-2 text-primary" />,
    },
    {
      type: 'video',
      title: 'Wayne: A Community Overview',
      description: 'Explore the family-friendly neighborhoods and top-rated schools that make Wayne a desirable place to live.',
      videoId: 'eA1CzzL7Jq0',
      views: '12,105',
      uploadDate: '2023-07-10',
    },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 text-gray-900">
      <main className="flex-1">
        <HeroSection />
        <FeaturedProperties />
        <WhyChooseUs />
        <ExploreAreas mainLineAreas={mainLineAreas} />
        <SearchSection />
        <InsightsAndMedia insightsAndMedia={insightsAndMedia} />
        <ContactSection />
      </main>
    </div>
  )
}

function HeroSection() {
  return (
    <section className="relative w-full">
      <ImageSlideshow />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <motion.div 
          className="container px-4 md:px-6 mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none text-white">
                Welcome to Main Line Realty
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl lg:text-2xl">
                Discover your dream home on Philadelphia's prestigious Main Line.
              </p>
            </div>
            <motion.div 
              className="w-full max-w-sm space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <form className="flex space-x-2">
                <Input className="max-w-lg flex-1 bg-white/90 text-gray-900 placeholder-gray-500" placeholder="Search properties..." type="text" />
                <Button type="submit" variant="secondary" className="bg-primary text-white hover:bg-primary/90">
                  <Search className="h-4 w-4" />
                  <span className="sr-only">Search</span>
                </Button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function FeaturedProperties() {
  return (
    <section id="properties" className="w-full py-12 px-4 md:px-6">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Featured Properties
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="transform transition duration-300 hover:shadow-xl"
            >
              <Card className="overflow-hidden">
                <CardHeader className="p-0">
                  <Image
                    alt="Property Image"
                    className="w-full h-48 object-cover"
                    height="200"
                    src={Background}
                    style={{
                      aspectRatio: "300/200",
                      objectFit: "cover",
                    }}
                    width="300"
                  />
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="flex items-center mb-2 text-lg">
                    <MapPin className="h-5 w-5 mr-2 text-primary" />
                    Beautiful Home in Bryn Mawr
                  </CardTitle>
                  <div className="flex justify-between items-center text-sm text-gray-600 mb-2">
                    <span className="flex items-center"><Bed className="h-4 w-4 mr-1" /> 4 bed</span>
                    <span className="flex items-center"><Bath className="h-4 w-4 mr-1" /> 3 bath</span>
                    <span className="flex items-center"><ArrowRight className="h-4 w-4 mr-1" /> 2,500 sqft</span>
                  </div>
                  <p className="font-bold text-xl flex items-center mb-2">
                    <DollarSign className="h-5 w-5 mr-1 text-primary" />750,000
                  </p>
                  <Button className="w-full" variant="outline">View Details</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyChooseUs() {
  const reasons = [
    { icon: <Home className="h-10 w-10 text-primary" />, title: "Extensive Property Portfolio", description: "Access to a wide range of properties across the Main Line area." },
    { icon: <Users className="h-10 w-10 text-primary" />, title: "Expert Local Knowledge", description: "Our team has in-depth knowledge of the Main Line real estate market." },
    { icon: <Award className="h-10 w-10 text-primary" />, title: "Award-Winning Service", description: "Recognized for our exceptional customer service and results." },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-6 bg-white">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">Why Choose Main Line Realty</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-4">{reason.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
              <p className="text-gray-600">{reason.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ExploreAreas({ mainLineAreas }) {
  return (
    <section id="areas" className="w-full py-12 px-4 md:px-6 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Explore Main Line Areas
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {mainLineAreas.map((area, index) => (
            <motion.div
              key={area.name}
              className="relative overflow-hidden rounded-lg shadow-md group"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
            >
              <Image
                src={area.image}
                alt={`${area.name} area`}
                width={400}
                height={300}
                className="object-cover w-full h-48 transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
                <h3 className="text-white text-xl font-bold mb-2">{area.name}</h3>
                <Button variant="secondary" size="sm" className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Learn More
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SearchSection() {
  return (
    <section id="search" className="w-full py-12 md:py-16 px-4 md:px-6 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl mb-4">
              Find Your Perfect Home
            </h2>
            <p className="text-gray-600 mb-6">
              Use our advanced search to find the perfect property that meets all your requirements.
            </p>
          </motion.div>
          <motion.form 
            className="space-y-4 bg-gray-50 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Input placeholder="Location (e.g., Bryn Mawr, Ardmore)" type="text" className="w-full" />
            <div className="flex space-x-4">
              <Input placeholder="Min Price" type="number" className="w-1/2" />
              <Input placeholder="Max Price" type="number" className="w-1/2" />
            </div>
            <div className="flex space-x-4">
              <Select>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Bedrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                  <SelectItem value="5">5+</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Bathrooms" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="1">1+</SelectItem>
                  <SelectItem value="2">2+</SelectItem>
                  <SelectItem value="3">3+</SelectItem>
                  <SelectItem value="4">4+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Square Footage</label>
              <Slider defaultValue={[1000]} max={5000} step={100} />
            </div>
            <div className="flex space-x-4">
              <Select>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Property Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="house">House</SelectItem>
                  <SelectItem value="apartment">Apartment</SelectItem>
                  <SelectItem value="condo">Condo</SelectItem>
                  <SelectItem value="townhouse">Townhouse</SelectItem>
                </SelectContent>
              </Select>
              <Select>
                <SelectTrigger className="w-1/2">
                  <SelectValue placeholder="Year Built" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2020">2020+</SelectItem>
                  <SelectItem value="2010">2010+</SelectItem>
                  <SelectItem value="2000">2000+</SelectItem>
                  <SelectItem value="1990">1990+</SelectItem>
                  <SelectItem value="1980">1980+</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-wrap gap-2">
              <Button variant="outline" size="sm">
                <CarFront className="h-4 w-4 mr-2" />
                Garage
              </Button>
              <Button variant="outline" size="sm">
                <Tree className="h-4 w-4 mr-2" />
                Garden
              </Button>
              <Button variant="outline" size="sm">
                <Square className="h-4 w-4 mr-2" />
                Pool
              </Button>
            </div>
            <Button className="w-full bg-primary text-white hover:bg-primary/90" type="submit">
              <Search className="h-4 w-4 mr-2" />
              Search Properties
            </Button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

function InsightsAndMedia({ insightsAndMedia }) {
  return (
    <section id="insights" className="w-full py-12 px-4 md:px-6 bg-gray-50">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Insights & Media
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {insightsAndMedia.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="transform transition duration-300 hover:shadow-lg"
            >
              <Card className="h-full flex flex-col">
                <CardHeader>
                  <CardTitle className="flex items-center text-lg">
                    {item.type === 'blog' ? item.icon : <Eye className="h-5 w-5 mr-2 text-primary" />}
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-grow">
                  {item.type === 'blog' ? (
                    <>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <Button className="mt-auto" variant="outline">
                        Read More
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    </>
                  ) : (
                    <>
                      <div className="aspect-w-16 aspect-h-9 mb-4">
                        <YouTube videoId={item.videoId} opts={{ width: '100%', height: '300' }} />
                      </div>
                      <CardDescription>{item.description}</CardDescription>
                      <div className="flex justify-between items-center mt-4 text-sm text-gray-500">
                        <span className="flex items-center">
                          <Eye className="h-4 w-4 mr-1" /> {item.views} views
                        </span>
                        <span className="flex items-center">
                          <Calendar className="h-4 w-4 mr-1" /> {item.uploadDate}
                        </span>
                      </div>
                    </>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 px-4 md:px-6 bg-white">
      <div className="container px-4 md:px-6 mx-auto">
        <motion.h2 
          className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Us
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Mail className="h-5 w-5 mr-2 text-primary" />
                  Get in Touch
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <Input placeholder="Your Name" type="text" />
                  <Input placeholder="Your Email" type="email" />
                  <Input placeholder="Your Phone" type="tel" />
                  <textarea
                    className="w-full h-24 px-3 py-2 text-base text-gray-900 border rounded-lg focus:shadow-outline resize-none"
                    placeholder="Your Message"
                  />
                  <Button type="submit" className="w-full bg-primary text-white hover:bg-primary/90">
                    <Mail className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-primary" />
                  Our Office
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">123 Main Line Avenue</p>
                <p className="text-gray-600">Bryn Mawr, PA 19010</p>
                <p className="text-gray-600 mt-4 flex items-center">
                  <Phone className="h-4 w-4 mr-2 text-primary" />
                  (123) 456-7890
                </p>
                <p className="text-gray-600 flex items-center">
                  <Mail className="h-4 w-4 mr-2 text-primary" />
                  info@mainlinerealty.com
                </p>
                <p className="text-gray-600 mt-4 flex items-center">
                  <Clock className="h-4 w-4 mr-2 text-primary" />
                  Mon-Fri: 9AM-5PM
                </p>
                <div className="mt-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12232.557465260424!2d-75.32174!3d40.022202!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c6b8941ceb4f27%3A0xf1d34ad631f11a56!2sBryn%20Mawr%2C%20PA!5e0!3m2!1sen!2sus!4v1655501234567!5m2!1sen!2sus"
                    width="100%"
                    height="200"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                  ></iframe>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

