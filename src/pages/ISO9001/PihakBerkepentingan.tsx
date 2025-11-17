import { useState } from "react";
import PageMeta from "../../components/common/PageMeta";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import ComponentCard from "../../components/common/ComponentCard";
import {
  Users,
  Download,
  Eye,
  Edit,
  Plus,
  Building2,
  TrendingUp,
  AlertCircle,
} from "lucide-react";

interface Stakeholder {
  id: string;
  name: string;
  category: string;
  type: string;
  needs: string;
  expectations: string;
  influence: string;
  interest: string;
  communicationMethod: string;
  frequency: string;
}

export default function PihakBerkepentingan() {
  const [stakeholders] = useState<Stakeholder[]>([
    {
      id: "1",
      name: "Pelanggan (Customers)",
      category: "Eksternal",
      type: "Primer",
      needs: "Produk berkualitas, harga kompetitif, pengiriman tepat waktu",
      expectations: "Layanan prima, after-sales support, stok konsisten",
      influence: "Tinggi",
      interest: "Tinggi",
      communicationMethod: "Email, Phone, Meeting, WhatsApp Business",
      frequency: "Daily",
    },
    {
      id: "2",
      name: "Supplier / Principal",
      category: "Eksternal",
      type: "Primer",
      needs: "Pembayaran tepat waktu, kerjasama jangka panjang, forecast order",
      expectations: "Order konsisten, komunikasi baik, zero dispute",
      influence: "Tinggi",
      interest: "Tinggi",
      communicationMethod: "Email, Visit, Phone, Video Call",
      frequency: "Weekly",
    },
    {
      id: "3",
      name: "Karyawan",
      category: "Internal",
      type: "Primer",
      needs: "Gaji layak, benefit, jenjang karir, work-life balance",
      expectations: "Lingkungan kerja kondusif, pelatihan, keamanan kerja",
      influence: "Tinggi",
      interest: "Tinggi",
      communicationMethod: "Meeting, Email, Internal Memo, Town Hall",
      frequency: "Weekly",
    },
    {
      id: "4",
      name: "Pemegang Saham",
      category: "Internal",
      type: "Primer",
      needs: "Return on investment, pertumbuhan bisnis, transparansi",
      expectations: "Laporan keuangan akurat, dividen, strategi jelas",
      influence: "Tinggi",
      interest: "Tinggi",
      communicationMethod: "Board Meeting, Financial Report",
      frequency: "Monthly",
    },
    {
      id: "5",
      name: "Pemerintah & Regulator",
      category: "Eksternal",
      type: "Sekunder",
      needs: "Kepatuhan regulasi, pajak, perizinan",
      expectations: "Laporan berkala, compliance audit, kontribusi sosial",
      influence: "Tinggi",
      interest: "Sedang",
      communicationMethod: "Official Letter, Email, Submission",
      frequency: "Quarterly",
    },
    {
      id: "6",
      name: "Bank & Lembaga Keuangan",
      category: "Eksternal",
      type: "Sekunder",
      needs: "Repayment schedule, financial health, collateral",
      expectations: "Laporan keuangan, transparansi, zero default",
      influence: "Sedang",
      interest: "Sedang",
      communicationMethod: "Meeting, Email, Financial Statement",
      frequency: "Quarterly",
    },
    {
      id: "7",
      name: "Masyarakat Sekitar",
      category: "Eksternal",
      type: "Sekunder",
      needs: "Lapangan kerja, CSR, zero pollution",
      expectations: "Hubungan baik, kontribusi sosial, kelestarian lingkungan",
      influence: "Rendah",
      interest: "Sedang",
      communicationMethod: "Community Meeting, CSR Program",
      frequency: "Quarterly",
    },
    {
      id: "8",
      name: "Asosiasi Industri",
      category: "Eksternal",
      type: "Sekunder",
      needs: "Partisipasi aktif, iuran, sharing knowledge",
      expectations: "Kontribusi ide, networking, best practice sharing",
      influence: "Rendah",
      interest: "Rendah",
      communicationMethod: "Association Meeting, Email",
      frequency: "Quarterly",
    },
  ]);

  const getInfluenceColor = (influence: string) => {
    switch (influence) {
      case "Tinggi":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      case "Sedang":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Rendah":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getCategoryColor = (category: string) => {
    return category === "Internal"
      ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      : "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
  };

  const getTypeColor = (type: string) => {
    return type === "Primer"
      ? "bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-300"
      : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
  };

  // Stats
  const totalStakeholders = stakeholders.length;
  const externalStakeholders = stakeholders.filter(
    (s) => s.category === "Eksternal"
  ).length;
  const internalStakeholders = stakeholders.filter(
    (s) => s.category === "Internal"
  ).length;
  const highInfluence = stakeholders.filter(
    (s) => s.influence === "Tinggi"
  ).length;

  return (
    <>
      <PageMeta
        title="4.2 Kebutuhan Pihak Berkepentingan | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 4.2 - Memahami Kebutuhan dan Harapan Pihak Berkepentingan"
      />
      <PageBreadcrumb pageTitle="4.2 Kebutuhan Pihak Berkepentingan" />

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
              Tambah Stakeholder
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Stakeholder
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {totalStakeholders}
                </p>
              </div>
              <Users className="w-8 h-8 text-brand-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Eksternal
                </p>
                <p className="text-2xl font-bold text-purple-600 mt-1">
                  {externalStakeholders}
                </p>
              </div>
              <TrendingUp className="w-8 h-8 text-purple-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Internal
                </p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {internalStakeholders}
                </p>
              </div>
              <Building2 className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pengaruh Tinggi
                </p>
                <p className="text-2xl font-bold text-red-600 mt-1">
                  {highInfluence}
                </p>
              </div>
              <AlertCircle className="w-8 h-8 text-red-500" />
            </div>
          </div>
        </div>

        {/* Stakeholder Table */}
        <ComponentCard title="Detail Analisis Stakeholder">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Stakeholder
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tipe
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kebutuhan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Ekspektasi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Pengaruh
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Komunikasi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {stakeholders.map((stakeholder) => (
                  <tr
                    key={stakeholder.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4 text-brand-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {stakeholder.name}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(
                          stakeholder.category
                        )}`}
                      >
                        {stakeholder.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          stakeholder.type
                        )}`}
                      >
                        {stakeholder.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                      {stakeholder.needs}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                      {stakeholder.expectations}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getInfluenceColor(
                          stakeholder.influence
                        )}`}
                      >
                        {stakeholder.influence}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      <div className="max-w-xs">
                        <p className="font-medium">{stakeholder.frequency}</p>
                        <p className="text-xs">
                          {stakeholder.communicationMethod}
                        </p>
                      </div>
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

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Nomor Dokumen
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                ISO-4.2-001
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
