import { useState } from "react";
import {
  FileText,
  FolderOpen,
  Database,
  Lock,
  Download,
  Eye,
  Edit,
  //   Trash2,
  //   Plus,
  Search,
  //   Filter,
  Upload,
  Archive,
  CheckCircle,
  AlertCircle,
  Clock,
  Shield,
  HardDrive,
  Users,
  //   BarChart3,
  Calendar,
  RefreshCw,
} from "lucide-react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

interface DocumentCategory {
  id: string;
  category: string;
  type: string;
  totalDocs: number;
  active: number;
  archived: number;
  retention: string;
  location: string;
}

interface Document {
  id: string;
  docNumber: string;
  docName: string;
  type: string;
  version: string;
  status: string;
  createdDate: string;
  lastModified: string;
  owner: string;
  accessLevel: string;
  fileSize: string;
  format: string;
}

interface AccessControl {
  id: string;
  role: string;
  create: boolean;
  read: boolean;
  update: boolean;
  delete: boolean;
  approve: boolean;
  download: boolean;
}

interface BackupRecord {
  id: string;
  backupDate: string;
  backupType: string;
  dataSize: string;
  location: string;
  status: string;
  verifiedBy: string;
}

export default function InformasiTerdokumentasi() {
  const [activeTab, setActiveTab] = useState<
    "overview" | "control" | "retention" | "backup"
  >("overview");
  const [searchTerm, setSearchTerm] = useState("");

  const [categories] = useState<DocumentCategory[]>([
    {
      id: "1",
      category: "QMS Documentation",
      type: "Internal",
      totalDocs: 145,
      active: 138,
      archived: 7,
      retention: "Permanent",
      location: "Digital Archive - QMS Folder",
    },
    {
      id: "2",
      category: "Procedures & Work Instructions",
      type: "Internal",
      totalDocs: 85,
      active: 82,
      archived: 3,
      retention: "5 years",
      location: "Digital Archive - Procedures",
    },
    {
      id: "3",
      category: "Quality Records",
      type: "Internal",
      totalDocs: 1250,
      active: 1180,
      archived: 70,
      retention: "3-7 years",
      location: "Digital Archive - Records",
    },
    {
      id: "4",
      category: "External Documents",
      type: "External",
      totalDocs: 45,
      active: 42,
      archived: 3,
      retention: "As applicable",
      location: "Digital Archive - External",
    },
    {
      id: "5",
      category: "Obsolete Documents",
      type: "Archived",
      totalDocs: 83,
      active: 0,
      archived: 83,
      retention: "As per policy",
      location: "Archive Storage",
    },
  ]);

  const [documents] = useState<Document[]>([
    {
      id: "1",
      docNumber: "ST-TM-001",
      docName: "Quality Manual",
      type: "Standard",
      version: "4.0",
      status: "Active",
      createdDate: "01 Mar 2024",
      lastModified: "15 Mar 2024",
      owner: "Management Representative",
      accessLevel: "All Staff",
      fileSize: "5.2 MB",
      format: "PDF",
    },
    {
      id: "2",
      docNumber: "IK-DCC-001",
      docName: "Document Control Procedure",
      type: "Work Instruction",
      version: "3.0",
      status: "Active",
      createdDate: "01 Jan 2024",
      lastModified: "10 Jan 2024",
      owner: "Document Controller",
      accessLevel: "DCC Only",
      fileSize: "2.1 MB",
      format: "PDF",
    },
    {
      id: "3",
      docNumber: "FM-HRD-012",
      docName: "Training Record Form",
      type: "Form",
      version: "2.0",
      status: "Active",
      createdDate: "15 Feb 2024",
      lastModified: "15 Feb 2024",
      owner: "HRD Manager",
      accessLevel: "HRD & Trainers",
      fileSize: "450 KB",
      format: "Excel",
    },
    {
      id: "4",
      docNumber: "SOP-SLS-008",
      docName: "Sales Order Processing",
      type: "SOP",
      version: "2.5",
      status: "Under Review",
      createdDate: "20 Feb 2024",
      lastModified: "10 Mar 2024",
      owner: "Sales Manager",
      accessLevel: "Sales Dept",
      fileSize: "1.8 MB",
      format: "PDF",
    },
    {
      id: "5",
      docNumber: "ST-TM-002",
      docName: "Quality Policy",
      type: "Standard",
      version: "3.0",
      status: "Active",
      createdDate: "01 Feb 2024",
      lastModified: "01 Feb 2024",
      owner: "Top Management",
      accessLevel: "All Staff",
      fileSize: "850 KB",
      format: "PDF",
    },
  ]);

  const [accessControls] = useState<AccessControl[]>([
    {
      id: "1",
      role: "Super Admin",
      create: true,
      read: true,
      update: true,
      delete: true,
      approve: true,
      download: true,
    },
    {
      id: "2",
      role: "Top Management",
      create: true,
      read: true,
      update: true,
      delete: false,
      approve: true,
      download: true,
    },
    {
      id: "3",
      role: "Management Representative",
      create: true,
      read: true,
      update: true,
      delete: false,
      approve: true,
      download: true,
    },
    {
      id: "4",
      role: "Document Controller",
      create: true,
      read: true,
      update: true,
      delete: false,
      approve: false,
      download: true,
    },
    {
      id: "5",
      role: "Department Head",
      create: true,
      read: true,
      update: true,
      delete: false,
      approve: true,
      download: true,
    },
    {
      id: "6",
      role: "Staff",
      create: false,
      read: true,
      update: false,
      delete: false,
      approve: false,
      download: true,
    },
  ]);

  const [backups] = useState<BackupRecord[]>([
    {
      id: "1",
      backupDate: "15 Mar 2024",
      backupType: "Full Backup",
      dataSize: "125 GB",
      location: "Cloud Storage (Google Drive)",
      status: "Completed",
      verifiedBy: "IT Manager",
    },
    {
      id: "2",
      backupDate: "10 Mar 2024",
      backupType: "Incremental",
      dataSize: "8.5 GB",
      location: "Cloud Storage (Google Drive)",
      status: "Completed",
      verifiedBy: "IT Support",
    },
    {
      id: "3",
      backupDate: "05 Mar 2024",
      backupType: "Incremental",
      dataSize: "6.2 GB",
      location: "Cloud Storage (Google Drive)",
      status: "Completed",
      verifiedBy: "IT Support",
    },
    {
      id: "4",
      backupDate: "01 Mar 2024",
      backupType: "Full Backup",
      dataSize: "122 GB",
      location: "Cloud Storage (Google Drive)",
      status: "Completed",
      verifiedBy: "IT Manager",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Active":
      case "Completed":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Under Review":
      case "In Progress":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Obsolete":
      case "Failed":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      case "Archived":
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
      default:
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
    }
  };

  // Statistics
  const totalDocs = categories.reduce((sum, cat) => sum + cat.totalDocs, 0);
  const totalActive = categories.reduce((sum, cat) => sum + cat.active, 0);
  const totalArchived = categories.reduce((sum, cat) => sum + cat.archived, 0);

  const filteredDocuments = documents.filter(
    (doc) =>
      doc.docName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.docNumber.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <PageMeta
        title="7.5 Informasi Terdokumentasi | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 7.5 - Documented Information"
      />
      <PageBreadcrumb pageTitle="7.5 Informasi Terdokumentasi" />

      <div className="space-y-6">
        {/* Header */}
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              7.5 Informasi Terdokumentasi
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              ISO 9001:2015 Klausul 7.5 - Documented Information Management
            </p>
          </div>
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
              <Download className="w-4 h-4" />
              Export Report
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
              <Upload className="w-4 h-4" />
              Upload Document
            </button>
          </div>
        </div>

        {/* ISO Requirement */}
        <div className="bg-gradient-to-br from-blue-50 via-cyan-50 to-teal-50 dark:from-blue-900/20 dark:via-cyan-900/20 dark:to-teal-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">
                Persyaratan ISO 9001:2015 Klausul 7.5 - Informasi Terdokumentasi
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Sistem manajemen mutu organisasi harus mencakup informasi
                terdokumentasi yang diperlukan oleh standar ini dan informasi
                terdokumentasi yang ditetapkan organisasi sebagai hal yang
                diperlukan untuk efektivitas sistem manajemen mutu.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <FileText className="w-4 h-4 text-blue-600" />
                    7.5.2 Creating & Updating
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Identifikasi, format, review, approval saat membuat/update
                    dokumen
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Lock className="w-4 h-4 text-blue-600" />
                    7.5.3 Control
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Availability, protection, distribution, access control,
                    retention
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Archive className="w-4 h-4 text-blue-600" />
                    7.5.3 Prevention of Unintended Use
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Identifikasi dokumen obsolete dan pencegahan penggunaan
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <FileText className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalDocs}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total Documents
            </p>
            <div className="flex items-center gap-1 text-xs text-blue-600">
              <Database className="w-3 h-3" />
              <span>All categories</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-green-600">
                  {totalActive}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Active Documents
            </p>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <span>
                {((totalActive / totalDocs) * 100).toFixed(1)}% of total
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center">
                <Archive className="w-6 h-6 text-gray-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-600">
                  {totalArchived}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Archived Documents
            </p>
            <div className="flex items-center gap-1 text-xs text-gray-600">
              <span>Retained per policy</span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <HardDrive className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-purple-600">125 GB</p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Storage Used
            </p>
            <div className="flex items-center gap-1 text-xs text-purple-600">
              <span>Cloud-based</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            <button
              onClick={() => setActiveTab("overview")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "overview"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <FolderOpen className="w-5 h-5" />
              Document Overview
            </button>
            <button
              onClick={() => setActiveTab("control")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "control"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <Lock className="w-5 h-5" />
              Access Control
            </button>
            <button
              onClick={() => setActiveTab("retention")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "retention"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <Calendar className="w-5 h-5" />
              Retention & Archive
            </button>
            <button
              onClick={() => setActiveTab("backup")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "backup"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <RefreshCw className="w-5 h-5" />
              Backup & Recovery
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Document Overview Tab */}
            {activeTab === "overview" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Document Categories & Statistics
                  </h3>
                </div>

                {/* Category Summary */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Category
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Type
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Total
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Active
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Archived
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Retention Period
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Storage Location
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {categories.map((cat) => (
                        <tr
                          key={cat.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {cat.category}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                cat.type === "Internal"
                                  ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                                  : cat.type === "External"
                                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                  : "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300"
                              }`}
                            >
                              {cat.type}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-center font-semibold text-gray-900 dark:text-white">
                            {cat.totalDocs}
                          </td>
                          <td className="px-4 py-4 text-sm text-center font-semibold text-green-600">
                            {cat.active}
                          </td>
                          <td className="px-4 py-4 text-sm text-center font-semibold text-gray-600">
                            {cat.archived}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {cat.retention}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {cat.location}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Recent Documents */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                      Recent Documents
                    </h4>
                    <div className="relative w-64">
                      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                      <input
                        type="text"
                        placeholder="Search documents..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-9 pr-4 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-brand-500 focus:border-transparent dark:bg-gray-900 dark:text-white"
                      />
                    </div>
                  </div>

                  <div className="overflow-x-auto">
                    <table className="w-full">
                      <thead className="bg-gray-50 dark:bg-gray-900">
                        <tr className="border-b border-gray-200 dark:border-gray-700">
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Doc Number
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Document Name
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Type
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Version
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Status
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Last Modified
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Owner
                          </th>
                          <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                            Actions
                          </th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                        {filteredDocuments.map((doc) => (
                          <tr
                            key={doc.id}
                            className="hover:bg-gray-50 dark:hover:bg-gray-900"
                          >
                            <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                              {doc.owner}
                            </td>
                            <td className="px-4 py-4">
                              <div className="flex gap-2">
                                <button className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
                                  <Eye className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 text-green-600 hover:bg-green-50 dark:hover:bg-green-900/20 rounded">
                                  <Download className="w-4 h-4" />
                                </button>
                                <button className="p-1.5 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded">
                                  <Edit className="w-4 h-4" />
                                </button>
                              </div>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* Access Control Tab */}
            {activeTab === "control" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Role-Based Access Control Matrix
                  </h3>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                        Document Protection & Control (7.5.3.2)
                      </h4>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Informasi terdokumentasi harus dilindungi dari: (a)
                        Kehilangan kerahasiaan, (b) Penggunaan yang tidak tepat,
                        (c) Kehilangan integritas. Akses dikendalikan
                        berdasarkan role dan kebutuhan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Role
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Create
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Read
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Update
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Delete
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Approve
                        </th>
                        <th className="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase">
                          Download
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {accessControls.map((access) => (
                        <tr
                          key={access.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            <div className="flex items-center gap-2">
                              <Users className="w-4 h-4 text-brand-500" />
                              {access.role}
                            </div>
                          </td>
                          <td className="px-4 py-4 text-center">
                            {access.create ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {access.read ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {access.update ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {access.delete ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {access.approve ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                          <td className="px-4 py-4 text-center">
                            {access.download ? (
                              <CheckCircle className="w-5 h-5 text-green-600 mx-auto" />
                            ) : (
                              <span className="text-gray-400">-</span>
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Access Control Principles */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Availability & Distribution
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Dokumen tersedia di tempat yang diperlukan (DCMS
                          system)
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Dapat diakses 24/7 oleh personel yang berwenang
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Distribusi terkontrol sesuai Document Distribution
                          Matrix
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Notification otomatis untuk dokumen baru/update
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                        <Lock className="w-6 h-6 text-red-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Protection & Security
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>Password protection untuk akses sistem DCMS</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Role-based access control (RBAC) enforcement
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Encryption untuk dokumen confidential/sensitive
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Activity logging untuk audit trail (who, what, when)
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <FileText className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Version Control
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Auto-increment version number untuk setiap revisi
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Version history tersimpan untuk traceability
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Change log wajib untuk setiap perubahan dokumen
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Old version otomatis archived saat new version
                          approved
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                        <AlertCircle className="w-6 h-6 text-yellow-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Obsolete Prevention
                      </h4>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Dokumen obsolete diberi watermark "OBSOLETE"
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Akses read-only untuk archived/obsolete documents
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>Physical copies dikumpulkan dan dimusnahkan</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-brand-500 mt-1">•</span>
                        <span>
                          Alert ke users jika mencoba akses obsolete document
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* Retention & Archive Tab */}
            {activeTab === "retention" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Document Retention Policy
                  </h3>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Calendar className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                        Retention & Retrieval (7.5.3.2)
                      </h4>
                      <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                        Organisasi harus mempertahankan informasi terdokumentasi
                        sejauh yang diperlukan untuk: (a) Memberikan bukti
                        kesesuaian dengan persyaratan, (b) Memastikan operasi
                        efektif dari proses.
                      </p>
                      <p className="text-sm text-orange-800 dark:text-orange-200">
                        Retention period ditentukan berdasarkan: Persyaratan
                        regulasi, Kebutuhan bisnis, Kompleksitas produk/jasa,
                        dan Risk assessment.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Retention Schedule */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-purple-50 dark:bg-purple-900/20 p-5 rounded-lg border-l-4 border-purple-500">
                    <h4 className="font-semibold text-purple-900 dark:text-purple-300 mb-3">
                      Permanent Retention
                    </h4>
                    <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                      <li>• Quality Manual</li>
                      <li>• Management Review Records</li>
                      <li>• ISO Certificates</li>
                      <li>• Legal Documents (Akta, SK)</li>
                      <li>• Organizational Structure</li>
                    </ul>
                  </div>

                  <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border-l-4 border-blue-500">
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
                      10 Years
                    </h4>
                    <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                      <li>• Financial Reports</li>
                      <li>• Tax Documents</li>
                      <li>• Major Contracts</li>
                      <li>• Legal Correspondence</li>
                      <li>• Asset Records</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border-l-4 border-green-500">
                    <h4 className="font-semibold text-green-900 dark:text-green-300 mb-3">
                      7 Years
                    </h4>
                    <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                      <li>• Internal Audit Reports</li>
                      <li>• External Audit Reports</li>
                      <li>• Major Corrective Actions</li>
                      <li>• Product Specifications</li>
                      <li>• Customer Complaints</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border-l-4 border-yellow-500">
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-3">
                      5 Years
                    </h4>
                    <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                      <li>• Training Records</li>
                      <li>• K3 Inspection Reports</li>
                      <li>• Personnel Files</li>
                      <li>• Calibration Records</li>
                      <li>• Minor Corrective Actions</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 dark:bg-orange-900/20 p-5 rounded-lg border-l-4 border-orange-500">
                    <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-3">
                      3 Years
                    </h4>
                    <ul className="space-y-2 text-sm text-orange-800 dark:text-orange-200">
                      <li>• Purchase Orders</li>
                      <li>• Sales Invoices</li>
                      <li>• Delivery Orders</li>
                      <li>• Supplier Evaluations</li>
                      <li>• Inspection Records</li>
                    </ul>
                  </div>

                  <div className="bg-red-50 dark:bg-red-900/20 p-5 rounded-lg border-l-4 border-red-500">
                    <h4 className="font-semibold text-red-900 dark:text-red-300 mb-3">
                      1 Year
                    </h4>
                    <ul className="space-y-2 text-sm text-red-800 dark:text-red-200">
                      <li>• Attendance Records</li>
                      <li>• Internal Memos</li>
                      <li>• Meeting Minutes (routine)</li>
                      <li>• Correspondence</li>
                      <li>• Daily Reports</li>
                    </ul>
                  </div>
                </div>

                {/* Archive Process */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <Archive className="w-5 h-5 text-brand-500" />
                    Archive & Disposal Process
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Review Schedule
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Document Controller review dokumen status setiap 6
                          bulan
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Identify for Archive
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Dokumen yang melewati masa aktif dipindah ke archive
                          folder
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Archive Storage
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Simpan di cold storage dengan access permission khusus
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        4
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Retention Period Monitoring
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Track tanggal disposal berdasarkan retention policy
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        5
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Disposal Approval
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Submit disposal request ke Top Management untuk
                          approval
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-3 bg-gray-50 dark:bg-gray-900 rounded-lg">
                      <div className="w-8 h-8 rounded-full bg-brand-500 text-white flex items-center justify-center flex-shrink-0 text-sm font-bold">
                        6
                      </div>
                      <div>
                        <p className="font-medium text-gray-900 dark:text-white">
                          Secure Disposal
                        </p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Permanent delete dari sistem dengan disposal log
                          record
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Backup & Recovery Tab */}
            {activeTab === "backup" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Backup & Recovery Strategy
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                    <RefreshCw className="w-4 h-4" />
                    Run Manual Backup
                  </button>
                </div>

                <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <HardDrive className="w-6 h-6 text-green-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-green-900 dark:text-green-300 mb-2">
                        Data Protection & Business Continuity
                      </h4>
                      <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                        Backup strategy dirancang untuk memastikan: (1) Data
                        integrity dan availability, (2) Protection against data
                        loss, (3) Quick recovery dalam emergency situation, (4)
                        Compliance dengan ISO requirements.
                      </p>
                      <div className="grid md:grid-cols-3 gap-3 text-sm">
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="font-medium text-green-900 dark:text-green-300 mb-1">
                            Full Backup
                          </p>
                          <p className="text-green-700 dark:text-green-200">
                            Every 2 weeks - Complete system backup
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="font-medium text-green-900 dark:text-green-300 mb-1">
                            Incremental
                          </p>
                          <p className="text-green-700 dark:text-green-200">
                            Every 3 days - Changes since last backup
                          </p>
                        </div>
                        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                          <p className="font-medium text-green-900 dark:text-green-300 mb-1">
                            Real-time
                          </p>
                          <p className="text-green-700 dark:text-green-200">
                            Cloud sync - Critical documents auto-saved
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Backup History */}
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Backup Date
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Data Size
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Location
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Status
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Verified By
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                      {backups.map((backup) => (
                        <tr
                          key={backup.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {backup.backupDate}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${
                                backup.backupType === "Full Backup"
                                  ? "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300"
                                  : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                              }`}
                            >
                              {backup.backupType}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm font-semibold text-gray-900 dark:text-white">
                            {backup.dataSize}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {backup.location}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                backup.status
                              )}`}
                            >
                              {backup.status}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {backup.verifiedBy}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Backup Locations */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <HardDrive className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Primary Backup Location
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Google Drive (Cloud)
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Main backup repository - 500 GB capacity
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Automatic Sync
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Real-time sync for active documents
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Version History
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            30 days version history available
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Archive className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Secondary Backup
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Local Server Storage
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Weekly backup to local NAS - 2 TB capacity
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            External Hard Drive
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Monthly full backup to external HDD for disaster
                            recovery
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Off-site Storage
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Quarterly backup stored at different location
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Recovery Procedures */}
                <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <RefreshCw className="w-5 h-5 text-brand-500" />
                    Disaster Recovery Procedures
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-red-50 dark:bg-red-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-red-500 text-white flex items-center justify-center text-sm font-bold">
                          1
                        </div>
                        <h5 className="font-semibold text-red-900 dark:text-red-300">
                          Incident Detection
                        </h5>
                      </div>
                      <p className="text-sm text-red-800 dark:text-red-200">
                        Identify data loss/corruption incident. IT team notified
                        immediately.
                      </p>
                    </div>

                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-sm font-bold">
                          2
                        </div>
                        <h5 className="font-semibold text-orange-900 dark:text-orange-300">
                          Impact Assessment
                        </h5>
                      </div>
                      <p className="text-sm text-orange-800 dark:text-orange-200">
                        Assess scope of data loss. Determine recovery priority
                        based on criticality.
                      </p>
                    </div>

                    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-yellow-500 text-white flex items-center justify-center text-sm font-bold">
                          3
                        </div>
                        <h5 className="font-semibold text-yellow-900 dark:text-yellow-300">
                          Backup Selection
                        </h5>
                      </div>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        Identify most recent clean backup. Verify backup
                        integrity before restore.
                      </p>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center text-sm font-bold">
                          4
                        </div>
                        <h5 className="font-semibold text-green-900 dark:text-green-300">
                          Data Restoration
                        </h5>
                      </div>
                      <p className="text-sm text-green-800 dark:text-green-200">
                        Restore data from backup. Test restored data integrity
                        and accessibility.
                      </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center text-sm font-bold">
                          5
                        </div>
                        <h5 className="font-semibold text-blue-900 dark:text-blue-300">
                          System Verification
                        </h5>
                      </div>
                      <p className="text-sm text-blue-800 dark:text-blue-200">
                        Verify all systems operational. Confirm users can access
                        documents.
                      </p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <div className="flex items-center gap-2 mb-3">
                        <div className="w-8 h-8 rounded-full bg-purple-500 text-white flex items-center justify-center text-sm font-bold">
                          6
                        </div>
                        <h5 className="font-semibold text-purple-900 dark:text-purple-300">
                          Documentation
                        </h5>
                      </div>
                      <p className="text-sm text-purple-800 dark:text-purple-200">
                        Document incident, root cause, recovery actions, and
                        prevention measures.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Recovery Time Objectives */}
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
                    <div className="text-center mb-3">
                      <p className="text-4xl font-bold text-green-600 mb-1">
                        &lt; 4 hrs
                      </p>
                      <p className="text-sm font-medium text-green-900 dark:text-green-300">
                        Recovery Time Objective
                      </p>
                    </div>
                    <p className="text-xs text-center text-green-700 dark:text-green-200">
                      Target untuk restore critical documents
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
                    <div className="text-center mb-3">
                      <p className="text-4xl font-bold text-blue-600 mb-1">
                        &lt; 1 hr
                      </p>
                      <p className="text-sm font-medium text-blue-900 dark:text-blue-300">
                        Recovery Point Objective
                      </p>
                    </div>
                    <p className="text-xs text-center text-blue-700 dark:text-blue-200">
                      Maximum acceptable data loss period
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-5 rounded-lg border border-purple-200 dark:border-purple-800">
                    <div className="text-center mb-3">
                      <p className="text-4xl font-bold text-purple-600 mb-1">
                        99.9%
                      </p>
                      <p className="text-sm font-medium text-purple-900 dark:text-purple-300">
                        Data Recovery Success Rate
                      </p>
                    </div>
                    <p className="text-xs text-center text-purple-700 dark:text-purple-200">
                      Historical recovery success rate
                    </p>
                  </div>
                </div>

                {/* Backup Testing Schedule */}
                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-2">
                        Regular Backup Testing
                      </h4>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200 mb-3">
                        Backup testing dilakukan secara rutin untuk memastikan
                        data dapat di-restore dengan sukses saat dibutuhkan:
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-yellow-900 dark:text-yellow-300">
                              Monthly Restore Test
                            </p>
                            <p className="text-yellow-700 dark:text-yellow-200">
                              Random sample documents di-restore untuk verify
                              integrity
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <Clock className="w-4 h-4 text-yellow-600 mt-0.5 flex-shrink-0" />
                          <div>
                            <p className="font-medium text-yellow-900 dark:text-yellow-300">
                              Quarterly Full DR Test
                            </p>
                            <p className="text-yellow-700 dark:text-yellow-200">
                              Simulate disaster scenario dan full system
                              recovery
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Document Info */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Informasi Dokumen
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-4 gap-6">
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Nomor Dokumen
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  ISO-7.5-001
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Versi
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  v1.0
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Review Terakhir
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  01 Mar 2024
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  PIC
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  Document Controller
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
