import {
  Leaf,
  BadgeDollarSign,
  Truck,
  ShieldCheck,
} from "lucide-react";

const reasons = [
  {
    icon: <Leaf size={46} />,
    title: "Farm Fresh",
    text: "Fresh fruits and vegetables sourced directly from trusted farmers.",
  },
  {
    icon: <BadgeDollarSign size={46} />,
    title: "Affordable Prices",
    text: "Better prices by reducing unnecessary middlemen.",
  },
  {
    icon: <Truck size={46} />,
    title: "Fast Delivery",
    text: "Reliable doorstep delivery across Lagos Island.",
  },
  {
    icon: <ShieldCheck size={46} />,
    title: "Trusted Quality",
    text: "Every order is carefully inspected before delivery.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-green-50 py-24">

      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">

          <h2 className="text-4xl font-bold">

            Why Choose

            <span className="text-green-600">

              {" "}FreshBox?

            </span>

          </h2>

          <p className="mt-5 text-gray-600">

            Fresh food made simple.

          </p>

        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="mb-6 text-green-600">

                {item.icon}

              </div>

              <h3 className="text-2xl font-bold">

                {item.title}

              </h3>

              <p className="mt-4 leading-7 text-gray-600">

                {item.text}

              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}
