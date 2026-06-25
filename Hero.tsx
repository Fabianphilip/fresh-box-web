export default function Hero() {
  return (
    <section className="text-center py-20 px-6 bg-white">
      
      {/* IMAGE */}
      <div className="flex justify-center mb-8">
        <img
          src="/images/hero/hero.png"
          alt="FreshBox Hero"
          className="w-full max-w-3xl rounded-xl shadow-lg"
        />
      </div>

      {/* TEXT */}
      <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
        Fresh food delivered <br />
        from farms to your doorstep
      </h1>

      <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
        FreshBox connects farmers, vendors, and customers — making fresh food
        affordable, fast, and accessible across Nigeria.
      </p>

      {/* BUTTONS */}
      <div className="mt-8 flex flex-col md:flex-row gap-4 justify-center">
        <button className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition">
          Get Early Access
        </button>

        <a
          href="https://wa.me/2349163783891"
          target="_blank"
          className="border border-green-600 text-green-600 px-6 py-3 rounded-lg hover:bg-green-50 transition"
        >
          Talk on WhatsApp
        </a>
      </div>
    </section>
  );
}
