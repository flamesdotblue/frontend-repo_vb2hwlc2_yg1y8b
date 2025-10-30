import { CheckCircle, MapPin, Images } from "lucide-react";

const updates = [
  {
    title: "Water Tank Installed",
    location: "XYZ Village, Amadalavalasa",
    description: "Built a 1000L community water tank with local sponsorship.",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1564856099407-1e9d86d951e9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "School Cleanup Drive",
    location: "Srikakulam",
    description: "Students joined hands to renovate classrooms and paint walls.",
    status: "Ongoing",
    image:
      "https://images.unsplash.com/photo-1596496055380-c5efb9185a33?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Street Lighting Proposal",
    location: "Palakonda Mandal",
    description: "Submitted proposal to install 15 solar street lights.",
    status: "Submitted",
    image:
      "https://images.unsplash.com/photo-1518306727298-4c17e1bf6942?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function LatestUpdates() {
  return (
    <section id="projects" className="bg-gray-50 border-t border-b">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900">Latest Updates</h2>
            <p className="text-gray-600 mt-2">
              Recent problems solved and ongoing community projects.
            </p>
          </div>
          <a href="#transparency" className="inline-flex items-center gap-2 text-[#138808] font-medium">
            <CheckCircle className="w-5 h-5" /> See Transparency
          </a>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {updates.map((u, idx) => (
            <article key={idx} className="bg-white rounded-xl border shadow-sm overflow-hidden">
              <div className="aspect-video w-full bg-gray-100">
                {u.image ? (
                  <img src={u.image} alt={u.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                    <Images className="w-8 h-8" />
                  </div>
                )}
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{u.title}</h3>
                  <span
                    className={`text-xs px-2 py-1 rounded-full border ${
                      u.status === "Completed"
                        ? "bg-green-50 text-green-700 border-green-200"
                        : u.status === "Ongoing"
                        ? "bg-orange-50 text-orange-700 border-orange-200"
                        : "bg-blue-50 text-blue-700 border-blue-200"
                    }`}
                  >
                    {u.status}
                  </span>
                </div>
                <p className="mt-2 text-sm text-gray-600">{u.description}</p>
                <p className="mt-3 inline-flex items-center gap-1 text-sm text-gray-700">
                  <MapPin className="w-4 h-4" /> {u.location}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
