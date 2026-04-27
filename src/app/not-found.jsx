import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f8f5f0] text-[#1a1a1a] px-6">
      <div className="max-w-2xl text-center">
        {/* Newspaper Title */}
        <h1 className="text-5xl md:text-6xl font-serif tracking-wide border-b pb-4 mb-6">
          The Dragon News
        </h1>

        {/* 404 Headline */}
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          404 — Page Not Found
        </h2>

        {/* Subheadline */}
        <p className="italic text-lg mb-6">
          &quot;The article you are looking for seems to have gone to print in another edition.&quot;
        </p>

        {/* Divider */}
        <div className="border-t border-dashed my-6"></div>

        {/* Body Text */}
        <p className="text-base md:text-lg leading-relaxed mb-8">
          We couldn’t locate the page you requested. It may have been moved,
          archived, or never existed in this issue. Try returning to the
          homepage or explore the latest headlines.
        </p>

        {/* Actions */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
          >
            Return to Front Page
          </Link>

          <Link
            href="/news"
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
          >
            Browse Latest News
          </Link>
        </div>

        {/* Footer Note */}
        <p className="mt-10 text-sm text-gray-500">
          Error Code: 404 | Edition: Digital
        </p>
      </div>
    </div>
  );
}
