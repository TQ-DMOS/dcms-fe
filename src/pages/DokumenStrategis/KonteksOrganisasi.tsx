import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import {
  Upload,
  TrendingUp,
  AlertTriangle,
  Users,
  Target,
} from "lucide-react";

interface StakeholderAnalysis {
  id: string;
  stakeholder: string;
  category: string;
  needs: string;
  expectations: string;
  influence: string;
}

interface SWOTItem {
  type: "strength" | "weakness" | "opportunity" | "threat";
  items: string[];
}

export default function KonteksOrganisasi() {
  const [stakeholders] = useState<StakeholderAnalysis[]>([
    {
      id: "1",
      stakeholder: "Pelanggan",
      category: "Eksternal",
      needs: "Produk berkualitas, harga kompetitif",
      expectations: "Pengiriman tepat waktu, layanan prima",
      influence: "Tinggi",
    },
    {
      id: "2",
      stakeholder: "Supplier",
      category: "Eksternal",
      needs: "Pembayaran tepat waktu, kerjasama jangka panjang",
      expectations: "Order yang konsisten, komunikasi baik",
      influence: "Sedang",
    },
    {
      id: "3",
      stakeholder: "Karyawan",
      category: "Internal",
      needs: "Gaji layak, benefit, jenjang karir",
      expectations: "Lingkungan kerja kondusif, pelatihan",
      influence: "Tinggi",
    },
    {
      id: "4",
      stakeholder: "Pemerintah",
      category: "Eksternal",
      needs: "Kepatuhan regulasi, pajak",
      expectations: "Laporan berkala, audit compliance",
      influence: "Tinggi",
    },
  ]);

  const swotData: SWOTItem[] = [
    {
      type: "strength",
      items: [
        "Jaringan distribusi yang luas",
        "Tim sales yang berpengalaman",
        "Sistem IT yang terintegrasi",
        "Reputasi baik di pasar",
      ],
    },
    {
      type: "weakness",
      items: [
        "Ketergantungan pada supplier tertentu",
        "Kapasitas gudang terbatas",
        "Turnover karyawan cukup tinggi",
        "Belum optimal digital marketing",
      ],
    },
    {
      type: "opportunity",
      items: [
        "Ekspansi ke kota-kota tier 2",
        "Kerjasama dengan e-commerce",
        "Produk baru dengan margin lebih tinggi",
        "Otomasi warehouse management",
      ],
    },
    {
      type: "threat",
      items: [
        "Kompetitor dengan modal besar",
        "Fluktuasi harga bahan baku",
        "Regulasi yang berubah-ubah",
        "Ekonomi global yang tidak stabil",
      ],
    },
  ];

  const getSWOTColor = (type: string) => {
    switch (type) {
      case "strength":
        return "bg-green-50 dark:bg-green-900/20 border-green-500";
      case "weakness":
        return "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-500";
      case "opportunity":
        return "bg-blue-50 dark:bg-blue-900/20 border-blue-500";
      case "threat":
        return "bg-red-50 dark:bg-red-900/20 border-red-500";
      default:
        return "bg-gray-50 dark:bg-gray-800 border-gray-500";
    }
  };

  const getSWOTIcon = (type: string) => {
    switch (type) {
      case "strength":
        return <TrendingUp className="w-5 h-5 text-green-600" />;
      case "weakness":
        return <AlertTriangle className="w-5 h-5 text-yellow-600" />;
      case "opportunity":
        return <Target className="w-5 h-5 text-blue-600" />;
      case "threat":
        return <AlertTriangle className="w-5 h-5 text-red-600" />;
      default:
        return null;
    }
  };

  const getSWOTTitle = (type: string) => {
    switch (type) {
      case "strength":
        return "Kekuatan (Strengths)";
      case "weakness":
        return "Kelemahan (Weaknesses)";
      case "opportunity":
        return "Peluang (Opportunities)";
      case "threat":
        return "Ancaman (Threats)";
      default:
        return "";
    }
  };

  return (
    <>
      <PageMeta
        title="Konteks Organisasi | DCMS Pelita Hati"
        description="Analisis Konteks Organisasi Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Konteks Organisasi" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Konteks Organisasi
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Analisis internal dan eksternal organisasi sesuai ISO 9001:2015
              Klausul 4
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
            <Upload className="w-4 h-4" />
            Upload Update
          </button>
        </div>

        {/* SWOT Analysis */}
        <ComponentCard title="Analisis SWOT">
          <div className="grid md:grid-cols-2 gap-4">
            {swotData.map((swot) => (
              <div
                key={swot.type}
                className={`p-4 rounded-lg border-l-4 ${getSWOTColor(
                  swot.type
                )}`}
              >
                <div className="flex items-center gap-2 mb-3">
                  {getSWOTIcon(swot.type)}
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {getSWOTTitle(swot.type)}
                  </h4>
                </div>
                <ul className="space-y-2">
                  {swot.items.map((item, idx) => (
                    <li
                      key={idx}
                      className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2"
                    >
                      <span className="text-brand-500 mt-1">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ComponentCard>

        {/* Stakeholder Analysis */}
        <ComponentCard title="Analisis Pemangku Kepentingan">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Stakeholder
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Kebutuhan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Ekspektasi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Pengaruh
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {stakeholders.map((sh) => (
                  <tr
                    key={sh.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {sh.stakeholder}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      <span
                        className={`px-2 py-1 rounded-full text-xs ${
                          sh.category === "Internal"
                            ? "bg-blue-100 text-blue-800"
                            : "bg-purple-100 text-purple-800"
                        }`}
                      >
                        {sh.category}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {sh.needs}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {sh.expectations}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          sh.influence === "Tinggi"
                            ? "bg-red-100 text-red-800"
                            : sh.influence === "Sedang"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-green-100 text-green-800"
                        }`}
                      >
                        {sh.influence}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* External & Internal Issues */}
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentCard title="Isu Eksternal">
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                  Ekonomi
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Inflasi tinggi mempengaruhi daya beli konsumen dan biaya
                  operasional
                </p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                  Teknologi
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perkembangan e-commerce dan digital payment yang cepat
                </p>
              </div>
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                  Regulasi
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Perubahan kebijakan pemerintah terkait distribusi dan
                  perpajakan
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
                <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-1">
                  Kompetisi
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Persaingan ketat dari distributor besar dan platform online
                </p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Isu Internal">
            <div className="space-y-3">
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                  Sumber Daya
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Ketersediaan SDM kompeten dan infrastruktur yang memadai
                </p>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
                <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-1">
                  Proses Bisnis
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Optimalisasi proses warehouse dan delivery untuk efisiensi
                </p>
              </div>
              <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg border-l-4 border-teal-500">
                <h4 className="font-semibold text-teal-900 dark:text-teal-300 mb-1">
                  Budaya Kerja
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Membangun budaya continuous improvement dan customer focus
                </p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border-l-4 border-indigo-500">
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                  Sistem Informasi
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Integrasi sistem ERP untuk real-time data dan reporting
                </p>
              </div>
            </div>
          </ComponentCard>
        </div>

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Dokumen
              </h4>
              <p className="text-sm text-gray-900 dark:text-white">
                Analisis Konteks Organisasi
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Nomor Dokumen
              </h4>
              <p className="text-sm text-gray-900 dark:text-white">ST-TM-006</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Versi
              </h4>
              <p className="text-sm text-gray-900 dark:text-white">v2.0</p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Tanggal Review
              </h4>
              <p className="text-sm text-gray-900 dark:text-white">
                Setiap 6 bulan
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                PIC
              </h4>
              <p className="text-sm text-gray-900 dark:text-white">
                Management Representative
              </p>
            </div>
            <div>
              <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-2">
                Update Terakhir
              </h4>
              <p className="text-sm text-gray-900 dark:text-white">
                15 Jan 2024
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
