import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import { FileText, Download, Eye, Edit, Trash2, Upload } from "lucide-react";

interface Document {
  id: string;
  title: string;
  docNumber: string;
  version: string;
  status: string;
  uploadDate: string;
  uploadBy: string;
  fileSize: string;
}

export default function VisiMisi() {
  const [documents] = useState<Document[]>([
    {
      id: "1",
      title: "Visi Misi Perusahaan 2024",
      docNumber: "ST-TM-001",
      version: "2.0",
      status: "Published",
      uploadDate: "15 Jan 2024",
      uploadBy: "Admin",
      fileSize: "2.5 MB",
    },
    {
      id: "2",
      title: "Visi Misi Perusahaan 2023",
      docNumber: "ST-TM-001",
      version: "1.0",
      status: "Archived",
      uploadDate: "10 Jan 2023",
      uploadBy: "Admin",
      fileSize: "2.1 MB",
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
        title="Visi & Misi Perusahaan | DCMS Pelita Hati"
        description="Dokumen Visi & Misi Perusahaan Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Visi & Misi Perusahaan" />

      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Visi & Misi Perusahaan
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Dokumen strategis yang menjelaskan visi, misi, dan nilai-nilai
              perusahaan
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Upload className="w-4 h-4" />
            Upload Dokumen Baru
          </button>
        </div>

        {/* Document List Table */}
        <ComponentCard title="Daftar Dokumen">
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
                    Tanggal Upload
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                    Upload By
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
                      {doc.uploadBy}
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

        {/* Document Content Preview */}
        <ComponentCard title="Konten Dokumen Terbaru">
          <div className="prose max-w-none dark:prose-invert">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              VISI
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Menjadi perusahaan distribusi terpercaya dan terkemuka di
              Indonesia yang memberikan nilai tambah maksimal bagi stakeholder
              melalui pelayanan prima dan inovasi berkelanjutan.
            </p>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              MISI
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 mb-6">
              <li>
                Menyediakan produk berkualitas tinggi dengan harga kompetitif
              </li>
              <li>Membangun jaringan distribusi yang kuat dan efisien</li>
              <li>Mengembangkan SDM yang profesional dan berintegritas</li>
              <li>
                Menerapkan teknologi informasi untuk meningkatkan efisiensi
                operasional
              </li>
              <li>Berkontribusi positif terhadap masyarakat dan lingkungan</li>
            </ul>

            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              NILAI-NILAI PERUSAHAAN
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-brand-50 dark:bg-brand-900/20 rounded-lg">
                <h4 className="font-semibold text-brand-700 dark:text-brand-400 mb-2">
                  Integritas
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Berkomitmen untuk selalu jujur dan konsisten dalam setiap
                  tindakan
                </p>
              </div>
              <div className="p-4 bg-brand-50 dark:bg-brand-900/20 rounded-lg">
                <h4 className="font-semibold text-brand-700 dark:text-brand-400 mb-2">
                  Profesionalisme
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bekerja dengan standar tertinggi dan fokus pada hasil yang
                  berkualitas
                </p>
              </div>
              <div className="p-4 bg-brand-50 dark:bg-brand-900/20 rounded-lg">
                <h4 className="font-semibold text-brand-700 dark:text-brand-400 mb-2">
                  Inovasi
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Terus berinovasi untuk meningkatkan kualitas produk dan
                  layanan
                </p>
              </div>
              <div className="p-4 bg-brand-50 dark:bg-brand-900/20 rounded-lg">
                <h4 className="font-semibold text-brand-700 dark:text-brand-400 mb-2">
                  Kolaborasi
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Membangun kerjasama yang solid antar tim dan dengan mitra
                  bisnis
                </p>
              </div>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
