import { useState } from "react";
import {
  //   GraduationCap,
  Users,
  Target,
  TrendingUp,
  Download,
  Eye,
  Edit,
  Plus,
  CheckCircle,
  AlertCircle,
  Award,
  BookOpen,
  ClipboardCheck,
  Calendar,
  //   FileText,
  BarChart3,
} from "lucide-react";

interface Competency {
  id: string;
  department: string;
  position: string;
  education: string;
  experience: string;
  technicalSkills: string[];
  softSkills: string[];
  certification: string;
  competencyLevel: string;
  status: string;
}

interface Training {
  id: string;
  trainingName: string;
  category: string;
  targetParticipants: string;
  duration: string;
  schedule: string;
  trainer: string;
  participants: number;
  completionRate: string;
  status: string;
}

interface EmployeeCompetency {
  id: string;
  employeeName: string;
  position: string;
  department: string;
  education: string;
  yearsExperience: number;
  lastTraining: string;
  competencyScore: number;
  gap: string;
  status: string;
}

export default function Kompetensi() {
  const [activeTab, setActiveTab] = useState<
    "requirements" | "training" | "assessment"
  >("requirements");

  const [competencies] = useState<Competency[]>([
    {
      id: "1",
      department: "Sales",
      position: "Sales Manager",
      education: "S1 Marketing/Business",
      experience: "Min 5 tahun di FMCG",
      technicalSkills: [
        "Sales strategy",
        "Market analysis",
        "CRM software",
        "Product knowledge",
      ],
      softSkills: [
        "Leadership",
        "Communication",
        "Negotiation",
        "Problem solving",
      ],
      certification: "Certified Sales Professional (optional)",
      competencyLevel: "Senior",
      status: "Defined",
    },
    {
      id: "2",
      department: "Warehouse",
      position: "Warehouse Supervisor",
      education: "D3/S1 Logistics",
      experience: "Min 3 tahun di warehouse",
      technicalSkills: [
        "Inventory management",
        "WMS system",
        "Safety procedures",
        "Quality control",
      ],
      softSkills: [
        "Team management",
        "Planning",
        "Detail-oriented",
        "Safety awareness",
      ],
      certification: "K3 certification required",
      competencyLevel: "Mid-Senior",
      status: "Defined",
    },
    {
      id: "3",
      department: "IT",
      position: "System Administrator",
      education: "S1 IT/Computer Science",
      experience: "Min 3 tahun server admin",
      technicalSkills: [
        "Server management",
        "Network administration",
        "Database management",
        "Cybersecurity",
      ],
      softSkills: [
        "Problem solving",
        "Communication",
        "Documentation",
        "Analytical thinking",
      ],
      certification: "CCNA/Microsoft certification",
      competencyLevel: "Senior",
      status: "Defined",
    },
    {
      id: "4",
      department: "Finance",
      position: "Senior Accountant",
      education: "S1 Accounting",
      experience: "Min 3 tahun accounting",
      technicalSkills: [
        "Financial reporting",
        "Tax compliance",
        "Accounting software",
        "Audit preparation",
      ],
      softSkills: [
        "Accuracy",
        "Analytical",
        "Time management",
        "Communication",
      ],
      certification: "Brevet A & B (required)",
      competencyLevel: "Senior",
      status: "Defined",
    },
  ]);

  const [trainings] = useState<Training[]>([
    {
      id: "1",
      trainingName: "ISO 9001:2015 Internal Auditor",
      category: "Quality Management",
      targetParticipants: "All Department Heads, QA Team",
      duration: "3 hari",
      schedule: "15-17 Apr 2024",
      trainer: "External Consultant",
      participants: 15,
      completionRate: "100%",
      status: "Completed",
    },
    {
      id: "2",
      trainingName: "Sales Excellence Program",
      category: "Sales & Marketing",
      targetParticipants: "Sales Team",
      duration: "2 hari",
      schedule: "22-23 Apr 2024",
      trainer: "External Consultant",
      participants: 23,
      completionRate: "95%",
      status: "Completed",
    },
    {
      id: "3",
      trainingName: "Warehouse Safety & K3",
      category: "Safety",
      targetParticipants: "Warehouse Staff",
      duration: "1 hari",
      schedule: "05 May 2024",
      trainer: "K3 Officer",
      participants: 15,
      completionRate: "N/A",
      status: "Scheduled",
    },
    {
      id: "4",
      trainingName: "Leadership Development",
      category: "Soft Skills",
      targetParticipants: "All Managers",
      duration: "2 hari",
      schedule: "10-11 May 2024",
      trainer: "External Consultant",
      participants: 12,
      completionRate: "N/A",
      status: "Scheduled",
    },
    {
      id: "5",
      trainingName: "ERP System Training",
      category: "Technical",
      targetParticipants: "All Users",
      duration: "3 hari",
      schedule: "20-22 May 2024",
      trainer: "IT Team + Vendor",
      participants: 50,
      completionRate: "N/A",
      status: "Scheduled",
    },
  ]);

  const [employees] = useState<EmployeeCompetency[]>([
    {
      id: "1",
      employeeName: "Ahmad Fauzi",
      position: "Sales Manager",
      department: "Sales",
      education: "S1 Marketing",
      yearsExperience: 6,
      lastTraining: "Sales Excellence - Apr 2024",
      competencyScore: 92,
      gap: "None",
      status: "Competent",
    },
    {
      id: "2",
      employeeName: "Siti Aminah",
      position: "Warehouse Supervisor",
      department: "Warehouse",
      education: "D3 Logistics",
      yearsExperience: 4,
      lastTraining: "WMS Training - Mar 2024",
      competencyScore: 85,
      gap: "K3 certification needed",
      status: "Need Training",
    },
    {
      id: "3",
      employeeName: "Budi Santoso",
      position: "System Administrator",
      department: "IT",
      education: "S1 IT",
      yearsExperience: 5,
      lastTraining: "Cybersecurity - Feb 2024",
      competencyScore: 88,
      gap: "None",
      status: "Competent",
    },
    {
      id: "4",
      employeeName: "Dewi Lestari",
      position: "Senior Accountant",
      department: "Finance",
      education: "S1 Accounting",
      yearsExperience: 4,
      lastTraining: "Tax Update - Jan 2024",
      competencyScore: 90,
      gap: "None",
      status: "Competent",
    },
    {
      id: "5",
      employeeName: "Eko Prasetyo",
      position: "Sales Representative",
      department: "Sales",
      education: "S1 Marketing",
      yearsExperience: 2,
      lastTraining: "Product Knowledge - Mar 2024",
      competencyScore: 75,
      gap: "Advanced selling skills",
      status: "Developing",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Competent":
      case "Completed":
      case "Defined":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Need Training":
      case "Scheduled":
      case "Developing":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Critical Gap":
      case "Cancelled":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getScoreColor = (score: number) => {
    if (score >= 85) return "text-green-600";
    if (score >= 70) return "text-yellow-600";
    return "text-red-600";
  };

  // Statistics
  const avgCompetencyScore =
    employees.reduce((sum, e) => sum + e.competencyScore, 0) / employees.length;
  const competentEmployees = employees.filter(
    (e) => e.status === "Competent"
  ).length;
  const needTrainingEmployees = employees.filter(
    (e) => e.status === "Need Training" || e.status === "Developing"
  ).length;
  const completedTrainings = trainings.filter(
    (t) => t.status === "Completed"
  ).length;
  const scheduledTrainings = trainings.filter(
    (t) => t.status === "Scheduled"
  ).length;

  return (
    <div className="space-y-6">
      {/* Action Buttons */}
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
          <Download className="w-4 h-4" />
          Export Report
        </button>
        <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
          <Plus className="w-4 h-4" />
          Tambah Data Kompetensi
        </button>
      </div>

      {/* ISO Requirement */}
      {/* <div className="bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-900/20 dark:via-emerald-900/20 dark:to-teal-900/20 border-l-4 border-green-500 p-6 rounded-lg">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
            <GraduationCap className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-green-700 dark:text-green-400 mb-3">
              Persyaratan ISO 9001:2015 Klausul 7.2 - Kompetensi
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
              Organisasi harus:
            </p>
            <div className="grid md:grid-cols-2 gap-3">
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <Target className="w-4 h-4 text-green-600" />
                  a) Menentukan Kompetensi
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Menentukan kompetensi yang diperlukan untuk personel yang
                  melakukan pekerjaan yang mempengaruhi kinerja dan efektivitas
                  SMM
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  b) Memastikan Kompetensi
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Memastikan personel kompeten berdasarkan pendidikan,
                  pelatihan, atau pengalaman yang sesuai
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-green-600" />
                  c) Mengambil Tindakan
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Melakukan pelatihan, mentoring, atau tindakan lain untuk
                  memperoleh kompetensi dan mengevaluasi efektivitasnya
                </p>
              </div>
              <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                  <FileText className="w-4 h-4 text-green-600" />
                  d) Menyimpan Bukti
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Mempertahankan informasi terdokumentasi sebagai bukti
                  kompetensi
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
            <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
              <BarChart3 className="w-6 h-6 text-blue-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-blue-600">
                {avgCompetencyScore.toFixed(1)}%
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Avg Competency Score
          </p>
          <div className="flex items-center gap-1 text-xs text-blue-600">
            <TrendingUp className="w-3 h-3" />
            <span>Above target (80%)</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {competentEmployees}/{employees.length}
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Competent Employees
          </p>
          <div className="flex items-center gap-1 text-xs text-green-600">
            <CheckCircle className="w-3 h-3" />
            <span>
              {((competentEmployees / employees.length) * 100).toFixed(0)}%
              Competent
            </span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
              <AlertCircle className="w-6 h-6 text-yellow-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-yellow-600">
                {needTrainingEmployees}
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Need Development
          </p>
          <div className="flex items-center gap-1 text-xs text-yellow-600">
            <AlertCircle className="w-3 h-3" />
            <span>Require training/mentoring</span>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
          <div className="flex items-center justify-between mb-3">
            <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
              <Award className="w-6 h-6 text-purple-600" />
            </div>
            <div className="text-right">
              <p className="text-2xl font-bold text-gray-900 dark:text-white">
                {completedTrainings}/{trainings.length}
              </p>
            </div>
          </div>
          <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
            Training Programs
          </p>
          <div className="flex items-center gap-1 text-xs text-purple-600">
            <Calendar className="w-3 h-3" />
            <span>{scheduledTrainings} upcoming</span>
          </div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
        <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
          <button
            onClick={() => setActiveTab("requirements")}
            className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
              activeTab === "requirements"
                ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            <Target className="w-5 h-5" />
            Competency Requirements
          </button>
          <button
            onClick={() => setActiveTab("training")}
            className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
              activeTab === "training"
                ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            <BookOpen className="w-5 h-5" />
            Training Programs
          </button>
          <button
            onClick={() => setActiveTab("assessment")}
            className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
              activeTab === "assessment"
                ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
            }`}
          >
            <ClipboardCheck className="w-5 h-5" />
            Competency Assessment
          </button>
        </div>

        {/* Tab Content */}
        <div className="p-6">
          {/* Requirements Tab */}
          {activeTab === "requirements" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Competency Requirements by Position
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                  <Plus className="w-4 h-4" />
                  Add Position
                </button>
              </div>

              <div className="space-y-4">
                {competencies.map((comp) => (
                  <div
                    key={comp.id}
                    className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5 hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <div className="flex items-center gap-3 mb-1">
                          <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                            {comp.position}
                          </h4>
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs font-medium">
                            {comp.department}
                          </span>
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                              comp.status
                            )}`}
                          >
                            {comp.status}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500 dark:text-gray-400">
                          Level: {comp.competencyLevel}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        <button className="p-2 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-lg">
                          <Eye className="w-4 h-4" />
                        </button>
                        <button className="p-2 text-yellow-600 hover:bg-yellow-50 dark:hover:bg-yellow-900/20 rounded-lg">
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          EDUCATION REQUIREMENT
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {comp.education}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          EXPERIENCE REQUIREMENT
                        </p>
                        <p className="text-sm text-gray-900 dark:text-white">
                          {comp.experience}
                        </p>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          TECHNICAL SKILLS
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {comp.technicalSkills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-2">
                          SOFT SKILLS
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {comp.softSkills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-2 py-1 bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300 rounded text-xs"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 pt-3 border-t border-gray-200 dark:border-gray-700">
                      <Award className="w-4 h-4 text-orange-600" />
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="font-medium">Certification:</span>{" "}
                        {comp.certification}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Training Tab */}
          {activeTab === "training" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Training Programs 2024
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                  <Plus className="w-4 h-4" />
                  Schedule Training
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Training Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Category
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Target Participants
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Duration
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Schedule
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Participants
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Completion
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
                    {trainings.map((training) => (
                      <tr
                        key={training.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900"
                      >
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {training.trainingName}
                        </td>
                        <td className="px-4 py-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs font-medium">
                            {training.category}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {training.targetParticipants}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {training.duration}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {training.schedule}
                        </td>
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {training.participants}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {training.completionRate}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                              training.status
                            )}`}
                          >
                            {training.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex gap-2">
                            <button className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
                              <Eye className="w-4 h-4" />
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

              {/* Training Effectiveness */}
              {/* <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-5">
                <h4 className="font-semibold text-green-900 dark:text-green-300 mb-3 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5" />
                  Training Effectiveness Evaluation
                </h4>
                <p className="text-sm text-green-800 dark:text-green-200 mb-3">
                  Sesuai ISO 9001:2015 Klausul 7.2(c), organisasi harus
                  mengevaluasi efektivitas tindakan yang diambil untuk
                  memperoleh kompetensi.
                </p>
                <div className="grid md:grid-cols-3 gap-3">
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Level 1 - Reaction
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Training evaluation form (post-training survey)
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Level 2 - Learning
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      Pre-test dan post-test assessment
                    </p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 p-3 rounded">
                    <p className="text-xs font-medium text-gray-500 dark:text-gray-400 mb-1">
                      Level 3 - Behavior
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      On-the-job observation (3 bulan setelah training)
                    </p>
                  </div>
                </div>
              </div> */}
            </div>
          )}

          {/* Assessment Tab */}
          {activeTab === "assessment" && (
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Employee Competency Assessment
                </h3>
                <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                  <Plus className="w-4 h-4" />
                  New Assessment
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50 dark:bg-gray-900">
                    <tr className="border-b border-gray-200 dark:border-gray-700">
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Employee Name
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Position
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Department
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Education
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Experience
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Last Training
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Score
                      </th>
                      <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                        Gap Analysis
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
                    {employees.map((emp) => (
                      <tr
                        key={emp.id}
                        className="hover:bg-gray-50 dark:hover:bg-gray-900"
                      >
                        <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                          {emp.employeeName}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {emp.position}
                        </td>
                        <td className="px-4 py-4">
                          <span className="px-2 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300 rounded text-xs">
                            {emp.department}
                          </span>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {emp.education}
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {emp.yearsExperience} years
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {emp.lastTraining}
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex items-center gap-2">
                            <div className="w-16 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                              <div
                                className={`h-2 rounded-full ${
                                  emp.competencyScore >= 85
                                    ? "bg-green-600"
                                    : emp.competencyScore >= 70
                                    ? "bg-yellow-600"
                                    : "bg-red-600"
                                }`}
                                style={{ width: `${emp.competencyScore}%` }}
                              />
                            </div>
                            <span
                              className={`text-sm font-semibold ${getScoreColor(
                                emp.competencyScore
                              )}`}
                            >
                              {emp.competencyScore}
                            </span>
                          </div>
                        </td>
                        <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                          {emp.gap}
                        </td>
                        <td className="px-4 py-4">
                          <span
                            className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(
                              emp.status
                            )}`}
                          >
                            {emp.status}
                          </span>
                        </td>
                        <td className="px-4 py-4">
                          <div className="flex gap-2">
                            <button className="p-1.5 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded">
                              <Eye className="w-4 h-4" />
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

              {/* Assessment Methods */}
              {/* <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                      <ClipboardCheck className="w-6 h-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Knowledge Test
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Written test untuk mengukur pengetahuan teknis dan
                    prosedural
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                      <Users className="w-6 h-6 text-green-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Skill Demonstration
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Praktik langsung untuk membuktikan kemampuan melakukan tugas
                  </p>
                </div>

                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                      <Award className="w-6 h-6 text-purple-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      Performance Review
                    </h4>
                  </div>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Evaluasi kinerja berkala oleh supervisor/manager
                  </p>
                </div>
              </div> */}
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
                ISO-7.2-001
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
                Review Berikutnya
              </p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">
                01 Sep 2024
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
