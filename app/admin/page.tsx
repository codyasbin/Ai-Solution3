"use client";

import { useState, useEffect } from "react";
import { useAuth, RedirectToSignIn, SignOutButton } from "@clerk/nextjs";
import { motion } from "framer-motion";
import ContactInfo from "@/components/admin/contacts";
import Stats from "@/components/admin/stats";
import FeedbackSection from "@/components/admin/feedback";

const AdminDashboard = () => {
  const { isSignedIn, isLoaded } = useAuth();
  const [activeTab, setActiveTab] = useState("contacts");
  const [contacts, setContacts] = useState<any[]>([]);
  const [stats, setStats] = useState<any | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTabChange = (tab: string) => setActiveTab(tab);

  const fetchContacts = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/admin/contacts");
      const data = await response.json();
      if (response.ok) {
        setContacts(data);
        calculateStats(data);
      } else {
        throw new Error(data.error || "Failed to fetch contacts.");
      }
    } catch (err: unknown) { // Specify that err is of type 'unknown'
      if (err instanceof Error) { // Check if it's an instance of Error
        setError(err.message || "Something went wrong.");
      } else {
        setError("Something went wrong.");
      }
    } finally {
      setLoading(false);
    }
  };
  
  const calculateStats = (data: any[]) => {
    const countryStats: Record<string, number> = {};
    const jobTitleStats: Record<string, number> = {};

    data.forEach((contact) => {
      countryStats[contact.country] = (countryStats[contact.country] || 0) + 1;
      jobTitleStats[contact.jobTitle] =
        (jobTitleStats[contact.jobTitle] || 0) + 1;
    });

    const countryData = {
      labels: Object.keys(countryStats),
      datasets: [
        {
          data: Object.values(countryStats),
          backgroundColor: ["#A3A9FC", "#88D0F7", "#F4A261", "#2EC4B6"],
        },
      ],
    };

    setStats({
      totalContacts: data.length,
      countryStats: countryData,
      jobTitleStats,
    });
  };

  useEffect(() => {
    if (isSignedIn && activeTab === "stats") {
      fetchContacts();
    }
  }, [isSignedIn, activeTab]);

  if (!isLoaded) return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  if (!isSignedIn) return <RedirectToSignIn />;

  return (
    <motion.div
      className="flex min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Sidebar */}
      <aside className="w-64 bg-gradient-to-b from-cyan-900 to-teal-800 text-white p-6">
        <h2 className="text-2xl font-bold mb-8">Admin Dashboard</h2>
        <ul className="space-y-4">
          {["contacts", "stats", "feedback"].map((tab) => (
            <li
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`cursor-pointer p-3 rounded-md transition ${
                activeTab === tab
                  ? "bg-teal-600 text-white"
                  : "hover:bg-cyan-700 hover:text-white"
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)} Information
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8 bg-cyan-50">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-700">Welcome, Shanta Ranabhat</h1>
          <div>
            <SignOutButton>
              <button className="px-6 py-3 bg-red-600 text-white rounded-md hover:bg-red-700">
                Sign Out
              </button>
            </SignOutButton>
          </div>
        </div>

        {/* Active Tab Content */}
        {loading && <div>Loading...</div>}
        {error && <div className="text-red-600">Error: {error}</div>}
        {!loading && !error && (
          <>
            {activeTab === "contacts" && <ContactInfo />}
            {activeTab === "stats" && stats && <Stats stats={stats} />}
            {activeTab === "feedback" && (
              <div>
                <h2 className="text-3xl mb-6">Feedback Section</h2>
                <FeedbackSection />
              </div>
            )}
          </>
        )}
      </main>
    </motion.div>
  );
};

export default AdminDashboard;
