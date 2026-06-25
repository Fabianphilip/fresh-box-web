import {
  Search,
  ShoppingCart,
  Package,
  Truck,
} from "lucide-react";

const steps = [
  {
    icon: <Search size={44} />,
    title: "Browse",
    text: "browse the available food items, select the ones you want.",
  },
  {
    icon: <ShoppingCart size={44} />,
    title: "Order",
    text: "Add products to your cart and checkout.",
  },
  {
    icon: <Package size={44} />,
    title: "We Pack",
    text: "Our team carefully packs your order.",
  },
  {
    icon: <Truck size={44} />,
    title: "Delivered",
    text: "Fresh produce delivered directly to your doorstep.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24"
    >

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">

            How It Works

          </h2>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-4">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="rounded-3xl border bg-white p-8 shadow"
            >

              <div className="text-green-600">

                {step.icon}

              </div>

              <div className="mt-5 flex h-9 w-9 items-center justify-center rounded-full bg-green-600 font-bold text-white">

                {index + 1}

              </div>

              <h3 className="mt-6 text-xl font-bold">

                {step.title}

              </h3>

              <p className="mt-4 text-gray-600">

                {step.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
