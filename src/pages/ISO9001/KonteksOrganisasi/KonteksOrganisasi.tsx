import React, { useState } from "react";

// Simple Icons
const Building2 = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
    />
  </svg>
);

const Users = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
    />
  </svg>
);

const Target = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const TrendingUp = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
    />
  </svg>
);

const AlertTriangle = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
    />
  </svg>
);

const Download = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
    />
  </svg>
);

const Edit = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
    />
  </svg>
);

const CheckCircle = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
    />
  </svg>
);

const Eye = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
    />
  </svg>
);

const Plus = () => (
  <svg
    className="w-full h-full"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 4v16m8-8H4"
    />
  </svg>
);

interface ComponentCardProps {
  title: string;
  children: React.ReactNode;
}

const ComponentCard = ({ title, children }: ComponentCardProps) => (
  <div className="bg-white rounded-lg border border-gray-200 p-6">
    <h3 className="text-lg font-semibold text-gray-900 mb-4">{title}</h3>
    {children}
  </div>
);

type InfoCardColor = "blue" | "green" | "purple" | "orange";

interface InfoCardProps {
  title: string;
  description: string;
  icon: React.ComponentType; // icon boleh berupa komponen apa pun
  color?: InfoCardColor;
  content: React.ReactNode;
}

interface Issue {
  id: string;
  category: "external" | "internal";
  subcategory: string;
  issue: string;
  impact: string;
  status: "Active" | "In Progress" | "Resolved";
  priority: "High" | "Medium" | "Low";
}

const InfoCard = ({
  title,
  description,
  icon: Icon,
  color = "blue",
  content,
}: InfoCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const colorClasses = {
    blue: "border-blue-500 bg-blue-50",
    green: "border-green-500 bg-green-50",
    purple: "border-purple-500 bg-purple-50",
    orange: "border-orange-500 bg-orange-50",
  } as const;

  const iconColors = {
    blue: "text-blue-600",
    green: "text-green-600",
    purple: "text-purple-600",
    orange: "text-orange-600",
  } as const;

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`p-6 rounded-lg border-l-4 cursor-pointer transition-all hover:shadow-lg ${colorClasses[color]}`}
      >
        <div className="flex items-start gap-4">
          <div className={`w-8 h-8 ${iconColors[color]}`}>
            <Icon />
          </div>
          <div className="flex-1">
            <h4 className="text-lg font-bold text-gray-900 mb-2">{title}</h4>
            <p className="text-sm text-gray-600">{description}</p>
          </div>
        </div>
      </div>

      {isHovered && (
        <div className="absolute z-10 mt-2 w-full bg-white rounded-lg shadow-xl border border-gray-200 p-4 max-h-96 overflow-y-auto">
          {content}
        </div>
      )}
    </div>
  );
};

