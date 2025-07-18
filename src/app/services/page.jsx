import Link from 'next/link';
import React from 'react'

export default function ServicesPage() {

    const services = [
  {
    id: 1,
    name: "Web Development",
    description: "Building responsive and dynamic websites tailored to your business needs.",
    price: "$500",
    duration: "2 weeks",
    image: "/image.png"
  },
  {
    id: 2,
    name: "Mobile App Development",
    description: "Creating user-friendly Android and iOS applications with modern UI/UX.",
    price: "$800",
    duration: "3 weeks",
    image: "/image.png"
  },
  {
    id: 3,
    name: "UI/UX Design",
    description: "Designing intuitive interfaces and engaging user experiences for your products.",
    price: "$300",
    duration: "1 week",
    image: "/image.png"
  },
  {
    id: 4,
    name: "SEO Optimization",
    description: "Improving your website’s ranking on search engines for better visibility.",
    price: "$200",
    duration: "5 days",
    image: "/image.png"
  },
  {
    id: 5,
    name: "Content Writing",
    description: "Professional and SEO-friendly content writing for your blogs or websites.",
    price: "$100",
    duration: "3 days",
    image: "/image.png"
  },
  {
    id: 6,
    name: "Digital Marketing",
    description: "Promoting your brand on social media and other digital platforms.",
    price: "$400",
    duration: "1 week",
    image: "/image.png"
  }
];

  return (
    <div>
      <h1 className='text-2xl font-bold'>Our Services</h1>
      <p>We offer a variety of services to meet your needs.</p>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
        {
        services.map(service => (
          <div key={service.id} className="service-card bg-white text-gray-700 p-4 rounded-lg shadow hover:bg-gray-200 transition-shadow">
            <Link href={`/services/${service.id}`}>
              <h2 className="text-xl font-bold">{service.name}</h2>
            </Link>
          </div>
        ))
        }
      </div>
      
    </div>
  )
}
