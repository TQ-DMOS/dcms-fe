import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  GitBranch,
  Download,
  Upload,
  Eye,
  FileText,
  ArrowRight,
  Settings,
} from "lucide-react";

interface Process {
  id: string;
  code: string;
  name: string;
  type: string;
  owner: string;
  input: string;
  output: string;
  kpi: string;
  status: string;
}

export default function SistemManajemenMutu() {
  const [processes] = useState<Process[]>([
    {
      id: "1",
      code: "P-001",
      name: "Procurement Process",
      type: "Core",
      owner: "Procurement Manager",
      input: "Purchase Request, Supplier List",
      output: "Purchase Order, Goods Receipt",
      kpi: "Lead time procurement < 5 hari",
      status: "Active",
    },
    {
      id: "2",
      code: "P-002",
      name: "Warehouse Management",
      type: "Core",
      owner: "Warehouse Manager",
      input: "Goods Receipt, Delivery Order",
      output: "Stock Update, Delivery Note",
      kpi: "Stock accuracy > 99%",
      status: "Active",
    },
    {
      id: "3",
      code: "P-003",
      name: "Sales & Distribution",
      type: "Core",
      owner: "Sales Manager",
      input: "Customer Order, Stock Availability",
      output: "Sales Invoice, Delivery Order",
      kpi: "Order fulfillment rate > 95%",
      status: "Active",
    },
    {
      id: "4",
      code: "P-004",
      name: "Financial Management",
      type: "Support",
      owner: "Finance Manager",
      input: "Transaction Data, Bank Statement",
      output: "Financial Report, Payment",
      kpi: "Financial report on time",
      status: "Active",
    },
    {
      id: "5",
      code: "P-005",
      name: "HR Management",
      type: "Support",
      owner: "HRD Manager",
      input: "Recruitment Request, Training Need",
      output: "Employee Data, Training Record",
      kpi: "Turnover rate < 10%",
      status: "Active",
    },
    {
      id: "6",
      code: "P-006",
      name: "IT Management",
      type: "Support",
      owner: "IT Manager",
      input: "IT Request, System Issue",
      output: "IT Solution, System Update",
      kpi: "System uptime > 99%",
      status: "Active",
    },
    {
      id: "7",
      code: "P-007",
      name: "Quality Management",
      type: "Management",
      owner: "MR",
      input: "Audit Finding, NCR",
      output: "Corrective Action, Audit Report",
      kpi: "Audit compliance > 90%",
      status: "Active",
    },
    {
      id: "8",
      code: "P-008",
      name: "Management Review",
      type: "Management",
      owner: "Top Management",
      input: "KPI Report, Audit Result",
      output: "Management Decision, Action Plan",
      kpi: "MR dilakukan 4x per tahun",
      status: "Active",
    },
  ]);

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Core":
        return "bg-brand-100 text-brand-800 dark:bg-brand-900 dark:text-brand-300";
      case "Support":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Management":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <>
      <PageMeta
        title="4.4 Sistem Manajemen Mutu | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 4.4 - Sistem Manajemen Mutu dan Prosesnya"
      />
      <PageBreadcrumb pageTitle="4.4 Sistem Manajemen Mutu" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Download Process Map
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
              <Upload className="w-4 h-4" />
              Upload Update
            </button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Total Proses
                </p>
                <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                  {processes.length}
                </p>
              </div>
              <GitBranch className="w-8 h-8 text-brand-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Core Process
                </p>
                <p className="text-2xl font-bold text-brand-600 mt-1">
                  {processes.filter((p) => p.type === "Core").length}
                </p>
              </div>
              <Settings className="w-8 h-8 text-brand-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Support Process
                </p>
                <p className="text-2xl font-bold text-blue-600 mt-1">
                  {processes.filter((p) => p.type === "Support").length}
                </p>
              </div>
              <Settings className="w-8 h-8 text-blue-500" />
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Management Process
                </p>
                <p className="text-2xl font-bold text-purple-600 mt-1">
                  {processes.filter((p) => p.type === "Management").length}
                </p>
              </div>
              <Settings className="w-8 h-8 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Process Map Visual */}
        <ComponentCard title="Peta Proses (Process Map)">
          <div className="bg-gray-50 dark:bg-gray-900 p-6 rounded-lg">
            {/* Management Processes */}
            <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-purple-700 dark:text-purple-400 mb-3">
                MANAGEMENT PROCESSES
              </h4>
              <div className="flex gap-2 flex-wrap">
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded border border-purple-200 dark:border-purple-700 text-sm">
                  Management Review
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded border border-purple-200 dark:border-purple-700 text-sm">
                  Quality Management
                </div>
              </div>
            </div>

            {/* Core Processes */}
            <div className="bg-brand-50 dark:bg-brand-900/20 border-2 border-brand-500 rounded-lg p-4 mb-4">
              <h4 className="font-bold text-brand-700 dark:text-brand-400 mb-3">
                CORE PROCESSES (Value Chain)
              </h4>
              <div className="flex items-center gap-3 justify-center">
                <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded border-2 border-brand-500 text-sm font-medium">
                  Procurement
                </div>
                <ArrowRight className="w-5 h-5 text-brand-500" />
                <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded border-2 border-brand-500 text-sm font-medium">
                  Warehouse
                </div>
                <ArrowRight className="w-5 h-5 text-brand-500" />
                <div className="bg-white dark:bg-gray-800 px-6 py-3 rounded border-2 border-brand-500 text-sm font-medium">
                  Sales & Distribution
                </div>
              </div>
            </div>

            {/* Support Processes */}
            <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h4 className="font-bold text-blue-700 dark:text-blue-400 mb-3">
                SUPPORT PROCESSES
              </h4>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded border border-blue-200 dark:border-blue-700 text-sm text-center">
                  Finance
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded border border-blue-200 dark:border-blue-700 text-sm text-center">
                  HR Management
                </div>
                <div className="bg-white dark:bg-gray-800 px-4 py-2 rounded border border-blue-200 dark:border-blue-700 text-sm text-center">
                  IT Management
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Process List */}
        <ComponentCard title="Detail Proses">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-900">
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kode
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Nama Proses
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tipe
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Process Owner
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Input
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Output
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    KPI
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Aksi
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {processes.map((process) => (
                  <tr
                    key={process.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {process.code}
                    </td>
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {process.name}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          process.type
                        )}`}
                      >
                        {process.type}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {process.owner}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                      {process.input}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                      {process.output}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400 max-w-xs">
                      {process.kpi}
                    </td>
                    <td className="px-4 py-4">
                      <button
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                        title="View Detail"
                      >
                        <Eye className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Process Interaction */}
        <ComponentCard title="Interaksi Antar Proses">
          <div className="space-y-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                1. Procurement → Warehouse
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Output dari Procurement (Goods Receipt) menjadi Input untuk
                Warehouse untuk disimpan dan dikelola
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                2. Warehouse → Sales & Distribution
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Stock Availability dari Warehouse menjadi Input untuk Sales
                dalam memproses order customer
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                3. Financial Management mendukung semua Core Process
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Finance memproses payment untuk Procurement, payroll untuk HR,
                dan invoicing untuk Sales
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                4. Quality Management me-monitor semua proses
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                QM melakukan audit internal, NCR tracking, dan corrective action
                untuk semua proses
              </p>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                5. Management Review me-review semua proses
              </h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Management Review menggunakan KPI dari semua proses untuk
                menghasilkan keputusan strategis
              </p>
            </div>
          </div>
        </ComponentCard>

        {/* Documented Information */}
        <ComponentCard title="Informasi Terdokumentasi">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Manual Mutu
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Dokumen utama yang menjelaskan SMM secara keseluruhan
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Prosedur (SOP)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    SOP untuk setiap proses yang telah diidentifikasi
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Instruksi Kerja
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Work instruction detail untuk aktivitas spesifik
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
              <div className="flex items-start gap-3">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Rekaman (Records)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Form, log, dan bukti pelaksanaan proses
                  </p>
                </div>
              </div>
            </div>
          </div>
        </ComponentCard>

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Nomor Dokumen
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                ISO-4.4-001
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Versi
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                v1.0
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Review Terakhir
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                15 Jan 2024
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-1">
                Review Berikutnya
              </p>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                15 Jul 2024
              </p>
            </div>
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
