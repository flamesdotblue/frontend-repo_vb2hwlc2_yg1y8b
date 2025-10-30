import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LatestUpdates from "./components/LatestUpdates";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <LatestUpdates />

        <section id="about" className="max-w-6xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold">About Andhra Vikasam</h2>
              <p className="mt-3 text-gray-600">
                Empowering youth to transform villages across Andhra Pradesh through
                local leadership, transparent action, and sustainable solutions.
              </p>
              <div className="mt-6 grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg border bg-white">
                  <p className="font-semibold">Structure</p>
                  <p className="text-sm text-gray-600 mt-1">State → District → Mandal → Village</p>
                </div>
                <div className="p-4 rounded-lg border bg-white">
                  <p className="font-semibold">Focus</p>
                  <p className="text-sm text-gray-600 mt-1">Water, Education, Health, Cleanliness</p>
                </div>
              </div>
            </div>
            <div className="p-5 rounded-xl border bg-white">
              <p className="font-semibold">Founder</p>
              <p className="text-gray-700 mt-1">Karthik Kovuri</p>
              <p className="text-sm text-gray-600 mt-2">
                Supported by a core team of committed student leaders and volunteers across districts.
              </p>
            </div>
          </div>
        </section>

        <section id="join" className="bg-gray-50 border-t">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-bold">Join Us</h2>
            <p className="text-gray-600 mt-2">Be part of a youth movement for real change.</p>
            <form
              className="mt-6 grid md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thank you for joining! In the full app, this will be saved to the database.");
                e.currentTarget.reset();
              }}
            >
              <input className="input" placeholder="Name" required name="name" />
              <input className="input" placeholder="Email" type="email" required name="email" />
              <input className="input" placeholder="Phone" required name="phone" />
              <input className="input" placeholder="College Name" required name="college" />
              <input className="input" placeholder="District" required name="district" />
              <input className="input" placeholder="Mandal" required name="mandal" />
              <input className="input md:col-span-2" placeholder="Village" required name="village" />
              <textarea className="input md:col-span-2 min-h-[120px]" placeholder="Why do you want to join?" name="reason" />
              <div className="md:col-span-2">
                <button className="px-5 py-3 rounded-full bg-[#138808] text-white font-medium hover:opacity-90">Submit</button>
              </div>
            </form>
          </div>
        </section>

        <section id="report" className="border-t">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-bold">Report a Problem</h2>
            <p className="text-gray-600 mt-2">Tell us about a local issue. Our team will review and act.</p>
            <form
              className="mt-6 grid md:grid-cols-2 gap-4 bg-white p-6 rounded-xl border"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Your report has been submitted to the Andhra Vikasam team.");
                e.currentTarget.reset();
              }}
            >
              <input className="input" placeholder="Village Name" required name="village" />
              <input className="input" placeholder="Mandal" required name="mandal" />
              <textarea className="input md:col-span-2 min-h-[120px]" placeholder="Description of problem" required name="description" />
              <input className="input md:col-span-2" placeholder="Image URL (Cloudinary)" name="image" />
              <div className="md:col-span-2">
                <button className="px-5 py-3 rounded-full bg-[#FF9933] text-white font-medium hover:opacity-90">Submit Report</button>
              </div>
            </form>
          </div>
        </section>

        <section id="transparency" className="bg-gray-50 border-t">
          <div className="max-w-6xl mx-auto px-4 py-16">
            <h2 className="text-2xl md:text-3xl font-bold">Transparency</h2>
            <p className="text-gray-600 mt-2">Live overview of funds and impact.</p>
            <div className="mt-6 grid sm:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border bg-white">
                <p className="text-sm text-gray-500">Total Funds Collected</p>
                <p className="text-2xl font-bold text-[#138808] mt-1">₹12,000</p>
              </div>
              <div className="p-5 rounded-xl border bg-white">
                <p className="text-sm text-gray-500">Funds Spent</p>
                <p className="text-2xl font-bold text-[#FF9933] mt-1">₹8,500</p>
              </div>
              <div className="p-5 rounded-xl border bg-white">
                <p className="text-sm text-gray-500">Projects Completed</p>
                <p className="text-2xl font-bold text-gray-900 mt-1">3</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        .input { @apply w-full px-4 py-3 rounded-lg border border-gray-300 bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#138808]/30 focus:border-[#138808]; }
      `}</style>
    </div>
  );
}
