"use client";

interface Testimonial {
  quote: string;
  name: string;
  title: string;
  company: string;
}

export default function ServicesTestimonials() {
  // TODO: Replace with actual testimonials when available
  const testimonials: Testimonial[] = [
    {
      quote:
        "Working with Huzain was a great experience. He understood exactly what we needed and delivered a website that exceeded our expectations.",
      name: "Client Name",
      title: "Position",
      company: "Company Name",
    },
    {
      quote:
        "Professional, responsive, and easy to work with. Our new website has helped us attract more customers than ever before.",
      name: "Client Name",
      title: "Position",
      company: "Company Name",
    },
  ];

  return (
    <section id="services-testimonials" className="py-20 px-6">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            What Others Say
          </h2>
          <p className="text-lg text-gray-600">
            Don&apos;t just take my word for it.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl border border-gray-200"
            >
              {/* Quote */}
              <div className="mb-6">
                <span className="text-5xl text-gray-200 leading-none">&quot;</span>
                <p className="text-gray-700 text-lg mt-2">{testimonial.quote}</p>
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar Placeholder */}
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center">
                  <span className="text-gray-400 text-lg font-medium">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.title}, {testimonial.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
