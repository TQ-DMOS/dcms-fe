import { useState } from "react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";
import ComponentCard from "../../../components/common/ComponentCard";
import {
  FileCheck,
  Download,
  Upload,
  CheckCircle,
  Users,
  Building2,
  // Target,
  // TrendingUp,
  MessageSquare,
} from "lucide-react";

interface PolicyElement {
  id: string;
  element: string;
  description: string;
  implementation: string;
  status: string;
}

interface CommunicationChannel {
  id: string;
  channel: string;
  audience: string;
  frequency: string;
  method: string;
  responsible: string;
}

export default function KebijakanMutu() {
  const [policyElements] = useState<PolicyElement[]>([
    {
      id: "1",
      element: "Sesuai Tujuan Organisasi",
      description:
        "Kebijakan mutu mendukung visi misi dan strategi bisnis perusahaan",
      implementation:
        "Alignment dengan business goals: distribusi FMCG berkualitas",
      status: "Implemented",
    },
    {
      id: "2",
      element: "Komitmen Pemenuhan Persyaratan",
      description: "Komitmen untuk memenuhi persyaratan pelanggan dan regulasi",
      implementation:
        "SOP compliance, customer requirement management, statutory compliance",
      status: "Implemented",
    },
    {
      id: "3",
      element: "Komitmen Peningkatan Berkelanjutan",
      description: "Komitmen untuk terus meningkatkan efektivitas SMM",
      implementation:
        "PDCA cycle, continuous improvement program, innovation initiatives",
      status: "Implemented",
    },
    {
      id: "4",
      element: "Framework untuk Sasaran Mutu",
      description:
        "Menyediakan kerangka untuk menetapkan dan review sasaran mutu",
      implementation:
        "Sasaran mutu per departemen, KPI system, quarterly review",
      status: "Implemented",
    },
  ]);

  const [communicationChannels] = useState<CommunicationChannel[]>([
    {
      id: "1",
      channel: "Town Hall Meeting",
      audience: "Seluruh Karyawan",
      frequency: "Quarterly",
      method: "Presentasi langsung + Q&A",
      responsible: "HRD & Top Management",
    },
    {
      id: "2",
      channel: "Internal Memo & Email",
      audience: "Seluruh Karyawan",
      frequency: "Monthly",
      method: "Email blast, memo digital",
      responsible: "HRD",
    },
    {
      id: "3",
      channel: "Poster & Banner",
      audience: "Seluruh Karyawan",
      frequency: "Permanent",
      method: "Display di area strategis",
      responsible: "GA",
    },
    {
      id: "4",
      channel: "Onboarding Training",
      audience: "Karyawan Baru",
      frequency: "Setiap ada karyawan baru",
      method: "Training session",
      responsible: "HRD",
    },
    {
      id: "5",
      channel: "Management Meeting",
      audience: "Management Level",
      frequency: "Monthly",
      method: "Meeting & discussion",
      responsible: "Management Representative",
    },
    {
      id: "6",
      channel: "Website Perusahaan",
      audience: "Stakeholder External",
      frequency: "Always available",
      method: "Company website, about page",
      responsible: "IT & Marketing",
    },
  ]);

  const getStatusColor = (status: string) => {
    return status === "Implemented"
      ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
      : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
  };

  return (
    <>
      <PageMeta
        title="5.2 Kebijakan Mutu | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 5.2 - Menetapkan dan Mengkomunikasikan Kebijakan Mutu"
      />
      <PageBreadcrumb pageTitle="5.2 Kebijakan Mutu" />

      <div className="space-y-6">
        {/* Header Actions */}
        <div className="flex justify-between items-center">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50">
              <Download className="w-4 h-4" />
              Download Kebijakan
            </button>
            <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600">
              <Upload className="w-4 h-4" />
              Upload Revisi
            </button>
          </div>
        </div>

        {/* Policy Statement */}
        {/* <div className="bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-brand-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-l-4 border-brand-500 p-6 rounded-lg">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
              <FileCheck className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-3">
                Kebijakan Mutu
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                ISO 9001:2015 Quality Policy Statement
              </p>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md mb-6">
            <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-4 italic">
              "Kami berkomitmen untuk{" "}
              <strong>
                menyediakan produk dan layanan distribusi berkualitas tinggi
              </strong>{" "}
              yang memenuhi dan melampaui harapan pelanggan melalui{" "}
              <strong>peningkatan berkelanjutan</strong> dalam semua aspek
              operasional kami, dengan memastikan{" "}
              <strong>kepatuhan terhadap persyaratan pelanggan</strong>,
              regulasi, dan standar ISO 9001:2015."
            </p>
          </div> */}

          {/* Policy Principles */}
          {/* <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Kepuasan Pelanggan
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Fokus utama pada pemenuhan kebutuhan dan ekspektasi
                    pelanggan
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Continuous Improvement
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Budaya peningkatan terus-menerus di seluruh organisasi
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-purple-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Compliance & Standards
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Kepatuhan penuh terhadap regulasi dan standar ISO
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center flex-shrink-0">
                  <Users className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    Competent People
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Pengembangan SDM yang kompeten dan termotivasi
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <div className="flex flex-wrap items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span>Ditetapkan: 01 Jan 2024</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Users className="w-4 h-4 text-blue-600" />
                <span>Ditandatangani: Direktur Utama</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <FileCheck className="w-4 h-4 text-purple-600" />
                <span>Status: Active & Published</span>
              </div>
            </div>
          </div>
        </div> */}

        {/* Policy Elements */}
        <ComponentCard title="Elemen Kebijakan Mutu (ISO 9001:2015 Klausul 5.2.1)">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Elemen Persyaratan
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Deskripsi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Implementasi
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                    Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                {policyElements.map((element) => (
                  <tr
                    key={element.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                  >
                    <td className="px-4 py-4">
                      <div className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-brand-500 mt-1 flex-shrink-0" />
                        <span className="text-sm font-medium text-gray-900 dark:text-white">
                          {element.element}
                        </span>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {element.description}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {element.implementation}
                      </p>
                    </td>
                    <td className="px-4 py-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${getStatusColor(
                          element.status
                        )}`}
                      >
                        {element.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </ComponentCard>

        {/* Communication Plan */}
        <ComponentCard title="5.2.2 - Komunikasi Kebijakan Mutu">
          <div className="space-y-6">
            {/* Communication Overview */}
            {/* <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-lg">
              <div className="flex items-start gap-3">
                <MessageSquare className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
                    Rencana Komunikasi
                  </h4>
                  <p className="text-sm text-blue-800 dark:text-blue-200 mb-3">
                    Kebijakan mutu dikomunikasikan kepada seluruh level
                    organisasi melalui berbagai channel untuk memastikan
                    pemahaman dan implementasi yang konsisten.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="font-medium text-gray-900 dark:text-white mb-1">
                        Internal Communication
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Seluruh karyawan & management
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="font-medium text-gray-900 dark:text-white mb-1">
                        External Communication
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Stakeholder, customer, supplier
                      </p>
                    </div>
                    <div className="bg-white dark:bg-gray-800 p-3 rounded">
                      <p className="font-medium text-gray-900 dark:text-white mb-1">
                        Digital Access
                      </p>
                      <p className="text-gray-600 dark:text-gray-400">
                        Website, intranet, DCMS
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}

            {/* Communication Channels Table */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b-2 border-gray-200 dark:border-gray-700">
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                      Channel
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                      Target Audience
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                      Frequency
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                      Method
                    </th>
                    <th className="px-4 py-3 text-left text-xs font-semibold text-gray-700 dark:text-gray-300 uppercase tracking-wider bg-gray-50 dark:bg-gray-900">
                      PIC
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {communicationChannels.map((channel) => (
                    <tr
                      key={channel.id}
                      className="hover:bg-gray-50 dark:hover:bg-gray-900/50 transition-colors"
                    >
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <MessageSquare className="w-4 h-4 text-brand-500" />
                          <span className="text-sm font-medium text-gray-900 dark:text-white">
                            {channel.channel}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {channel.audience}
                          </span>
                        </div>
                      </td>
                      <td className="px-4 py-4">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300">
                          {channel.frequency}
                        </span>
                      </td>
                      <td className="px-4 py-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          {channel.method}
                        </p>
                      </td>
                      <td className="px-4 py-4">
                        <div className="flex items-center gap-2">
                          <Building2 className="w-4 h-4 text-gray-400" />
                          <span className="text-sm text-gray-600 dark:text-gray-400">
                            {channel.responsible}
                          </span>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ComponentCard>

        {/* Availability & Accessibility */}
        <ComponentCard title="Ketersediaan & Aksesibilitas">
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                  <FileCheck className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Documented Information
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Manual Mutu Bab 5</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>Dokumen ST-TM-002</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                  <span>DCMS - Kebijakan Page</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Physical Display
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Poster di kantor & gudang</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>Banner di lobby & meeting room</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                  <span>ID Card karyawan (back)</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 border border-purple-200 dark:border-purple-800 rounded-lg p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-lg bg-purple-500 flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h4 className="font-semibold text-gray-900 dark:text-white">
                  Training & Awareness
                </h4>
              </div>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-400">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Onboarding new employee</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Quality awareness training</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-purple-600 mt-0.5 flex-shrink-0" />
                  <span>Town hall quarterly</span>
                </li>
              </ul>
            </div>
          </div>
        </ComponentCard>

        {/* Document Info */}
        <ComponentCard title="Informasi Dokumen">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Nomor Dokumen
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                ISO-5.2-001
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Versi
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                v3.0
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
        </ComponentCard>
      </div>
    </>
  );
}
