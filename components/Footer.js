'use client';

const socialLinks = [
  { href: "https://github.com/jlaws710", label: "GitHub", icon: "<svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.72.08-.71.08-.71 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.45.11-3.02 0 0 .98-.31 3.21 1.18a11.2 11.2 0 0 1 2.93-.39c.99.01 1.99.13 2.93.39 2.22-1.49 3.2-1.18 3.2-1.18.63 1.57.23 2.73.11 3.02.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.7.42.36.8 1.09.8 2.2v3.26c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12c0-6.27-5.23-11.5-11.5-11.5z'/></svg>" },
  { href: "https://linkedin.com/in/joseph-lawson-52a60b231", label: "LinkedIn", icon: "<svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M20.447 20.452h-3.6v-5.6c0-1.34-.024-3.06-1.86-3.06-1.86 0-2.14 1.45-2.14 2.95v5.71h-3.6V9h3.46v1.56h.05c.48-.91 1.66-1.86 3.42-1.86 3.66 0 4.34 2.41 4.34 5.54v6.28zM5.337 8.5c-1.2 0-2.17-.97-2.17-2.17 0-1.2.97-2.17 2.17-2.17 1.2 0 2.17.97 2.17 2.17 0 1.2-.97 2.17-2.17 2.17zm1.8 11.952H3.537V9h3.6v11.452z'/></svg>" },
  { href: "mailto:jlaws710@gmail.com", label: "Gmail", icon: "<svg width='20' height='20' fill='currentColor' viewBox='0 0 24 24'><path d='M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm0 12H4V8l8 5 8-5v10z'/></svg>" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-100 border-t border-gray-200 text-center py-6 mt-10">
      <div className="flex flex-col items-center space-y-2">
        <div className="flex space-x-4 mb-2">
          {socialLinks.map(({ href, label, icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-gray-500 hover:text-blue-600 transition-colors duration-200"
              dangerouslySetInnerHTML={{ __html: icon }}
            />
          ))}
        </div>
        <p className="text-gray-600 text-sm">&copy; {year} jlaws710 Blog. All rights reserved.</p>
        <button
          className="mt-2 px-3 py-1 bg-blue-50 text-blue-700 rounded hover:bg-blue-100 transition duration-200 text-xs"
          aria-label="Back to top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          Back to top
        </button>
      </div>
    </footer>
  );
}