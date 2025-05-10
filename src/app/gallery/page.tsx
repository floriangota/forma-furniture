import Header from '@/components/layout/Header';

export default function Gallery() {
  return (
    <>
      <Header />
      <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Our Collection</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600">
              Explore our handcrafted furniture pieces that combine style and functionality.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {/* Placeholder for gallery items - Replace with your images */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div key={item} className="group relative">
                <div className="aspect-h-3 aspect-w-4 overflow-hidden rounded-lg bg-gray-100">
                  <div className="h-full w-full object-cover object-center group-hover:opacity-75">
                    {/* Add your images here */}
                    <div className="flex h-full items-center justify-center bg-gray-200">
                      <span className="text-gray-400">Image {item}</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4">
                  <h3 className="text-sm text-gray-500">
                    <span className="absolute inset-0" />
                    Furniture Item {item}
                  </h3>
                  <p className="mt-1 text-sm font-medium text-gray-900">Description of item {item}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
} 