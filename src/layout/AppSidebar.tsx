import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Layers,
  Building2,
  Target,
  AlertTriangle,
  ClipboardCheck,
  BarChart3,
  Settings,
  ChevronDown,
  MoreHorizontal,
} from "lucide-react";
import { useSidebar } from "../context/SidebarContext";

type SubItem = {
  name: string;
  path: string;
  subItems?: SubItem[];
};

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  subItems?: SubItem[];
};

const navItems: NavItem[] = [
  // Dashboard
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: "/dashboard",
  },

  // Dokumen - Semua Dokumen dengan Filter
  {
    name: "Dokumen",
    icon: <FileText className="w-5 h-5" />,
    path: "/dokumen/all",
  },

  // ISO 9001:2015 - Klausul ISO (Urut sesuai Klausul)
  {
    name: "ISO 9001:2015",
    icon: <Layers className="w-5 h-5" />,
    subItems: [
      // Klausul 4 - Konteks Organisasi
      {
        name: "4. Konteks Organisasi",
        path: "#",
        subItems: [
          {
            name: "Konteks Organisasi",
            path: "/iso/klausul-4/konteks-organisasi",
          },
          // {
          //   name: "4.1 Memahami Organisasi & Konteksnya",
          //   path: "/iso/klausul-4/memahami-organisasi",
          // },
          // {
          //   name: "4.2 Kebutuhan Pihak Berkepentingan",
          //   path: "/iso/klausul-4/pihak-berkepentingan",
          // },
          // {
          //   name: "4.3 Ruang Lingkup SMM",
          //   path: "/iso/klausul-4/ruang-lingkup",
          // },
          {
            name: "Sistem Manajemen Mutu",
            path: "/iso/klausul-4/sistem-manajemen-mutu",
          },
        ],
      },

      // Klausul 5 - Kepemimpinan
      {
        name: "5. Kepemimpinan",
        path: "#",
        subItems: [
          {
            name: "5.1 Kepemimpinan & Komitmen",
            path: "/iso/klausul-5/kepemimpinan-komitmen",
          },
          {
            name: "5.2 Kebijakan Mutu",
            path: "/iso/klausul-5/kebijakan-mutu",
          },
          {
            name: "5.3 Peran & Tanggung Jawab",
            path: "/iso/klausul-5/peran-tanggung-jawab",
          },
        ],
      },

      // Klausul 6 - Perencanaan
      {
        name: "6. Perencanaan",
        path: "#",
        subItems: [
          {
            name: "6.1 Tindakan Risiko & Peluang",
            path: "/iso/klausul-6/risiko-peluang",
          },
          {
            name: "6.2 Sasaran Mutu & Rencana",
            path: "/iso/klausul-6/sasaran-mutu",
          },
          {
            name: "6.3 Perencanaan Perubahan",
            path: "/iso/klausul-6/perencanaan-perubahan",
          },
        ],
      },

      // Klausul 7 - Dukungan
      {
        name: "7. Dukungan",
        path: "#",
        subItems: [
          {
            name: "7.1 Sumber Daya",
            path: "/iso/klausul-7/sumber-daya",
          },
          {
            name: "7.2 Kompetensi",
            path: "/iso/klausul-7/kompetensi",
          },
          {
            name: "7.3 Kesadaran",
            path: "/iso/klausul-7/kesadaran",
          },
          {
            name: "7.4 Komunikasi",
            path: "/iso/klausul-7/komunikasi",
          },
          {
            name: "7.5 Informasi Terdokumentasi",
            path: "/iso/klausul-7/informasi-terdokumentasi",
          },
        ],
      },

      // Klausul 8 - Operasi
      {
        name: "8. Operasi",
        path: "#",
        subItems: [
          {
            name: "8.1 Perencanaan Operasional",
            path: "/iso/klausul-8/perencanaan-operasional",
          },
          {
            name: "8.2 Persyaratan Produk/Jasa",
            path: "/iso/klausul-8/persyaratan-produk",
          },
          {
            name: "8.3 Desain & Pengembangan",
            path: "/iso/klausul-8/desain-pengembangan",
          },
          {
            name: "8.4 Pengendalian Proses Eksternal",
            path: "/iso/klausul-8/proses-eksternal",
          },
          {
            name: "8.5 Produksi & Penyediaan Jasa",
            path: "/iso/klausul-8/produksi-jasa",
          },
          {
            name: "8.6 Pelepasan Produk/Jasa",
            path: "/iso/klausul-8/pelepasan-produk",
          },
          {
            name: "8.7 Pengendalian Output Tidak Sesuai",
            path: "/iso/klausul-8/output-tidak-sesuai",
          },
        ],
      },

      // Klausul 9 - Evaluasi Kinerja
      {
        name: "9. Evaluasi Kinerja",
        path: "#",
        subItems: [
          {
            name: "9.1 Pemantauan, Pengukuran, Analisis",
            path: "/iso/klausul-9/pemantauan-pengukuran",
          },
          {
            name: "9.2 Audit Internal",
            path: "/iso/klausul-9/audit-internal",
          },
          {
            name: "9.3 Tinjauan Manajemen",
            path: "/iso/klausul-9/tinjauan-manajemen",
          },
        ],
      },

      // Klausul 10 - Peningkatan
      {
        name: "10. Peningkatan",
        path: "#",
        subItems: [
          {
            name: "10.1 Umum",
            path: "/iso/klausul-10/umum",
          },
          {
            name: "10.2 Ketidaksesuaian & Tindakan Korektif",
            path: "/iso/klausul-10/tindakan-korektif",
          },
          {
            name: "10.3 Peningkatan Berkelanjutan",
            path: "/iso/klausul-10/peningkatan-berkelanjutan",
          },
        ],
      },

      // Panduan ISO
      {
        name: "Panduan ISO",
        path: "/iso/panduan",
      },
    ],
  },

  // Organisasi
  {
    name: "Organisasi",
    icon: <Building2 className="w-5 h-5" />,
    subItems: [
      {
        name: "Struktur Organisasi",
        path: "#",
        subItems: [
          {
            name: "Struktur Umum",
            path: "/organisasi/struktur/umum",
          },
          {
            name: "Detail per Departemen",
            path: "/organisasi/struktur/departemen",
          },
        ],
      },
      {
        name: "Job Description",
        path: "/organisasi/job-description",
      },
      {
        name: "Data Karyawan",
        path: "/organisasi/karyawan",
      },
    ],
  },

  // Sasaran Mutu
  {
    name: "Sasaran Mutu",
    icon: <Target className="w-5 h-5" />,
    subItems: [
      {
        name: "Dashboard Sasaran Mutu",
        path: "/sasaran-mutu/dashboard",
      },
      {
        name: "Target Tahunan",
        path: "/sasaran-mutu/target-tahunan",
      },
      {
        name: "Pencapaian Bulanan",
        path: "/sasaran-mutu/pencapaian-bulanan",
      },
      {
        name: "Laporan",
        path: "/sasaran-mutu/laporan",
      },
    ],
  },

  // Risiko & Peluang
  {
    name: "Risiko & Peluang",
    icon: <AlertTriangle className="w-5 h-5" />,
    subItems: [
      {
        name: "Daftar Risiko & Peluang",
        path: "/risiko-peluang/daftar",
      },
      {
        name: "Tambah Baru",
        path: "/risiko-peluang/tambah",
      },
      {
        name: "Analisis Risiko",
        path: "/risiko-peluang/analisis",
      },
      {
        name: "Laporan Konsolidasi",
        path: "/risiko-peluang/laporan",
      },
    ],
  },

  // Audit & Log
  {
    name: "Audit & Log",
    icon: <ClipboardCheck className="w-5 h-5" />,
    subItems: [
      {
        name: "Audit Internal",
        path: "/audit/internal",
      },
      {
        name: "Temuan Audit",
        path: "/audit/temuan",
      },
      {
        name: "Audit Log System",
        path: "/audit/log-system",
      },
      {
        name: "Laporan Audit",
        path: "/audit/laporan",
      },
    ],
  },

  // Laporan
  {
    name: "Laporan",
    icon: <BarChart3 className="w-5 h-5" />,
    subItems: [
      {
        name: "Laporan Departemen",
        path: "/laporan/departemen",
      },
      {
        name: "Laporan Sasaran Mutu",
        path: "/laporan/sasaran-mutu",
      },
      {
        name: "Laporan Dokumen",
        path: "/laporan/dokumen",
      },
      {
        name: "Business Model Process",
        path: "/laporan/business-model",
      },
      {
        name: "Export Data",
        path: "/laporan/export",
      },
    ],
  },

  // Pengaturan
  {
    name: "Pengaturan",
    icon: <Settings className="w-5 h-5" />,
    subItems: [
      {
        name: "Profil Saya",
        path: "/pengaturan/profil",
      },
      {
        name: "Manajemen User",
        path: "/pengaturan/user",
      },
      {
        name: "Manajemen Departemen",
        path: "/pengaturan/departemen",
      },
      {
        name: "Role & Permission",
        path: "/pengaturan/role-permission",
      },
      {
        name: "Pengaturan Sistem",
        path: "/pengaturan/sistem",
      },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } = useSidebar();
  const location = useLocation();
  const [openSubmenu, setOpenSubmenu] = useState<Record<string, boolean>>({});

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const isActive = useCallback(
    (path: string) => location.pathname === path,
    [location.pathname]
  );

  const renderSubItems = (subItems?: SubItem[], parentKey = "") => {
    if (!subItems) return null;
    return (
      <ul className="mt-2 space-y-1 ml-6">
        {subItems.map((item, idx) => (
          <li key={`${parentKey}-${idx}`}>
            {item.subItems ? (
              <>
                <button
                  onClick={() => toggleSubmenu(`${parentKey}-${idx}`)}
                  className="menu-dropdown-item w-full text-left"
                >
                  {item.name}
                  <ChevronDown
                    className={`ml-auto w-4 h-4 transition-transform duration-200 ${
                      openSubmenu[`${parentKey}-${idx}`] ? "rotate-180" : ""
                    }`}
                  />
                </button>
                {openSubmenu[`${parentKey}-${idx}`] &&
                  renderSubItems(item.subItems, `${parentKey}-${idx}`)}
              </>
            ) : (
              <Link
                to={item.path}
                className={`menu-dropdown-item ${
                  isActive(item.path)
                    ? "menu-dropdown-item-active"
                    : "menu-dropdown-item-inactive"
                }`}
              >
                {item.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* LOGO */}
      <div
        className={`py-8 flex ${
          !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
        }`}
      >
        <Link to="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <img
              src="/images/logo/phi-logo.png"
              alt="Logo"
              width={150}
              height={40}
            />
          ) : (
            <img
              src="/images/logo/phi-logo-icon.png"
              alt="Logo"
              width={32}
              height={32}
            />
          )}
        </Link>
      </div>

      {/* MENU */}
      <div className="flex flex-col overflow-y-auto no-scrollbar">
        <nav>
          <h2
            className={`mb-4 text-xs uppercase flex text-gray-400 ${
              !isExpanded && !isHovered ? "lg:justify-center" : "justify-start"
            }`}
          >
            {isExpanded || isHovered || isMobileOpen ? (
              "Menu"
            ) : (
              <MoreHorizontal />
            )}
          </h2>

          <ul className="flex flex-col gap-2">
            {navItems.map((nav, index) => (
              <li key={nav.name}>
                {nav.subItems ? (
                  <>
                    <button
                      onClick={() => toggleSubmenu(String(index))}
                      className={`menu-item group ${
                        openSubmenu[String(index)]
                          ? "menu-item-active"
                          : "menu-item-inactive"
                      }`}
                    >
                      <span className="menu-item-icon-size">{nav.icon}</span>
                      {(isExpanded || isHovered || isMobileOpen) && (
                        <>
                          <span className="menu-item-text">{nav.name}</span>
                          <ChevronDown
                            className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                              openSubmenu[String(index)]
                                ? "rotate-180 text-brand-500"
                                : ""
                            }`}
                          />
                        </>
                      )}
                    </button>
                    {openSubmenu[String(index)] &&
                      renderSubItems(nav.subItems, String(index))}
                  </>
                ) : (
                  <Link
                    to={nav.path!}
                    className={`menu-item group ${
                      isActive(nav.path!)
                        ? "menu-item-active"
                        : "menu-item-inactive"
                    }`}
                  >
                    <span className="menu-item-icon-size">{nav.icon}</span>
                    {(isExpanded || isHovered || isMobileOpen) && (
                      <span className="menu-item-text">{nav.name}</span>
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
