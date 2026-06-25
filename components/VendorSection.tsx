export default function VendorSection() {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          {/* Left Content */}
          <div>
            <span className="rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
              Partner With FreshBox
            </span>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-gray-900 lg:text-5xl">
              Bring Farm-Fresh Produce
              <br />
              to Every Table.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-600">
              Join FreshBox and connect directly with thousands of customers
              looking for fresh fruits, vegetables, and everyday groceries.
              Grow your business while helping families enjoy healthier meals.
            </p>

            <button className="mt-8 rounded-full bg-green-600 px-8 py-4 font-semibold text-white transition hover:bg-green-700">
              Become a Vendor
            </button>
          </div>

          {/* Right Content */}
          <div className="rounded-3xl bg-green-50 p-10 shadow-lg">
            <p className="text-sm font-semibold uppercase tracking-widest text-green-600">
              Delivering Freshness to Your Doorstep
            </p>

            <h3 className="mt-4 text-3xl font-bold text-gray-900">
              Why Partner with FreshBox?
            </h3>

            <div className="mt-8 space-y-8">
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Expanded Market Reach
                </h4>
                <p className="mt-2 text-gray-600">
                  Reach more customers across Lagos through a trusted digital
                  marketplace built for local vendors and farmers.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Increase Your Sales
                </h4>
                <p className="mt-2 text-gray-600">
                  Unlock new revenue opportunities with tools that simplify
                  order management and help your business grow.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Sustainability First
                </h4>
                <p className="mt-2 text-gray-600">
                  Support environmentally responsible food distribution by
                  reducing waste and encouraging local sourcing.
                </p>
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Fresh Food, Endless Choices
                </h4>
                <p className="mt-2 text-gray-600">
                  Offer customers a rich selection of fruits, vegetables,
                  pantry essentials, and quality groceries they can trust.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
