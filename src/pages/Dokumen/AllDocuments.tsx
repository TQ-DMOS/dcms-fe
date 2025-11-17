import { useState } from "react";
import {
  FileText,
  Search,
  Filter,
  Download,
  Eye,
  Edit,
  Trash2,
  Calendar,
  User,
  Building2,
  ChevronDown,
  X,
} from "lucide-react";

interface Document {
  id: string;
  docNumber: string;
  docName: string;
  docType: string;
  department: string;
  version: string;
  status: string;
  uploadDate: string;
  uploadBy: string;
  fileSize: string;
  description: string;
}

export default function AllDocuments() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [selectedType, setSelectedType] = useState("all");
  const [selectedDept, setSelectedDept] = useState("all");
  const [selectedStatus, setSelectedStatus] = useState("all");
  const [dateRange, setDateRange] = useState({ from: "", to: "" });

  const [documents] = useState<Document[]>([
    {
      id: "1",
      docNumber: "ST-TM-001",
      docName: "Visi Misi Perusahaan 2024",
      docType: "Standard (ST)",
      department: "Top Management",
      version: "2.0",
      status: "Published",
      uploadDate: "15 Jan 2024",
      uploadBy: "Admin TM",
      fileSize: "2.5 MB",
      description: "Dokumen visi dan misi perusahaan untuk tahun 2024",
    },
    {
      id: "2",
      docNumber: "SOP-HRD-001",
      docName: "SOP Rekrutmen Karyawan",
      docType: "SOP",
      department: "HRGA",
      version: "3.1",
      status: "Published",
      uploadDate: "10 Jan 2024",
      uploadBy: "HRD Manager",
      fileSize: "1.8 MB",
      description: "Prosedur standar untuk rekrutmen karyawan baru",
    },
    {
      id: "3",
      docNumber: "IK-WH-005",
      docName: "Instruksi Kerja Stock Opname",
      docType: "Instruksi Kerja (IK)",
      department: "Warehouse",
      version: "1.0",
      status: "Under Review",
      uploadDate: "08 Jan 2024",
      uploadBy: "WH Supervisor",
      fileSize: "950 KB",
      description: "Instruksi kerja untuk melakukan stock opname bulanan",
    },
    {
      id: "4",
      docNumber: "FM-FAT-012",
      docName: "Form Permintaan Pembayaran",
      docType: "Form (FM)",
      department: "FAT & Purchasing",
      version: "2.0",
      status: "Published",
      uploadDate: "05 Jan 2024",
      uploadBy: "FAT Manager",
      fileSize: "450 KB",
      description: "Form untuk pengajuan permintaan pembayaran",
    },
    {
      id: "5",
      docNumber: "LOG-IT-003",
      docName: "Log Maintenance Server",
      docType: "Log",
      department: "IT",
      version: "1.0",
      status: "Draft",
      uploadDate: "03 Jan 2024",
      uploadBy: "IT Support",
      fileSize: "120 KB",
      description: "Log pencatatan maintenance server bulanan",
    },
    {
      id: "6",
      docNumber: "SOP-SLS-008",
      docName: "SOP Pengajuan Diskon Khusus",
      docType: "SOP",
      department: "Sales",
      version: "1.5",
      status: "Pending Approval",
      uploadDate: "02 Jan 2024",
      uploadBy: "Sales Manager",
      fileSize: "1.2 MB",
      description: "SOP untuk pengajuan diskon khusus kepada customer",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300";
      case "Under Review":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300";
      case "Pending Approval":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300";
      case "Draft":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      case "Archived":
        return "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const filteredDocuments = documents.filter((doc) => {
    const matchesSearch =
      doc.docName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.docNumber.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType =
      selectedType === "all" || doc.docType.includes(selectedType);
    const matchesDept =
      selectedDept === "all" || doc.department === selectedDept;
    const matchesStatus =
      selectedStatus === "all" || doc.status === selectedStatus;

    return matchesSearch && matchesType && matchesDept && matchesStatus;
  });

  const clearFilters = () => {
    setSelectedType("all");
    setSelectedDept("all");
    setSelectedStatus("all");
    setDateRange({ from: "", to: "" });
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Semua Dokumen
        </h2>
        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
          Kelola dan akses semua dokumen dalam sistem DCMS
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Total Dokumen
              </p>
              <p className="text-2xl font-bold text-gray-900 dark:text-white mt-1">
                {documents.length}
              </p>
            </div>
            <FileText className="w-8 h-8 text-brand-500" />
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Published
              </p>
              <p className="text-2xl font-bold text-green-600 mt-1">
                {documents.filter((d) => d.status === "Published").length}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Under Review
              </p>
              <p className="text-2xl font-bold text-blue-600 mt-1">
                {documents.filter((d) => d.status === "Under Review").length}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Draft</p>
              <p className="text-2xl font-bold text-gray-600 mt-1">
                {documents.filter((d) => d.status === "Draft").length}
              </p>
            </div>
            <div className="w-8 h-8 rounded-full bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
              <FileText className="w-5 h-5 text-gray-600" />
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="bg-white dark:bg-gray-800 p-4 rounded-lg border border-gray-200 dark:border-gray-700">
        <div className="flex flex-col lg:flex-row gap-4">
          {/* Search */}
          <div className="flex-1">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari nama dokumen atau nomor dokumen..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
              />
            </div>
          </div>

          {/* Filter Toggle */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
              showFilters
                ? "bg-brand-500 text-white border-brand-500"
                : "bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800"
            }`}
          >
            <Filter className="w-4 h-4" />
            Filter
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                showFilters ? "rotate-180" : ""
              }`}
            />
          </button>
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              {/* Type Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Jenis Dokumen
                </label>
                <select
                  value={selectedType}
                  onChange={(e) => setSelectedType(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                >
                  <option value="all">Semua Jenis</option>
                  <option value="ST">Standard (ST)</option>
                  <option value="IK">Instruksi Kerja (IK)</option>
                  <option value="SOP">SOP</option>
                  <option value="FM">Form (FM)</option>
                  <option value="LOG">Log</option>
                </select>
              </div>

              {/* Department Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Departemen
                </label>
                <select
                  value={selectedDept}
                  onChange={(e) => setSelectedDept(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                >
                  <option value="all">Semua Departemen</option>
                  <option value="Top Management">Top Management</option>
                  <option value="MR & DCC">MR & DCC</option>
                  <option value="Internal Audit">Internal Audit</option>
                  <option value="HRGA">HRGA</option>
                  <option value="FAT & Purchasing">FAT & Purchasing</option>
                  <option value="IT">IT</option>
                  <option value="Sales">Sales</option>
                  <option value="Operations">Operations</option>
                  <option value="Warehouse">Warehouse</option>
                </select>
              </div>

              {/* Status Filter */}
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Status
                </label>
                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                >
                  <option value="all">Semua Status</option>
                  <option value="Published">Published</option>
                  <option value="Under Review">Under Review</option>
                  <option value="Pending Approval">Pending Approval</option>
                  <option value="Draft">Draft</option>
                  <option value="Archived">Archived</option>
                </select>
              </div>

              {/* Clear Filters */}
              <div className="flex items-end">
                <button
                  onClick={clearFilters}
                  className="w-full px-4 py-2 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors flex items-center justify-center gap-2"
                >
                  <X className="w-4 h-4" />
                  Clear Filters
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Documents Table */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-900">
              <tr className="border-b border-gray-200 dark:border-gray-700">
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Nomor Dokumen
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Nama Dokumen
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Jenis
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Departemen
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Versi
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Status
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Upload
                </th>
                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase">
                  Aksi
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {filteredDocuments.length === 0 ? (
                <tr>
                  <td
                    colSpan={8}
                    className="px-4 py-8 text-center text-gray-500 dark:text-gray-400"
                  >
                    <FileText className="w-12 h-12 mx-auto mb-3 text-gray-400" />
                    <p className="text-sm">Tidak ada dokumen ditemukan</p>
                    <p className="text-xs mt-1">
                      Coba ubah filter atau kata kunci pencarian
                    </p>
                  </td>
                </tr>
              ) : (
                filteredDocuments.map((doc) => (
                  <tr
                    key={doc.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <FileText className="w-4 h-4 text-brand-500" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {doc.docNumber}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-white">
                          {doc.docName}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                          {doc.description}
                        </p>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      {doc.docType}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-gray-400" />
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {doc.department}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                      v{doc.version}
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`px-2.5 py-1 text-xs font-medium rounded-full ${getStatusColor(
                          doc.status
                        )}`}
                      >
                        {doc.status}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-start gap-1 text-xs text-gray-500 dark:text-gray-400">
                        <Calendar className="w-3 h-3 mt-0.5" />
                        <div>
                          <p>{doc.uploadDate}</p>
                          <p className="flex items-center gap-1 mt-1">
                            <User className="w-3 h-3" />
                            {doc.uploadBy}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors"
                          title="View"
                        >
                          <Eye className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded transition-colors"
                          title="Download"
                        >
                          <Download className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded transition-colors"
                          title="Edit"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          className="p-1.5 text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 rounded transition-colors"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredDocuments.length > 0 && (
          <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 flex items-center justify-between">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              Menampilkan {filteredDocuments.length} dari {documents.length}{" "}
              dokumen
            </p>
            <div className="flex gap-2">
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Previous
              </button>
              <button className="px-3 py-1 bg-brand-500 text-white rounded text-sm hover:bg-brand-600 transition-colors">
                1
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                2
              </button>
              <button className="px-3 py-1 border border-gray-300 dark:border-gray-600 rounded text-sm hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                Next
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
