"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface FeedbackData {
  name: string;
  role: string;
  image: string;
  feedback: string;
  rating: number;
}

export default function FeedbackForm() {
  const [formData, setFormData] = useState<FeedbackData>({
    name: "",
    role: "",
    image: "",
    feedback: "",
    rating: 5,
  });
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.name === "rating"
        ? Math.max(1, Math.min(5, Number(e.target.value))) // Ensure rating is between 1-5
        : e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setSuccessMessage(null);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/testimonials/add", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (response.ok) {
        setSuccessMessage("Feedback submitted successfully!");
        setFormData({
          name: "",
          role: "",
          image: "",
          feedback: "",
          rating: 5,
        });
      } else {
        setErrorMessage(result.error || "Failed to submit feedback");
      }
    } catch (error) {
      console.error("Error submitting feedback:", error);
      setErrorMessage("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const renderInputField = (
    label: string,
    type: string,
    name: keyof FeedbackData,
    placeholder: string,
    value: string | number,
    additionalProps: object = {}
  ) => (
    <div>
      <label htmlFor={name} className="block font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
        {...additionalProps}
      />
    </div>
  );

  return (
    <form
      className="bg-gradient-to-r from-cyan-50 via-white to-cyan-50 p-8 rounded-xl shadow-xl max-w-lg mx-auto mt-8 space-y-6"
      onSubmit={handleSubmit}
    >
      <h3 className="text-3xl font-bold text-center text-gray-800">
        Share Your Feedback
      </h3>
      <p className="text-center text-gray-500">
        We'd love to hear your thoughts and improve.
      </p>

      <div className="space-y-4">
        {/* Name Input */}
        {renderInputField("Name", "text", "name", "Your Name", formData.name, {
          required: true,
        })}

        {/* Role Input */}
        {renderInputField(
          "Role",
          "text",
          "role",
          "Your Role (e.g., Developer, Designer)",
          formData.role,
          { required: true }
        )}

        {/* Image URL Input */}
        {renderInputField(
          "Profile Image URL",
          "url",
          "image",
          "Add your profile image URL",
          formData.image
        )}

        {/* Feedback Textarea */}
        <div>
          <label
            htmlFor="feedback"
            className="block font-medium text-gray-700 mb-1"
          >
            Feedback
          </label>
          <textarea
            id="feedback"
            name="feedback"
            placeholder="Share your feedback..."
            value={formData.feedback}
            onChange={handleChange}
            rows={4}
            className="w-full p-4 border-2 border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-cyan-500 focus:outline-none"
            required
          ></textarea>
          <p className="text-sm text-gray-500 mt-1">
            {formData.feedback.length} / 500 characters
          </p>
        </div>

        {/* Rating Input */}
        {renderInputField(
          "Rating (1-5)",
          "number",
          "rating",
          "Rate us from 1 to 5",
          formData.rating,
          { required: true, min: 1, max: 5 }
        )}

        {/* Success and Error Messages */}
        <AnimatePresence>
          {successMessage && (
            <motion.p
              className="text-green-600 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              aria-live="polite"
            >
              {successMessage}
            </motion.p>
          )}
          {errorMessage && (
            <motion.p
              className="text-red-600 text-center"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              aria-live="polite"
            >
              {errorMessage}
            </motion.p>
          )}
        </AnimatePresence>

        {/* Submit Button */}
        <div className="flex justify-center">
          <button
            type="submit"
            className="bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold py-3 px-8 rounded-lg hover:from-cyan-600 hover:to-cyan-700 transition-all duration-300"
            disabled={isLoading}
            aria-label="Submit Feedback"
          >
            {isLoading ? "Submitting..." : "Submit Feedback"}
          </button>
        </div>
      </div>
    </form>
  );
}
