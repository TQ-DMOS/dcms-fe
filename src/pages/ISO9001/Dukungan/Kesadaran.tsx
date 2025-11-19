import { useState } from "react";
import {
  // Brain,
  Users,
  // Target,
  // TrendingUp,
  BookOpen,
  Award,
  Download,
  Eye,
  Plus,
  CheckCircle,
  AlertCircle,
  ClipboardCheck,
  MessageSquare,
  Mail,
  // Calendar,
  BarChart3,
  // FileText,
  // Lightbulb,
  Radio,
} from "lucide-react";

interface AwarenessActivity {
  id: string;
  category: string;
  activity: string;
  method: string;
  frequency: string;
  targetAudience: string;
  pic: string;
  lastConducted: string;
  nextScheduled: string;
  status: string;
  effectivenessScore: number;
}

interface AwarenessMetric {
  id: string;
  topic: string;
  department: string;
  totalEmployees: number;
  aware: number;
  percentage: number;
  assessmentDate: string;
  assessmentMethod: string;
  status: string;
}

interface CommunicationChannel {
  id: string;
  channel: string;
  type: string;
  purpose: string;
  frequency: string;
  effectiveness: string;
  reach: number;
}

export default function Kesadaran() {
  const [activeTab, setActiveTab] = useState<"activities" | "channels">(
    "activities"
  );

  const [activities] = useState<AwarenessActivity[]>([
    {
      id: "1",
      category: "Quality Policy",
      activity: "Town Hall Meeting - Quality Policy Update",
      method: "Presentation & Q&A Session",
      frequency: "Quarterly",
      targetAudience: "All Staff",
      pic: "Management Representative",
      lastConducted: "15 Jan 2024",
      nextScheduled: "15 Apr 2024",
      status: "Completed",
      effectivenessScore: 88,
    },
    {
      id: "2",
      category: "Quality Objectives",
      activity: "Departmental KPI Review Meeting",
      method: "Dashboard Presentation",
      frequency: "Monthly",
      targetAudience: "Department Heads",
      pic: "Each Dept Head",
      lastConducted: "01 Mar 2024",
      nextScheduled: "01 Apr 2024",
      status: "Scheduled",
      effectivenessScore: 92,
    },
    {
      id: "3",
      category: "QMS Contribution",
      activity: "ISO 9001 Awareness Training",
      method: "Interactive Workshop",
      frequency: "Semi-Annual",
      targetAudience: "New Employees",
      pic: "HRD & MR",
      lastConducted: "20 Feb 2024",
      nextScheduled: "20 Aug 2024",
      status: "Completed",
      effectivenessScore: 85,
    },
    {
      id: "4",
      category: "Improvement",
      activity: "Continuous Improvement Campaign",
      method: "Poster, Email, WhatsApp",
      frequency: "Monthly",
      targetAudience: "All Staff",
      pic: "Management Representative",
      lastConducted: "10 Mar 2024",
      nextScheduled: "10 Apr 2024",
      status: "Ongoing",
      effectivenessScore: 78,
    },
    {
      id: "5",
      category: "Conformity Impact",
      activity: "Quality Alert Bulletin",
      method: "Email & Notice Board",
      frequency: "As Needed",
      targetAudience: "Relevant Dept",
      pic: "Quality Team",
      lastConducted: "05 Mar 2024",
      nextScheduled: "As Needed",
      status: "Active",
      effectivenessScore: 90,
    },
  ]);

  const [metrics] = useState<AwarenessMetric[]>([
    {
      id: "1",
      topic: "Quality Policy Understanding",
      department: "All Departments",
      totalEmployees: 150,
      aware: 142,
      percentage: 95,
      assessmentDate: "15 Feb 2024",
      assessmentMethod: "Survey & Quiz",
      status: "Excellent",
    },
    {
      id: "2",
      topic: "Quality Objectives (Own Dept)",
      department: "Sales",
      totalEmployees: 25,
      aware: 23,
      percentage: 92,
      assessmentDate: "20 Feb 2024",
      assessmentMethod: "Interview & Observation",
      status: "Good",
    },
    {
      id: "3",
      topic: "QMS Contribution Role",
      department: "Warehouse",
      totalEmployees: 18,
      aware: 15,
      percentage: 83,
      assessmentDate: "18 Feb 2024",
      assessmentMethod: "Survey",
      status: "Adequate",
    },
    {
      id: "4",
      topic: "Improvement Benefits",
      department: "Finance",
      totalEmployees: 12,
      aware: 11,
      percentage: 92,
      assessmentDate: "22 Feb 2024",
      assessmentMethod: "Quiz",
      status: "Good",
    },
    {
      id: "5",
      topic: "Non-Conformity Impact",
      department: "Operations",
      totalEmployees: 20,
      aware: 16,
      percentage: 80,
      assessmentDate: "25 Feb 2024",
      assessmentMethod: "Interview",
      status: "Adequate",
    },
  ]);

  const [channels] = useState<CommunicationChannel[]>([
    {
      id: "1",
      channel: "Town Hall Meetings",
      type: "Face-to-Face",
      purpose: "Policy updates, achievements, targets",
      frequency: "Quarterly",
      effectiveness: "Very High",
      reach: 98,
    },
    {
      id: "2",
      channel: "Email Broadcasts",
      type: "Digital",
      purpose: "Official announcements, alerts",
      frequency: "As Needed",
      effectiveness: "High",
      reach: 100,
    },
    {
      id: "3",
      channel: "WhatsApp Groups",
      type: "Digital",
      purpose: "Quick updates, daily communication",
      frequency: "Daily",
      effectiveness: "Very High",
      reach: 95,
    },
    {
      id: "4",
      channel: "Notice Boards",
      type: "Physical",
      purpose: "Visual reminders, KPI dashboard",
      frequency: "Weekly Update",
      effectiveness: "Medium",
      reach: 85,
    },
    {
      id: "5",
      channel: "Intranet Portal",
      type: "Digital",
      purpose: "Documents, policies, news",
      frequency: "Continuous",
      effectiveness: "High",
      reach: 88,
    },
    {
      id: "6",
      channel: "Training Sessions",
      type: "Face-to-Face",
      purpose: "Skill development, awareness",
      frequency: "Monthly",
      effectiveness: "Very High",
      reach: 90,
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
      case "Active":
      case "Excellent":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Scheduled":
      case "Ongoing":
      case "Good":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Adequate":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Need Improvement":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getEffectivenessColor = (effectiveness: string) => {
    switch (effectiveness) {
      case "Very High":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "High":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300";
      case "Medium":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Low":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Calculate overall awareness score
  const overallAwareness =
    metrics.reduce((sum, m) => sum + m.percentage, 0) / metrics.length;
  const excellentCount = metrics.filter((m) => m.status === "Excellent").length;
  const goodCount = metrics.filter((m) => m.status === "Good").length;
  const adequateCount = metrics.filter((m) => m.status === "Adequate").length;

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            7.3 Kesadaran (Awareness)
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
            ISO 9001:2015 Klausul 7.3 - Kesadaran Sistem Manajemen Mutu
          </p>
        </div>
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Plus className="w-4 h-4" />
            Add Activity
          </button>
        </div>
      </div>

      {/* ISO Requirement */}
      {/* <div className="bg-gradient-to-br from-purple-50 via-pink-50 to-rose-50 dark:from-purple-900/20 dark:via-pink-900/20 dark:to-rose-900/20 border-l-4 border-purple-500 p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center flex-shrink-0">
            <Brain className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-purple-700 dark:text-purple-400 mb-3">
              Persyaratan ISO 9001:2015 Klausul 7.3 - Kepedulian (Awareness)
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Organisasi harus memastikan bahwa orang-orang yang melakukan
              pekerjaan di bawah kendali organisasi <strong>menyadari</strong>:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-purple-600" />
                  a) Kebijakan Mutu
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Semua personel harus memahami kebijakan mutu organisasi
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-purple-600" />
                  b) Sasaran Mutu yang Relevan
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Memahami sasaran mutu yang terkait dengan pekerjaan mereka
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-600" />
                  c) Kontribusi terhadap SMM
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Peran mereka dalam efektivitas sistem manajemen mutu
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                  d) Manfaat Peningkatan Kinerja
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Implikasi dari peningkatan kinerja mutu
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg md:col-span-2">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-purple-600" />
                  e) Implikasi Ketidaksesuaian
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Konsekuensi dari tidak memenuhi persyaratan SMM
                </p>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      {/* Statistics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {overallAwareness.toFixed(0)}%
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Overall Awareness Level
          </p>
          <div className="flex items-center gap-1 text-xs">
            <CheckCircle className="w-3 h-3 text-green-600" />
            <span className="text-green-600">Above Target (85%)</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Award className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-green-600">
                {excellentCount}
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Excellent Topics
          </p>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <span>≥95% awareness</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <ClipboardCheck className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">{goodCount}</p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Good Topics
          </p>
          <div className="flex items-center gap-1 text-xs text-blue-600">
            <span>85-94% awareness</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-yellow-600">
                {adequateCount}
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Need Improvement
          </p>
          <div className="flex items-center gap-1 text-xs text-yellow-600">
            <span>Below 85%</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <button
            onClick={() => setActiveTab("activities")}
            className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
              activeTab === "activities"
                ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            <Radio className="w-5 h-5" />
            Awareness Activities
          </button>
          <button
            onClick={() => setActiveTab("channels")}
            className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
              activeTab === "channels"
                ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            <MessageSquare className="w-5 h-5" />
            Communication Channels
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Awareness Activities Tab */}
          {activeTab === "activities" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Awareness Building Activities
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                  <Plus className="w-4 h-4" />
                  Schedule New Activity
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Activity
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Method
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Target Audience
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Frequency
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Last Done
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Next Schedule
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Effectiveness
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Status
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {activities.map((activity) => (
                      <tr
                        key={activity.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900"
                      >
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {activity.category}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {activity.activity}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {activity.method}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {activity.targetAudience}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {activity.frequency}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {activity.lastConducted}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {activity.nextScheduled}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 max-w-[60px]">
                              <div
                                className="bg-purple-500 h-2 rounded-full"
                                style={{
                                  width: `${activity.effectivenessScore}%`,
                                }}
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              {activity.effectivenessScore}%
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                              activity.status
                            )}`}
                          >
                            {activity.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex gap-2">
                            <button className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
                              <Eye className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* Communication Channels Tab */}
          {activeTab === "channels" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Communication Channels
                </h3>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 border border-indigo-200 dark:border-indigo-800 rounded-lg p-5">
                <div className="flex items-start gap-3">
                  <MessageSquare className="w-6 h-6 text-indigo-600 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-indigo-900 dark:text-indigo-300 mb-2">
                      Effective Communication Strategy
                    </h4>
                    <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-3">
                      Awareness harus dikomunikasikan secara konsisten melalui
                      berbagai channel untuk memastikan semua personel terpapar
                      informasi yang sama.
                    </p>
                    <div className="grid md:grid-cols-3 gap-3 text-sm">
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <p className="font-medium text-indigo-900 dark:text-indigo-300 mb-1">
                          Top-Down
                        </p>
                        <p className="text-indigo-700 dark:text-indigo-200">
                          Management → Staff (Town halls, emails)
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <p className="font-medium text-indigo-900 dark:text-indigo-300 mb-1">
                          Horizontal
                        </p>
                        <p className="text-indigo-700 dark:text-indigo-200">
                          Peer-to-peer (Team meetings, groups)
                        </p>
                      </div>
                      <div className="bg-white dark:bg-gray-800 p-3 rounded-lg">
                        <p className="font-medium text-indigo-900 dark:text-indigo-300 mb-1">
                          Bottom-Up
                        </p>
                        <p className="text-indigo-700 dark:text-indigo-200">
                          Staff → Management (Feedback, surveys)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Channel
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Type
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Purpose
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Frequency
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Reach
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Effectiveness
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                    {channels.map((channel) => (
                      <tr
                        key={channel.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900"
                      >
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            {channel.type === "Face-to-Face" && (
                              <Users className="w-4 h-4 text-blue-600" />
                            )}
                            {channel.type === "Digital" && (
                              <Mail className="w-4 h-4 text-purple-600" />
                            )}
                            {channel.type === "Physical" && (
                              <BookOpen className="w-4 h-4 text-green-600" />
                            )}
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {channel.channel}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {channel.type}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {channel.purpose}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {channel.frequency}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2 max-w-[60px]">
                              <div
                                className="bg-indigo-500 h-2 rounded-full"
                                style={{ width: `${channel.reach}%` }}
                              />
                            </div>
                            <span className="text-xs font-medium text-gray-900 dark:text-white whitespace-nowrap">
                              {channel.reach}%
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`px-2 py-1 rounded-full text-xs font-medium ${getEffectivenessColor(
                              channel.effectiveness
                            )}`}
                          >
                            {channel.effectiveness}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Channel Effectiveness Visual */}
              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-green-50 dark:bg-green-900/20 p-5 rounded-lg border border-green-200 dark:border-green-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-500 flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-green-900 dark:text-green-300">
                      Very High Effectiveness
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-green-800 dark:text-green-200">
                    <li>• Town Hall Meetings</li>
                    <li>• WhatsApp Groups</li>
                    <li>• Training Sessions</li>
                  </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 p-5 rounded-lg border border-blue-200 dark:border-blue-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-500 flex items-center justify-center">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-blue-900 dark:text-blue-300">
                      High Effectiveness
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-blue-800 dark:text-blue-200">
                    <li>• Email Broadcasts</li>
                    <li>• Intranet Portal</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-5 rounded-lg border border-yellow-200 dark:border-yellow-800">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-yellow-500 flex items-center justify-center">
                      <BookOpen className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-yellow-900 dark:text-yellow-300">
                      Medium Effectiveness
                    </h4>
                  </div>
                  <ul className="space-y-2 text-sm text-yellow-800 dark:text-yellow-200">
                    <li>• Notice Boards</li>
                    <li>• Posters</li>
                  </ul>
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
                ISO-7.3-001
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
                Assessment Terakhir
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                25 Feb 2024
              </p>
            </div>
            <div className="space-y-1">
              <p className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wide">
                Assessment Berikutnya
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                25 Aug 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
