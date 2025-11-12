import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  Database,
  Download,
  Eye,
  Upload,
  Archive,
  HardDrive,
  Calendar,
} from "lucide-react";

interface RecordCategory {
  id: string;
  category: string;
  department: string;
  totalRecords: number;
  retentionPeriod: string;
  storageLocation: string;
  status: string;
}

interface ProsedurDocument {
  id: string;
  title: string;
  docNumber: string;
  version: string;
  status: string;
  effectiveDate: string;
}

export default function KontrolRekaman() {
  const [procedures] = useState<ProsedurDocument[]>([
    {
      id: "1",
      title: "Prosedur Kontrol Rekaman",
      docNumber: "IK-DCC-002",
      version: "2.0",
      status: "Active",
      effectiveDate: "01 Jan 2024",
    },
  ]);

  const [recordCategories] = useState<RecordCategory[]>([
    {
      id: "1",
      category: "Rekaman Pelatihan",
      department: "HRD",
      totalRecords: 150,
      retentionPeriod: "5 tahun",
      storageLocation: "Digital Archive - HRD Folder",
      status: "Active",
    },
    {
      id: "2",
      category: "Laporan Audit Internal",
      department: "AI",
      totalRecords: 24,
      retentionPeriod: "7 tahun",
      storageLocation: "Digital Archive - AI Folder",
      status: "Active",
    },
    {
      id: "3",
      category: "Laporan Inspeksi K3",
      department: "HRD-GA",
      totalRecords: 36,
      retentionPeriod: "5 tahun",
      storageLocation: "Digital Archive - K3 Folder",
      status: "Active",
    },
    {
      id: "4",
      category: "Laporan Keuangan",
      department: "FAT",
      totalRecords: 60,
      retentionPeriod: "10 tahun",
      storageLocation: "Digital Archive - Finance Folder",
      status: "Active",
    },
    {
      id: "5",
      category: "Purchase Order",
      department: "PRC",
      totalRecords: 450,
      retentionPeriod: "3 tahun",
      storageLocation: "Digital Archive - Procurement Folder",
      status: "Active",
    },
    {
      id: "6",
      category: "Sales Invoice",
      department: "SLS",
      totalRecords: 680,
      retentionPeriod: "3 tahun",
      storageLocation: "Digital Archive - Sales Folder",
      status: "Active",
    },
    {
      id: "7",
      category: "Rekaman Tinjauan Manajemen",
      department: "TM",
      totalRecords: 12,
      retentionPeriod: "Permanen",
      storageLocation: "Digital Archive - TM Folder",
      status: "Active",
    },
    {
      id: "8",
      category: "Rekaman Tindakan Korektif",
      department: "MR",
      totalRecords: 28,
      retentionPeriod: "5 tahun",
      storageLocation: "Digital Archive - MR Folder",
      status: "Active",
    },
  ]);

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
        Active
      </span>
    ) : (
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
        Inactive
      </span>
    );
  };

  return (
    <>
      <PageMeta
        title="Prosedur Kontrol Rekaman | DCMS Pelita Hati"
        description="Prosedur Kontrol Rekaman ISO 9001:2015"
      />
      <PageBreadcrumb pageTitle="Prosedur Kontrol Rekaman" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Prosedur Kontrol Rekaman
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              ISO 9001:2015 Klausul 7.5.3 - Pengendalian Rekaman Mutu
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
            <Upload className="w-4 h-4" />
            Upload Revisi
          </button>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Database className="w-8 h-8 text-brand-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                8
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Kategori Rekaman
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <HardDrive className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-600">1,440</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Rekaman
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8 text-blue-500" />
              <span className="text-2xl font-bold text-blue-600">85 GB</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Storage Used
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Archive className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-purple-600">120</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Archived Records
            </p>
          </div>
        </div>

        {/* Procedure Documents */}
        <ComponentCard title="Dokumen Prosedur">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Nama Dokumen
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Nomor
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Versi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Tgl Efektif
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {procedures.map((proc) => (
                  <tr
                    key={proc.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {proc.title}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {proc.docNumber}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      v{proc.version}
                    </td>
                    <td className="px-4 py-4">{getStatusBadge(proc.status)}</td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {proc.effectiveDate}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded"
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

        {/* Record Categories */}
        <ComponentCard title="Kategori dan Retensi Rekaman">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Kategori Rekaman
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Department
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Total
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Masa Retensi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Lokasi Penyimpanan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {recordCategories.map((record) => (
                  <tr
                    key={record.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {record.category}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {record.department}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                      {record.totalRecords}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      <span
                        className={`px-2 py-1 rounded text-xs font-medium ${
                          record.retentionPeriod === "Permanen"
                            ? "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
                            : "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
                        }`}
                      >
                        {record.retentionPeriod}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {record.storageLocation}
                    </td>
                    <td className="px-4 py-4">
                      {getStatusBadge(record.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Retention Policy */}
        <ComponentCard title="Kebijakan Masa Retensi">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Permanen
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Dokumen yang harus disimpan selamanya
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Rekaman Tinjauan Manajemen</li>
                <li>• Sertifikat ISO</li>
                <li>• Akta Pendirian Perusahaan</li>
              </ul>
            </div>

            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                10 Tahun
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Dokumen keuangan dan perpajakan
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Laporan Keuangan</li>
                <li>• Dokumen Pajak</li>
                <li>• Kontrak Penting</li>
              </ul>
            </div>

            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                7 Tahun
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Dokumen audit dan compliance
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Laporan Audit Internal</li>
                <li>• Laporan Audit Eksternal</li>
                <li>• Tindakan Korektif Major</li>
              </ul>
            </div>

            <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg border-l-4 border-yellow-500">
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                5 Tahun
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Dokumen HRD dan K3
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Rekaman Pelatihan</li>
                <li>• Laporan Inspeksi K3</li>
                <li>• Data Karyawan</li>
              </ul>
            </div>

            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                3 Tahun
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Dokumen operasional
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Purchase Order</li>
                <li>• Sales Invoice</li>
                <li>• Delivery Order</li>
              </ul>
            </div>

            <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg border-l-4 border-red-500">
              <h4 className="font-semibold text-red-900 dark:text-red-300 mb-2">
                1 Tahun
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300 mb-2">
                Dokumen administratif rutin
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Absensi Karyawan</li>
                <li>• Surat Keluar/Masuk</li>
                <li>• Memo Internal</li>
              </ul>
            </div>
          </div>
        </ComponentCard>

        {/* Storage Guidelines */}
        <ComponentCard title="Panduan Penyimpanan">
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-brand-500" />
                Penyimpanan Digital
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Semua rekaman disimpan dalam format digital di server terpusat
                dengan backup rutin.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>
                  • Format file: PDF untuk dokumen final, Excel untuk data
                  numerik
                </li>
                <li>
                  • Naming convention: [Kategori]-[Tahun]-[Nomor]-[Deskripsi]
                </li>
                <li>• Backup otomatis setiap hari pukul 23:00 WIB</li>
                <li>• Akses dibatasi sesuai role dan department</li>
              </ul>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                <Archive className="w-5 h-5 text-brand-500" />
                Pengarsipan
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
                Rekaman yang sudah melewati masa aktif dipindahkan ke cold
                storage.
              </p>
              <ul className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                <li>• Review status rekaman setiap 6 bulan</li>
                <li>• Rekaman lama dipindah ke archive folder terpisah</li>
                <li>• Tetap bisa diakses dengan permission khusus</li>
                <li>
                  • Pemusnahan hanya dilakukan setelah masa retensi habis dan
                  approval TM
                </li>
              </ul>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
