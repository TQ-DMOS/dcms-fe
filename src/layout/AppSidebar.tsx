import { useCallback, useState } from "react";
import { Link, useLocation } from "react-router";
import {
  LayoutDashboard,
  FileText,
  Folder,
  Layers,
  Activity,
  Archive,
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
  {
    name: "Dashboard",
    icon: <LayoutDashboard className="w-5 h-5" />,
    path: "/",
  },
  {
    name: "Dokumen Strategis",
    icon: <FileText className="w-5 h-5" />,
    subItems: [
      { name: "Visi & Misi Perusahaan", path: "/dokumen-strategis/visi-misi" },
      { name: "Kebijakan Mutu", path: "/dokumen-strategis/kebijakan-mutu" },
      { name: "Manual Mutu", path: "/dokumen-strategis/manual-mutu" },
      { name: "Sasaran Mutu", path: "/dokumen-strategis/sasaran-mutu" },
      {
        name: "Struktur Organisasi",
        path: "/dokumen-strategis/struktur-organisasi",
      },
      {
        name: "Konteks Organisasi",
        path: "/dokumen-strategis/konteks-organisasi",
      },
      { name: "Kebijakan K3", path: "/dokumen-strategis/kebijakan-k3" },
      {
        name: "Kebijakan Lingkungan",
        path: "/dokumen-strategis/kebijakan-lingkungan",
      },
    ],
  },
  {
    name: "Dokumen Operasional",
    icon: <Folder className="w-5 h-5" />,
    subItems: [
      {
        name: "Stock Opname Report",
        path: "/dokumen-operasional/stock-opname",
      },
      { name: "User Access List", path: "/dokumen-operasional/user-access" },
      {
        name: "Backup & Recovery Policy",
        path: "/dokumen-operasional/backup-policy",
      },
    ],
  },
  {
    name: "Prosedur & SOP",
    icon: <Layers className="w-5 h-5" />,
    subItems: [
      {
        name: "Prosedur Wajib ISO 9001",
        path: "#",
        subItems: [
          {
            name: "Kontrol Dokumen",
            path: "/prosedur/iso9001/kontrol-dokumen",
          },
          {
            name: "Kontrol Rekaman",
            path: "/prosedur/iso9001/kontrol-rekaman",
          },
          { name: "Audit Internal", path: "/prosedur/iso9001/audit-internal" },
          {
            name: "Tindakan Korektif",
            path: "/prosedur/iso9001/tindakan-korektif",
          },
          {
            name: "Tinjauan Manajemen",
            path: "/prosedur/iso9001/tinjauan-manajemen",
          },
        ],
      },
      {
        name: "Prosedur Per-departemen",
        path: "#",
        subItems: [
          { name: "Top Manajemen", path: "/prosedur/departemen/top-manajemen" },
          { name: "HRGA", path: "/prosedur/departemen/hrga" },
          {
            name: "Finance & Accounting",
            path: "/prosedur/departemen/finance-accounting",
          },
          {
            name: "Tindakan Korektif",
            path: "/prosedur/departemen/tindakan-korektif",
          },
          {
            name: "Tinjauan Manajemen",
            path: "/prosedur/departemen/tinjauan-manajemen",
          },
        ],
      },
    ],
  },
  {
    name: "Activity",
    icon: <Activity className="w-5 h-5" />,
    path: "/activity",
  },
  {
    name: "Archive",
    icon: <Archive className="w-5 h-5" />,
    path: "/archive",
  },
  {
    name: "Report",
    icon: <BarChart3 className="w-5 h-5" />,
    path: "/report",
  },
  {
    name: "Settings",
    icon: <Settings className="w-5 h-5" />,
    path: "/settings",
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
