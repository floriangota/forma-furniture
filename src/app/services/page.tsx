import Header from '@/components/layout/Header';

const services = [
  {
    name: 'Custom Furniture Design',
    description: 'We create bespoke furniture pieces tailored to your specific needs and preferences.',
    icon: '🎨',
  },
  {
    name: 'Manufacturing',
    description: 'High-quality manufacturing using premium materials and expert craftsmanship.',
    icon: '🏭',
  },
  {
    name: 'Installation',
    description: 'Professional installation services to ensure your furniture is perfectly set up.',
    icon: '🔧',
  },
  {
    name: 'Consultation',
    description: 'Expert advice on furniture selection, design, and space planning.',
    icon: '💡',
  },
];

export default function Services() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Services</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Comprehensive furniture solutions for your home and business needs.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
              {services.map((service) => (
                <div key={service.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-gray-900">
                    <span className="text-3xl">{service.icon}</span>
                    {service.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </>
  );
} 