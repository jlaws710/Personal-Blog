import "@/styles/globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: 'Personal Blog',
  description: 'My Personal blog built with Next.js'
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
        <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-blue-600 px-4 py-2 rounded shadow transition duration-200">Skip to content</a>
        <header>
          <Navbar />
        </header>
        <main id="main-content" className="flex-grow container mx-auto px-2 sm:px-4 py-8 sm:py-12">
          <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
            {children}
          </div>
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
