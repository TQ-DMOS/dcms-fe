import { useState } from "react";
import {
  Building2,
  TrendingUp,
  AlertTriangle,
  Target,
  Download,
  Eye,
  Edit,
  Plus,
} from "lucide-react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";

interface ExternalIssue {
  id: string;
  category: string;
  issue: string;
  impact: string;
  status: string;
}

interface InternalIssue {
  id: string;
  category: string;
  issue: string;
  impact: string;
  status: string;
}

interface SWOTItem {
  id: string;
  type: "strength" | "weakness" | "opportunity" | "threat";
  description: string;
  priority: string;
}

export default function MemahamiOrganisasi() {
  const [externalIssues] = useState<ExternalIssue[]>([
    {
      id: "1",
      category: "Ekonomi",
      issue: "Inflasi tinggi mempengaruhi daya beli",
      impact: "Penurunan volume penjualan 10-15%",
      status: "Active",
    },
    {
      id: "2",
      category: "Teknologi",
      issue: "Digitalisasi proses bisnis B2B",
      impact: "Perlu investasi sistem ERP terintegrasi",
      status: "Active",
    },
    {
      id: "3",
      category: "Regulasi",
      issue: "Perubahan aturan perpajakan e-Faktur 3.0",
      impact: "Update sistem dan training staff",
      status: "Resolved",
    },
    {
      id: "4",
      category: "Kompetisi",
      issue: "Kompetitor besar masuk pasar lokal",
      impact: "Tekanan margin dan harga jual",
      status: "Active",
    },
  ]);

  const [internalIssues] = useState<InternalIssue[]>([
    {
      id: "1",
      category: "SDM",
      issue: "Turnover karyawan tinggi (>10%)",
      impact: "Biaya rekrutmen dan training meningkat",
      status: "Active",
    },
    {
      id: "2",
      category: "Infrastruktur",
      issue: "Kapasitas gudang mendekati limit",
      impact: "Perlu ekspansi atau warehouse baru",
      status: "In Progress",
    },
    {
      id: "3",
      category: "Proses",
      issue: "Lead time pengiriman masih 3-4 hari",
      impact: "Komplain customer tentang kecepatan",
      status: "Active",
    },
    {
      id: "4",
      category: "Teknologi",
      issue: "Sistem inventory belum real-time",
      impact: "Stock opname manual, risiko error",
      status: "In Progress",
    },
  ]);

  const [swotItems] = useState<SWOTItem[]>([
    {
      id: "1",
      type: "strength",
      description: "Jaringan distribusi yang luas di Jawa Tengah",
      priority: "High",
    },
    {
      id: "2",
      type: "strength",
      description: "Hubungan baik dengan principal brand ternama",
      priority: "High",
    },
    {
      id: "3",
      type: "weakness",
      description: "Ketergantungan pada supplier tertentu",
      priority: "Medium",
    },
    {
      id: "4",
      type: "weakness",
      description: "Sistem IT masih perlu modernisasi",
      priority: "High",
    },
    {
      id: "5",
      type: "opportunity",
      description: "Ekspansi ke kota tier 2 dan 3",
      priority: "High",
    },
    {
      id: "6",
      type: "opportunity",
      description: "Kerjasama dengan platform e-commerce B2B",
      priority: "Medium",
    },
    {
      id: "7",
      type: "threat",
      description: "Kompetitor dengan modal besar",
      priority: "High",
    },
    {
      id: "8",
      type: "threat",
      description: "Fluktuasi harga BBM dan logistik",
      priority: "Medium",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Resolved":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // const getSWOTColor = (type: string) => {
  //   switch (type) {
  //     case "strength":
  //       return "bg-green-50 dark:bg-green-900/20 border-green-500";
  //     case "weakness":
  //       return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500";
  //     case "opportunity":
  //       return "bg-blue-50 dark:bg-blue-900/20 border-blue-500";
  //     case "threat":
  //       return "bg-red-50 dark:bg-red-900/20 border-red-500";
  //     default:
  //       return "bg-gray-50 dark:bg-gray-800 border-gray-500";
  //   }
  // };

  // const getSWOTIcon = (type: string) => {
  //   switch (type) {
  //     case "strength":
  //       return <TrendingUp className="w-5 h-5 text-green-600" />;
  //     case "weakness":
  //       return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
  //     case "opportunity":
  //       return <Target className="w-5 h-5 text-blue-600" />;
  //     case "threat":
  //       return <AlertTriangle className="w-5 h-5 text-red-600" />;
  //     default:
  //       return null;
  //   }
  // };

  // const getSWOTTitle = (type: string) => {
  //   switch (type) {
  //     case "strength":
  //       return "Kekuatan (Strengths)";
  //     case "weakness":
  //       return "Kelemahan (Weaknesses)";
  //     case "opportunity":
  //       return "Peluang (Opportunities)";
  //     case "threat":
  //       return "Ancaman (Threats)";
  //     default:
  //       return "";
  //   }
  // };

  return (
    <>
      <PageMeta
        title="4.1 Memahami Organisasi & Konteksnya | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 4.1 - Memahami Organisasi dan Konteksnya"
      />
      <PageBreadcrumb pageTitle="4.1 Memahami Organisasi & Konteksnya" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Export
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
              <Plus className="w-4 h-4" />
              Tambah Isu
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Isu Eksternal
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {externalIssues.length}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Isu Internal
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {internalIssues.length}
                </p>
              </div>
              <Building2 className="w-8 h-8 text-green-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Analisis SWOT
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {swotItems.length}
                </p>
              </div>
              <Target className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Isu Aktif
                </p>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  {
                    [...externalIssues, ...internalIssues].filter(
                      (i) => i.status === "Active"
                    ).length
                  }
                </p>
              </div>
              <AlertTriangle className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* External Issues */}
        <ComponentCard title="Isu Eksternal (External Issues)">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Isu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Dampak
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {externalIssues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {issue.category}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {issue.issue}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {issue.impact}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          issue.status
                        )}`}
                      >
                        {issue.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Internal Issues */}
        <ComponentCard title="Isu Internal (Internal Issues)">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Isu
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Dampak
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {internalIssues.map((issue) => (
                  <tr
                    key={issue.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {issue.category}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {issue.issue}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {issue.impact}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          issue.status
                        )}`}
                      >
                        {issue.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* SWOT Analysis */}
        {/* <ComponentCard title="Analisis SWOT">
          <div className="grid md:grid-cols-2 gap-4">
            {["strength", "weakness", "opportunity", "threat"].map((type) => {
              const items = swotItems.filter((item) => item.type === type);
              return (
                <div
                  key={type}
                  className={`p-4 rounded-lg border-l-4 ${getSWOTColor(type)}`}
                >
                  <div className="flex items-center gap-2 mb-3">
                    {getSWOTIcon(type)}
                    <h4 className="font-bold text-gray-900 dark:text-white">
                      {getSWOTTitle(type)}
                    </h4>
                  </div>
                  <ul className="space-y-2">
                    {items.map((item) => (
                      <li
                        key={item.id}
                        className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                      >
                        <span className="text-brand-500 mt-1">•</span>
                        <div className="flex-1">
                          <span>{item.description}</span>
                          <span
                            className={`ml-2 px-2 py-0.5 text-xs rounded ${
                              item.priority === "High"
                                ? "bg-red-100 text-red-800"
                                : "bg-yellow-100 text-yellow-800"
                            }`}
                          >
                            {item.priority}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </ComponentCard> */}

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Nomor Dokumen
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                ISO-4.1-001
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Versi
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                v1.0
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Review Terakhir
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                15 Jan 2024
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Review Berikutnya
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                15 Jul 2024
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
