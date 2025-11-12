import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  DollarSign,
  Download,
  Eye,
  Receipt,
  PieChart,
  CreditCard,
} from "lucide-react";

export default function FinanceAccounting() {
  const [procedures] = useState([
    {
      id: "1",
      title: "Prosedur Pengelolaan Kas & Bank",
      docNumber: "SOP-FAT-001",
      version: "2.0",
      category: "Cash Management",
      status: "Active",
    },
    {
      id: "2",
      title: "Prosedur Accounts Payable",
      docNumber: "SOP-FAT-002",
      version: "3.0",
      category: "AP",
      status: "Active",
    },
    {
      id: "3",
      title: "Prosedur Accounts Receivable",
      docNumber: "SOP-FAT-003",
      version: "2.0",
      category: "AR",
      status: "Active",
    },
    {
      id: "4",
      title: "Prosedur Petty Cash",
      docNumber: "SOP-FAT-004",
      version: "1.0",
      category: "Petty Cash",
      status: "Active",
    },
    {
      id: "5",
      title: "Prosedur Pelaporan Keuangan",
      docNumber: "SOP-FAT-005",
      version: "2.0",
      category: "Reporting",
      status: "Active",
    },
    {
      id: "6",
      title: "Prosedur Pajak",
      docNumber: "SOP-FAT-006",
      version: "3.0",
      category: "Tax",
      status: "Active",
    },
    {
      id: "7",
      title: "Prosedur Budgeting",
      docNumber: "SOP-FAT-007",
      version: "1.0",
      category: "Budget",
      status: "Active",
    },
  ]);

  return (
    <>
      <PageMeta
        title="Prosedur Finance & Accounting | DCMS Pelita Hati"
        description="Prosedur Keuangan, Akuntansi & Perpajakan"
      />
      <PageBreadcrumb pageTitle="Prosedur Finance & Accounting" />

      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white flex items-center gap-2">
              Prosedur Finance & Accounting
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              SOP untuk pengelolaan keuangan, akuntansi, dan perpajakan
            </p>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-gradient-to-br from-green-500 to-green-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Receipt className="w-8 h-8" />
              <span className="text-3xl font-bold">7</span>
            </div>
            <p className="text-sm opacity-90">Total Procedures</p>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <PieChart className="w-8 h-8" />
              <span className="text-3xl font-bold">3</span>
            </div>
            <p className="text-sm opacity-90">Accounting</p>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <CreditCard className="w-8 h-8" />
              <span className="text-3xl font-bold">2</span>
            </div>
            <p className="text-sm opacity-90">Finance</p>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-lg shadow-lg">
            <div className="flex items-center justify-between mb-2">
              <Receipt className="w-8 h-8" />
              <span className="text-3xl font-bold">2</span>
            </div>
            <p className="text-sm opacity-90">Tax & Budget</p>
          </div>
        </div>

        {/* Procedures Table */}
        <ComponentCard title="Daftar Prosedur Finance & Accounting">
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
                      <span className="px-2 py-1 text-xs rounded bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300">
                        {proc.category}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
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

        {/* Key Areas */}
        {/* <div className="grid md:grid-cols-3 gap-6">
          <ComponentCard title="Accounting">
            <div className="space-y-3">
              <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                  General Ledger
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Journal entry, posting, closing
                </p>
              </div>
              <div className="p-3 bg-green-50 dark:bg-green-900/20 rounded-lg">
                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-1">
                  AP & AR
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Hutang dan piutang management
                </p>
              </div>
              <div className="p-3 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-1">
                  Fixed Assets
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Asset register, depreciation
                </p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Finance">
            <div className="space-y-3">
              <div className="p-3 bg-teal-50 dark:bg-teal-900/20 rounded-lg">
                <h4 className="font-semibold text-teal-900 dark:text-teal-300 mb-1">
                  Cash Management
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Bank reconciliation, cashflow
                </p>
              </div>
              <div className="p-3 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg">
                <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-1">
                  Budget Control
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Planning, monitoring, variance
                </p>
              </div>
              <div className="p-3 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-1">
                  Financial Reporting
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Monthly, quarterly reports
                </p>
              </div>
            </div>
          </ComponentCard>

          <ComponentCard title="Tax">
            <div className="space-y-3">
              <div className="p-3 bg-red-50 dark:bg-red-900/20 rounded-lg">
                <h4 className="font-semibold text-red-900 dark:text-red-300 mb-1">
                  PPh
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pajak penghasilan pasal 21, 23, 25, 29
                </p>
              </div>
              <div className="p-3 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                  PPN
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Pajak pertambahan nilai
                </p>
              </div>
              <div className="p-3 bg-pink-50 dark:bg-pink-900/20 rounded-lg">
                <h4 className="font-semibold text-pink-900 dark:text-pink-300 mb-1">
                  Tax Filing
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  SPT masa dan tahunan
                </p>
              </div>
            </div>
          </ComponentCard>
        </div> */}

        {/* Financial Cycle */}
        {/* <ComponentCard title="Siklus Keuangan Bulanan">
          <div className="space-y-3">
            <div className="flex items-start gap-4 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Recording (Day 1-25)
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Pencatatan transaksi harian, bank reconciliation, petty cash
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Closing (Day 26-28)
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Adjustment entries, accruals, closing process
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Reporting (Day 29-5)
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  Generate financial statements, analysis, management report
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
              <div className="w-10 h-10 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                4
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                  Tax Filing (Day 10-20)
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  SPT masa, e-filing, payment of taxes
                </p>
              </div>
            </div>
          </div>
        </ComponentCard> */}
      </div>
    </>
  );
}
