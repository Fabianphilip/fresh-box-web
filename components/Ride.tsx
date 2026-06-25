import Image from "next/image";

export default function Ride() {
  return (
    <section
      id="ride"
      className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        {/* Left Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Ride With Us
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Become a FreshBox delivery partner and earn money delivering
            fresh groceries to customers in your community.
          </p>

          <ul className="mt-8 space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li>✅ Flexible working hours</li>
            <li>✅ Weekly earnings</li>
            <li>✅ Eco-friendly electric bikes</li>
            <li>✅ Be part of a fast-growing startup</li>
          </ul>

          <button className="mt-10 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
            Apply as a Rider
          </button>
        </div>

        {/* Right Side */}
        <div className="flex justify-center">
          <Image
            src="/images/ride/ride.jpg"
            alt="FreshBox Rider"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
}
