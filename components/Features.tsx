import {
  Leaf,
  Truck,
  ShieldCheck,
} from "lucide-react";

const features = [
  {
    icon: <Leaf size={42} />,
    title: "Farm Fresh Produce",
    text: "We source directly from trusted farmers to ensure maximum freshness.",
  },
  {
    icon: <Truck size={42} />,
    title: "Fast Delivery",
    text: "Same-day and scheduled deliveries across Lagos Island.",
  },
  {
    icon: <ShieldCheck size={42} />,
    title: "Quality Guaranteed",
    text: "Every order is carefully inspected before it gets to your doorstep.",
  },
];

export default function Features() {
  return (
    <section
  id="features"
  className="bg-white dark:bg-gray-950 py-24 transition-colors duration-300"
>
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            Delivering Freshness
            <span className="text-green-600 dark:text-green-400">
              {" "}to Your Doorstep
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            Fresh fruits, vegetables and groceries delivered quickly,
            safely and conveniently.
          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <div className="mb-6 inline-flex rounded-2xl bg-green-100 dark:bg-green-900/40 p-4 text-green-600 dark:text-green-400">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-gray-600 dark:text-gray-300">
                {feature.text}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}
