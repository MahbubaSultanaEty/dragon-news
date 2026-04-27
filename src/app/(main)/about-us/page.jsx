import Link from 'next/link';
import React from 'react';

const AboutUsPage = () => {
    return (
        <div className="min-h-screen bg-[#f8f5f0] text-[#1a1a1a] px-6 py-12">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <h1 className="text-5xl md:text-6xl font-serif tracking-wide border-b pb-4 mb-8 text-center">
          About The Dragon News
        </h1>

        {/* Intro */}
        <p className="text-lg md:text-xl leading-relaxed mb-8 text-center italic">
          Delivering truth, insight, and stories that matter — one edition at a time.
        </p>

        {/* Divider */}
        <div className="border-t border-dashed my-8"></div>

        {/* Main Content */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed">
          <p>
            The Dragon News is a modern digital newspaper committed to
            providing accurate, timely, and insightful news from around the
            world. Our mission is to inform, educate, and empower readers
            through responsible journalism.
          </p>

          <p>
            From breaking headlines to in-depth analysis, we cover a wide range
            of topics including politics, technology, culture, and global
            affairs. Our editorial team works around the clock to ensure every
            story meets the highest standards of integrity.
          </p>

          <p>
            We believe journalism is not just about reporting facts — it is
            about telling stories that shape perspectives and inspire change.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-dashed my-10"></div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Our Editorial Values</h2>
          <p className="text-base md:text-lg max-w-2xl mx-auto">
            Accuracy. Transparency. Independence. We are dedicated to
            maintaining the trust of our readers by upholding these core
            principles in every piece we publish.
          </p>
        </div>

        {/* Actions */}
        <div className="flex justify-center mt-10">
          <Link
            href="/"
            className="px-6 py-3 border border-black hover:bg-black hover:text-white transition"
          >
            Back to Front Page
          </Link>
        </div>

        {/* Footer */}
        <p className="mt-12 text-sm text-gray-500 text-center">
          Established 2026 | Digital Edition
        </p>
      </div>
    </div>
    );
};

export default AboutUsPage;