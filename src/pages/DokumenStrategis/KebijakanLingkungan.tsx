import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import {
  Leaf,
  Droplet,
  Trash2,
  Download,
  Upload,
  CheckCircle,
  Recycle,
} from "lucide-react";

interface EnvironmentTarget {
  id: string;
  aspect: string;
  target: string;
  indicator: string;
  current: string;
  status: string;
}

export default function KebijakanLingkungan() {
  const [envTargets] = useState<EnvironmentTarget[]>([
    {
      id: "1",
      aspect: "Pengurangan Sampah",
      target: "20% dari baseline",
      indicator: "Total sampah/bulan",
      current: "15% reduction",
      status: "On Track",
    },
    {
      id: "2",
      aspect: "Efisiensi Energi",
      target: "10% penghematan listrik",
      indicator: "kWh/bulan",
      current: "8% reduction",
      status: "On Track",
    },
    {
      id: "3",
      aspect: "Penggunaan Air",
      target: "15% efisiensi air",
      indicator: "m³/bulan",
      current: "12% reduction",
      status: "On Track",
    },
    {
      id: "4",
      aspect: "Program Daur Ulang",
      target: "50% sampah didaur ulang",
      indicator: "% recycling",
      current: "45%",
      status: "Need Attention",
    },
  ]);

  const getStatusColor = (status: string) => {
    return status === "On Track"
      ? "bg-green-100 text-green-800"
      : "bg-yellow-100 text-yellow-800";
  };

  return (
    <>
      <PageMeta
        title="Kebijakan Lingkungan | DCMS Pelita Hati"
        description="Kebijakan Lingkungan Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Kebijakan Lingkungan" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              <Leaf className="w-8 h-8 text-green-600" />
              Kebijakan Lingkungan
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Komitmen pengelolaan lingkungan dan keberlanjutan
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Download PDF
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
              <Upload className="w-4 h-4" />
              Upload Revisi
            </button>
          </div>
        </div>

        {/* Policy Statement */}
        <ComponentCard title="Pernyataan Kebijakan Lingkungan">
          <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-6 rounded-lg mb-6">
            <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-4 flex items-center gap-2">
              <Leaf className="w-6 h-6" />
              KOMITMEN PEDULI LINGKUNGAN
            </h3>
            <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-4">
              "Kami berkomitmen untuk melindungi lingkungan, mencegah
              pencemaran, dan menggunakan sumber daya secara efisien sebagai
              bagian dari tanggung jawab sosial perusahaan."
            </p>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
              <p className="text-sm text-gray-700 dark:text-gray-300">
                PT Pelita Hati Group berkomitmen untuk meminimalkan dampak
                negatif terhadap lingkungan melalui pengelolaan limbah yang
                bertanggung jawab, efisiensi energi, dan program pengurangan
                emisi sesuai dengan peraturan lingkungan yang berlaku.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <Recycle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Reduce, Reuse, Recycle
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mengurangi, menggunakan kembali, dan mendaur ulang sampah
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <Droplet className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Konservasi Air
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menggunakan air secara efisien dan mencegah pemborosan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-yellow-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Efisiensi Energi
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mengoptimalkan penggunaan listrik dan energi
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Trash2 className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Pengelolaan Limbah
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Memilah dan mengelola limbah sesuai jenisnya
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-teal-100 dark:bg-teal-900/30 flex items-center justify-center flex-shrink-0">
                  <Leaf className="w-5 h-5 text-teal-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Kesadaran Lingkungan
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Edukasi karyawan tentang pentingnya lingkungan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Kepatuhan Regulasi
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mematuhi peraturan lingkungan yang berlaku
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Environment Targets */}
        <ComponentCard title="Target dan Pencapaian Lingkungan">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Aspek Lingkungan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Target
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
                {envTargets.map((target) => (
                  <tr
                    key={target.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {target.aspect}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
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
                ST-TM-008
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Versi
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                v2.0
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
