import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  Users,
  Download,
  Eye,
  Upload,
  TrendingUp,
  Calendar,
  CheckCircle,
} from "lucide-react";

interface ManagementReview {
  id: string;
  reviewNo: string;
  date: string;
  chairman: string;
  participants: number;
  topics: number;
  decisions: number;
  status: string;
}

export default function TinjauanManajemen() {
  const [reviews] = useState<ManagementReview[]>([
    {
      id: "1",
      reviewNo: "MR-2024-Q1",
      date: "15 Mar 2024",
      chairman: "Direktur Utama",
      participants: 12,
      topics: 8,
      decisions: 5,
      status: "Completed",
    },
    {
      id: "2",
      reviewNo: "MR-2023-Q4",
      date: "15 Dec 2023",
      chairman: "Direktur Utama",
      participants: 10,
      topics: 7,
      decisions: 4,
      status: "Completed",
    },
  ]);

  return (
    <>
      <PageMeta
        title="Prosedur Tinjauan Manajemen | DCMS Pelita Hati"
        description="Prosedur Tinjauan Manajemen ISO 9001:2015"
      />
      <PageBreadcrumb pageTitle="Prosedur Tinjauan Manajemen" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Prosedur Tinjauan Manajemen
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              ISO 9001:2015 Klausul 9.3 - Management Review
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
            <Upload className="w-4 h-4" />
            Upload MoM
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8 text-brand-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                4
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              MR per Tahun
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-600">12</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Participants
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-600">8</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Topics Reviewed
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-purple-600">5</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Decisions Made
            </p>
          </div>
        </div>

        {/* MR Table */}
        <ComponentCard title="Riwayat Tinjauan Manajemen">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    No. MR
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tanggal
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Ketua
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    Peserta
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    Topik
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    Keputusan
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
                {reviews.map((review) => (
                  <tr
                    key={review.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {review.reviewNo}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {review.date}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {review.chairman}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                      {review.participants}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                      {review.topics}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                      {review.decisions}
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        {review.status}
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
                          className="p-1.5 text-green-600 hover:bg-green-50 rounded"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* MR Input Topics */}
        {/* <ComponentCard title="Input Tinjauan Manajemen (Klausul 9.3.2)">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                title: "Status Tindakan dari MR Sebelumnya",
                desc: "Review tindak lanjut keputusan MR sebelumnya",
                icon: "📋",
              },
              {
                title: "Perubahan Isu Eksternal & Internal",
                desc: "Update konteks organisasi dan SWOT",
                icon: "🔄",
              },
              {
                title: "Informasi Kinerja & Efektivitas SMM",
                desc: "Review KPI, sasaran mutu, dan metrik kinerja",
                icon: "📊",
              },
              {
                title: "Kecukupan Sumber Daya",
                desc: "Evaluasi SDM, infrastruktur, dan budget",
                icon: "💰",
              },
              {
                title: "Efektivitas Tindakan untuk Risiko & Peluang",
                desc: "Review risk mitigation dan opportunity realization",
                icon: "⚠️",
              },
              {
                title: "Peluang Perbaikan",
                desc: "Identifikasi area untuk continuous improvement",
                icon: "🎯",
              },
              {
                title: "Kepuasan Pelanggan",
                desc: "Review komplain, survey, dan feedback pelanggan",
                icon: "😊",
              },
              {
                title: "Hasil Audit Internal & Eksternal",
                desc: "Review temuan audit dan status tindakan korektif",
                icon: "🔍",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-3">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      {item.title}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ComponentCard> */}

        {/* MR Output */}
        {/* <ComponentCard title="Output Tinjauan Manajemen (Klausul 9.3.3)">
          <div className="space-y-4">
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                Keputusan terkait Peluang Perbaikan
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Identifikasi area improvement dan alokasi resources untuk
                implementasi
              </p>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Keputusan terkait Perubahan SMM
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Update prosedur, dokumentasi, atau struktur sistem manajemen
                mutu
              </p>
            </div>

            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Keputusan terkait Kebutuhan Sumber Daya
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Penambahan/pengurangan SDM, investasi infrastruktur, atau
                alokasi budget
              </p>
            </div>
          </div>
        </ComponentCard> */}

        {/* Schedule */}
        <ComponentCard title="Jadwal Tinjauan Manajemen 2024">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Quarter 1
                </h4>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                  Completed
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                15 Maret 2024
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Quarter 2
                </h4>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  Scheduled
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                15 Juni 2024
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Quarter 3
                </h4>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  Scheduled
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                15 September 2024
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Quarter 4
                </h4>
                <span className="px-2 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
                  Scheduled
                </span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                15 Desember 2024
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
