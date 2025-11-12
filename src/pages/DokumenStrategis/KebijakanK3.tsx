import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import {
  Shield,
  AlertTriangle,
  Download,
  Upload,
  CheckCircle,
  Activity,
} from "lucide-react";

interface SafetyTarget {
  id: string;
  target: string;
  indicator: string;
  current: string;
  status: string;
}

export default function KebijakanK3() {
  const [safetyTargets] = useState<SafetyTarget[]>([
    {
      id: "1",
      target: "Zero Accident",
      indicator: "Jumlah kecelakaan kerja",
      current: "0 kasus/tahun",
      status: "Achieved",
    },
    {
      id: "2",
      target: "100% APD Usage",
      indicator: "Kepatuhan penggunaan APD",
      current: "98%",
      status: "On Track",
    },
    {
      id: "3",
      target: "Safety Training",
      indicator: "Karyawan terlatih K3",
      current: "95%",
      status: "On Track",
    },
    {
      id: "4",
      target: "Safety Inspection",
      indicator: "Inspeksi rutin per bulan",
      current: "12x/tahun",
      status: "Achieved",
    },
  ]);

  const getStatusColor = (status: string) => {
    return status === "Achieved"
      ? "bg-green-100 text-green-800"
      : "bg-blue-100 text-blue-800";
  };

  return (
    <>
      <PageMeta
        title="Kebijakan K3 | DCMS Pelita Hati"
        description="Kebijakan Keselamatan dan Kesehatan Kerja Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Kebijakan K3" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Shield className="w-8 h-8 text-brand-500" />
              Kebijakan K3
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Kebijakan Keselamatan dan Kesehatan Kerja (K3)
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
              <Upload className="w-4 h-4" />
              Upload Revisi
            </button>
          </div>
        </div>

        {/* Policy Statement */}
        <ComponentCard title="Pernyataan Kebijakan K3">
          <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-4 flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              KOMITMEN MANAJEMEN
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">
              "Kami berkomitmen untuk menciptakan lingkungan kerja yang aman,
              sehat, dan nyaman bagi seluruh karyawan dengan menerapkan sistem
              manajemen K3 yang efektif dan berkelanjutan."
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Manajemen PT Pelita Hati Group berkomitmen untuk
                mengidentifikasi, mencegah, dan mengendalikan potensi bahaya di
                tempat kerja serta memastikan seluruh karyawan bekerja dalam
                kondisi yang aman dan mematuhi peraturan K3 yang berlaku.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Pencegahan Kecelakaan
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mengidentifikasi dan mengendalikan risiko kecelakaan kerja
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Alat Pelindung Diri
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menyediakan dan memastikan penggunaan APD yang sesuai
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Pelatihan K3
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Memberikan pelatihan dan sosialisasi K3 secara berkala
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Tanggap Darurat
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menyiapkan prosedur dan tim tanggap darurat
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center flex-shrink-0">
                  <AlertTriangle className="w-5 h-5 text-red-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Investigasi Insiden
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menyelidiki dan mencegah terulangnya insiden K3
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Audit & Inspeksi
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Melakukan audit dan inspeksi K3 secara rutin
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Safety Targets */}
        <ComponentCard title="Target dan Pencapaian K3">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Target K3
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Indikator
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Pencapaian
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {safetyTargets.map((target) => (
                  <tr
                    key={target.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {target.target}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {target.indicator}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {target.current}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          target.status
                        )}`}
                      >
                        {target.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Nomor Dokumen
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                ST-TM-007
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Versi
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                v3.0
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Tanggal Terbit
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                01 Feb 2024
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Disetujui Oleh
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Direktur Utama
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
