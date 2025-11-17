import { useState, useEffect } from "react";
import { FileText, Menu, X, Target, Eye, Award } from "lucide-react";

const LandingPage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLoginClick = () => {
    window.location.href = "/signin";
  };

  // const handleDashboardClick = () => {
  //   window.location.href = "/dashboard";
  // };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? "bg-white shadow-theme-lg py-4" : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-gray-900">
                  Pelita Hati Group
                </h1>
                <p className="text-xs text-gray-600">Document Control System</p>
              </div>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#beranda"
                className="text-gray-700 hover:text-brand-500 transition-colors font-medium"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className="text-gray-700 hover:text-brand-500 transition-colors font-medium"
              >
                Tentang Kami
              </a>
              <button
                onClick={handleLoginClick}
                className="px-6 py-2.5 bg-brand-500 text-white rounded-lg font-semibold hover:bg-brand-600 hover:shadow-theme-lg transform hover:scale-105 transition-all duration-200"
              >
                Login
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6 text-gray-700" />
              ) : (
                <Menu className="w-6 h-6 text-gray-700" />
              )}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden mt-4 pb-4 space-y-3">
              <a
                href="#beranda"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Beranda
              </a>
              <a
                href="#tentang"
                className="block px-4 py-2 text-gray-700 hover:bg-gray-50 rounded-lg"
              >
                Tentang Kami
              </a>
              <button
                onClick={handleLoginClick}
                className="w-full px-4 py-2.5 bg-brand-500 text-white rounded-lg font-semibold hover:bg-brand-600"
              >
                Login
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="beranda"
        className="pt-32 pb-20 px-4 bg-gradient-to-br from-brand-25 via-white to-brand-50"
      >
        <div className="max-w-7xl mx-auto">
          <div className="gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Document Control
                <span className="block text-brand-500">Management System</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Sistem Document Control Management yang terintegrasi untuk
                membantu perusahaan mengelola dokumen SOP, form, dan prosedur
                dengan lebih terorganisir dan aman.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-brand-500">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">1000+</div>
              <div className="text-brand-100">Dokumen Terkelola</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">50+</div>
              <div className="text-brand-100">User Aktif</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">99.9%</div>
              <div className="text-brand-100">Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-brand-100">Support</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-20 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
                Tentang Pelita Hati Group
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                CV Pelita Hati Group adalah perusahaan yang berkomitmen dalam
                memberikan nilai tambah maksimal bagi stakeholder melalui
                pelayanan prima dan inovasi berkelanjutan.
              </p>

              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-brand-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Eye className="w-6 h-6 text-brand-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Visi</h3>
                    <p className="text-gray-600">
                      Menjadi perusahaan distribusi terpercaya dan terkemuka di
                      Indonesia yang memberikan nilai tambah maksimal bagi
                      stakeholder melalui pelayanan prima dan inovasi
                      berkelanjutan.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Misi</h3>
                    <p className="text-gray-600">
                      Menyediakan produk berkualitas tinggi dengan harga
                      kompetitif Membangun jaringan distribusi yang kuat dan
                      efisien Mengembangkan SDM yang profesional dan
                      berintegritas Menerapkan teknologi informasi untuk
                      meningkatkan efisiensi operasional Berkontribusi positif
                      terhadap masyarakat dan lingkungan
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-success-50 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-success-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">Nilai</h3>
                    <p className="text-gray-600">
                      Integritas, Inovasi, dan Komitmen terhadap kepuasan
                      pelanggan
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-brand-500 to-brand-600 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Pelita Hati Group</h3>
                  <p className="text-sm text-gray-400">
                    Document Control System
                  </p>
                </div>
              </div>
              <p className="text-gray-400 mb-4">
                Solusi terpercaya untuk manajemen dokumen perusahaan Anda. Aman,
                efisien, dan mudah digunakan.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#beranda"
                    className="hover:text-white transition-colors"
                  >
                    Beranda
                  </a>
                </li>
                <li>
                  <a
                    href="#tentang"
                    className="hover:text-white transition-colors"
                  >
                    Tentang Kami
                  </a>
                </li>
                <li>
                  <a
                    href="#fitur"
                    className="hover:text-white transition-colors"
                  >
                    Fitur
                  </a>
                </li>
                <li>
                  <a
                    href="#kontak"
                    className="hover:text-white transition-colors"
                  >
                    Kontak
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cookie Policy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
            <p>&copy; 2025 CV Pelita Hati Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
