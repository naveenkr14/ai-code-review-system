import { useState } from "react";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";
import "highlight.js/styles/github-dark.css";
import axios from "axios";
import "./App.css";

function App() {
  const [code, setCode] = useState(`function sum() {
  return 1 + 1;
}`);

  const [review, setReview] = useState("");

  async function reviewCode() {
    try {
      const response = await axios.post(
        "http://localhost:3000/ai/get-review",
        { code }
      );

      setReview(response.data);
    } catch (error) {
      console.error(error);
      setReview("Failed to connect to backend server.");
    }
  }

  return (
    <main>
      <div className="left">
        <div className="code">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={{
              width: "100%",
              height: "400px",
              fontSize: "16px",
              padding: "10px",
              fontFamily: "monospace",
            }}
          />
        </div>

        <button
          onClick={reviewCode}
          className="review"
        >
          Review
        </button>
      </div>

      <div className="right">
        <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
          {review}
        </ReactMarkdown>
      </div>
    </main>
  );
}

export default App;