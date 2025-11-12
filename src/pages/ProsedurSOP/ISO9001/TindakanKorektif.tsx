import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  AlertCircle,
  Download,
  Eye,
  Upload,
  CheckCircle,
  Clock,
  XCircle,
} from "lucide-react";

interface CorrectiveAction {
  id: string;
  caNo: string;
  source: string;
  problem: string;
  department: string;
  pic: string;
  status: string;
  dueDate: string;
  closedDate: string;
}

export default function TindakanKorektif() {
  const [correctiveActions] = useState<CorrectiveAction[]>([
    {
      id: "1",
      caNo: "CA-2024-001",
      source: "Audit Internal",
      problem: "Form pelatihan tidak lengkap",
      department: "HRD",
      pic: "HRD Manager",
      status: "Closed",
      dueDate: "15 Feb 2024",
      closedDate: "10 Feb 2024",
    },
    {
      id: "2",
      caNo: "CA-2024-002",
      source: "Customer Complaint",
      problem: "Keterlambatan pengiriman",
      department: "Warehouse",
      pic: "WH Manager",
      status: "In Progress",
      dueDate: "28 Feb 2024",
      closedDate: "-",
    },
    {
      id: "3",
      caNo: "CA-2024-003",
      source: "Internal Report",
      problem: "Laporan keuangan terlambat",
      department: "Finance",
      pic: "Finance Manager",
      status: "Open",
      dueDate: "05 Mar 2024",
      closedDate: "-",
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Closed":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800 flex items-center gap-1">
            <CheckCircle className="w-3 h-3" />
            Closed
          </span>
        );
      case "In Progress":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800 flex items-center gap-1">
            <Clock className="w-3 h-3" />
            In Progress
          </span>
        );
      case "Open":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800 flex items-center gap-1">
            <XCircle className="w-3 h-3" />
            Open
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
        title="Prosedur Tindakan Korektif | DCMS Pelita Hati"
        description="Prosedur Tindakan Korektif ISO 9001:2015"
      />
      <PageBreadcrumb pageTitle="Prosedur Tindakan Korektif" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Prosedur Tindakan Korektif
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              ISO 9001:2015 Klausul 10.2 - Ketidaksesuaian dan Tindakan Korektif
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
            <Upload className="w-4 h-4" />
            Buat CA Baru
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <AlertCircle className="w-8 h-8 text-brand-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                28
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total CA 2024
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-600">24</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Closed</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Clock className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              In Progress
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-red-600">1</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Overdue</p>
          </div>
        </div>

        {/* CA Table */}
        <ComponentCard title="Daftar Tindakan Korektif">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    No. CA
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Sumber
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Masalah
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Department
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    PIC
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Due Date
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
                {correctiveActions.map((ca) => (
                  <tr
                    key={ca.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {ca.caNo}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {ca.source}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {ca.problem}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {ca.department}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {ca.pic}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {ca.dueDate}
                    </td>
                    <td className="px-4 py-4">{getStatusBadge(ca.status)}</td>
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

        {/* 8D Process */}
        <ComponentCard title="Metode 8D Problem Solving">
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                d: "D1",
                title: "Form Team",
                desc: "Bentuk tim lintas fungsi yang kompeten",
              },
              {
                d: "D2",
                title: "Define Problem",
                desc: "Definisikan masalah secara spesifik dan terukur",
              },
              {
                d: "D3",
                title: "Containment Action",
                desc: "Lakukan tindakan sementara untuk mencegah dampak lebih lanjut",
              },
              {
                d: "D4",
                title: "Root Cause",
                desc: "Identifikasi akar penyebab masalah (5 Why, Fishbone)",
              },
              {
                d: "D5",
                title: "Permanent Action",
                desc: "Tentukan tindakan korektif permanen",
              },
              {
                d: "D6",
                title: "Implementation",
                desc: "Implementasi tindakan korektif",
              },
              {
                d: "D7",
                title: "Prevention",
                desc: "Cegah terulangnya masalah serupa",
              },
              {
                d: "D8",
                title: "Team Recognition",
                desc: "Apresiasi tim dan dokumentasi lesson learned",
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg"
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-full bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {item.d}
                  </div>
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
        </ComponentCard>
      </div>
    </>
  );
}
