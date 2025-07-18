import Link from 'next/link';
import React from 'react'

export default function ServiceDetailPage({ params }) {

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
    iimage: "/image.png"
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

    const id = params.id;
    const service = services.find(service => service.id == id);
    if(service) {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <div className='p-4 space-y-1'>
      <h1>Service Detail:</h1>
      <img src={service.image} alt={service.name} className="w-64 h-64 mx-auto object-cover rounded-full" />
      <p>Details for service ID: {id}</p>
      <p>Service Name: {service.name}</p>
      <p>Price: {service.price}</p>
      <p>Duration: {service.duration}</p>
      <p>Description: {service.description}</p>
    </div>
    </div>
  )
}

else {
  return (
    <div className='min-h-screen flex items-center justify-center'>
      <p className='text-red-400 text-3xl font-bold'>404 not found </p>
      <Link href='/'><button className='ml-4 px-4 py-2 bg-blue-500 text-white rounded'>Go to Home</button></Link>
    </div>
  )
} 
}