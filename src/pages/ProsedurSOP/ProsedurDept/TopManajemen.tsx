import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import { Crown, Download, Eye, FileText, TrendingUp } from "lucide-react";

interface Procedure {
  id: string;
  title: string;
  docNumber: string;
  version: string;
  category: string;
  status: string;
  owner: string;
}

export default function TopManajemen() {
  const [procedures] = useState<Procedure[]>([
    {
      id: "1",
      title: "Prosedur Perencanaan Strategis",
      docNumber: "SOP-TM-001",
      version: "2.0",
      category: "Strategic Planning",
      status: "Active",
      owner: "Direktur Utama",
    },
    {
      id: "2",
      title: "Prosedur Management Review",
      docNumber: "SOP-TM-002",
      version: "3.0",
      category: "Quality Management",
      status: "Active",
      owner: "Management Representative",
    },
    {
      id: "3",
      title: "Prosedur Penetapan Kebijakan",
      docNumber: "SOP-TM-003",
      version: "1.0",
      category: "Policy",
      status: "Active",
      owner: "Direktur Utama",
    },
    {
      id: "4",
      title: "Prosedur Budget Approval",
      docNumber: "SOP-TM-004",
      version: "2.0",
      category: "Financial",
      status: "Active",
      owner: "Direktur Keuangan",
    },
    {
      id: "5",
      title: "Prosedur Business Review",
      docNumber: "SOP-TM-005",
      version: "1.0",
      category: "Performance",
      status: "Active",
      owner: "Direktur Utama",
    },
  ]);

  const getStatusBadge = (status: string) => {
    return status === "Active" ? (
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
        Active
      </span>
    ) : (
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-800">
        Inactive
      </span>
    );
  };

  return (
    <>
      <PageMeta
        title="Prosedur Top Manajemen | DCMS Pelita Hati"
        description="Prosedur dan SOP Top Management"
      />
      <PageBreadcrumb pageTitle="Prosedur Top Manajemen" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              Prosedur Top Manajemen
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              SOP dan prosedur untuk level direksi dan manajemen puncak
            </p>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8" />
              <span className="text-3xl font-bold">12</span>
            </div>
            <p className="text-sm opacity-90">Total Prosedur</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8" />
              <span className="text-3xl font-bold">12</span>
            </div>
            <p className="text-sm opacity-90">Active</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Crown className="w-8 h-8" />
              <span className="text-3xl font-bold">4</span>
            </div>
            <p className="text-sm opacity-90">Strategic</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <FileText className="w-8 h-8" />
              <span className="text-3xl font-bold">Q2</span>
            </div>
            <p className="text-sm opacity-90">Next Review</p>
          </div>
        </div>

        {/* Procedures Table */}
        <ComponentCard title="Daftar Prosedur">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Nama Prosedur
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Nomor
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Versi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                    Status
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
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      <span className="px-2 py-1 text-xs rounded bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300">
                        {proc.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">{getStatusBadge(proc.status)}</td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {proc.owner}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-1.5 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded">
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

        {/* Key Responsibilities */}
        {/* <ComponentCard title="Tanggung Jawab Utama Top Manajemen">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border-l-4 border-purple-500">
              <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-2">
                Perencanaan Strategis
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Menetapkan visi, misi, dan strategi jangka panjang perusahaan
              </p>
            </div>
            <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border-l-4 border-blue-500">
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                Leadership & Direction
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Memberikan arahan dan kepemimpinan untuk seluruh organisasi
              </p>
            </div>
            <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border-l-4 border-green-500">
              <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                Resource Allocation
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Mengalokasikan sumber daya untuk mencapai tujuan strategis
              </p>
            </div>
            <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border-l-4 border-orange-500">
              <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                Performance Review
              </h4>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                Monitoring dan evaluasi kinerja organisasi secara keseluruhan
              </p>
            </div>
          </div>
        </ComponentCard> */}
      </div>
    </>
  );
}
