import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  Users,
  Download,
  Eye,
  Briefcase,
  GraduationCap,
  Heart,
  Shield,
} from "lucide-react";

interface Procedure {
  id: string;
  title: string;
  docNumber: string;
  version: string;
  category: string;
  status: string;
}

export default function HRGA() {
  const [procedures] = useState<Procedure[]>([
    {
      id: "1",
      title: "Prosedur Rekrutmen & Seleksi",
      docNumber: "SOP-HRD-001",
      version: "3.0",
      category: "Recruitment",
      status: "Active",
    },
    {
      id: "2",
      title: "Prosedur Onboarding Karyawan Baru",
      docNumber: "SOP-HRD-002",
      version: "2.0",
      category: "Onboarding",
      status: "Active",
    },
    {
      id: "3",
      title: "Prosedur Pelatihan & Pengembangan",
      docNumber: "SOP-HRD-003",
      version: "2.0",
      category: "Training",
      status: "Active",
    },
    {
      id: "4",
      title: "Prosedur Penilaian Kinerja",
      docNumber: "SOP-HRD-004",
      version: "1.0",
      category: "Performance",
      status: "Active",
    },
    {
      id: "5",
      title: "Prosedur Penggajian & Benefit",
      docNumber: "SOP-HRD-005",
      version: "2.0",
      category: "Payroll",
      status: "Active",
    },
    {
      id: "6",
      title: "Prosedur Cuti & Izin",
      docNumber: "SOP-HRD-006",
      version: "1.0",
      category: "Leave",
      status: "Active",
    },
    {
      id: "7",
      title: "Prosedur Pengelolaan Aset",
      docNumber: "SOP-GA-001",
      version: "2.0",
      category: "Asset Management",
      status: "Active",
    },
    {
      id: "8",
      title: "Prosedur Pemeliharaan Gedung",
      docNumber: "SOP-GA-002",
      version: "1.0",
      category: "Facility",
      status: "Active",
    },
    {
      id: "9",
      title: "Prosedur Keamanan & K3",
      docNumber: "SOP-GA-003",
      version: "2.0",
      category: "Safety",
      status: "Active",
    },
  ]);

  const getStatusBadge = (status: string) => {
    return (
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
        Active
      </span>
    );
  };

  return (
    <>
      <PageMeta
        title="Prosedur HRGA | DCMS Pelita Hati"
        description="Prosedur Human Resources & General Affairs"
      />
      <PageBreadcrumb pageTitle="Prosedur HRGA" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              Prosedur HRGA
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Standard Operating Procedures untuk Human Resources & General
              Affairs
            </p>
          </div>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Briefcase className="w-8 h-8" />
              <span className="text-3xl font-bold">4</span>
            </div>
            <p className="text-sm opacity-90">HR Procedures</p>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <GraduationCap className="w-8 h-8" />
              <span className="text-3xl font-bold">2</span>
            </div>
            <p className="text-sm opacity-90">Training</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-8 h-8" />
              <span className="text-3xl font-bold">2</span>
            </div>
            <p className="text-sm opacity-90">Payroll & Benefit</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Shield className="w-8 h-8" />
              <span className="text-3xl font-bold">3</span>
            </div>
            <p className="text-sm opacity-90">GA & Safety</p>
          </div>
        </div>

        {/* Procedures Table */}
        <ComponentCard title="Daftar Prosedur HRGA">
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
                      <span className="px-2 py-1 text-xs rounded bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300">
                        {proc.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">{getStatusBadge(proc.status)}</td>
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

        {/* HR Functions */}
        {/* <div className="grid md:grid-cols-2 gap-6">
          <ComponentCard title="Fungsi HR">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                  Rekrutmen
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Job posting, screening, interview, hiring decision
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                  Training & Development
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Identifikasi kebutuhan, pelaksanaan, evaluasi pelatihan
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-1">
                  Performance Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  KPI setting, monitoring, appraisal, feedback
                </p>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-1">
                  Payroll & Benefit
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Salary processing, BPJS, tax, employee benefits
                </p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Fungsi GA">
            <div className="space-y-3">
              <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <h4 className="font-semibold text-teal-900 dark:text-teal-300 mb-1">
                  Asset Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pengelolaan aset perusahaan, inventory, disposal
                </p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                  Facility Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pemeliharaan gedung, utilities, kebersihan
                </p>
              </div>
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                  Security & K3
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Keamanan, safety, emergency response
                </p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                  Vendor Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Koordinasi dengan vendor eksternal (cleaning, security, dll)
                </p>
              </div>
            </div>
          </ComponentCard>
        </div> */}
      </div>
    </>
  );
}
