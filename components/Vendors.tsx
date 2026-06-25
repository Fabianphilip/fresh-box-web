import Image from "next/image";

export default function Vendors() {
  return (
    <section
      id="vendors"
      className="bg-green-50 dark:bg-gray-900 py-24 transition-colors duration-300"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        {/* Left Side */}
        <div className="flex justify-center">
          <Image
            src="/images/vendors/vendor.jpg"
            alt="FreshBox Vendor"
            width={600}
            height={600}
            className="rounded-3xl shadow-2xl object-cover"
          />
        </div>

        {/* Right Side */}
        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Sell on
            <span className="text-green-600"> FreshBox</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Join thousands of trusted farmers, grocery stores and food vendors
            reaching more customers every day through FreshBox.
          </p>

          <ul className="mt-8 space-y-4 text-lg text-gray-700 dark:text-gray-300">
            <li>✅ Reach more customers</li>
            <li>✅ Increase your daily sales</li>
            <li>✅ Manage orders easily</li>
            <li>✅ Grow your business with FreshBox</li>
          </ul>

          <button className="mt-10 rounded-xl bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
            Become a Vendor
          </button>
        </div>

      </div>
    </section>
  );
}
