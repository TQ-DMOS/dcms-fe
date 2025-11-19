import { useState } from "react";
import {
  GitBranch,
  CheckCircle,
  Clock,
  XCircle,
  Download,
  Eye,
  Edit,
  Plus,
  Search,
  Filter,
  Users,
  Calendar,
  FileText,
  Target,
  Zap,
} from "lucide-react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

interface Change {
  id: string;
  code: string;
  title: string;
  type: string;
  category: string;
  description: string;
  purpose: string;
  impact: string;
  riskLevel: string;
  resources: string;
  owner: string;
  status: string;
  startDate: string;
  deadline: string;
  progress: number;
  stakeholders: string[];
  relatedDocs: string[];
  changeSteps: ChangeStep[];
}

interface ChangeStep {
  id: string;
  step: string;
  pic: string;
  deadline: string;
  status: string;
  progress: number;
}

export default function PerencanaanPerubahan() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedChange, setSelectedChange] = useState<string | null>(null);

  const [changes] = useState<Change[]>([
    {
      id: "1",
      code: "CH-2024-001",
      title: "Implementasi ERP System Terintegrasi",
      type: "Strategic",
      category: "Teknologi",
      description:
        "Implementasi sistem ERP untuk mengintegrasikan proses procurement, inventory, sales, dan finance",
      purpose:
        "Meningkatkan efisiensi operasional, real-time data visibility, dan mengurangi human error",
      impact: "Major - Mempengaruhi seluruh departemen dan proses bisnis",
      riskLevel: "High",
      resources:
        "Budget 500jt, 3 IT staff, 1 consultant, training untuk 50+ user",
      owner: "IT Manager",
      status: "In Progress",
      startDate: "01 Feb 2024",
      deadline: "30 Sep 2024",
      progress: 45,
      stakeholders: [
        "IT",
        "Finance",
        "Procurement",
        "Warehouse",
        "Sales",
        "Top Management",
      ],
      relatedDocs: [
        "SOP-IT-001 (ERP Implementation)",
        "FM-IT-002 (User Training)",
        "R-2024-005 (System Downtime Risk)",
      ],
      changeSteps: [
        {
          id: "1",
          step: "Requirement gathering & system selection",
          pic: "IT Manager",
          deadline: "15 Feb 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          step: "System installation & configuration",
          pic: "IT Team & Consultant",
          deadline: "31 Mar 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "3",
          step: "Data migration & testing",
          pic: "IT Team",
          deadline: "30 Apr 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "4",
          step: "User training (Phase 1)",
          pic: "IT & HRD",
          deadline: "31 May 2024",
          status: "In Progress",
          progress: 75,
        },
        {
          id: "5",
          step: "Pilot implementation (Warehouse module)",
          pic: "IT & WH Manager",
          deadline: "30 Jun 2024",
          status: "In Progress",
          progress: 40,
        },
        {
          id: "6",
          step: "Full rollout all modules",
          pic: "IT Manager",
          deadline: "31 Aug 2024",
          status: "Planned",
          progress: 0,
        },
        {
          id: "7",
          step: "Post-implementation review",
          pic: "IT & MR",
          deadline: "30 Sep 2024",
          status: "Planned",
          progress: 0,
        },
      ],
    },
    {
      id: "2",
      code: "CH-2024-002",
      title: "Ekspansi Warehouse Cabang Semarang",
      type: "Strategic",
      category: "Infrastruktur",
      description:
        "Pembangunan warehouse baru di Semarang dengan kapasitas 2000 pallet untuk mendukung ekspansi regional",
      purpose:
        "Meningkatkan kapasitas penyimpanan, mempercepat delivery time ke Semarang & sekitarnya",
      impact: "Major - Penambahan aset, operational cost, dan headcount",
      riskLevel: "High",
      resources:
        "Budget 2M, 10 warehouse staff, 5 forklift, WMS system integration",
      owner: "Operations Manager",
      status: "In Progress",
      startDate: "01 Mar 2024",
      deadline: "31 Des 2024",
      progress: 35,
      stakeholders: [
        "Operations",
        "Warehouse",
        "Finance",
        "HRD",
        "IT",
        "Top Management",
      ],
      relatedDocs: [
        "SOP-WH-005 (New WH Setup)",
        "O-2024-001 (Ekspansi Market)",
        "SM-OPS-2024-02 (Capacity Target)",
      ],
      changeSteps: [
        {
          id: "1",
          step: "Site selection & lease agreement",
          pic: "Operations Manager",
          deadline: "31 Mar 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          step: "Warehouse construction & setup",
          pic: "GA & Operations",
          deadline: "31 Jul 2024",
          status: "In Progress",
          progress: 60,
        },
        {
          id: "3",
          step: "Recruitment & training WH staff",
          pic: "HRD & WH Manager",
          deadline: "31 Aug 2024",
          status: "In Progress",
          progress: 30,
        },
        {
          id: "4",
          step: "IT infrastructure & WMS integration",
          pic: "IT Team",
          deadline: "30 Sep 2024",
          status: "Planned",
          progress: 0,
        },
        {
          id: "5",
          step: "Grand opening & soft launch",
          pic: "Operations Manager",
          deadline: "31 Oct 2024",
          status: "Planned",
          progress: 0,
        },
      ],
    },
    {
      id: "3",
      code: "CH-2024-003",
      title: "Restrukturisasi Sales Team",
      type: "Organizational",
      category: "SDM",
      description:
        "Pembagian sales team menjadi 3 regional (Pekalongan, Semarang, Solo/Jogja) dengan masing-masing regional manager",
      purpose:
        "Meningkatkan fokus regional, accountability, dan response time ke customer",
      impact: "Medium - Perubahan struktur organisasi dan reporting line",
      riskLevel: "Medium",
      resources: "Promosi 3 Regional Manager, redistribusi 20 sales staff",
      owner: "Sales Director",
      status: "In Progress",
      startDate: "01 Apr 2024",
      deadline: "31 Jul 2024",
      progress: 60,
      stakeholders: ["Sales", "HRD", "Top Management"],
      relatedDocs: [
        "ST-TM-005 (Struktur Organisasi)",
        "SOP-SLS-003 (Sales Territory)",
        "SM-SLS-2024-01 (Sales Growth)",
      ],
      changeSteps: [
        {
          id: "1",
          step: "Design new organizational structure",
          pic: "Sales Director & HRD",
          deadline: "15 Apr 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          step: "Selection & appointment Regional Managers",
          pic: "Sales Director",
          deadline: "30 Apr 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "3",
          step: "Communication & socialization to team",
          pic: "Sales Director",
          deadline: "15 May 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "4",
          step: "Territory redistribution & handover",
          pic: "Regional Managers",
          deadline: "30 Jun 2024",
          status: "In Progress",
          progress: 70,
        },
        {
          id: "5",
          step: "Performance monitoring & adjustment",
          pic: "Sales Director",
          deadline: "31 Jul 2024",
          status: "In Progress",
          progress: 30,
        },
      ],
    },
    {
      id: "4",
      code: "CH-2024-004",
      title: "Update Kebijakan Mutu ISO 9001:2015",
      type: "Process",
      category: "Sistem Manajemen",
      description:
        "Update kebijakan mutu untuk mencakup komitmen terhadap sustainability dan digital transformation",
      purpose:
        "Menyesuaikan kebijakan mutu dengan strategi bisnis terkini dan tren industri",
      impact:
        "Minor - Update dokumen dan sosialisasi, tidak mengubah proses operasional",
      riskLevel: "Low",
      resources: "MR team, komunikasi internal, update dokumentasi",
      owner: "Management Representative",
      status: "Completed",
      startDate: "01 Jan 2024",
      deadline: "28 Feb 2024",
      progress: 100,
      stakeholders: ["MR", "Top Management", "All Departments"],
      relatedDocs: [
        "ST-TM-002 (Kebijakan Mutu)",
        "ST-TM-003 (Manual Mutu)",
        "SOP-DCC-001 (Document Control)",
      ],
      changeSteps: [
        {
          id: "1",
          step: "Draft new policy statement",
          pic: "MR",
          deadline: "15 Jan 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          step: "Review & approval by Top Management",
          pic: "Direktur Utama",
          deadline: "31 Jan 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "3",
          step: "Update related documents",
          pic: "DCC",
          deadline: "15 Feb 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "4",
          step: "Socialization to all staff",
          pic: "MR & HRD",
          deadline: "28 Feb 2024",
          status: "Completed",
          progress: 100,
        },
      ],
    },
    {
      id: "5",
      code: "CH-2024-005",
      title: "Implementasi Green Initiative Program",
      type: "Strategic",
      category: "Lingkungan",
      description:
        "Program pengurangan sampah plastik, penggunaan energi efisien, dan carbon footprint reduction",
      purpose:
        "Komitmen terhadap keberlanjutan lingkungan dan compliance regulasi",
      impact: "Medium - Perubahan operational practice dan mindset",
      riskLevel: "Low",
      resources: "Budget 50jt, team green initiative, training program",
      owner: "GA Manager",
      status: "Planned",
      startDate: "01 Aug 2024",
      deadline: "31 Des 2024",
      progress: 0,
      stakeholders: ["GA", "All Departments", "Masyarakat Sekitar"],
      relatedDocs: [
        "ST-TM-008 (Kebijakan Lingkungan)",
        "O-2024-004 (Sustainability Trend)",
      ],
      changeSteps: [
        {
          id: "1",
          step: "Baseline assessment current practices",
          pic: "GA Team",
          deadline: "31 Aug 2024",
          status: "Planned",
          progress: 0,
        },
        {
          id: "2",
          step: "Set targets & action plan",
          pic: "GA Manager",
          deadline: "30 Sep 2024",
          status: "Planned",
          progress: 0,
        },
        {
          id: "3",
          step: "Awareness campaign & training",
          pic: "GA & HRD",
          deadline: "31 Oct 2024",
          status: "Planned",
          progress: 0,
        },
        {
          id: "4",
          step: "Implementation & monitoring",
          pic: "All Departments",
          deadline: "31 Dec 2024",
          status: "Planned",
          progress: 0,
        },
      ],
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "In Progress":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Planned":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Cancelled":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Completed":
        return <CheckCircle className="w-4 h-4" />;
      case "In Progress":
        return <Clock className="w-4 h-4" />;
      case "Planned":
        return <Calendar className="w-4 h-4" />;
      case "Cancelled":
        return <XCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "High":
        return "bg-red-500 text-white";
      case "Medium":
        return "bg-yellow-500 text-white";
      case "Low":
        return "bg-green-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Strategic":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Organizational":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Process":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredData = changes.filter((item) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "completed" && item.status === "Completed") ||
      (filter === "progress" && item.status === "In Progress") ||
      (filter === "planned" && item.status === "Planned");
    const matchesSearch =
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalChanges = changes.length;
  const completed = changes.filter((c) => c.status === "Completed").length;
  const inProgress = changes.filter((c) => c.status === "In Progress").length;
  const planned = changes.filter((c) => c.status === "Planned").length;

  return (
    <>
      <PageMeta
        title="6.3 Perencanaan Perubahan | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 5.3 - Peran Tanggung Jawab & Wewenang"
      />
      <PageBreadcrumb pageTitle="6.3 Perencanaan Perubahan" />

      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Plus className="w-4 h-4" />
            Tambah Perubahan
          </button>
        </div>

        {/* Key Requirements */}
        {/* <div className="bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-brand-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-l-4 border-brand-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
              <GitBranch className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-3">
                Tujuan Klausul 6.3
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Memastikan bahwa perubahan pada SMM dilakukan secara terencana
                dan terkendali, dengan mempertimbangkan tujuan, konsekuensi,
                integritas sistem, ketersediaan sumber daya, dan alokasi
                tanggung jawab.
              </p>
              <div className="grid md:grid-cols-4 gap-3"></div>
            </div>
          </div>
        </div> */}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <GitBranch className="w-6 h-6 text-brand-600" />
              </div>
              <span className="text-2xl font-bold text-brand-600">
                {totalChanges}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Perubahan
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">
                {completed}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Completed
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">
                {inProgress}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              In Progress
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <Calendar className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-yellow-600">
                {planned}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Planned
            </p>
          </div>
        </div>

        {/* Search and Filter */}
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Cari perubahan..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                />
              </div>
            </div>

            {/* Filter */}
            <div className="flex gap-2">
              <button
                onClick={() => setFilter("all")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  filter === "all"
                    ? "bg-brand-500 text-white border-brand-500"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Filter className="w-4 h-4" />
                Semua
              </button>
              <button
                onClick={() => setFilter("progress")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  filter === "progress"
                    ? "bg-blue-500 text-white border-blue-500"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Clock className="w-4 h-4" />
                Progress
              </button>
              <button
                onClick={() => setFilter("planned")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  filter === "planned"
                    ? "bg-yellow-500 text-white border-yellow-500"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Calendar className="w-4 h-4" />
                Planned
              </button>
              <button
                onClick={() => setFilter("completed")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  filter === "completed"
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <CheckCircle className="w-4 h-4" />
                Completed
              </button>
            </div>
          </div>
        </div>

        {/* Changes List */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
              <GitBranch className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">
                Tidak ada data yang ditemukan
              </p>
            </div>
          ) : (
            filteredData.map((change) => (
              <div
                key={change.id}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                      <GitBranch className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="font-bold text-gray-900 dark:text-white">
                          {change.code}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                            change.type
                          )}`}
                        >
                          {change.type}
                        </span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          {change.category}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded text-xs font-bold ${getRiskLevelColor(
                            change.riskLevel
                          )}`}
                        >
                          Risk: {change.riskLevel}
                        </span>
                      </div>
                      <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                        {change.title}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium ${getStatusColor(
                        change.status
                      )}`}
                    >
                      {getStatusIcon(change.status)}
                      {change.status}
                    </span>
                    <div className="flex gap-2">
                      <button
                        onClick={() =>
                          setSelectedChange(
                            selectedChange === change.id ? null : change.id
                          )
                        }
                        className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                        title="View Detail"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content - Basic Info */}
                <div className="p-5 border-b border-gray-200 dark:border-gray-700">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                          Deskripsi Perubahan
                        </h5>
                        <p className="text-sm text-gray-900 dark:text-white leading-relaxed">
                          {change.description}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                          Tujuan Perubahan
                        </h5>
                        <p className="text-sm text-gray-900 dark:text-white leading-relaxed">
                          {change.purpose}
                        </p>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                          Dampak Perubahan
                        </h5>
                        <p className="text-sm text-gray-900 dark:text-white leading-relaxed">
                          {change.impact}
                        </p>
                      </div>

                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                          Sumber Daya Dibutuhkan
                        </h5>
                        <p className="text-sm text-gray-900 dark:text-white leading-relaxed">
                          {change.resources}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="mt-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                        Overall Progress
                      </span>
                      <span className="text-xs font-bold text-brand-600">
                        {change.progress}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                      <div
                        className={`h-3 rounded-full transition-all duration-500 ${
                          change.progress === 100
                            ? "bg-green-500"
                            : change.progress >= 75
                            ? "bg-blue-500"
                            : change.progress >= 50
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${change.progress}%` }}
                      ></div>
                    </div>
                  </div>

                  {/* Meta Info */}
                  <div className="grid md:grid-cols-4 gap-4 mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Owner
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {change.owner}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Start Date
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {change.startDate}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Deadline
                        </p>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {change.deadline}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Target className="w-4 h-4 text-gray-400" />
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">
                          Risk Level
                        </p>
                        <span
                          className={`inline-flex px-2 py-0.5 rounded text-xs font-bold ${getRiskLevelColor(
                            change.riskLevel
                          )}`}
                        >
                          {change.riskLevel}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expandable Detail Section */}
                {selectedChange === change.id && (
                  <div className="p-5 bg-gray-50 dark:bg-gray-900">
                    {/* Stakeholders */}
                    <div className="mb-5">
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-500" />
                        Stakeholder Terlibat
                      </h5>
                      <div className="flex flex-wrap gap-2">
                        {change.stakeholders.map((stakeholder, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300 rounded-full text-xs font-medium"
                          >
                            {stakeholder}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Related Documents */}
                    <div className="mb-5">
                      <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3 flex items-center gap-2">
                        <FileText className="w-4 h-4 text-brand-500" />
                        Dokumen Terkait
                      </h5>
                      <div className="space-y-2">
                        {change.relatedDocs.map((doc, idx) => (
                          <div
                            key={idx}
                            className="flex items-center gap-2 p-2 bg-white dark:bg-gray-800 rounded border border-gray-200 dark:border-gray-700"
                          >
                            <FileText className="w-4 h-4 text-gray-400" />
                            <span className="text-sm text-gray-700 dark:text-gray-300">
                              {doc}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Change Steps / Action Plan */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300 flex items-center gap-2">
                          <Zap className="w-4 h-4 text-brand-500" />
                          Tahapan Implementasi
                        </h5>
                        <button className="text-xs text-brand-500 hover:text-brand-600 font-medium">
                          + Tambah Tahapan
                        </button>
                      </div>
                      <div className="space-y-2">
                        {change.changeSteps.map((step, idx) => (
                          <div
                            key={step.id}
                            className="flex items-center justify-between p-3 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700"
                          >
                            <div className="flex items-center gap-3 flex-1">
                              <div
                                className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 ${
                                  step.status === "Completed"
                                    ? "bg-green-500 text-white"
                                    : step.status === "In Progress"
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-300 text-gray-700"
                                }`}
                              >
                                {idx + 1}
                              </div>
                              <div className="flex-1">
                                <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                                  {step.step}
                                </p>
                                <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                                  <span className="flex items-center gap-1">
                                    <Users className="w-3 h-3" />
                                    {step.pic}
                                  </span>
                                  <span className="flex items-center gap-1">
                                    <Calendar className="w-3 h-3" />
                                    {step.deadline}
                                  </span>
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-3 ml-4">
                              {/* Progress Bar */}
                              <div className="flex items-center gap-2 min-w-[120px]">
                                <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                                  <div
                                    className={`h-2 rounded-full transition-all ${
                                      step.progress === 100
                                        ? "bg-green-500"
                                        : step.progress >= 75
                                        ? "bg-blue-500"
                                        : step.progress >= 50
                                        ? "bg-yellow-500"
                                        : "bg-red-500"
                                    }`}
                                    style={{ width: `${step.progress}%` }}
                                  ></div>
                                </div>
                                <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 w-10">
                                  {step.progress}%
                                </span>
                              </div>
                              <span
                                className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                                  step.status
                                )}`}
                              >
                                {step.status}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Integration with QMS */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Integrasi dengan Proses SMM
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Risiko & Peluang (Klausul 6.1)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Setiap perubahan harus dianalisis risk-nya dan
                    diidentifikasi opportunity-nya
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Sasaran Mutu (Klausul 6.2)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perubahan harus mendukung pencapaian sasaran mutu organisasi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Kontrol Dokumen (Klausul 7.5)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dokumen terkait perubahan harus diupdate dan dikontrol
                    dengan baik
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Tinjauan Manajemen (Klausul 9.3)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Perubahan major harus dilaporkan dan direview dalam MR
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Best Practices Change Management
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Clear Communication
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Komunikasikan perubahan ke semua stakeholder terdampak
                      dengan jelas, termasuk alasan, manfaat, dan timeline
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Stakeholder Engagement
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Libatkan stakeholder kunci sejak awal dalam perencanaan
                      untuk mendapatkan buy-in dan input yang valuable
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Phased Approach
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Implementasi perubahan secara bertahap dengan pilot
                      project terlebih dahulu untuk mitigasi risiko
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Training & Support
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Sediakan training yang memadai dan support system untuk
                      membantu adaptasi karyawan
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Regular Monitoring
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Monitor progress secara regular dengan milestone yang
                      jelas dan KPI yang terukur
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Flexibility & Adaptation
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Bersikap fleksibel dan siap untuk menyesuaikan rencana
                      based on feedback dan lesson learned
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Documentation
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Dokumentasikan semua tahapan perubahan, keputusan, dan
                      lesson learned untuk referensi future
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                  <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                      Post-Implementation Review
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Lakukan review setelah implementasi untuk evaluasi
                      efektivitas dan identify improvement area
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Common Pitfalls */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Kesalahan Umum yang Harus Dihindari
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                    Kurang Komunikasi
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Tidak mengkomunikasikan perubahan dengan baik ke stakeholder
                    yang terdampak, menyebabkan resistensi dan miskomunikasi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                    Underestimate Resources
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Meremehkan kebutuhan resources (waktu, budget, SDM) yang
                    diperlukan untuk implementasi perubahan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                    Ignore Resistance
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Mengabaikan resistensi karyawan terhadap perubahan tanpa
                    mengatasi concern mereka dengan proper
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                    No Clear Ownership
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Tidak ada owner yang jelas untuk perubahan, menyebabkan
                    accountability yang lemah dan progress yang lambat
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                    Inadequate Testing
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Langsung full rollout tanpa testing atau pilot project yang
                    memadai, meningkatkan risiko kegagalan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <XCircle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                    Lack of Follow-up
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Tidak melakukan follow-up dan monitoring setelah
                    implementasi, menyebabkan perubahan tidak sustain
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Change Readiness Assessment */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Checklist Kesiapan Perubahan
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Gunakan checklist ini sebelum memulai perubahan
            </p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Strategic Alignment
                </h4>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Perubahan align dengan visi, misi, dan strategi organisasi
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Tujuan perubahan jelas dan terukur (SMART)
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Manfaat perubahan sudah diidentifikasi dan dikuantifikasi
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Top management sudah memberikan commitment dan support
                  </span>
                </label>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Resource & Capability
                </h4>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Budget tersedia dan sudah di-approve
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Team dengan kompetensi yang sesuai sudah tersedia
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Infrastruktur dan teknologi yang diperlukan ready
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Timeline realistis dengan buffer untuk unexpected issue
                  </span>
                </label>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Risk Management
                </h4>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Risk assessment sudah dilakukan dengan comprehensive
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Mitigation plan sudah disiapkan untuk setiap major risk
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Contingency plan tersedia jika perubahan tidak berjalan
                    sesuai rencana
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Rollback plan disiapkan untuk critical changes
                  </span>
                </label>
              </div>

              <div className="space-y-3">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                  Stakeholder & Communication
                </h4>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Semua stakeholder kunci sudah diidentifikasi
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Communication plan sudah dibuat dan dikomunikasikan
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Training program untuk affected user sudah disiapkan
                  </span>
                </label>
                <label className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
                  <input
                    type="checkbox"
                    className="mt-1 w-4 h-4 text-brand-600 rounded"
                  />
                  <span className="text-sm text-gray-700 dark:text-gray-300">
                    Feedback mechanism tersedia untuk mengumpulkan input
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Document References */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Referensi Dokumen
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Prosedur Change Management
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    IK-MR-003 - Prosedur Manajemen Perubahan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Form Change Request
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    FM-MR-002 - Form Permintaan Perubahan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Register Perubahan
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    LOG-MR-002 - Change Register
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Document Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Informasi Dokumen
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Nomor Dokumen
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  ISO-6.3-001
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Versi
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  v1.0
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Review Terakhir
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  01 Jan 2024
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Review Berikutnya
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  01 Jan 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
