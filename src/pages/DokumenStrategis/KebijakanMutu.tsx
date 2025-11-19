import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import {
  FileText,
  Download,
  Eye,
  Edit,
  Trash2,
  Upload,
  CheckCircle,
} from "lucide-react";

interface Document {
  id: string;
  title: string;
  docNumber: string;
  version: string;
  status: string;
  uploadDate: string;
  approvedBy: string;
  fileSize: string;
}

export default function KebijakanMutuOld() {
  const [documents] = useState<Document[]>([
    {
      id: "1",
      title: "Kebijakan Mutu ISO 9001:2015",
      docNumber: "ST-TM-002",
      version: "3.0",
      status: "Published",
      uploadDate: "01 Feb 2024",
      approvedBy: "Direktur Utama",
      fileSize: "1.8 MB",
    },
    {
      id: "2",
      title: "Kebijakan Mutu ISO 9001:2015",
      docNumber: "ST-TM-002",
      version: "2.0",
      status: "Archived",
      uploadDate: "15 Feb 2023",
      approvedBy: "Direktur Utama",
      fileSize: "1.5 MB",
    },
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
        title="Kebijakan Mutu | DCMS Pelita Hati"
        description="Dokumen Kebijakan Mutu Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Kebijakan Mutu" />

      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Kebijakan Mutu
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Kebijakan Sistem Manajemen Mutu ISO 9001:2015
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
                    Tanggal Terbit
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Disetujui Oleh
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
                        <FileText className="w-5 h-5 text-brand-500 mr-3" />
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
                      {doc.uploadDate}
                    </td>
                    <td className="px-4 py-4 whitespace-nowrap text-sm text-gray-600 dark:text-gray-400">
                      {doc.approvedBy}
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

        {/* Policy Content */}
        <ComponentCard title="Isi Kebijakan Mutu">
          <div className="prose max-w-none dark:prose-invert">
            <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-4 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                PERNYATAAN KEBIJAKAN MUTU
              </h3>
              <p className="text-gray-700 dark:text-gray-300 text-lg italic">
                "Kami berkomitmen untuk memberikan produk dan layanan
                berkualitas tinggi yang memenuhi dan melampaui ekspektasi
                pelanggan melalui peningkatan berkelanjutan dan kepatuhan
                terhadap persyaratan ISO 9001:2015"
              </p>
            </div>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              Komitmen Manajemen
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Manajemen PT Pelita Hati Group berkomitmen untuk:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Kepuasan Pelanggan
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Memahami dan memenuhi kebutuhan pelanggan secara konsisten
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Peningkatan Berkelanjutan
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Terus meningkatkan efektivitas Sistem Manajemen Mutu
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Kepatuhan Persyaratan
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mematuhi semua persyaratan peraturan dan standar yang
                      berlaku
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">
                      4
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Kompetensi SDM
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mengembangkan kompetensi karyawan melalui pelatihan
                      berkelanjutan
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">
                      5
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Efisiensi Proses
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Mengoptimalkan proses bisnis untuk meningkatkan
                      produktivitas
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center flex-shrink-0">
                    <span className="text-brand-600 dark:text-brand-400 font-bold">
                      6
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                      Komunikasi Efektif
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Memastikan komunikasi kebijakan mutu ke seluruh organisasi
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-lg mt-6">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                Tinjauan dan Pembaruan
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Kebijakan Mutu ini akan ditinjau secara berkala minimal 1 (satu)
                kali dalam setahun atau sesuai kebutuhan untuk memastikan
                kesesuaian dan efektivitasnya. Setiap perubahan akan
                dikomunikasikan kepada seluruh karyawan dan pihak terkait.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
              <div className="flex justify-between items-start">
                <div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Disetujui oleh:
                  </p>
                  <p className="font-bold text-gray-900 dark:text-white mt-2">
                    Direktur Utama
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                    PT Pelita Hati Group
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Tanggal Berlaku:
                  </p>
                  <p className="font-semibold text-gray-900 dark:text-white mt-2">
                    01 Februari 2024
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
