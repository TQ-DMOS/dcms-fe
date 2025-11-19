import { useState } from "react";
import {
//   Database,
  Users,
  Building2,
  Cpu,
  Gauge,
  Lightbulb,
  Download,
  Eye,
  Edit,
  Plus,
  TrendingUp,
  AlertCircle,
  CheckCircle,
  Package,
  Truck,
  HardDrive,
} from "lucide-react";
import PageMeta from "../../../components/common/PageMeta";
import PageBreadcrumb from "../../../components/common/PageBreadCrumb";

interface Resource {
  id: string;
  category: string;
  resourceName: string;
  type: string;
  quantity: string;
  condition: string;
  location: string;
  pic: string;
  lastMaintenance: string;
  nextMaintenance: string;
  status: string;
  notes: string;
}

interface Personnel {
  id: string;
  department: string;
  position: string;
  required: number;
  current: number;
  gap: number;
  status: string;
  competencyLevel: string;
}

interface Infrastructure {
  id: string;
  category: string;
  item: string;
  specification: string;
  quantity: number;
  condition: string;
  pic: string;
  status: string;
}

export default function SumberDaya() {
  const [activeTab, setActiveTab] = useState<
    "personnel" | "infrastructure" | "equipment" | "knowledge"
  >("personnel");

  const [personnel] = useState<Personnel[]>([
    {
      id: "1",
      department: "Sales",
      position: "Sales Representative",
      required: 25,
      current: 23,
      gap: -2,
      status: "Need Hiring",
      competencyLevel: "Mid-Senior",
    },
    {
      id: "2",
      department: "Warehouse",
      position: "Warehouse Staff",
      required: 15,
      current: 15,
      gap: 0,
      status: "Adequate",
      competencyLevel: "Junior-Mid",
    },
    {
      id: "3",
      department: "IT",
      position: "System Administrator",
      required: 3,
      current: 2,
      gap: -1,
      status: "Need Hiring",
      competencyLevel: "Senior",
    },
    {
      id: "4",
      department: "Finance",
      position: "Accountant",
      required: 5,
      current: 6,
      gap: 1,
      status: "Adequate",
      competencyLevel: "Mid-Senior",
    },
    {
      id: "5",
      department: "HRD",
      position: "HR Staff",
      required: 4,
      current: 4,
      gap: 0,
      status: "Adequate",
      competencyLevel: "Mid",
    },
  ]);

  const [infrastructure] = useState<Infrastructure[]>([
    {
      id: "1",
      category: "Building",
      item: "Kantor Pusat Pekalongan",
      specification: "3 lantai, 1200 m²",
      quantity: 1,
      condition: "Good",
      pic: "GA Manager",
      status: "Operational",
    },
    {
      id: "2",
      category: "Building",
      item: "Warehouse Utama",
      specification: "2000 m², racking system",
      quantity: 1,
      condition: "Good",
      pic: "WH Manager",
      status: "Operational",
    },
    {
      id: "3",
      category: "Vehicle",
      item: "Truck Delivery",
      specification: "CDD, 4 ton",
      quantity: 8,
      condition: "Good",
      pic: "Operations Manager",
      status: "Operational",
    },
    {
      id: "4",
      category: "Vehicle",
      item: "Forklift",
      specification: "2 ton capacity",
      quantity: 3,
      condition: "Fair",
      pic: "WH Manager",
      status: "Need Maintenance",
    },
    {
      id: "5",
      category: "IT Infrastructure",
      item: "Server",
      specification: "Dell PowerEdge, 64GB RAM",
      quantity: 2,
      condition: "Good",
      pic: "IT Manager",
      status: "Operational",
    },
    {
      id: "6",
      category: "IT Infrastructure",
      item: "Network Switch",
      specification: "48 port gigabit",
      quantity: 5,
      condition: "Good",
      pic: "IT Manager",
      status: "Operational",
    },
  ]);

  const [equipment] = useState<Resource[]>([
    {
      id: "1",
      category: "Monitoring",
      resourceName: "Barcode Scanner",
      type: "Equipment",
      quantity: "20 units",
      condition: "Good",
      location: "Warehouse",
      pic: "WH Supervisor",
      lastMaintenance: "15 Jan 2024",
      nextMaintenance: "15 Jul 2024",
      status: "Operational",
      notes: "Dikalibrasi setiap 6 bulan",
    },
    {
      id: "2",
      category: "Monitoring",
      resourceName: "Timbangan Digital",
      type: "Measuring Equipment",
      quantity: "5 units",
      condition: "Good",
      location: "Warehouse",
      pic: "WH Supervisor",
      lastMaintenance: "01 Feb 2024",
      nextMaintenance: "01 Aug 2024",
      status: "Operational",
      notes: "Kalibrasi eksternal setiap 6 bulan",
    },
    {
      id: "3",
      category: "Monitoring",
      resourceName: "Temperature Logger",
      type: "Monitoring Device",
      quantity: "10 units",
      condition: "Good",
      location: "Warehouse - Cold Storage",
      pic: "WH Supervisor",
      lastMaintenance: "20 Jan 2024",
      nextMaintenance: "20 Apr 2024",
      status: "Operational",
      notes: "Verifikasi setiap 3 bulan",
    },
    {
      id: "4",
      category: "IT",
      resourceName: "ERP System (Talenta)",
      type: "Software",
      quantity: "50 licenses",
      condition: "Good",
      location: "Cloud-based",
      pic: "IT Manager",
      lastMaintenance: "01 Mar 2024",
      nextMaintenance: "01 Jun 2024",
      status: "Operational",
      notes: "Update setiap quarter",
    },
  ]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Operational":
      case "Adequate":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Need Maintenance":
      case "Need Hiring":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Out of Service":
      case "Critical":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const getConditionColor = (condition: string) => {
    switch (condition) {
      case "Good":
      case "Excellent":
        return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300";
      case "Fair":
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300";
      case "Poor":
        return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  // Statistics
  const totalPersonnel = personnel.reduce((sum, p) => sum + p.current, 0);
  const requiredPersonnel = personnel.reduce((sum, p) => sum + p.required, 0);
  const personnelGap = totalPersonnel - requiredPersonnel;

  const operationalInfra = infrastructure.filter(
    (i) => i.status === "Operational"
  ).length;
  const totalInfra = infrastructure.length;

  const operationalEquipment = equipment.filter(
    (e) => e.status === "Operational"
  ).length;
  const totalEquipment = equipment.length;

  return (
    <>
      <PageMeta
        title="7.1 Sumber Daya | DCMS Pelita Hati"
        description="ISO 9001:2015 Klausul 7.1 - Pengelolaan Sumber Daya"
      />
      <PageBreadcrumb pageTitle="7.1 Sumber Daya" />

      <div className="space-y-6">
        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 transition-colors">
            <Download className="w-4 h-4" />
            Export Report
          </button>
          <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 transition-colors">
            <Plus className="w-4 h-4" />
            Tambah Sumber Daya
          </button>
        </div>

        {/* ISO Requirement */}
        {/* <div className="bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-blue-900/20 dark:via-indigo-900/20 dark:to-purple-900/20 border-l-4 border-blue-500 p-6 rounded-lg">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center flex-shrink-0">
              <Database className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-blue-700 dark:text-blue-400 mb-3">
                Persyaratan ISO 9001:2015 Klausul 7.1 - Sumber Daya
              </h3>
              <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
                Organisasi harus menentukan dan menyediakan sumber daya yang
                diperlukan untuk pembentukan, penerapan, pemeliharaan, dan
                peningkatan berkesinambungan sistem manajemen mutu.
              </p>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-600" />
                    7.1.2 Personel
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menyediakan personel yang diperlukan untuk operasi dan
                    pengendalian proses SMM
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Building2 className="w-4 h-4 text-blue-600" />
                    7.1.3 Infrastruktur
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Menyediakan dan memelihara infrastruktur untuk operasi
                    proses
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Gauge className="w-4 h-4 text-blue-600" />
                    7.1.5 Monitoring & Measuring Resources
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Memastikan hasil monitoring dan pengukuran yang valid dan
                    reliable
                  </p>
                </div>
                <div className="bg-white dark:bg-gray-800 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center gap-2">
                    <Lightbulb className="w-4 h-4 text-blue-600" />
                    7.1.6 Organizational Knowledge
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Mengelola pengetahuan organisasi untuk operasi proses
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
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {totalPersonnel}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Required: {requiredPersonnel}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Total Personel
            </p>
            <div className="flex items-center gap-1 text-xs">
              {personnelGap >= 0 ? (
                <CheckCircle className="w-3 h-3 text-green-600" />
              ) : (
                <AlertCircle className="w-3 h-3 text-red-600" />
              )}
              <span
                className={
                  personnelGap >= 0 ? "text-green-600" : "text-red-600"
                }
              >
                {personnelGap >= 0
                  ? "Adequate"
                  : `Gap: ${Math.abs(personnelGap)}`}
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                <Building2 className="w-6 h-6 text-green-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {operationalInfra}/{totalInfra}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Infrastruktur
            </p>
            <div className="flex items-center gap-1 text-xs text-green-600">
              <CheckCircle className="w-3 h-3" />
              <span>
                {((operationalInfra / totalInfra) * 100).toFixed(0)}%
                Operational
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                <Gauge className="w-6 h-6 text-purple-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-gray-900 dark:text-white">
                  {operationalEquipment}/{totalEquipment}
                </p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Equipment
            </p>
            <div className="flex items-center gap-1 text-xs text-purple-600">
              <CheckCircle className="w-3 h-3" />
              <span>
                {((operationalEquipment / totalEquipment) * 100).toFixed(0)}%
                Operational
              </span>
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 p-5 rounded-lg border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow">
            <div className="flex items-center justify-between mb-3">
              <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-orange-600" />
              </div>
              <div className="text-right">
                <p className="text-2xl font-bold text-orange-600">95%</p>
              </div>
            </div>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-1">
              Resource Adequacy
            </p>
            <div className="flex items-center gap-1 text-xs text-orange-600">
              <TrendingUp className="w-3 h-3" />
              <span>Above Target (90%)</span>
            </div>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
          <div className="flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto">
            <button
              onClick={() => setActiveTab("personnel")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "personnel"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <Users className="w-5 h-5" />
              Personel
            </button>
            <button
              onClick={() => setActiveTab("infrastructure")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "infrastructure"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <Building2 className="w-5 h-5" />
              Infrastruktur
            </button>
            <button
              onClick={() => setActiveTab("equipment")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "equipment"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <Gauge className="w-5 h-5" />
              Monitoring Equipment
            </button>
            <button
              onClick={() => setActiveTab("knowledge")}
              className={`flex items-center gap-2 px-6 py-4 font-medium transition-colors whitespace-nowrap ${
                activeTab === "knowledge"
                  ? "bg-brand-50 text-brand-600 border-b-2 border-brand-600 dark:bg-brand-900/30 dark:text-brand-400"
                  : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-gray-700"
              }`}
            >
              <Lightbulb className="w-5 h-5" />
              Organizational Knowledge
            </button>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {/* Personnel Tab */}
            {activeTab === "personnel" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Personnel Resources (7.1.2)
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                    <Plus className="w-4 h-4" />
                    Update Kebutuhan
                  </button>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Department
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Position
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Required
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Current
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Gap
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Competency Level
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
                      {personnel.map((p) => (
                        <tr
                          key={p.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {p.department}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {p.position}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {p.required}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {p.current}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`text-sm font-semibold ${
                                p.gap >= 0 ? "text-green-600" : "text-red-600"
                              }`}
                            >
                              {p.gap > 0 ? "+" : ""}
                              {p.gap}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {p.competencyLevel}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                p.status
                              )}`}
                            >
                              {p.status}
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
              </div>
            )}

            {/* Infrastructure Tab */}
            {activeTab === "infrastructure" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Infrastructure Resources (7.1.3)
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                    <Plus className="w-4 h-4" />
                    Add Infrastructure
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
                          Item
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Specification
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Qty
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Condition
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          PIC
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
                      {infrastructure.map((infra) => (
                        <tr
                          key={infra.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              {infra.category === "Building" && (
                                <Building2 className="w-4 h-4 text-green-600" />
                              )}
                              {infra.category === "Vehicle" && (
                                <Truck className="w-4 h-4 text-blue-600" />
                              )}
                              {infra.category === "IT Infrastructure" && (
                                <Cpu className="w-4 h-4 text-purple-600" />
                              )}
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {infra.category}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {infra.item}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {infra.specification}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {infra.quantity}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getConditionColor(
                                infra.condition
                              )}`}
                            >
                              {infra.condition}
                            </span>
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {infra.pic}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                infra.status
                              )}`}
                            >
                              {infra.status}
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
              </div>
            )}

            {/* Equipment Tab */}
            {activeTab === "equipment" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Monitoring & Measuring Resources (7.1.5)
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                    <Plus className="w-4 h-4" />
                    Add Equipment
                  </button>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-4">
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-yellow-900 dark:text-yellow-300 mb-1">
                        Measurement Traceability Requirement
                      </h4>
                      <p className="text-sm text-yellow-800 dark:text-yellow-200">
                        Sesuai ISO 9001:2015 Klausul 7.1.5.2, alat ukur harus
                        dikalibrasi atau diverifikasi terhadap standar
                        pengukuran yang tertelusur ke standar internasional atau
                        nasional pada interval yang ditentukan.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-900">
                      <tr className="border-b border-gray-200 dark:border-gray-700">
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Category
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Equipment
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Type
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Quantity
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Location
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Last Calibration
                        </th>
                        <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                          Next Calibration
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
                      {equipment.map((eq) => (
                        <tr
                          key={eq.id}
                          className="hover:bg-gray-50 dark:hover:bg-gray-900"
                        >
                          <td className="px-4 py-4">
                            <div className="flex items-center gap-2">
                              {eq.category === "Monitoring" && (
                                <Gauge className="w-4 h-4 text-purple-600" />
                              )}
                              {eq.category === "IT" && (
                                <HardDrive className="w-4 h-4 text-blue-600" />
                              )}
                              <span className="text-sm font-medium text-gray-900 dark:text-white">
                                {eq.category}
                              </span>
                            </div>
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {eq.resourceName}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {eq.type}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {eq.quantity}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {eq.location}
                          </td>
                          <td className="px-4 py-4 text-sm text-gray-600 dark:text-gray-400">
                            {eq.lastMaintenance}
                          </td>
                          <td className="px-4 py-4 text-sm font-medium text-gray-900 dark:text-white">
                            {eq.nextMaintenance}
                          </td>
                          <td className="px-4 py-4">
                            <span
                              className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(
                                eq.status
                              )}`}
                            >
                              {eq.status}
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
              </div>
            )}

            {/* Knowledge Tab */}
            {activeTab === "knowledge" && (
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    Organizational Knowledge (7.1.6)
                  </h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-brand-500 text-white rounded-lg hover:bg-brand-600 text-sm">
                    <Plus className="w-4 h-4" />
                    Add Knowledge Item
                  </button>
                </div>

                <div className="bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
                  <div className="flex items-start gap-3">
                    <Lightbulb className="w-6 h-6 text-orange-600 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-2">
                        What is Organizational Knowledge?
                      </h4>
                      <p className="text-sm text-orange-800 dark:text-orange-200 mb-3">
                        Pengetahuan yang spesifik untuk organisasi yang
                        diperoleh dari pengalaman. Informasi yang digunakan dan
                        dibagikan untuk mencapai sasaran organisasi .
                      </p>
                      <div className="grid md:grid-cols-2 gap-3 text-sm">
                        <div>
                          <p className="font-medium text-orange-900 dark:text-orange-300 mb-1">
                            Internal Sources:
                          </p>
                          <ul className="space-y-1 text-orange-700 dark:text-orange-200">
                            <li>• Intellectual property</li>
                            <li>• Lessons learned dari projects</li>
                            <li>• Best practices yang terdokumentasi</li>
                            <li>• Results dari improvement initiatives</li>
                          </ul>
                        </div>
                        <div>
                          <p className="font-medium text-orange-900 dark:text-orange-300 mb-1">
                            External Sources:
                          </p>
                          <ul className="space-y-1 text-orange-700 dark:text-orange-200">
                            <li>• Standards & regulations</li>
                            <li>• Training dari external provider</li>
                            <li>• Conferences & seminars</li>
                            <li>• Customer & supplier feedback</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Knowledge Categories */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                        <Package className="w-6 h-6 text-blue-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Documented Knowledge
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Standard Operating Procedures
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            85+ SOP terdokumentasi untuk semua proses bisnis
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Work Instructions
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Detail step-by-step untuk task spesifik
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Process Documentation
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Flowchart dan process map untuk clarity
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900/30 flex items-center justify-center">
                        <Users className="w-6 h-6 text-green-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Tacit Knowledge
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Mentoring Program
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Senior staff mentoring new employees
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Knowledge Sharing Sessions
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Monthly sharing session antar departemen
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Exit Interviews & Handover
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Capture knowledge dari departing employees
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                        <Lightbulb className="w-6 h-6 text-purple-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Lessons Learned
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Project Reviews
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Post-implementation review untuk setiap project
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Root Cause Analysis
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Dokumentasi dari NCR dan corrective actions
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Best Practice Database
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Repository of successful initiatives
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="p-5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900/30 flex items-center justify-center">
                        <TrendingUp className="w-6 h-6 text-orange-600" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        Continuous Learning
                      </h4>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Training Programs
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Regular technical & soft skills training
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            External Benchmarking
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Learning dari best-in-class companies
                          </p>
                        </div>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <p className="font-medium text-gray-900 dark:text-white">
                            Industry Updates
                          </p>
                          <p className="text-gray-600 dark:text-gray-400">
                            Subscribe to industry publications & trends
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>

                {/* Knowledge Management System */}
                <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-5">
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                    <HardDrive className="w-5 h-5 text-brand-500" />
                    Knowledge Management System & Tools
                  </h4>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
                      <h5 className="font-medium text-blue-900 dark:text-blue-300 mb-2">
                        Document Management
                      </h5>
                      <ul className="space-y-1 text-sm text-blue-800 dark:text-blue-200">
                        <li>• Google Drive (cloud storage)</li>
                        <li>• DCMS system untuk ISO docs</li>
                        <li>• Version control aktif</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <h5 className="font-medium text-green-900 dark:text-green-300 mb-2">
                        Communication Platforms
                      </h5>
                      <ul className="space-y-1 text-sm text-green-800 dark:text-green-200">
                        <li>• WhatsApp Business groups</li>
                        <li>• Email untuk formal comm</li>
                        <li>• Monthly town hall meetings</li>
                      </ul>
                    </div>
                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg">
                      <h5 className="font-medium text-purple-900 dark:text-purple-300 mb-2">
                        Learning Management
                      </h5>
                      <ul className="space-y-1 text-sm text-purple-800 dark:text-purple-200">
                        <li>• Training records di Talenta</li>
                        <li>• E-learning platform access</li>
                        <li>• Competency matrix tracking</li>
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Knowledge Retention Strategy */}
                <div className="bg-gradient-to-br from-orange-50 to-yellow-50 dark:from-orange-900/20 dark:to-yellow-900/20 border border-orange-200 dark:border-orange-800 rounded-lg p-5">
                  <h4 className="font-semibold text-orange-900 dark:text-orange-300 mb-3 flex items-center gap-2">
                    <AlertCircle className="w-5 h-5" />
                    Knowledge Retention Strategy
                  </h4>
                  <div className="space-y-3 text-sm text-orange-800 dark:text-orange-200">
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        1
                      </div>
                      <div>
                        <p className="font-medium">
                          Capture Critical Knowledge
                        </p>
                        <p className="text-orange-700 dark:text-orange-300">
                          Identifikasi knowledge yang critical untuk operasi dan
                          dokumentasikan dengan baik
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        2
                      </div>
                      <div>
                        <p className="font-medium">Succession Planning</p>
                        <p className="text-orange-700 dark:text-orange-300">
                          Prepare backup person untuk setiap critical position
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <div className="w-6 h-6 rounded-full bg-orange-500 text-white flex items-center justify-center flex-shrink-0 text-xs font-bold">
                        3
                      </div>
                      <div>
                        <p className="font-medium">Continuous Update</p>
                        <p className="text-orange-700 dark:text-orange-300">
                          Review dan update knowledge base secara berkala
                        </p>
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
                  ISO-7.1-001
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
    </>
  );
}
