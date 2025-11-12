import { useState } from "react";
import PageBreadcrumb from "../../components/common/PageBreadCrumb";
import PageMeta from "../../components/common/PageMeta";
import ComponentCard from "../../components/common/ComponentCard";
import { Target, TrendingUp, Calendar, Users } from "lucide-react";

interface Objective {
  id: string;
  department: string;
  objective: string;
  target: string;
  indicator: string;
  status: string;
  progress: number;
  pic: string;
  deadline: string;
}

export default function SasaranMutu() {
  const [objectives] = useState<Objective[]>([
    {
      id: "1",
      department: "Sales",
      objective: "Meningkatkan penjualan produk",
      target: "15% dari tahun sebelumnya",
      indicator: "Total revenue",
      status: "On Track",
      progress: 68,
      pic: "Sales Manager",
      deadline: "31 Des 2024",
    },
    {
      id: "2",
      department: "HRD",
      objective: "Menurunkan turnover karyawan",
      target: "< 5% per tahun",
      indicator: "Turnover rate",
      status: "On Track",
      progress: 85,
      pic: "HRD Manager",
      deadline: "31 Des 2024",
    },
    {
      id: "3",
      department: "Warehouse",
      objective: "Meningkatkan akurasi inventory",
      target: "99.5%",
      indicator: "Stock accuracy",
      status: "Need Attention",
      progress: 45,
      pic: "WH Manager",
      deadline: "31 Des 2024",
    },
    {
      id: "4",
      department: "IT",
      objective: "System uptime",
      target: "99.9%",
      indicator: "Uptime percentage",
      status: "On Track",
      progress: 92,
      pic: "IT Manager",
      deadline: "31 Des 2024",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "On Track":
        return "bg-green-100 text-green-800";
      case "Need Attention":
        return "bg-yellow-100 text-yellow-800";
      case "Behind":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <PageMeta
        title="Sasaran Mutu | DCMS Pelita Hati"
        description="Sasaran Mutu dan KPI Pelita Hati Group"
      />
      <PageBreadcrumb pageTitle="Sasaran Mutu" />

      <div className="space-y-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Sasaran Mutu 2024
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            Monitoring dan evaluasi pencapaian sasaran mutu per departemen
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Target className="w-8 h-8 text-brand-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Sasaran
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <TrendingUp className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-600">8</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">On Track</p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Need Attention
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Users className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-red-600">1</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Behind Schedule
            </p>
          </div>
        </div>

        {/* Objectives Table */}
        <ComponentCard title="Daftar Sasaran Mutu">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Department
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Sasaran
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Target
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Indikator
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Progress
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    PIC
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Deadline
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {objectives.map((obj) => (
                  <tr
                    key={obj.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {obj.department}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {obj.objective}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {obj.target}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {obj.indicator}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                          <div
                            className="bg-brand-500 h-2 rounded-full"
                            style={{ width: `${obj.progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-gray-600 dark:text-gray-400 whitespace-nowrap">
                          {obj.progress}%
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          obj.status
                        )}`}
                      >
                        {obj.status}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {obj.pic}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {obj.deadline}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
