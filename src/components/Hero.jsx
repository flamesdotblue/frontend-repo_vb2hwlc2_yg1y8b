export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(circle, #FF9933 0%, rgba(255,153,51,0) 60%)' }} />
        <div className="absolute -bottom-24 -left-24 w-72 h-72 rounded-full blur-3xl opacity-30"
             style={{ background: 'radial-gradient(circle, #138808 0%, rgba(19,136,8,0) 60%)' }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
              Youth for <span className="text-[#138808]">Real Change</span>
            </h1>
            <p className="mt-4 text-gray-600 text-lg">
              A student-led community working to identify and solve real problems across Andhra Pradesh,
              starting with Srikakulam district.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="#join" className="px-5 py-3 rounded-full bg-[#FF9933] text-white font-medium shadow hover:opacity-90 transition">
                Join Now
              </a>
              <a href="#report" className="px-5 py-3 rounded-full border border-gray-300 text-gray-800 font-medium hover:bg-gray-50 transition">
                Report a Problem
              </a>
            </div>

            <div className="mt-10 p-5 rounded-xl border bg-white/70">
              <h3 className="font-semibold text-gray-900">Our Mission</h3>
              <p className="text-gray-600 mt-2 text-sm">
                Empower youth to transform villages through local leadership, transparent action,
                and community-backed solutions.
              </p>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] w-full rounded-2xl border bg-white shadow-sm overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1606313564200-e75d5e30476f?q=80&w=1600&auto=format&fit=crop"
                alt="Community service in a village"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg border shadow p-3 text-sm">
              <p className="font-semibold text-gray-800">Srikakulam Chapter</p>
              <p className="text-gray-600">Volunteers active across mandals</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
