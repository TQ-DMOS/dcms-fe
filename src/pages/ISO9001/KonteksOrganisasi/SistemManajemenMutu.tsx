import React, { useState } from "react";

// Simple Icons
const GitBranch = () => (
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
      d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4"
    />
  </svg>
);

const Settings = () => (
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
      d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
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

const Trash2 = () => (
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
      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
    />
  </svg>
);

const ArrowRight = () => (
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
      d="M9 5l7 7-7 7"
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

interface Process {
  id: string;
  code: string;
  name: string;
  type: "Core" | "Support" | "Management";
  owner: string;
  input: string;
  output: string;
  kpi: string;
  status: "Active" | "Inactive";
}

export default function SistemManajemenMutu() {
  const [processes, setProcesses] = useState<Process[]>([
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

  const [isEditMode, setIsEditMode] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showAddModal, setShowAddModal] = useState(false);

  const getTypeColor = (type: "Core" | "Support" | "Management") => {
    switch (type) {
      case "Core":
        return "bg-blue-100 text-blue-800";
      case "Support":
        return "bg-green-100 text-green-800";
      case "Management":
        return "bg-purple-100 text-purple-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
  };

  const handleSave = () => {
    setEditingId(null);
    setIsEditMode(false);
  };

  const handleDelete = (id: string) => {
    if (confirm("Apakah Anda yakin ingin menghapus proses ini?")) {
      setProcesses(processes.filter((p) => p.id !== id));
    }
  };

  const handleInputChange = (
    id: string,
    field: keyof Process,
    value: string
  ) => {
    setProcesses(
      processes.map((p) => (p.id === id ? { ...p, [field]: value } : p))
    );
  };

  const stats = {
    totalProcesses: processes.length,
    coreProcesses: processes.filter((p) => p.type === "Core").length,
    supportProcesses: processes.filter((p) => p.type === "Support").length,
    managementProcesses: processes.filter((p) => p.type === "Management")
      .length,
  };

  return (
    <div className="space-y-6 p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            4.4 Sistem Manajemen Mutu dan Prosesnya
          </h1>
          <p className="text-gray-600 mt-1">
            ISO 9001:2015 - Identifikasi dan Pengelolaan Proses Bisnis
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50">
            <div className="w-4 h-4">
              <Download />
            </div>
            Export Process Map
          </button>
          <button
            onClick={() => setIsEditMode(!isEditMode)}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
          >
            <div className="w-4 h-4">
              {isEditMode ? <CheckCircle /> : <Edit />}
            </div>
            {isEditMode ? "Selesai Edit" : "Mode Edit"}
          </button>
        </div>
      </div>

      {/* Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Total Proses</p>
              <p className="text-3xl font-bold text-gray-900 mt-1">
                {stats.totalProcesses}
              </p>
            </div>
            <div className="w-10 h-10 text-orange-500">
              <GitBranch />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Core Process</p>
              <p className="text-3xl font-bold text-blue-600 mt-1">
                {stats.coreProcesses}
              </p>
            </div>
            <div className="w-10 h-10 text-blue-500">
              <Settings />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Support Process</p>
              <p className="text-3xl font-bold text-green-600 mt-1">
                {stats.supportProcesses}
              </p>
            </div>
            <div className="w-10 h-10 text-green-500">
              <Settings />
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Management Process</p>
              <p className="text-3xl font-bold text-purple-600 mt-1">
                {stats.managementProcesses}
              </p>
            </div>
            <div className="w-10 h-10 text-purple-500">
              <Settings />
            </div>
          </div>
        </div>
      </div>

      {/* Process Map Visual */}
      <ComponentCard title="Peta Proses (Process Map)">
        <div className="bg-gray-50 p-6 rounded-lg">
          {/* Management Processes */}
          <div className="bg-purple-50 border-2 border-purple-300 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-purple-700 mb-3 text-center">
              MANAGEMENT PROCESSES
            </h4>
            <div className="flex gap-3 justify-center flex-wrap">
              {processes
                .filter((p) => p.type === "Management")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-white px-6 py-3 rounded-lg border-2 border-purple-400 text-sm font-medium hover:shadow-md transition-shadow"
                  >
                    {p.name}
                  </div>
                ))}
            </div>
          </div>

          {/* Core Processes */}
          <div className="bg-blue-50 border-4 border-blue-500 rounded-lg p-4 mb-4">
            <h4 className="font-bold text-blue-700 mb-3 text-center">
              CORE PROCESSES (Value Chain)
            </h4>
            <div className="flex items-center gap-3 justify-center flex-wrap">
              {processes
                .filter((p) => p.type === "Core")
                .map((p, idx, arr) => (
                  <React.Fragment key={p.id}>
                    <div className="bg-white px-8 py-4 rounded-lg border-2 border-blue-500 text-sm font-medium hover:shadow-md transition-shadow">
                      {p.name}
                    </div>
                    {idx < arr.length - 1 && (
                      <div className="w-6 h-6 text-blue-500">
                        <ArrowRight />
                      </div>
                    )}
                  </React.Fragment>
                ))}
            </div>
          </div>

          {/* Support Processes */}
          <div className="bg-green-50 border-2 border-green-300 rounded-lg p-4">
            <h4 className="font-bold text-green-700 mb-3 text-center">
              SUPPORT PROCESSES
            </h4>
            <div className="grid grid-cols-3 gap-3">
              {processes
                .filter((p) => p.type === "Support")
                .map((p) => (
                  <div
                    key={p.id}
                    className="bg-white px-4 py-3 rounded-lg border-2 border-green-400 text-sm text-center font-medium hover:shadow-md transition-shadow"
                  >
                    {p.name}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </ComponentCard>

      {/* Process Table */}
      <ComponentCard title="Detail Proses Bisnis (Editable)">
        <div className="mb-4 flex justify-between items-center">
          <div className="flex gap-2">
            <button className="px-3 py-1.5 text-sm bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200">
              Semua Proses
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Core
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Support
            </button>
            <button className="px-3 py-1.5 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Management
            </button>
          </div>
          {isEditMode && (
            <button
              onClick={() => setShowAddModal(true)}
              className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              <div className="w-4 h-4">
                <Plus />
              </div>
              Tambah Proses
            </button>
          )}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50">
              <tr className="border-b border-gray-200">
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
                {isEditMode && (
                  <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Aksi
                  </th>
                )}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {processes.map((process) => (
                <tr key={process.id} className="hover:bg-gray-50">
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {isEditMode && editingId === process.id ? (
                      <input
                        type="text"
                        defaultValue={process.code}
                        onChange={(e) =>
                          handleInputChange(process.id, "code", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded text-sm"
                      />
                    ) : (
                      process.code
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm font-medium text-gray-900">
                    {isEditMode && editingId === process.id ? (
                      <input
                        type="text"
                        defaultValue={process.name}
                        onChange={(e) =>
                          handleInputChange(process.id, "name", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded text-sm"
                      />
                    ) : (
                      process.name
                    )}
                  </td>
                  <td className="px-4 py-4">
                    {isEditMode && editingId === process.id ? (
                      <select
                        defaultValue={process.type}
                        onChange={(e) =>
                          handleInputChange(
                            process.id,
                            "type",
                            e.target.value as "Core" | "Support" | "Management"
                          )
                        }
                        className="px-2 py-1 border rounded text-sm"
                      >
                        <option value="Core">Core</option>
                        <option value="Support">Support</option>
                        <option value="Management">Management</option>
                      </select>
                    ) : (
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(
                          process.type
                        )}`}
                      >
                        {process.type}
                      </span>
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600">
                    {isEditMode && editingId === process.id ? (
                      <input
                        type="text"
                        defaultValue={process.owner}
                        onChange={(e) =>
                          handleInputChange(process.id, "owner", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded text-sm"
                      />
                    ) : (
                      process.owner
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                    {isEditMode && editingId === process.id ? (
                      <textarea
                        defaultValue={process.input}
                        onChange={(e) =>
                          handleInputChange(process.id, "input", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded text-sm"
                        rows={2}
                      />
                    ) : (
                      process.input
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                    {isEditMode && editingId === process.id ? (
                      <textarea
                        defaultValue={process.output}
                        onChange={(e) =>
                          handleInputChange(
                            process.id,
                            "output",
                            e.target.value
                          )
                        }
                        className="w-full px-2 py-1 border rounded text-sm"
                        rows={2}
                      />
                    ) : (
                      process.output
                    )}
                  </td>
                  <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
                    {isEditMode && editingId === process.id ? (
                      <input
                        type="text"
                        defaultValue={process.kpi}
                        onChange={(e) =>
                          handleInputChange(process.id, "kpi", e.target.value)
                        }
                        className="w-full px-2 py-1 border rounded text-sm"
                      />
                    ) : (
                      process.kpi
                    )}
                  </td>
                  {isEditMode && (
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        {editingId === process.id ? (
                          <button
                            onClick={handleSave}
                            className="p-1.5 text-green-600 hover:bg-green-50 rounded"
                            title="Save"
                          >
                            <div className="w-4 h-4">
                              <CheckCircle />
                            </div>
                          </button>
                        ) : (
                          <button
                            onClick={() => handleEdit(process.id)}
                            className="p-1.5 text-yellow-600 hover:bg-yellow-50 rounded"
                            title="Edit"
                          >
                            <div className="w-4 h-4">
                              <Edit />
                            </div>
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(process.id)}
                          className="p-1.5 text-red-600 hover:bg-red-50 rounded"
                          title="Delete"
                        >
                          <div className="w-4 h-4">
                            <Trash2 />
                          </div>
                        </button>
                      </div>
                    </td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </ComponentCard>

      {/* Process Interaction */}
      <ComponentCard title="Interaksi Antar Proses">
        <div className="space-y-4">
          <div className="p-4 bg-blue-50 border-l-4 border-blue-500 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-5 h-5 text-blue-600">
                <ArrowRight />
              </div>
              Procurement → Warehouse
            </h4>
            <p className="text-sm text-gray-600">
              Output dari Procurement (Goods Receipt) menjadi Input untuk
              Warehouse untuk disimpan dan dikelola
            </p>
          </div>

          <div className="p-4 bg-green-50 border-l-4 border-green-500 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-5 h-5 text-green-600">
                <ArrowRight />
              </div>
              Warehouse → Sales & Distribution
            </h4>
            <p className="text-sm text-gray-600">
              Stock Availability dari Warehouse menjadi Input untuk Sales dalam
              memproses order customer
            </p>
          </div>

          <div className="p-4 bg-purple-50 border-l-4 border-purple-500 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-5 h-5 text-purple-600">
                <Settings />
              </div>
              Support Process mendukung Core Process
            </h4>
            <p className="text-sm text-gray-600">
              Finance memproses payment untuk Procurement, HR mengelola SDM, IT
              menyediakan sistem
            </p>
          </div>

          <div className="p-4 bg-orange-50 border-l-4 border-orange-500 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
              <div className="w-5 h-5 text-orange-600">
                <Eye />
              </div>
              Management Process memonitor semua proses
            </h4>
            <p className="text-sm text-gray-600">
              Quality Management melakukan audit, NCR tracking. Management
              Review menggunakan KPI untuk keputusan strategis
            </p>
          </div>
        </div>
      </ComponentCard>

      {/* Document Info */}
      <ComponentCard title="Informasi Dokumen">
        <div className="grid md:grid-cols-4 gap-4">
          <div>
            <p className="text-sm text-gray-500 mb-1">Nomor Dokumen</p>
            <p className="text-sm font-medium text-gray-900">ISO-4.4-001</p>
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

      {/* Add Process Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-999999">
          <div className="bg-white rounded-lg p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto">
            <h3 className="text-xl font-bold text-gray-900 mb-4">
              Tambah Proses Baru
            </h3>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const newProcess: Process = {
                  id: Date.now().toString(),
                  code: formData.get("code") as string,
                  name: formData.get("name") as string,
                  type: formData.get("type") as
                    | "Core"
                    | "Support"
                    | "Management",
                  owner: formData.get("owner") as string,
                  input: formData.get("input") as string,
                  output: formData.get("output") as string,
                  kpi: formData.get("kpi") as string,
                  status: "Active",
                };
                setProcesses([...processes, newProcess]);
                setShowAddModal(false);
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Kode Proses
                </label>
                <input
                  type="text"
                  name="code"
                  required
                  placeholder="P-009"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nama Proses
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Customer Service Process"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Tipe Proses
                </label>
                <select
                  name="type"
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="Core">Core Process</option>
                  <option value="Support">Support Process</option>
                  <option value="Management">Management Process</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Process Owner
                </label>
                <input
                  type="text"
                  name="owner"
                  required
                  placeholder="Customer Service Manager"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Input
                </label>
                <textarea
                  name="input"
                  required
                  placeholder="Customer Inquiry, Complaint"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Output
                </label>
                <textarea
                  name="output"
                  required
                  placeholder="Resolution, Customer Satisfaction"
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  KPI
                </label>
                <input
                  type="text"
                  name="kpi"
                  required
                  placeholder="Response time < 24 hours"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              <div className="flex gap-3 justify-end pt-4 border-t">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                >
                  Batal
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700"
                >
                  Simpan Proses
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
