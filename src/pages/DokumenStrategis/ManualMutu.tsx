import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import {
  Download,
  Eye,
  Edit,
  Trash2,
  Upload,
  BookOpen,
  FileCheck,
} from "lucide-react";

interface Document {
  id: string;
  title: string;
  docNumber: string;
  version: string;
  status: string;
  releaseDate: string;
  reviewDate: string;
  fileSize: string;
}

interface Chapter {
  number: string;
  title: string;
  pages: string;
}

export default function ManualMutu() {
  const [documents] = useState<Document[]>([
    {
      id: "1",
      title: "Manual Mutu ISO 9001:2015",
      docNumber: "ST-TM-003",
      version: "4.0",
      status: "Published",
      releaseDate: "01 Mar 2024",
      reviewDate: "01 Mar 2025",
      fileSize: "5.2 MB",
    },
    {
      id: "2",
      title: "Manual Mutu ISO 9001:2015",
      docNumber: "ST-TM-003",
      version: "3.0",
      status: "Archived",
      releaseDate: "15 Mar 2023",
      reviewDate: "15 Mar 2024",
      fileSize: "4.8 MB",
    },
  ]);

  const [chapters] = useState<Chapter[]>([
    { number: "1", title: "Ruang Lingkup", pages: "1-3" },
    { number: "2", title: "Referensi Normatif", pages: "4-5" },
    { number: "3", title: "Istilah dan Definisi", pages: "6-10" },
    { number: "4", title: "Konteks Organisasi", pages: "11-15" },
    { number: "5", title: "Kepemimpinan", pages: "16-20" },
    { number: "6", title: "Perencanaan", pages: "21-25" },
    { number: "7", title: "Dukungan", pages: "26-32" },
    { number: "8", title: "Operasi", pages: "33-42" },
    { number: "9", title: "Evaluasi Kinerja", pages: "43-48" },
    { number: "10", title: "Peningkatan", pages: "49-52" },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      case "Draft":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <PageMeta
        title="Manual Mutu | DCMS Pelita Hati"
        description="Manual Mutu ISO 9001:2015 Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Manual Mutu" />

      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Manual Mutu
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Dokumen Manual Sistem Manajemen Mutu ISO 9001:2015
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Upload className="w-4 h-4" />
            Upload Revisi
          </button>
        </div>

        {/* Document List Table */}
        <ComponentCard title="Riwayat Dokumen">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Nama Dokumen
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Nomor Dokumen
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Versi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tgl Terbit
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tgl Review
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Ukuran
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {documents.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <BookOpen className="w-5 h-5 text-brand-500 mr-3" />
                        <div>
                          <div className="text-sm font-medium text-gray-900 dark:text-white">
                            {doc.title}
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {doc.docNumber}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      v{doc.version}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap">
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          doc.status
                        )}`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {doc.releaseDate}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {doc.reviewDate}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {doc.fileSize}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm">
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
                        <button
                          className="p-1.5 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Table of Contents */}
        <ComponentCard title="Daftar Isi">
          <div className="space-y-2">
            {chapters.map((chapter) => (
              <div
                key={chapter.number}
                className="flex items-center justify-between p-4 hover:bg-gray-50 dark:hover:bg-gray-800 rounded-lg transition-colors cursor-pointer border border-gray-200 dark:border-gray-700"
              >
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">
                      {chapter.number}
                    </span>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 dark:text-white">
                      {chapter.title}
                    </h4>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      Halaman {chapter.pages}
                    </p>
                  </div>
                </div>
                <button className="p-2 text-gray-400 hover:text-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 rounded-lg transition-colors">
                  <Eye className="w-5 h-5" />
                </button>
              </div>
            ))}
          </div>
        </ComponentCard>

        {/* Document Summary */}
        <div className="grid md:grid-cols-2 gap-6">
          <ComponentCard title="Ringkasan Dokumen">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Tujuan Manual Mutu
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mendokumentasikan Sistem Manajemen Mutu yang diterapkan
                    sesuai dengan persyaratan ISO 9001:2015 dan menunjukkan
                    komitmen organisasi terhadap mutu.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Ruang Lingkup
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Manual ini mencakup semua proses dan aktivitas yang
                    dilakukan oleh PT Pelita Hati Group dalam distribusi produk
                    dan layanan terkait.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <FileCheck className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-medium text-gray-900 dark:text-white mb-1">
                    Penerapan
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Manual Mutu ini berlaku untuk seluruh karyawan, departemen,
                    dan unit kerja di lingkungan PT Pelita Hati Group.
                  </p>
                </div>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Informasi Dokumen">
            <div className="space-y-3">
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Nomor Dokumen
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  ST-TM-003
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Versi Terkini
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  v4.0
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tanggal Terbit
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  01 Maret 2024
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Tanggal Review
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  01 Maret 2025
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Disusun Oleh
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Management Representative
                </span>
              </div>
              <div className="flex justify-between py-3 border-b border-gray-200 dark:border-gray-700">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Disetujui Oleh
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  Direktur Utama
                </span>
              </div>
              <div className="flex justify-between py-3">
                <span className="text-sm text-gray-600 dark:text-gray-400">
                  Total Halaman
                </span>
                <span className="text-sm font-medium text-gray-900 dark:text-white">
                  52 Halaman
                </span>
              </div>
            </div>
          </ComponentCard>
        </div>

        {/* Document Revisions */}
        <ComponentCard title="Riwayat Revisi">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Versi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Tanggal
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Perubahan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Diubah Oleh
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    v4.0
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    01 Mar 2024
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Update struktur organisasi dan penambahan klausul 8.5
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    MR Team
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    v3.0
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    15 Mar 2023
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Penyesuaian proses bisnis dan update konteks organisasi
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    MR Team
                  </td>
                </tr>
                <tr className="hover:bg-gray-50 dark:hover:bg-gray-800">
                  <td className="px-4 py-3 text-sm font-medium text-gray-900 dark:text-white">
                    v2.0
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    10 Jan 2022
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    Transisi dari ISO 9001:2008 ke ISO 9001:2015
                  </td>
                  <td className="px-4 py-3 text-sm text-gray-600 dark:text-gray-400">
                    MR Team
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
