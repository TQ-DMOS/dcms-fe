import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  FileText,
  Download,
  Eye,
  Upload,
  CheckCircle,
  XCircle,
  Clock,
  AlertCircle,
} from "lucide-react";

interface ProsedurDocument {
  id: string;
  title: string;
  docNumber: string;
  version: string;
  status: string;
  effectiveDate: string;
  reviewDate: string;
  owner: string;
}

interface ControlledDoc {
  id: string;
  docType: string;
  totalDocs: number;
  active: number;
  draft: number;
  archived: number;
}

export default function KontrolDokumen() {
  const [procedures] = useState<ProsedurDocument[]>([
    {
      id: "1",
      title: "Prosedur Kontrol Dokumen",
      docNumber: "IK-DCC-001",
      version: "3.0",
      status: "Active",
      effectiveDate: "01 Jan 2024",
      reviewDate: "01 Jan 2025",
      owner: "Document Controller",
    },
    {
      id: "2",
      title: "Prosedur Kontrol Dokumen (Old)",
      docNumber: "IK-DCC-001",
      version: "2.0",
      status: "Archived",
      effectiveDate: "01 Jan 2023",
      reviewDate: "01 Jan 2024",
      owner: "Document Controller",
    },
  ]);

  const [controlledDocs] = useState<ControlledDoc[]>([
    {
      id: "1",
      docType: "Standar (ST)",
      totalDocs: 8,
      active: 8,
      draft: 0,
      archived: 0,
    },
    {
      id: "2",
      docType: "Instruksi Kerja (IK)",
      totalDocs: 45,
      active: 42,
      draft: 2,
      archived: 1,
    },
    {
      id: "3",
      docType: "SOP",
      totalDocs: 35,
      active: 33,
      draft: 1,
      archived: 1,
    },
    {
      id: "4",
      docType: "Form (FM)",
      totalDocs: 120,
      active: 115,
      draft: 3,
      archived: 2,
    },
    {
      id: "5",
      docType: "Log/Record",
      totalDocs: 28,
      active: 28,
      draft: 0,
      archived: 0,
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Active":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
            Active
          </span>
        );
      case "Draft":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300">
            Draft
          </span>
        );
      case "Review":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
            Review
          </span>
        );
      case "Archived":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300">
            Archived
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
            Unknown
          </span>
        );
    }
  };

  return (
    <>
      <PageMeta
        title="Prosedur Kontrol Dokumen | DCMS Pelita Hati"
        description="Prosedur Kontrol Dokumen ISO 9001:2015"
      />
      <PageBreadcrumb pageTitle="Prosedur Kontrol Dokumen" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Prosedur Kontrol Dokumen
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              ISO 9001:2015 Klausul 7.5.3 - Pengendalian Informasi
              Terdokumentasi
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
              <FileText className="w-8 h-8 text-brand-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                236
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Dokumen Terkontrol
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-600">226</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Dokumen Aktif
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-600">6</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Draft/Review
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-gray-500" />
              <span className="text-2xl font-bold text-gray-600">4</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Archived</p>
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
                    Tgl Review
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Owner
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
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {proc.reviewDate}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {proc.owner}
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

        {/* Controlled Documents Summary */}
        <ComponentCard title="Ringkasan Dokumen Terkontrol">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Jenis Dokumen
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Total
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Active
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Draft
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Archived
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {controlledDocs.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {doc.docType}
                    </td>
                    <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white font-semibold">
                      {doc.totalDocs}
                    </td>
                    <td className="px-4 py-4 text-sm text-center">
                      <span className="text-green-600 dark:text-green-400 font-medium">
                        {doc.active}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-center">
                      <span className="text-yellow-600 dark:text-yellow-400 font-medium">
                        {doc.draft}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-center">
                      <span className="text-gray-600 dark:text-gray-400 font-medium">
                        {doc.archived}
                      </span>
                    </td>
                  </tr>
                ))}
                <tr className="bg-gray-50 dark:bg-gray-800/50 font-bold">
                  <td className="px-4 py-4 text-sm text-gray-900 dark:text-white">
                    TOTAL
                  </td>
                  <td className="px-4 py-4 text-sm text-center text-gray-900 dark:text-white">
                    236
                  </td>
                  <td className="px-4 py-4 text-sm text-center text-green-600 dark:text-green-400">
                    226
                  </td>
                  <td className="px-4 py-4 text-sm text-center text-yellow-600 dark:text-yellow-400">
                    6
                  </td>
                  <td className="px-4 py-4 text-sm text-center text-gray-600 dark:text-gray-400">
                    4
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Process Flow */}
        <ComponentCard title="Alur Proses Kontrol Dokumen">
          <div className="space-y-4">
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Pembuatan Dokumen
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pembuat dokumen menyusun draft sesuai template dan format yang
                  ditetapkan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Review & Verifikasi
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Reviewer melakukan pemeriksaan kelengkapan dan kesesuaian
                  dokumen
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Persetujuan
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Approver memberikan persetujuan setelah dokumen memenuhi
                  persyaratan
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Penomoran & Penerbitan
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Document Controller memberikan nomor dokumen dan menerbitkan
                  dokumen
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                5
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Distribusi & Akses
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Dokumen didistribusikan ke pihak terkait dan diberikan akses
                  sesuai hak
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-red-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                6
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Review Berkala & Revisi
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Dokumen direview secara berkala dan direvisi jika diperlukan
                </p>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Key Points */}
        {/* <ComponentCard title="Poin-Poin Penting">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Format & Template
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Semua dokumen harus mengikuti format dan template yang telah
                    ditetapkan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Penomoran Unik
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Setiap dokumen memiliki nomor unik dengan format
                    [TIPE]-[DEPT]-[NO]
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Version Control
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Semua perubahan dokumen harus di-versioning dengan change
                    log yang jelas
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Akses Terkontrol
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Akses dokumen diatur berdasarkan role dan department user
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard> */}
      </div>
    </>
  );
}
