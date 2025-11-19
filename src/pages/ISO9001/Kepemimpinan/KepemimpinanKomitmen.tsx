import { useState } from "react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  Crown,
  CheckCircle,
  Target,
  TrendingUp,
  Users,
  Download,
  Eye,
  Plus,
} from "lucide-react";

interface CommitmentAction {
  id: string;
  category: string;
  action: string;
  responsibility: string;
  evidence: string;
  status: string;
  completionDate: string;
}

export default function KepemimpinanKomitmen() {
  const [commitmentActions] = useState<CommitmentAction[]>([
    {
      id: "1",
      category: "Akuntabilitas SMM",
      action: "Menetapkan kebijakan mutu dan sasaran mutu perusahaan",
      responsibility: "Direktur Utama",
      evidence: "Dokumen Kebijakan Mutu, Minutes of Meeting",
      status: "Completed",
      completionDate: "15 Jan 2024",
    },
    {
      id: "2",
      category: "Integrasi SMM",
      action: "Memastikan SMM terintegrasi dalam proses bisnis",
      responsibility: "Management Representative",
      evidence: "Process Integration Map, SOP",
      status: "Completed",
      completionDate: "20 Jan 2024",
    },
    {
      id: "3",
      category: "Sumber Daya",
      action: "Menyediakan sumber daya yang dibutuhkan untuk SMM",
      responsibility: "Top Management",
      evidence: "Budget Allocation, Resource Plan",
      status: "Ongoing",
      completionDate: "Ongoing",
    },
    {
      id: "4",
      category: "Komunikasi",
      action: "Mengkomunikasikan pentingnya SMM kepada seluruh karyawan",
      responsibility: "HRD & MR",
      evidence: "Town Hall Meeting, Internal Memo",
      status: "Ongoing",
      completionDate: "Quarterly",
    },
    {
      id: "5",
      category: "Peningkatan",
      action: "Mendorong budaya continuous improvement",
      responsibility: "Top Management",
      evidence: "Improvement Program, Suggestion Box",
      status: "Ongoing",
      completionDate: "Ongoing",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Ongoing":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Pending":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <PageMeta
        title="5.1 Kepemimpinan & Komitmen | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 5.1 - Kepemimpinan dan Komitmen Top Management"
      />
      <PageBreadcrumb pageTitle="5.1 Kepemimpinan & Komitmen" />

      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
              <Plus className="w-4 h-4" />
              Tambah Komitmen
            </button>
          </div>
        </div>

        {/* Leadership Statement */}
        {/* <div className="bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-brand-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-l-4 border-brand-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-3">
                Komitmen Top Management
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                "Kami, Top Management PT Pelita Hati Group, berkomitmen penuh
                untuk menerapkan dan memelihara Sistem Manajemen Mutu sesuai ISO
                9001:2015. Kami akan memastikan bahwa SMM menjadi bagian
                integral dari operasional perusahaan dan terus ditingkatkan
                untuk mencapai kepuasan pelanggan dan keunggulan bisnis."
              </p>
              <div className="flex items-center gap-3 text-sm text-gray-600 dark:text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Ditetapkan: 01 Jan 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Users className="w-4 h-4 text-blue-600" />
                  <span>Ditandatangani: Direktur Utama</span>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Key Commitments Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">
                {
                  commitmentActions.filter((a) => a.status === "Completed")
                    .length
                }
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Completed Actions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">
                {commitmentActions.filter((a) => a.status === "Ongoing").length}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Ongoing Actions
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <span className="text-2xl font-bold text-brand-600">
                {commitmentActions.length}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Commitments
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Crown className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-purple-600">100%</span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Commitment Level
            </p>
          </div>
        </div>

        {/* Commitment Categories */}
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentCard title="5.1.1 - Umum (General)">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Akuntabilitas Efektivitas SMM
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Management bertanggung jawab penuh atas keberhasilan SMM
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Kebijakan & Sasaran Mutu
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Menetapkan dan mereview kebijakan serta sasaran mutu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Integrasi dengan Proses Bisnis
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    SMM terintegrasi dalam semua proses organisasi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Promosi Process Approach
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Mendorong penggunaan pendekatan proses di seluruh organisasi
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Sumber Daya Memadai
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Menyediakan resource yang dibutuhkan untuk SMM
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="5.1.2 - Fokus Pelanggan (Customer Focus)">
            <div className="space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Persyaratan Pelanggan Dipenuhi
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Memastikan semua persyaratan pelanggan terpenuhi konsisten
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Identifikasi Risiko & Peluang
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Mengidentifikasi dan menangani risiko pada kepuasan
                    pelanggan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Peningkatan Kepuasan Pelanggan
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Program berkelanjutan untuk meningkatkan customer
                    satisfaction
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Customer Feedback Management
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Sistem untuk menangkap dan merespons feedback pelanggan
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <CheckCircle className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-900 dark:text-white text-sm mb-1">
                    Compliance Regulasi
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Memastikan compliance dengan statutory & regulatory
                    requirements
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>
        </div>

        {/* Action Plan Table */}
        <ComponentCard title="Rencana Aksi Komitmen">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Aksi Komitmen
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Penanggung Jawab
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Bukti
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {commitmentActions.map((action) => (
                  <tr
                    key={action.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                        {action.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {action.action}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {action.responsibility}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                        {action.evidence}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          action.status
                        )}`}
                      >
                        {action.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <button
                        className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                        title="View Detail"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Nomor Dokumen
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ISO-5.1-001
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
                01 Jul 2024
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
