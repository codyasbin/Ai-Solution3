"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface Feedback {
  _id: string;
  name: string;
  role: string;
  feedback: string;
  rating: number;
}

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex">
    {[...Array(Math.floor(rating))].map((_, i) => (
      <span key={i} className="text-yellow-500">★</span>
    ))}
    {rating % 1 !== 0 && <span className="text-yellow-300">★</span>}
  </div>
);

export default function FeedbackSection() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  const fetchFeedback = async () => {
    try {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      if (response.ok) {
        setFeedbacks(data);
      } else {
        toast.error("Failed to fetch feedback");
      }
    } catch (error) {
      console.error("Error fetching feedback:", error);
      toast.error("Error fetching feedback");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteFeedback = async (id: string) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this feedback?");
    if (!confirmDelete) return;

    try {
      const response = await fetch(`/api/testimonials/delete?id=${id}`, {
        method: "DELETE",
      });
      const result = await response.json();
      if (response.ok) {
        toast.success("Feedback deleted successfully!");
        fetchFeedback();
      } else {
        toast.error(result.error || "Error deleting feedback");
      }
    } catch (error) {
      console.error("Error deleting feedback:", error);
      toast.error("Error deleting feedback");
    }
  };

  useEffect(() => {
    fetchFeedback();
  }, []);

  return (
    <motion.div
      className="p-8 space-y-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h2 className="text-3xl font-bold text-center mb-8">Feedbacks</h2>
      
      {loading ? (
        <div className="text-center text-gray-500">Loading feedback...</div>
      ) : feedbacks.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-2 px-4 font-semibold text-sm text-gray-700">Name</th>
              <th className="py-2 px-4 font-semibold text-sm text-gray-700">Role</th>
              <th className="py-2 px-4 font-semibold text-sm text-gray-700">Feedback</th>
              <th className="py-2 px-4 font-semibold text-sm text-gray-700">Rating</th>
              <th className="py-2 px-4 font-semibold text-sm text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody>
            {feedbacks.map((feedback) => (
              <motion.tr
                key={feedback._id}
                className="hover:bg-gray-50 transition-colors"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <td className="py-4 px-4 border-b border-gray-200">{feedback.name}</td>
                <td className="py-4 px-4 border-b border-gray-200">{feedback.role}</td>
                <td className="py-4 px-4 border-b border-gray-200 italic">{feedback.feedback}</td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <StarRating rating={feedback.rating} />
                </td>
                <td className="py-4 px-4 border-b border-gray-200">
                  <button
                    aria-label={`Delete feedback by ${feedback.name}`}
                    onClick={() => handleDeleteFeedback(feedback._id)}
                    className="text-red-600 hover:text-red-900"
                  >
                    Delete
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-center text-gray-500 mt-4">No feedback available</p>
      )}
    </motion.div>
  );
}
