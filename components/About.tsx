import Image from "next/image";

export default function About() {
  return (
    <section
      id="about"
      className="bg-white py-24 dark:bg-gray-950"
    >
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 md:grid-cols-2">

        <div className="flex justify-center">
          <Image
            src="/images/about/about.jpg"
            alt="FreshBox Bag"
            width={520}
            height={520}
            className="rounded-3xl shadow-xl"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white">
            About
            <span className="text-green-600"> FreshBox</span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
            FreshBox is a technology-driven marketplace connecting farmers,
            vendors and households through one seamless platform.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            We make buying fresh food, vegetables and groceries easier,
            faster and more affordable while empowering local farmers and
            small businesses across Nigeria.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our vision is to cultivate healthier communities by making
            fresh, nutritious food accessible to everyone.
          </p>

          <p className="mt-4 text-lg leading-8 text-gray-600 dark:text-gray-300">
            Our mission is to reduce carbon emissions by delivering your
            favorite ingredients using eco-friendly electric bikes,
            preserving both freshness and the environment.
          </p>
        </div>

      </div>
    </section>
  );
}
