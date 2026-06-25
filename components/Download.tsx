import Image from "next/image";

export default function Download() {
  return (
    <section className="bg-gradient-to-r from-green-600 to-green-700 py-24 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 md:grid-cols-2">

        {/* Left */}
        <div>

          <span className="rounded-full bg-white/20 px-4 py-2 text-sm">
            📱 Mobile App
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight">
            Fresh groceries
            <br />
            in your pocket.
          </h2>

          <p className="mt-6 max-w-lg text-lg text-green-100">
            FreshBox is coming soon on iOS and Android.
            Browse fresh produce, place orders, and track deliveries
            from anywhere.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="rounded-xl bg-black px-6 py-4 text-left transition hover:scale-105">
              <div className="text-xs">Download on the</div>
              <div className="text-lg font-bold">
                App Store
              </div>
              <div className="text-sm text-gray-300">
                Coming Soon
              </div>
            </button>

            <button className="rounded-xl bg-black px-6 py-4 text-left transition hover:scale-105">
              <div className="text-xs">Get it on</div>
              <div className="text-lg font-bold">
                Google Play
              </div>
              <div className="text-sm text-gray-300">
                Coming Soon
              </div>
            </button>

          </div>

        </div>

        {/* Right */}

        <div className="flex justify-center">

          <Image
            src="/images/app/phones.png"
            alt="FreshBox App"
            width={500}
            height={620}
            className="drop-shadow-2xl"
          />

        </div>

      </div>
    </section>
  );
}
