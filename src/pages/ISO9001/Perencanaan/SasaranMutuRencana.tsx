import { useState } from "react";
import {
  Target,
  TrendingUp,
  CheckCircle,
  AlertCircle,
  Clock,
  Users,
  Download,
  Eye,
  Edit,
  Plus,
  Calendar,
  BarChart3,
  ArrowUp,
  ArrowDown,
  Minus,
  XCircle,
} from "lucide-react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

interface QualityObjective {
  id: string;
  code: string;
  department: string;
  objective: string;
  measurementUnit: string;
  baseline: string;
  target: string;
  current: string;
  achievement: number;
  status: string;
  pic: string;
  startDate: string;
  deadline: string;
  frequency: string;
  relatedRisk: string;
  actionPlan: ActionPlan[];
}

interface ActionPlan {
  id: string;
  action: string;
  pic: string;
  deadline: string;
  status: string;
  progress: number;
}

export default function SasaranMutuRencana() {
  const [selectedDept, setSelectedDept] = useState("all");

  const [objectives] = useState<QualityObjective[]>([
    {
      id: "1",
      code: "SM-SLS-2024-01",
      department: "Sales",
      objective: "Meningkatkan penjualan produk tahunan",
      measurementUnit: "% Growth YoY",
      baseline: "100% (2023)",
      target: "115%",
      current: "110%",
      achievement: 95.7,
      status: "On Track",
      pic: "Sales Manager",
      startDate: "01 Jan 2024",
      deadline: "31 Des 2024",
      frequency: "Monthly",
      relatedRisk: "R-2024-001 (Kompetitor)",
      actionPlan: [
        {
          id: "1",
          action: "Ekspansi ke 5 kota baru tier 2",
          pic: "Regional Sales Manager",
          deadline: "30 Jun 2024",
          status: "In Progress",
          progress: 75,
        },
        {
          id: "2",
          action: "Launch loyalty program untuk existing customer",
          pic: "Marketing Manager",
          deadline: "31 Mar 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "3",
          action: "Training sales team untuk upselling & cross-selling",
          pic: "HRD & Sales Manager",
          deadline: "28 Feb 2024",
          status: "Completed",
          progress: 100,
        },
      ],
    },
    {
      id: "2",
      code: "SM-WH-2024-01",
      department: "Warehouse",
      objective: "Meningkatkan akurasi inventory",
      measurementUnit: "% Accuracy",
      baseline: "97.5% (2023)",
      target: "99.5%",
      current: "98.2%",
      achievement: 70,
      status: "Need Attention",
      pic: "Warehouse Manager",
      startDate: "01 Jan 2024",
      deadline: "31 Des 2024",
      frequency: "Weekly",
      relatedRisk: "R-2024-003 (Turnover SDM)",
      actionPlan: [
        {
          id: "1",
          action: "Implementasi barcode scanning system",
          pic: "IT & WH Manager",
          deadline: "31 Mar 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          action: "Training staff untuk prosedur stock opname",
          pic: "WH Supervisor",
          deadline: "15 Feb 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "3",
          action: "Daily cycle count untuk fast moving items",
          pic: "WH Staff",
          deadline: "Ongoing",
          status: "In Progress",
          progress: 60,
        },
      ],
    },
    {
      id: "3",
      code: "SM-HRD-2024-01",
      department: "HRD",
      objective: "Menurunkan turnover karyawan",
      measurementUnit: "% Turnover Rate",
      baseline: "12% (2023)",
      target: "<10%",
      current: "11.5%",
      achievement: 50,
      status: "Need Attention",
      pic: "HRD Manager",
      startDate: "01 Jan 2024",
      deadline: "31 Des 2024",
      frequency: "Monthly",
      relatedRisk: "R-2024-003 (Turnover tinggi)",
      actionPlan: [
        {
          id: "1",
          action: "Review dan improve benefit package",
          pic: "HRD Manager",
          deadline: "31 Mar 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          action: "Implementasi career development program",
          pic: "HRD Manager",
          deadline: "30 Jun 2024",
          status: "In Progress",
          progress: 45,
        },
        {
          id: "3",
          action: "Employee engagement activities setiap quarter",
          pic: "HRD Team",
          deadline: "Ongoing",
          status: "In Progress",
          progress: 50,
        },
      ],
    },
    {
      id: "4",
      code: "SM-IT-2024-01",
      department: "IT",
      objective: "Meningkatkan system uptime",
      measurementUnit: "% Uptime",
      baseline: "98.5% (2023)",
      target: "99.5%",
      current: "99.2%",
      achievement: 87.5,
      status: "On Track",
      pic: "IT Manager",
      startDate: "01 Jan 2024",
      deadline: "31 Des 2024",
      frequency: "Daily",
      relatedRisk: "O-2024-002 (Digitalisasi)",
      actionPlan: [
        {
          id: "1",
          action: "Upgrade server infrastructure",
          pic: "IT Manager",
          deadline: "28 Feb 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          action: "Implementasi automated backup & monitoring",
          pic: "IT Team",
          deadline: "31 Mar 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "3",
          action: "Disaster recovery plan & testing",
          pic: "IT Manager",
          deadline: "30 Jun 2024",
          status: "In Progress",
          progress: 65,
        },
      ],
    },
    {
      id: "5",
      code: "SM-FAT-2024-01",
      department: "Finance",
      objective: "Meningkatkan collection efficiency",
      measurementUnit: "Days Sales Outstanding (DSO)",
      baseline: "45 days (2023)",
      target: "35 days",
      current: "38 days",
      achievement: 70,
      status: "On Track",
      pic: "Finance Manager",
      startDate: "01 Jan 2024",
      deadline: "31 Des 2024",
      frequency: "Monthly",
      relatedRisk: "R-2024-002 (Cash flow)",
      actionPlan: [
        {
          id: "1",
          action: "Implementasi automated payment reminder",
          pic: "Finance & IT",
          deadline: "31 Jan 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          action: "Review credit term policy per customer segment",
          pic: "Finance Manager",
          deadline: "29 Feb 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "3",
          action: "Intensif collection team untuk overdue >30 days",
          pic: "Collection Team",
          deadline: "Ongoing",
          status: "In Progress",
          progress: 75,
        },
      ],
    },
    {
      id: "6",
      code: "SM-OPS-2024-01",
      department: "Operations",
      objective: "Meningkatkan on-time delivery",
      measurementUnit: "% OTD",
      baseline: "92% (2023)",
      target: "95%",
      current: "96%",
      achievement: 133,
      status: "Achieved",
      pic: "Operations Manager",
      startDate: "01 Jan 2024",
      deadline: "31 Des 2024",
      frequency: "Daily",
      relatedRisk: "R-2024-001 (Customer satisfaction)",
      actionPlan: [
        {
          id: "1",
          action: "Optimasi routing delivery dengan GPS tracking",
          pic: "Operations Manager",
          deadline: "31 Jan 2024",
          status: "Completed",
          progress: 100,
        },
        {
          id: "2",
          action: "Koordinasi lebih ketat dengan warehouse",
          pic: "Ops & WH Manager",
          deadline: "Ongoing",
          status: "In Progress",
          progress: 90,
        },
      ],
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Achieved":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "On Track":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Need Attention":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Behind":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Achieved":
        return <CheckCircle className="w-4 h-4" />;
      case "On Track":
        return <TrendingUp className="w-4 h-4" />;
      case "Need Attention":
        return <AlertCircle className="w-4 h-4" />;
      case "Behind":
        return <AlertCircle className="w-4 h-4" />;
      default:
        return <Clock className="w-4 h-4" />;
    }
  };

  const getAchievementColor = (achievement: number) => {
    if (achievement >= 100) return "text-green-600";
    if (achievement >= 75) return "text-blue-600";
    if (achievement >= 50) return "text-yellow-600";
    return "text-red-600";
  };

  const getAchievementIcon = (achievement: number) => {
    if (achievement >= 100) return <ArrowUp className="w-4 h-4" />;
    if (achievement >= 75) return <TrendingUp className="w-4 h-4" />;
    if (achievement >= 50) return <Minus className="w-4 h-4" />;
    return <ArrowDown className="w-4 h-4" />;
  };

  const filteredObjectives =
    selectedDept === "all"
      ? objectives
      : objectives.filter((obj) => obj.department === selectedDept);

  const totalObjectives = objectives.length;
  const achieved = objectives.filter((o) => o.status === "Achieved").length;
  const onTrack = objectives.filter((o) => o.status === "On Track").length;
  const needAttention = objectives.filter(
    (o) => o.status === "Need Attention"
  ).length;

  return (
    <>
      <PageMeta
        title="6.2 Sasaran Mutu & Rencana Pencapaian | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 6.2 - Sasaran Mutu & Rencana Pencapaian"
      />
      <PageBreadcrumb pageTitle="6.2 Sasaran Mutu & Rencana Pencapaian" />
      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Plus className="w-4 h-4" />
            Tambah Sasaran Mutu
          </button>
        </div>

        {/* SMART Criteria */}
        {/* <div className="bg-gradient-to-br from-brand-50 via-purple-50 to-blue-50 dark:from-brand-900/20 dark:via-purple-900/20 dark:to-blue-900/20 border-l-4 border-brand-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-500 flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-brand-700 dark:text-brand-400 mb-3">
                Kriteria SMART untuk Sasaran Mutu
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Sesuai ISO 9001:2015 Klausul 6.2.1, sasaran mutu harus konsisten
                dengan kebijakan mutu, terukur, mempertimbangkan persyaratan
                yang applicable, relevan dengan kesesuaian produk/jasa dan
                peningkatan kepuasan pelanggan, dimonitor, dikomunikasikan, dan
                diupdate.
              </p>
              <div className="grid md:grid-cols-5 gap-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-brand-600 dark:text-brand-400 mb-1 text-lg">
                    S
                  </h4>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                    Specific
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Jelas dan spesifik
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-purple-600 dark:text-purple-400 mb-1 text-lg">
                    M
                  </h4>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                    Measurable
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Terukur dengan KPI
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-blue-600 dark:text-blue-400 mb-1 text-lg">
                    A
                  </h4>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                    Achievable
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Realistis tercapai
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-green-600 dark:text-green-400 mb-1 text-lg">
                    R
                  </h4>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                    Relevant
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Relevan dengan strategi
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-bold text-orange-600 dark:text-orange-400 mb-1 text-lg">
                    T
                  </h4>
                  <p className="text-xs font-semibold text-gray-900 dark:text-white mb-1">
                    Time-bound
                  </p>
                  <p className="text-xs text-gray-600 dark:text-gray-400">
                    Ada deadline jelas
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
                <Target className="w-6 h-6 text-brand-600" />
              </div>
              <span className="text-2xl font-bold text-brand-600">
                {totalObjectives}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Total Sasaran Mutu
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-2xl font-bold text-green-600">
                {achieved}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Achieved
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-2xl font-bold text-blue-600">
                {onTrack}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              On Track
            </p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <span className="text-2xl font-bold text-yellow-600">
                {needAttention}
              </span>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400">
              Need Attention
            </p>
          </div>
        </div>

        {/* Department Filter */}
        <div className="flex gap-2 flex-wrap">
          <button
            onClick={() => setSelectedDept("all")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              selectedDept === "all"
                ? "bg-brand-500 text-white"
                : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
            }`}
          >
            Semua Departemen
          </button>
          {Array.from(new Set(objectives.map((o) => o.department))).map(
            (dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDept(dept)}
                className={`px-4 py-2 rounded-lg transition-colors ${
                  selectedDept === dept
                    ? "bg-brand-500 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-300 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700"
                }`}
              >
                {dept}
              </button>
            )
          )}
        </div>

        {/* Objectives List */}
        <div className="space-y-4">
          {filteredObjectives.map((obj) => (
            <div
              key={obj.id}
              className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-md transition-shadow"
            >
              {/* Header */}
              <div className="bg-gray-50 dark:bg-gray-900 px-5 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-brand-100 dark:bg-brand-900/30 flex items-center justify-center">
                    <Target className="w-5 h-5 text-brand-600" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-gray-900 dark:text-white">
                        {obj.code}
                      </span>
                      <span className="px-2 py-0.5 rounded text-xs font-medium bg-brand-100 text-brand-800 dark:bg-brand-900/30 dark:text-brand-300">
                        {obj.department}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-gray-700 dark:text-gray-300 mt-1">
                      {obj.objective}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <span
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md text-xs font-medium ${getStatusColor(
                      obj.status
                    )}`}
                  >
                    {getStatusIcon(obj.status)}
                    {obj.status}
                  </span>
                  <div className="flex gap-2">
                    <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded transition-colors">
                      <Eye className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded transition-colors">
                      <Edit className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                {/* Metrics */}
                <div className="grid md:grid-cols-5 gap-4 mb-5">
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Baseline
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {obj.baseline}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Target
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {obj.target}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Current
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {obj.current}
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Achievement
                    </p>
                    <div
                      className={`flex items-center gap-1 text-sm font-bold ${getAchievementColor(
                        obj.achievement
                      )}`}
                    >
                      {getAchievementIcon(obj.achievement)}
                      {obj.achievement.toFixed(1)}%
                    </div>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg">
                    <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">
                      Measurement
                    </p>
                    <p className="text-sm font-semibold text-gray-900 dark:text-white">
                      {obj.measurementUnit}
                    </p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-5">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-gray-600 dark:text-gray-400">
                      Progress to Target
                    </span>
                    <span
                      className={`text-xs font-bold ${getAchievementColor(
                        obj.achievement
                      )}`}
                    >
                      {obj.achievement.toFixed(1)}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-3">
                    <div
                      className={`h-3 rounded-full transition-all duration-500 ${
                        obj.achievement >= 100
                          ? "bg-green-500"
                          : obj.achievement >= 75
                          ? "bg-blue-500"
                          : obj.achievement >= 50
                          ? "bg-yellow-500"
                          : "bg-red-500"
                      }`}
                      style={{ width: `${Math.min(obj.achievement, 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Details */}
                <div className="grid md:grid-cols-4 gap-4 mb-5 pb-5 border-b border-gray-200 dark:border-gray-700">
                  <div className="flex items-center gap-2">
                    <Users className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        PIC
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {obj.pic}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Deadline
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {obj.deadline}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Frequency
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {obj.frequency}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-gray-400" />
                    <div>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        Related Risk
                      </p>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {obj.relatedRisk}
                      </p>
                    </div>
                  </div>
                </div>
                {/* Action Plan Detail */}
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <h5 className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                      Rencana Aksi (Action Plan)
                    </h5>
                    <button className="text-xs text-brand-500 hover:text-brand-600 font-medium">
                      + Tambah Aksi
                    </button>
                  </div>
                  <div className="space-y-2">
                    {obj.actionPlan.map((action) => (
                      <div
                        key={action.id}
                        className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-900 rounded-lg border border-gray-200 dark:border-gray-700"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900 dark:text-white mb-1">
                            {action.action}
                          </p>
                          <div className="flex items-center gap-3 text-xs text-gray-600 dark:text-gray-400">
                            <span className="flex items-center gap-1">
                              <Users className="w-3 h-3" />
                              {action.pic}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {action.deadline}
                            </span>
                          </div>
                        </div>
                        <div className="flex items-center gap-3 ml-4">
                          {/* Progress Bar */}
                          <div className="flex items-center gap-2 min-w-[120px]">
                            <div className="flex-1 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full transition-all ${
                                  action.progress === 100
                                    ? "bg-green-500"
                                    : action.progress >= 75
                                    ? "bg-blue-500"
                                    : action.progress >= 50
                                    ? "bg-yellow-500"
                                    : "bg-red-500"
                                }`}
                                style={{ width: `${action.progress}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-semibold text-gray-700 dark:text-gray-300 w-10">
                              {action.progress}%
                            </span>
                          </div>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${
                              action.status === "Completed"
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300"
                                : "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300"
                            }`}
                          >
                            {action.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SMART Framework Detail */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Panduan Menetapkan Sasaran Mutu
            </h3>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-brand-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  S
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Specific (Spesifik)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Sasaran harus jelas dan spesifik, tidak ambigu. Hindari
                    pernyataan yang terlalu umum.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-700 dark:text-green-400">
                          Contoh Baik:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          "Meningkatkan penjualan produk kategori FMCG sebesar
                          15% YoY"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-700 dark:text-red-400">
                          Contoh Buruk:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          "Meningkatkan penjualan"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-purple-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  M
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Measurable (Terukur)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Harus ada indikator yang jelas untuk mengukur pencapaian.
                    Gunakan angka, persentase, atau metrik yang konkret.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-700 dark:text-green-400">
                          Contoh Baik:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          "Stock accuracy mencapai 99.5%"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-700 dark:text-red-400">
                          Contoh Buruk:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          "Meningkatkan akurasi inventory"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  A
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Achievable (Dapat Dicapai)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Sasaran harus realistis dan dapat dicapai dengan sumber daya
                    yang ada atau yang dapat disediakan.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Tips:</strong> Pertimbangkan track record
                      historis, kondisi pasar, dan resources yang tersedia saat
                      menetapkan target.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-green-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  R
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Relevant (Relevan)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Sasaran harus relevan dengan kebijakan mutu, strategi
                    bisnis, dan konteks organisasi.
                  </p>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded border border-gray-200 dark:border-gray-700">
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      <strong>Link ke:</strong> Kebijakan Mutu, Visi Misi,
                      Analisis SWOT, Risiko & Peluang
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-gray-50 dark:bg-gray-900 rounded-lg">
                <div className="w-10 h-10 rounded-lg bg-orange-500 text-white flex items-center justify-center font-bold flex-shrink-0">
                  T
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Time-bound (Berbatas Waktu)
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                    Harus ada deadline yang jelas untuk mencapai sasaran.
                  </p>
                  <div className="grid md:grid-cols-2 gap-3 text-sm">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-green-700 dark:text-green-400">
                          Contoh Baik:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          "Mencapai target 31 Desember 2024"
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium text-red-700 dark:text-red-400">
                          Contoh Buruk:
                        </p>
                        <p className="text-gray-600 dark:text-gray-400">
                          "Mencapai target tahun ini"
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Monitoring & Review Schedule */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-700">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Jadwal Monitoring & Review
            </h3>
          </div>
          <div className="p-6">
            <div className="grid md:grid-cols-3 gap-4">
              <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                  <h4 className="font-semibold text-blue-900 dark:text-blue-300">
                    Monthly Review
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Update progress pencapaian</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Review action plan status</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 mt-1">•</span>
                    <span>Identifikasi hambatan</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <BarChart3 className="w-6 h-6 text-green-600" />
                  <h4 className="font-semibold text-green-900 dark:text-green-300">
                    Quarterly Review
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Evaluasi pencapaian vs target</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Adjustment action plan jika perlu</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-green-600 mt-1">•</span>
                    <span>Report ke Management Review</span>
                  </li>
                </ul>
              </div>

              <div className="p-4 bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-800 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-6 h-6 text-purple-600" />
                  <h4 className="font-semibold text-purple-900 dark:text-purple-300">
                    Annual Review
                  </h4>
                </div>
                <ul className="space-y-2 text-sm text-purple-800 dark:text-purple-200">
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Final assessment achievement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Lesson learned & best practice</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-purple-600 mt-1">•</span>
                    <span>Set new objectives untuk tahun depan</span>
                  </li>
                </ul>
              </div>
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
                  ISO-6.2-001
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
                  Review Terakhir
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
                  01 Apr 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
