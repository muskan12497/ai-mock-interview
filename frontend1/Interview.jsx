import { useState } from "react";
import API from "../utils/api";

export default function Interview() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [response, setResponse] = useState("");

  const handleNextQuestion = async () => {
    try {
      const { data } = await API.get("/interview/next"); // backend should return next question
      setQuestion(data.question);
      setAnswer("");
      setResponse("");
    } catch (err) {
      alert(err.response?.data?.message || "Error fetching question");
    }
  };

  const handleSubmitAnswer = async () => {
    try {
      const { data } = await API.post("/interview/answer", { answer });
      setResponse(data.feedback);
    } catch (err) {
      alert(err.response?.data?.message || "Error submitting answer");
    }
  };

  return (
    <div className="min-h-screen bg-blue-50 flex flex-col items-center p-6">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl w-full">
        <h2 className="text-2xl font-bold text-blue-700 mb-4">Mock Interview</h2>
        <p className="mb-4 text-gray-700">{question || "Click 'Next Question' to start"}</p>
        {question && (
          <>
            <textarea
              className="border p-2 rounded-md w-full mb-4"
              rows="5"
              placeholder="Type your answer..."
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
            />
            <button
              onClick={handleSubmitAnswer}
              className="bg-blue-700 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition mb-4"
            >
              Submit Answer
            </button>
          </>
        )}
        {response && (
          <div className="bg-blue-100 p-4 rounded-md text-blue-800 mb-4">
            <strong>AI Feedback:</strong> {response}
          </div>
        )}
        <button
          onClick={handleNextQuestion}
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition"
        >
          Next Question
        </button>
      </div>
    </div>
  );
}
