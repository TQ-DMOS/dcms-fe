import { useState } from "react";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import PageMeta from "../../../components/common/PageMeta";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  Upload,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Calendar,
} from "lucide-react";

interface AuditSchedule {
  id: string;
  department: string;
  auditDate: string;
  auditor: string;
  auditee: string;
  status: string;
  findings: number;
}

interface AuditFinding {
  id: string;
  findingNo: string;
  category: string;
  description: string;
  department: string;
  status: string;
  dueDate: string;
}

export default function AuditInternal() {
  const [auditSchedule] = useState<AuditSchedule[]>([
    {
      id: "1",
      department: "HRD",
      auditDate: "15 Jan 2024",
      auditor: "John Doe (AI Team)",
      auditee: "HRD Manager",
      status: "Completed",
      findings: 2,
    },
    {
      id: "2",
      department: "Finance",
      auditDate: "22 Jan 2024",
      auditor: "Jane Smith (AI Team)",
      auditee: "Finance Manager",
      status: "Completed",
      findings: 1,
    },
    {
      id: "3",
      department: "Warehouse",
      auditDate: "05 Feb 2024",
      auditor: "John Doe (AI Team)",
      auditee: "WH Manager",
      status: "Scheduled",
      findings: 0,
    },
    {
      id: "4",
      department: "Sales",
      auditDate: "12 Feb 2024",
      auditor: "Jane Smith (AI Team)",
      auditee: "Sales Manager",
      status: "Scheduled",
      findings: 0,
    },
  ]);

  const [findings] = useState<AuditFinding[]>([
    {
      id: "1",
      findingNo: "AI-2024-001",
      category: "Minor",
      description: "Beberapa form pelatihan tidak lengkap ditandatangani",
      department: "HRD",
      status: "Closed",
      dueDate: "15 Feb 2024",
    },
    {
      id: "2",
      findingNo: "AI-2024-002",
      category: "Observation",
      description: "Dokumen SOP perlu diupdate sesuai prosedur terbaru",
      department: "HRD",
      status: "Closed",
      dueDate: "20 Feb 2024",
    },
    {
      id: "3",
      findingNo: "AI-2024-003",
      category: "Minor",
      description: "Laporan petty cash terlambat submit",
      department: "Finance",
      status: "Open",
      dueDate: "28 Feb 2024",
    },
  ]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Completed":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
            Completed
          </span>
        );
      case "Scheduled":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            Scheduled
          </span>
        );
      case "In Progress":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            In Progress
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

  const getFindingBadge = (category: string) => {
    switch (category) {
      case "Major":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-red-100 text-red-800">
            Major NC
          </span>
        );
      case "Minor":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-yellow-100 text-yellow-800">
            Minor NC
          </span>
        );
      case "Observation":
        return (
          <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100 text-blue-800">
            Observation
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

  const getFindingStatusBadge = (status: string) => {
    return status === "Closed" ? (
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-green-100 text-green-800">
        Closed
      </span>
    ) : (
      <span className="px-2.5 py-1 text-xs font-medium rounded-full bg-orange-100 text-orange-800">
        Open
      </span>
    );
  };

  return (
    <>
      <PageMeta
        title="Prosedur Audit Internal | DCMS Pelita Hati"
        description="Prosedur Audit Internal ISO 9001:2015"
      />
      <PageBreadcrumb pageTitle="Prosedur Audit Internal" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Prosedur Audit Internal
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              ISO 9001:2015 Klausul 9.2 - Audit Internal
            </p>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
            <Upload className="w-4 h-4" />
            Upload Laporan Audit
          </button>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <Calendar className="w-8 h-8 text-brand-500" />
              <span className="text-2xl font-bold text-gray-900 dark:text-white">
                12
              </span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Audit 2024
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <CheckCircle className="w-8 h-8 text-green-500" />
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Completed
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              <span className="text-2xl font-bold text-yellow-600">3</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Total Findings
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-gray-200 dark:border-gray-700">
            <div className="flex items-center justify-between mb-2">
              <XCircle className="w-8 h-8 text-red-500" />
              <span className="text-2xl font-bold text-red-600">0</span>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">Major NC</p>
          </div>
        </div>

        {/* Audit Schedule */}
        <ComponentCard title="Jadwal Audit 2024">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Department
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Tanggal Audit
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Auditor
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Auditee
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                    Findings
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {auditSchedule.map((audit) => (
                  <tr
                    key={audit.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {audit.department}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {audit.auditDate}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {audit.auditor}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {audit.auditee}
                    </td>
                    <td className="px-4 py-4 text-sm text-center">
                      <span
                        className={`font-semibold ${
                          audit.findings > 0 ? "text-red-600" : "text-green-600"
                        }`}
                      >
                        {audit.findings}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      {getStatusBadge(audit.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Findings */}
        <ComponentCard title="Temuan Audit">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    No. Temuan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Kategori
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Deskripsi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Department
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Due Date
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {findings.map((finding) => (
                  <tr
                    key={finding.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {finding.findingNo}
                    </td>
                    <td className="px-4 py-4">
                      {getFindingBadge(finding.category)}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {finding.description}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {finding.department}
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {finding.dueDate}
                    </td>
                    <td className="px-4 py-4">
                      {getFindingStatusBadge(finding.status)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Audit Process */}
        <ComponentCard title="Tahapan Audit Internal">
          <div className="space-y-3">
            {[
              {
                step: 1,
                title: "Perencanaan Audit",
                desc: "Menyusun jadwal audit tahunan dan program audit",
                color: "blue",
              },
              {
                step: 2,
                title: "Persiapan Audit",
                desc: "Membuat checklist audit dan koordinasi dengan auditee",
                color: "green",
              },
              {
                step: 3,
                title: "Pelaksanaan Audit",
                desc: "Melakukan opening meeting, audit lapangan, dan closing meeting",
                color: "purple",
              },
              {
                step: 4,
                title: "Pelaporan",
                desc: "Menyusun laporan audit dan mencatat temuan",
                color: "orange",
              },
              {
                step: 5,
                title: "Tindak Lanjut",
                desc: "Monitor tindakan korektif atas temuan audit",
                color: "red",
              },
            ].map((item) => (
              <div
                key={item.step}
                className={`flex items-start gap-4 p-4 bg-${item.color}-50 dark:bg-${item.color}-900/20 rounded-lg`}
              >
                <div
                  className={`w-10 h-10 rounded-full bg-${item.color}-500 text-white flex items-center justify-center font-bold flex-shrink-0`}
                >
                  {item.step}
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ComponentCard>
      </div>
    </>
  );
}
