import Navbar from "./Navbar";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-50 via-white to-gray-100 text-gray-800">
      {/* Skip to content for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only absolute top-2 left-2 z-50 bg-white text-blue-600 px-4 py-2 rounded shadow transition duration-200">Skip to content</a>

      {/* Header with Navbar */}
      <header>
        <Navbar />
      </header>

      {/* Main content */}
      <main id="main-content" className="flex-grow container mx-auto px-2 sm:px-4 py-8 sm:py-12">
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-8 md:p-12 transition-all duration-300 hover:shadow-2xl">
          {children}
        </div>
      </main>

      {/* Footer */}
      <footer>
        <Footer />
      </footer>
    </div>
  );
}