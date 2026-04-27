import Link from "next/link";

export default function CareersPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior News Editor",
      type: "Full-time",
      location: "Remote",
    },
    {
      id: 2,
      title: "Frontend Developer",
      type: "Full-time",
      location: "Hybrid",
    },
    {
      id: 3,
      title: "Content Writer",
      type: "Part-time",
      location: "Remote",
    },
  ];

  return (
    <div className="min-h-screen bg-[#f8f5f0] text-[#1a1a1a] px-6 py-12">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-serif tracking-wide border-b pb-4 mb-8 text-center">
          Careers at The Dragon News
        </h1>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-center italic">
          Join our newsroom and help shape the stories that matter.
        </p>

        {/* Divider */}
        <div className="border-t border-dashed my-8"></div>

        {/* Why Join */}
        <div className="mb-10 text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-4">Why Work With Us</h2>
          <p className="text-base md:text-lg leading-relaxed">
            At The Dragon News, we believe in impactful journalism,
            collaborative culture, and continuous growth. Whether you're a
            writer, editor, or developer, your work will reach thousands and
            make a difference.
          </p>
        </div>

        {/* Job Listings */}
        <div>
          <h2 className="text-3xl font-bold mb-6 text-center">Open Positions</h2>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="border border-black p-5 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
              >
                <div>
                  <h3 className="text-xl font-semibold">{job.title}</h3>
                  <p className="text-sm text-gray-600">
                    {job.type} • {job.location}
                  </p>
                </div>

                <button className="px-5 py-2 border border-black hover:bg-black hover:text-white transition">
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed my-10"></div>

        {/* CTA */}
        <div className="text-center">
          <p className="text-base md:text-lg mb-4">
            Don’t see a role that fits? We’re always looking for talented
            individuals.
          </p>

          <button className="px-6 py-3 border border-black hover:bg-black hover:text-white transition">
            Send Your Resume
          </button>
        </div>

        {/* Footer */}
        <div className="flex justify-center mt-12">
          <Link
            href="/"
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
          >
            Back to Front Page
          </Link>
        </div>

        <p className="mt-8 text-sm text-gray-500 text-center">
          Equal Opportunity Employer | Digital Edition
        </p>
      </div>
    </div>
  );
}