export default function KonteksOrganisasi() {
  const [issues] = useState<Issue[]>([
    {
      id: "1",
      category: "external",
      subcategory: "Ekonomi",
      issue: "Inflasi tinggi mempengaruhi daya beli",
      impact: "Penurunan volume penjualan 10-15%",
      status: "Active",
      priority: "High",
    },
    {
      id: "2",
      category: "external",
      subcategory: "Teknologi",
      issue: "Digitalisasi proses bisnis B2B",
      impact: "Perlu investasi sistem ERP terintegrasi",
      status: "Active",
      priority: "High",
    },
    {
      id: "3",
      category: "internal",
      subcategory: "SDM",
      issue: "Turnover karyawan tinggi (>10%)",
      impact: "Biaya rekrutmen dan training meningkat",
      status: "Active",
      priority: "High",
    },
    {
      id: "4",
      category: "internal",
      subcategory: "Infrastruktur",
      issue: "Kapasitas gudang mendekati limit",
      impact: "Perlu ekspansi atau warehouse baru",
      status: "In Progress",
      priority: "High",
    },
  ]);

  const [isEditMode, setIsEditMode] = useState(false);

  const getStatusColor = (status: "Active" | "In Progress" | "Resolved") => {
    switch (status) {
      case "Active":
        return "bg-red-100 text-red-800";
      case "In Progress":
        return "bg-yellow-100 text-yellow-800";
      case "Resolved":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getPriorityColor = (priority: "High" | "Medium" | "Low") => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "Low":
        return "bg-green-100 text-green-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const stats = {
    totalIssues: issues.length,
    externalIssues: issues.filter((i) => i.category === "external").length,
    internalIssues: issues.filter((i) => i.category === "internal").length,
    activeIssues: issues.filter((i) => i.status === "Active").length,
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Klausul 4: Konteks Organisasi
          </h1>
          <p className="text-gray-600 mt-1">
            ISO 9001:2015 - Memahami Organisasi, Stakeholder & Ruang Lingkup SMM
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            <div className="w-4 h-4">
              <Download />
            </div>
            Export
          </button>
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <div className="w-4 h-4">
              {isEditMode ? <CheckCircle /> : <Edit />}
            </div>
            {isEditMode ? "Simpan" : "Edit"}
          </button>
        </div>
      </div>

      {/* Statistics Overview */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Isu</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {stats.totalIssues}
              </p>
            </div>
            <div className="w-10 h-10 text-orange-500">
              <AlertTriangle />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Isu Aktif</p>
              <p className="text-3xl font-bold text-red-600 mt-1">
                {stats.activeIssues}
              </p>
            </div>
            <div className="w-10 h-10 text-red-500">
              <Target />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Eksternal</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">
                {stats.externalIssues}
              </p>
            </div>
            <div className="w-10 h-10 text-purple-500">
              <TrendingUp />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Internal</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">
                {stats.internalIssues}
              </p>
            </div>
            <div className="w-10 h-10 text-blue-500">
              <Building2 />
            </div>
          </div>
        </div>
      </div>

      {/* Sub-Klausul Cards with Hover Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <InfoCard
          title="4.1 Memahami Organisasi & Konteksnya"
          description="Hover untuk melihat detail klausul"
          icon={Building2}
          color="blue"
          content={
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">Tujuan:</h5>
              <p className="text-sm text-gray-600">
                Mengidentifikasi dan memahami faktor-faktor internal dan
                eksternal yang dapat mempengaruhi kemampuan organisasi dalam
                mencapai hasil yang diharapkan dari SMM.
              </p>
              <h5 className="font-semibold text-gray-900 mt-3">Cakupan:</h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>
                  • Analisis PESTEL (Political, Economic, Social, Technological,
                  Environmental, Legal)
                </li>
                <li>
                  • Analisis Internal: SDM, Infrastruktur, Proses, Teknologi
                </li>
                <li>• Analisis SWOT untuk evaluasi komprehensif</li>
              </ul>
            </div>
          }
        />

        <InfoCard
          title="4.2 Kebutuhan Pihak Berkepentingan"
          description="Hover untuk melihat detail klausul"
          icon={Users}
          color="green"
          content={
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">Tujuan:</h5>
              <p className="text-sm text-gray-600">
                Menentukan pihak-pihak berkepentingan yang relevan dengan SMM
                dan persyaratan mereka.
              </p>
              <h5 className="font-semibold text-gray-900 mt-3">
                Stakeholder Utama:
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Eksternal: Pelanggan, Supplier, Pemerintah, Bank</li>
                <li>• Internal: Karyawan, Pemegang Saham, Manajemen</li>
                <li>• Analisis: Kebutuhan, Ekspektasi, Tingkat Pengaruh</li>
              </ul>
            </div>
          }
        />

        <InfoCard
          title="4.3 Ruang Lingkup SMM"
          description="Hover untuk melihat detail klausul"
          icon={Target}
          color="purple"
          content={
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">Tujuan:</h5>
              <p className="text-sm text-gray-600">
                Menentukan batas-batas dan penerapan SMM untuk menetapkan ruang
                lingkupnya.
              </p>
              <h5 className="font-semibold text-gray-900 mt-3">
                Pertimbangan:
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Isu eksternal dan internal (4.1)</li>
                <li>• Persyaratan stakeholder (4.2)</li>
                <li>• Produk dan layanan organisasi</li>
                <li>• Justifikasi pengecualian (jika ada)</li>
              </ul>
            </div>
          }
        />

        <InfoCard
          title="4.4 Sistem Manajemen Mutu"
          description="Hover untuk melihat detail klausul"
          icon={TrendingUp}
          color="orange"
          content={
            <div className="space-y-3">
              <h5 className="font-semibold text-gray-900">Tujuan:</h5>
              <p className="text-sm text-gray-600">
                Menetapkan, menerapkan, memelihara dan meningkatkan SMM termasuk
                proses yang diperlukan.
              </p>
              <h5 className="font-semibold text-gray-900 mt-3">
                Jenis Proses:
              </h5>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>• Core Process: Procurement, Warehouse, Sales</li>
                <li>• Support Process: Finance, HR, IT</li>
                <li>• Management Process: QM, Management Review</li>
              </ul>
            </div>
          }
        />
      </div>

      {/* Main Data Table */}
      <ComponentCard title="Analisis Konteks Organisasi Lengkap">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              Semua
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Isu Eksternal
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Isu Internal
            </button>
          </div>
          <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            <div className="w-4 h-4">
              <Plus />
            </div>
            Tambah Data
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Kategori
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Sub-Kategori
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Isu
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Dampak
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Prioritas
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {issues.map((issue) => (
                <tr key={issue.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        issue.category === "external"
                          ? "bg-purple-100 text-purple-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {issue.category === "external" ? "Eksternal" : "Internal"}
                    </span>
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {issue.subcategory}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {isEditMode ? (
                      <input
                        type="text"
                        defaultValue={issue.issue}
                        className="w-full px-2 py-1 border rounded text-sm"
                      />
                    ) : (
                      issue.issue
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {isEditMode ? (
                      <input
                        type="text"
                        defaultValue={issue.impact}
                        className="w-full px-2 py-1 border rounded text-sm"
                      />
                    ) : (
                      issue.impact
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(
                        issue.status
                      )}`}
                    >
                      {issue.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-2.5 py-1 text-xs font-medium rounded-full ${getPriorityColor(
                        issue.priority
                      )}`}
                    >
                      {issue.priority}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex items-center gap-2">
                      <button
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded"
                        title="View"
                      >
                        <div className="w-4 h-4">
                          <Eye />
                        </div>
                      </button>
                      <button
                        className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded"
                        title="Edit"
                      >
                        <div className="w-4 h-4">
                          <Edit />
                        </div>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentCard>

      {/* Document Info */}
      <ComponentCard title="Informasi Dokumen">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Nomor Dokumen</p>
            <p className="text-sm font-medium text-gray-900">ISO-4-001</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Versi</p>
            <p className="text-sm font-medium text-gray-900">v1.0</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Review Terakhir</p>
            <p className="text-sm font-medium text-gray-900">15 Jan 2024</p>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">Review Berikutnya</p>
            <p className="text-sm font-medium text-gray-900">15 Jul 2024</p>
          </div>
        </div>
      </ComponentCard>
    </div>
  );
}
