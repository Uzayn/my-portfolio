"use client";

export default function Hero() {
  return (
    <section
      id="hero"
      className="pt-32 pb-24 md:min-h-screen flex items-center relative overflow-hidden"
    >
      <svg
        className="absolute top-1/4 right-0 w-1/2 h-1/2 md:w-1/3 md:h-2/3 opacity-70 dark:opacity-50"
        viewBox="0 0 400 400"
      >
        <circle
          cx="50"
          cy="50"
          r="4"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="100"
          cy="80"
          r="6"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="150"
          cy="30"
          r="3"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="200"
          cy="100"
          r="5"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="250"
          cy="60"
          r="4"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="300"
          cy="120"
          r="7"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="350"
          cy="40"
          r="3"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="80"
          cy="150"
          r="5"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="130"
          cy="200"
          r="4"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="180"
          cy="250"
          r="6"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="230"
          cy="300"
          r="3"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
        <circle
          cx="280"
          cy="350"
          r="5"
          fill="currentColor"
          className="text-gray-300 dark:text-gray-700"
        />
      </svg>

      <div className="max-w-4xl mx-auto md:mx-0 md:ml-[10%] lg:ml-[15%] px-6 md:px-12 text-left space-y-6 z-10">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-normal tracking-tighter leading-none"
          style={{
            background: "linear-gradient(90deg, #000000 0%, #434343 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Huzain Koleosho
        </h1>

        <p className="text-base md:text-2xl font-light text-gray-600 dark:text-gray-400">
          Frontend Engineer
        </p>

        <div className="w-48 h-0.5 bg-gradient-to-r from-gray-300/0 via-gray-300 to-gray-300/0 dark:via-gray-600" />

        <p className=" text-gray-500 dark:text-gray-400 max-w-prose font-light">
          Engineering, developing, commiting & everything in between. <br /> I
          care about creating cool interfaces and intuitive and engaging user
          experiences. <br /> Specializing in React, Next.js, and modern web
          technologies to bring ideas to life.
        </p>
      </div>

      <div className="absolute bottom-8 right-8 md:right-12">
        <p className="text-sm md:text-base font-medium tracking-wide text-gray-600 dark:text-gray-400">
          I build, this is proof
        </p>
      </div>
    </section>
  );
}
