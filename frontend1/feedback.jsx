import { useEffect, useState } from "react";
import API from "../utils/api";

export default function Feedback() {
  const [feedbackList, setFeedbackList] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      try {
        const { data } = await API.get("/interview/feedback");
        setFeedbackList(data);
      } catch (err) {
        alert(err.response?.data?.message || "Error fetching feedback");
      }
    };
    fetchFeedback();
  }, []);

  return (
    <div className="min-h-screen bg-blue-50 p-6">
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Past Feedback
        </h1>
        {feedbackList.length === 0 ? (
          <p className="text-gray-700 text-center">No feedback available yet.</p>
        ) : (
          feedbackList.map((item, index) => (
            <div key={index} className="border-b p-4 last:border-b-0">
              <p className="text-gray-800"><strong>Question:</strong> {item.question}</p>
              <p className="text-gray-700"><strong>Your Answer:</strong> {item.answer}</p>
              <p className="text-blue-700"><strong>AI Feedback:</strong> {item.feedback}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
