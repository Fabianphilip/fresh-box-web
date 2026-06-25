import Image from "next/image";

export default function Hero() {
  return (
    <section
  id="home"
  className="bg-gradient-to-br from-green-50 via-white to-green-100 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 transition-colors duration-300"
>
      <div className="mx-auto grid min-h-[85vh] max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">

        {/* Left Side */}
        <div>

          <span className="inline-block rounded-full bg-green-100 dark:bg-green-900/40 px-4 py-2 text-sm font-semibold text-green-700 dark:text-green-300">
            🌿 Fresh from Local Farms
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-tight text-gray-900 dark:text-white md:text-6xl">
            Fresh Produce,
            <br />
            <span className="text-green-600 dark:text-green-400">
              Delivered Fresh.
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-gray-600 dark:text-gray-300">
            FreshBox connects farmers directly to homes, making it
            easier than ever to enjoy healthy fruits, vegetables,
            groceries, and farm-fresh products delivered right to your
            doorstep.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <button className="rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition duration-300 hover:bg-green-700 dark:bg-green-500 dark:hover:bg-green-400">
              Order Now
            </button>

            <button className="rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 px-8 py-4 font-semibold text-gray-700 dark:text-gray-200 transition hover:bg-gray-100 dark:hover:bg-gray-800">
              Coming Soon
            </button>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 text-sm font-medium text-gray-700 dark:text-gray-300">
            <div>✅ Farm Fresh</div>
            <div>🚚 Fast Delivery</div>
            <div>⭐ Quality Guaranteed</div>
          </div>

        </div>

        {/* Right Side */}
        <div className="flex justify-center">

          <Image
  src="/images/hero/hero.png"
  alt="FreshBox Hero"
  width={620}
  height={620}
  priority
  className="w-full max-w-[560px] h-auto object-contain drop-shadow-xl"
/>

        </div>

      </div>
    </section>
  );
}
