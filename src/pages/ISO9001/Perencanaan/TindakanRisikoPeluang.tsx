import { useState } from "react";
import {
  AlertTriangle,
  TrendingUp,
  Shield,
  // Target,
  Download,
  Eye,
  Edit,
  Plus,
  CheckCircle,
  Clock,
  Filter,
  Search,
} from "lucide-react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

interface RiskOpportunity {
  id: string;
  code: string;
  type: "risk" | "opportunity";
  category: string;
  source: string;
  description: string;
  impact: string;
  likelihood: string;
  riskLevel: string;
  mitigation: string;
  owner: string;
  status: string;
  dueDate: string;
  reviewDate: string;
}

export default function TindakanRisikoPeluang() {
  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const [risksOpportunities] = useState<RiskOpportunity[]>([
    {
      id: "1",
      code: "R-2024-001",
      type: "risk",
      category: "Operasional",
      source: "Konteks Eksternal - Kompetisi",
      description: "Kompetitor besar masuk ke market dengan harga lebih rendah",
      impact: "High",
      likelihood: "Medium",
      riskLevel: "High",
      mitigation:
        "Diversifikasi produk, fokus pada service excellence, loyalty program",
      owner: "Sales Manager",
      status: "In Progress",
      dueDate: "31 Des 2024",
      reviewDate: "Quarterly",
    },
    {
      id: "2",
      code: "R-2024-002",
      type: "risk",
      category: "Finansial",
      source: "Konteks Eksternal - Ekonomi",
      description: "Inflasi tinggi meningkatkan biaya operasional",
      impact: "High",
      likelihood: "High",
      riskLevel: "Critical",
      mitigation:
        "Negosiasi ulang kontrak supplier, efisiensi operasional, pass-on cost ke customer",
      owner: "Finance Manager",
      status: "In Progress",
      dueDate: "Ongoing",
      reviewDate: "Monthly",
    },
    {
      id: "3",
      code: "R-2024-003",
      type: "risk",
      category: "SDM",
      source: "Konteks Internal - Turnover",
      description: "Turnover karyawan tinggi mengganggu operasional",
      impact: "Medium",
      likelihood: "Medium",
      riskLevel: "Medium",
      mitigation:
        "Improve benefit package, career development program, work-life balance",
      owner: "HRD Manager",
      status: "In Progress",
      dueDate: "30 Jun 2024",
      reviewDate: "Quarterly",
    },
    {
      id: "4",
      code: "O-2024-001",
      type: "opportunity",
      category: "Pasar",
      source: "Konteks Eksternal - Ekspansi",
      description:
        "Peluang ekspansi ke kota tier 2 yang belum tersentuh kompetitor",
      impact: "High",
      likelihood: "High",
      riskLevel: "High",
      mitigation:
        "Market research, pilot project, partnership dengan distributor lokal",
      owner: "Sales Manager",
      status: "Planned",
      dueDate: "31 Mar 2025",
      reviewDate: "Quarterly",
    },
    {
      id: "5",
      code: "O-2024-002",
      type: "opportunity",
      category: "Teknologi",
      source: "Konteks Eksternal - Digital",
      description:
        "Kerjasama dengan platform e-commerce B2B untuk jangkauan lebih luas",
      impact: "High",
      likelihood: "Medium",
      riskLevel: "Medium",
      mitigation: "Pilot dengan 1-2 platform, training team, integrate sistem",
      owner: "IT & Sales Manager",
      status: "In Progress",
      dueDate: "30 Sep 2024",
      reviewDate: "Monthly",
    },
    {
      id: "6",
      code: "R-2024-004",
      type: "risk",
      category: "Supply Chain",
      source: "Konteks Eksternal - Supplier",
      description: "Ketergantungan pada supplier tunggal untuk produk tertentu",
      impact: "High",
      likelihood: "Low",
      riskLevel: "Medium",
      mitigation:
        "Cari alternative supplier, maintain safety stock, diversifikasi portfolio",
      owner: "Procurement Manager",
      status: "Completed",
      dueDate: "15 Feb 2024",
      reviewDate: "Quarterly",
    },
    {
      id: "7",
      code: "O-2024-003",
      type: "opportunity",
      category: "Produk",
      source: "Kebutuhan Stakeholder - Pelanggan",
      description: "Demand untuk produk organik/healthy meningkat",
      impact: "Medium",
      likelihood: "High",
      riskLevel: "Medium",
      mitigation:
        "Add product line, partnership dengan brand organik, marketing campaign",
      owner: "Sales & Marketing",
      status: "Planned",
      dueDate: "31 Des 2024",
      reviewDate: "Quarterly",
    },
    {
      id: "8",
      code: "R-2024-005",
      type: "risk",
      category: "Compliance",
      source: "Konteks Eksternal - Regulasi",
      description: "Perubahan regulasi perpajakan e-Faktur dan dokumentasi",
      impact: "Medium",
      likelihood: "Medium",
      riskLevel: "Medium",
      mitigation:
        "Update sistem, training staff, konsultasi dengan konsultan pajak",
      owner: "Finance Manager",
      status: "Completed",
      dueDate: "31 Jan 2024",
      reviewDate: "Annually",
    },
  ]);

  const getTypeColor = (type: string) => {
    return type === "risk"
      ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
      : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
  };

  const getTypeIcon = (type: string) => {
    return type === "risk" ? (
      <AlertTriangle className="w-4 h-4" />
    ) : (
      <TrendingUp className="w-4 h-4" />
    );
  };

  const getRiskLevelColor = (level: string) => {
    switch (level) {
      case "Critical":
        return "bg-red-600 text-white";
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

  const filteredData = risksOpportunities.filter((item) => {
    const matchesFilter =
      filter === "all" ||
      (filter === "risk" && item.type === "risk") ||
      (filter === "opportunity" && item.type === "opportunity");
    const matchesSearch =
      item.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const totalRisks = risksOpportunities.filter((r) => r.type === "risk").length;
  const totalOpportunities = risksOpportunities.filter(
    (r) => r.type === "opportunity"
  ).length;
  const criticalRisks = risksOpportunities.filter(
    (r) => r.type === "risk" && r.riskLevel === "Critical"
  ).length;
  const inProgress = risksOpportunities.filter(
    (r) => r.status === "In Progress"
  ).length;

  return (
    <>
      <PageMeta
        title="6.1 Tindakan Risiko & Peluang | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 6.1 - Tindakan Risiko & Peluang"
      />
      <PageBreadcrumb pageTitle="6.1 Tindakan Risiko & Peluang" />
      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Plus className="w-4 h-4" />
            Tambah Risiko/Peluang
          </button>
        </div>

        {/* Key Requirements */}
        {/* <div className="bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-brand-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-l-4 border-brand-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-3">
                Tujuan Klausul 6.1
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Mengidentifikasi risiko dan peluang yang perlu ditangani untuk
                memastikan SMM dapat mencapai hasil yang diinginkan,
                meningkatkan dampak positif, mencegah dampak negatif, dan
                mencapai peningkatan berkelanjutan.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Identifikasi
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Mengidentifikasi risiko & peluang berdasarkan konteks
                    organisasi
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Mitigasi
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Merencanakan tindakan untuk menangani risiko & peluang
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <Target className="w-5 h-5 text-purple-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Evaluasi
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Mengevaluasi efektivitas tindakan yang telah diambil
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <AlertTriangle className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-2xl font-bold text-red-600">
                {totalRisks}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Risiko
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">
                {totalOpportunities}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Peluang
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-red-600" />
              </div>
              <span className="text-2xl font-bold text-red-600">
                {criticalRisks}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Critical Risk
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
                  placeholder="Cari risiko atau peluang..."
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
                onClick={() => setFilter("risk")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  filter === "risk"
                    ? "bg-red-500 text-white border-red-500"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <AlertTriangle className="w-4 h-4" />
                Risiko
              </button>
              <button
                onClick={() => setFilter("opportunity")}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
                  filter === "opportunity"
                    ? "bg-green-500 text-white border-green-500"
                    : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <TrendingUp className="w-4 h-4" />
                Peluang
              </button>
            </div>
          </div>
        </div>

        {/* Risk & Opportunity List */}
        <div className="space-y-4">
          {filteredData.length === 0 ? (
            <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-12 text-center">
              <AlertTriangle className="w-12 h-12 mx-auto mb-3 text-gray-400" />
              <p className="text-gray-500 dark:text-gray-400">
                Tidak ada data yang ditemukan
              </p>
            </div>
          ) : (
            filteredData.map((item) => (
              <div
                key={item.id}
                className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Header */}
                <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${
                        item.type === "risk"
                          ? "bg-red-100 dark:bg-red-900/30"
                          : "bg-green-100 dark:bg-green-900/30"
                      } flex items-center justify-center`}
                    >
                      {getTypeIcon(item.type)}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-gray-900 dark:text-white">
                          {item.code}
                        </span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${getTypeColor(
                            item.type
                          )}`}
                        >
                          {item.type === "risk" ? "RISIKO" : "PELUANG"}
                        </span>
                        <span className="px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
                          {item.category}
                        </span>
                      </div>
                      <p className="text-xs text-gray-600 dark:text-gray-400 mt-1">
                        Sumber: {item.source}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1 rounded-md text-xs font-bold ${getRiskLevelColor(
                        item.riskLevel
                      )}`}
                    >
                      {item.riskLevel}
                    </span>
                    <div className="flex gap-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded transition-colors">
                        <Edit className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="grid md:grid-cols-2 gap-4">
                    {/* Left Column */}
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                          Deskripsi
                        </h5>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {item.description}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Impact
                          </h5>
                          <span
                            className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                              item.impact === "High"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                : item.impact === "Medium"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            }`}
                          >
                            {item.impact}
                          </span>
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Likelihood
                          </h5>
                          <span
                            className={`inline-flex px-2 py-1 rounded text-xs font-medium ${
                              item.likelihood === "High"
                                ? "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                                : item.likelihood === "Medium"
                                ? "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"
                                : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                            }`}
                          >
                            {item.likelihood}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Right Column */}
                    <div className="space-y-3">
                      <div>
                        <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                          Tindakan Mitigasi / Realisasi
                        </h5>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {item.mitigation}
                        </p>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Owner
                          </h5>
                          <p className="text-sm text-gray-900 dark:text-white">
                            {item.owner}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Status
                          </h5>
                          <span
                            className={`inline-flex px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                              item.status
                            )}`}
                          >
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Due Date
                          </h5>
                          <p className="text-sm text-gray-900 dark:text-white">
                            {item.dueDate}
                          </p>
                        </div>
                        <div>
                          <h5 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase mb-1">
                            Review
                          </h5>
                          <p className="text-sm text-gray-900 dark:text-white">
                            {item.reviewDate}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Risk Matrix */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Risk Assessment Matrix
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Impact vs Likelihood
            </p>
          </div>
          <div className="p-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Impact â†' <br />
                      Likelihood â†"
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Low (1)
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Medium (2)
                    </th>
                    <th className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      High (3)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      High (3)
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-yellow-100 dark:bg-yellow-900/30 text-center">
                      <span className="text-sm font-bold text-yellow-800 dark:text-yellow-300">
                        MEDIUM (3)
                      </span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-orange-100 dark:bg-orange-900/30 text-center">
                      <span className="text-sm font-bold text-orange-800 dark:text-orange-300">
                        HIGH (6)
                      </span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-red-100 dark:bg-red-900/30 text-center">
                      <span className="text-sm font-bold text-red-800 dark:text-red-300">
                        CRITICAL (9)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Medium (2)
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-green-100 dark:bg-green-900/30 text-center">
                      <span className="text-sm font-bold text-green-800 dark:text-green-300">
                        LOW (2)
                      </span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-yellow-100 dark:bg-yellow-900/30 text-center">
                      <span className="text-sm font-bold text-yellow-800 dark:text-yellow-300">
                        MEDIUM (4)
                      </span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-orange-100 dark:bg-orange-900/30 text-center">
                      <span className="text-sm font-bold text-orange-800 dark:text-orange-300">
                        HIGH (6)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 dark:border-gray-600 p-3 bg-gray-50 dark:bg-gray-900 text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Low (1)
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-green-100 dark:bg-green-900/30 text-center">
                      <span className="text-sm font-bold text-green-800 dark:text-green-300">
                        LOW (1)
                      </span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-green-100 dark:bg-green-900/30 text-center">
                      <span className="text-sm font-bold text-green-800 dark:text-green-300">
                        LOW (2)
                      </span>
                    </td>
                    <td className="border border-gray-300 dark:border-gray-600 p-4 bg-yellow-100 dark:bg-yellow-900/30 text-center">
                      <span className="text-sm font-bold text-yellow-800 dark:text-yellow-300">
                        MEDIUM (3)
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Legend */}
            <div className="mt-4 flex flex-wrap gap-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-500 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Low (1-2): Monitor
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Medium (3-4): Control
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-orange-500 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  High (6): Mitigate
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-500 rounded"></div>
                <span className="text-gray-600 dark:text-gray-400">
                  Critical (9): Immediate Action
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Process Flow */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Proses Manajemen Risiko & Peluang
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-3">
              <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Identifikasi
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Identifikasi risiko & peluang berdasarkan analisis konteks
                    organisasi (Klausul 4.1) dan kebutuhan stakeholder (Klausul
                    4.2)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Analisis & Evaluasi
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Analisis dampak (impact) dan kemungkinan (likelihood) untuk
                    menentukan level risiko/peluang menggunakan risk matrix
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Perencanaan Tindakan
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Merencanakan tindakan mitigasi untuk risiko dan tindakan
                    realisasi untuk peluang, termasuk PIC, timeline, dan
                    resources
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Implementasi
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Melaksanakan tindakan yang telah direncanakan dan
                    mengintegrasikan ke dalam proses SMM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Monitoring & Review
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Monitoring efektivitas tindakan dan review berkala untuk
                    memastikan risiko terkendali dan peluang terealisasi
                  </p>
                </div>
              </div>
            </div>
          </div>
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
                    Sasaran Mutu (Klausul 6.2)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Risiko & peluang dipertimbangkan dalam penetapan sasaran
                    mutu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Perencanaan Perubahan (Klausul 6.3)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Risiko diidentifikasi saat merencanakan perubahan SMM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Evaluasi Kinerja (Klausul 9)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Efektivitas tindakan risiko dievaluasi dalam audit &
                    management review
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Peningkatan (Klausul 10)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Risiko baru diidentifikasi dari NCR dan opportunity untuk
                    improvement
                  </p>
                </div>
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
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Analisis Konteks Organisasi
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    ISO 4.1 - SWOT & External/Internal Issues
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Analisis Stakeholder
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    ISO 4.2 - Kebutuhan pihak berkepentingan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Register Risiko & Peluang
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Dokumen FM-MR-001 - Risk Register
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
                  ISO-6.1-001
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Versi
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  v2.0
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
                  01 Jul 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
