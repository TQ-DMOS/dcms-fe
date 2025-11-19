import { useState } from "react";
import {
  Users,
  Shield,
  CheckCircle,
  Download,
  Eye,
  Edit,
  Plus,
  Building2,
  FileText,
  Target,
  AlertCircle,
  Settings,
  // TrendingUp,
} from "lucide-react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

interface Role {
  id: string;
  position: string;
  department: string;
  level: string;
  reportTo: string;
  responsibilities: string[];
  authorities: string[];
  qualifications: string;
  status: string;
}

// interface RoleMatrix {
//   id: string;
//   activity: string;
//   responsible: string;
//   accountable: string;
//   consulted: string;
//   informed: string;
// }

export default function PeranTanggungJawab() {
  const [roles] = useState<Role[]>([
    {
      id: "1",
      position: "Direktur Utama",
      department: "Top Management",
      level: "Top Management",
      reportTo: "Pemegang Saham",
      responsibilities: [
        "Menetapkan kebijakan dan sasaran strategis perusahaan",
        "Memastikan ketersediaan sumber daya untuk SMM",
        "Memimpin Management Review Meeting",
        "Menetapkan struktur organisasi dan delegasi wewenang",
      ],
      authorities: [
        "Menandatangani kebijakan mutu",
        "Menyetujui budget dan investasi besar",
        "Mengangkat dan memberhentikan Management Representative",
        "Memutuskan strategi bisnis perusahaan",
      ],
      qualifications: "S1/S2, pengalaman manajemen >10 tahun",
      status: "Active",
    },
    {
      id: "2",
      position: "Management Representative (MR)",
      department: "MR & DCC",
      level: "Management",
      reportTo: "Direktur Utama",
      responsibilities: [
        "Memastikan SMM sesuai ISO 9001:2015",
        "Melaporkan kinerja SMM kepada top management",
        "Mempromosikan kesadaran mutu di seluruh organisasi",
        "Mengkoordinasikan audit internal dan eksternal",
      ],
      authorities: [
        "Menyetujui dokumen SMM (Manual Mutu, SOP)",
        "Meminta tindakan korektif dari departemen",
        "Menghentikan proses yang tidak sesuai",
        "Mengakses semua dokumen dan area untuk audit",
      ],
      qualifications: "S1, Lead Auditor ISO 9001, pengalaman QMS >5 tahun",
      status: "Active",
    },
    {
      id: "3",
      position: "Document Controller",
      department: "MR & DCC",
      level: "Staff",
      reportTo: "Management Representative",
      responsibilities: [
        "Mengelola dan mengontrol semua dokumen SMM",
        "Memastikan distribusi dokumen terbaru",
        "Melakukan versioning dan archiving dokumen",
        "Maintain master list dokumen",
      ],
      authorities: [
        "Menerbitkan nomor dokumen baru",
        "Menarik dan mengarsipkan dokumen obsolete",
        "Menolak dokumen yang tidak sesuai format",
        "Memberikan akses dokumen sesuai hak user",
      ],
      qualifications: "D3/S1, detail oriented, familiar ISO 9001",
      status: "Active",
    },
    {
      id: "4",
      position: "Department Head",
      department: "All Departments",
      level: "Management",
      reportTo: "Direktur Utama",
      responsibilities: [
        "Mengelola operasional departemen sesuai SOP",
        "Menetapkan sasaran mutu departemen",
        "Mengidentifikasi kebutuhan pelatihan staff",
        "Melaporkan kinerja departemen",
      ],
      authorities: [
        "Menyetujui cuti dan lembur staff",
        "Mengalokasikan resources dalam budget",
        "Meminta support dari departemen lain",
        "Memberikan performance appraisal",
      ],
      qualifications: "S1, pengalaman >5 tahun di bidangnya",
      status: "Active",
    },
    {
      id: "5",
      position: "Internal Auditor",
      department: "Internal Audit",
      level: "Staff",
      reportTo: "Management Representative",
      responsibilities: [
        "Melakukan audit internal sesuai schedule",
        "Membuat laporan audit dan temuan",
        "Mem-follow up tindakan korektif",
        "Memberikan rekomendasi improvement",
      ],
      authorities: [
        "Mengakses semua area dan dokumen",
        "Mewawancarai karyawan untuk audit",
        "Membuat NCR (Non-Conformity Report)",
        "Merekomendasikan corrective action",
      ],
      qualifications: "S1, Lead Auditor ISO 9001, independent",
      status: "Active",
    },
  ]);

  // const [raciMatrix] = useState<RoleMatrix[]>([
  //   {
  //     id: "1",
  //     activity: "Penetapan Kebijakan Mutu",
  //     responsible: "MR",
  //     accountable: "Direktur Utama",
  //     consulted: "Dept Heads",
  //     informed: "All Staff",
  //   },
  //   {
  //     id: "2",
  //     activity: "Penetapan Sasaran Mutu",
  //     responsible: "Dept Heads",
  //     accountable: "Direktur Utama",
  //     consulted: "MR",
  //     informed: "Dept Staff",
  //   },
  //   {
  //     id: "3",
  //     activity: "Audit Internal",
  //     responsible: "Internal Auditor",
  //     accountable: "MR",
  //     consulted: "Auditee",
  //     informed: "Top Management",
  //   },
  //   {
  //     id: "4",
  //     activity: "Tindakan Korektif",
  //     responsible: "Process Owner",
  //     accountable: "Dept Head",
  //     consulted: "MR",
  //     informed: "Related Dept",
  //   },
  //   {
  //     id: "5",
  //     activity: "Kontrol Dokumen",
  //     responsible: "Document Controller",
  //     accountable: "MR",
  //     consulted: "Document Owner",
  //     informed: "Document Users",
  //   },
  //   {
  //     id: "6",
  //     activity: "Management Review",
  //     responsible: "MR",
  //     accountable: "Direktur Utama",
  //     consulted: "Dept Heads",
  //     informed: "All Staff",
  //   },
  // ]);

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Top Management":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300";
      case "Management":
        return "bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300";
      case "Staff":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalRoles = roles.length;
  const topManagement = roles.filter(
    (r) => r.level === "Top Management"
  ).length;
  const management = roles.filter((r) => r.level === "Management").length;
  const staff = roles.filter((r) => r.level === "Staff").length;

  return (
    <>
      <PageMeta
        title="5.3 Peran Tanggung Jawab & Wewenang | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 5.3 - Peran Tanggung Jawab & Wewenang"
      />
      <PageBreadcrumb pageTitle="5.3 Peran Tanggung Jawab & Wewenang" />
      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export Matrix
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Plus className="w-4 h-4" />
            Tambah Role
          </button>
        </div>

        {/* Key Requirements */}
        {/* <div className="bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-brand-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-l-4 border-brand-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-3">
                Persyaratan Klausul 5.3
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Top Management harus memastikan bahwa tanggung jawab dan
                wewenang untuk peran yang relevan ditetapkan, dikomunikasikan,
                dan dipahami dalam organisasi.
              </p>
              <div className="grid md:grid-cols-3 gap-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <FileText className="w-5 h-5 text-brand-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Ditetapkan
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Peran dan tanggung jawab didokumentasikan dengan jelas
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-blue-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Dikomunikasikan
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Setiap orang memahami peran dan tanggung jawabnya
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <div className="flex items-center gap-2 mb-2">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                      Dipahami
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Kompetensi sesuai untuk menjalankan tanggung jawab
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-brand-600" />
              </div>
              <span className="text-2xl font-bold text-brand-600">
                {totalRoles}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Roles
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <span className="text-2xl font-bold text-purple-600">
                {topManagement}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Top Management
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <span className="text-2xl font-bold text-brand-600">
                {management}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Management Level
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <Settings className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">{staff}</span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Staff Level
            </p>
          </div>
        </div>

        {/* Roles & Responsibilities Table */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Daftar Peran & Tanggung Jawab
            </h3>
          </div>
          <div className="p-6 space-y-4">
            {roles.map((role) => (
              <div
                key={role.id}
                className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow"
              >
                {/* Role Header */}
                <div className="bg-gray-50 dark:bg-gray-900 px-4 py-3 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                      <Users className="w-5 h-5 text-brand-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white">
                        {role.position}
                      </h4>
                      <div className="flex items-center gap-2 mt-1">
                        <Building2 className="w-3 h-3 text-gray-400" />
                        <span className="text-xs text-gray-600 dark:text-gray-400">
                          {role.department}
                        </span>
                        <span className="text-gray-400">•</span>
                        <span
                          className={`px-2 py-0.5 rounded-full text-xs font-medium ${getLevelColor(
                            role.level
                          )}`}
                        >
                          {role.level}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Role Details */}
                <div className="p-4 grid md:grid-cols-2 gap-4">
                  {/* Responsibilities */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Target className="w-4 h-4 text-brand-500" />
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Tanggung Jawab (Responsibilities)
                      </h5>
                    </div>
                    <ul className="space-y-2">
                      {role.responsibilities.map((resp, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Authorities */}
                  <div>
                    <div className="flex items-center gap-2 mb-3">
                      <Shield className="w-4 h-4 text-purple-500" />
                      <h5 className="font-semibold text-gray-900 dark:text-white text-sm">
                        Wewenang (Authorities)
                      </h5>
                    </div>
                    <ul className="space-y-2">
                      {role.authorities.map((auth, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400"
                        >
                          <Shield className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                          <span>{auth}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Additional Info */}
                  <div className="md:col-span-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                    <div className="grid grid-cols-2 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">
                          Report To:
                        </span>
                        <span className="ml-2 font-medium text-gray-900 dark:text-white">
                          {role.reportTo}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-500 dark:text-gray-400">
                          Qualifications:
                        </span>
                        <span className="ml-2 font-medium text-gray-900 dark:text-white">
                          {role.qualifications}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* RACI Matrix */}
        {/* <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              RACI Matrix - Aktivitas Kunci SMM
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              R=Responsible | A=Accountable | C=Consulted | I=Informed
            </p>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 dark:bg-gray-900">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    Aktivitas
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-brand-500 flex items-center justify-center text-white text-xs font-bold">
                        R
                      </div>
                      <span>Responsible</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-purple-500 flex items-center justify-center text-white text-xs font-bold">
                        A
                      </div>
                      <span>Accountable</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-blue-500 flex items-center justify-center text-white text-xs font-bold">
                        C
                      </div>
                      <span>Consulted</span>
                    </div>
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                    <div className="flex items-center gap-2">
                      <div className="w-6 h-6 rounded bg-green-500 flex items-center justify-center text-white text-xs font-bold">
                        I
                      </div>
                      <span>Informed</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {raciMatrix.map((item) => (
                  <tr
                    key={item.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                      {item.activity}
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                        {item.responsible}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300">
                        {item.accountable}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                        {item.consulted}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-md text-sm font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300">
                        {item.informed}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div> */}

        {/* MR Specific Responsibilities */}
        {/* <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Tanggung Jawab Khusus Management Representative
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
              Sesuai ISO 9001:2015 Klausul 5.3 (a), (b), (c)
            </p>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-gradient-to-br from-brand-50 to-purple-50 dark:from-brand-900/20 dark:to-purple-900/20 border border-brand-200 dark:border-brand-800 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    5.3 (a)
                  </h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Memastikan bahwa SMM sesuai dengan persyaratan ISO 9001:2015
                  dan terintegrasi dengan proses bisnis organisasi
                </p>
              </div>

              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    5.3 (b)
                  </h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Melaporkan kinerja SMM dan peluang improvement kepada top
                  management melalui Management Review Meeting
                </p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
                <div className="flex items-start gap-3 mb-3">
                  <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5 text-white" />
                  </div>
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    5.3 (c)
                  </h4>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  Mempromosikan kesadaran akan customer requirements dan
                  pentingnya mutu di seluruh organisasi
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* Communication Methods */}
        {/* <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Metode Komunikasi Peran & Tanggung Jawab
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Job Description Document
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Setiap posisi memiliki dokumen job description lengkap yang
                    ditandatangani saat onboarding
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Building2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Struktur Organisasi Chart
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Bagan organisasi dipasang di area umum dan tersedia di DCMS
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Users className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Onboarding Training
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Karyawan baru diberikan training tentang peran dan tanggung
                    jawab mereka
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <Target className="w-5 h-5 text-purple-500 mt-0.5 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Performance Appraisal
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Review tahunan untuk memastikan pemahaman dan pelaksanaan
                    peran
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div> */}

        {/* Document References */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Referensi Dokumen
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Manual Mutu Bab 5
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Penjelasan struktur organisasi dan peran
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Struktur Organisasi
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Bagan dan hierarki organisasi (ST-TM-005)
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                <FileText className="w-5 h-5 text-brand-500 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Job Description per Posisi
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Detail tanggung jawab setiap posisi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Review & Update */}
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-500 p-4 rounded-lg">
          <div className="flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-yellow-600 mt-0.5" />
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                Review & Update
              </h4>
              <p className="text-sm text-yellow-800 dark:text-yellow-200">
                Peran dan tanggung jawab direview setiap tahun atau ketika ada
                perubahan struktur organisasi. Perubahan dikomunikasikan kepada
                semua pihak terkait dan didokumentasikan.
              </p>
            </div>
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
                  ISO-5.3-001
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Versi
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  v2.0
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Tanggal Terbit
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  01 Jan 2024
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                  Review Berikutnya
                </p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">
                  01 Jan 2025
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
