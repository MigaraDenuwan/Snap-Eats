export const HowItWorks = () => {
  const steps = [{
    number: '01',
    title: 'Choose your restaurant',
    description: 'Browse menus from your favorite local restaurants.',
    image: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    number: '02',
    title: 'Place your order',
    description: 'Select your favorite dishes and customize as needed.',
    image: 'https://images.unsplash.com/photo-1484659619207-9165d119dafe?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }, {
    number: '03',
    title: 'Enjoy your meal',
    description: 'Track your order and get it delivered fresh to your door.',
    image: 'https://images.unsplash.com/photo-1521917441209-e886f0404a7b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  }];
  return <div className="bg-gray-50 py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            How Snap Eats works
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ordering your favorite food has never been easier. Just follow these
            simple steps.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => <div key={index} className="bg-white rounded-lg overflow-hidden shadow-md">
              <div className="h-48 overflow-hidden">
                <img src={step.image} alt={step.title} className="w-full h-full object-cover" />
              </div>
              <div className="p-6">
                <span className="inline-block bg-yellow-100 text-yellow-800 font-bold rounded-full px-3 py-1 text-sm mb-3">
                  {step.number}
                </span>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};