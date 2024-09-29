import React,{useEffect, useState} from "react";
import "./qlist.css";
import { useNavigate } from "react-router-dom";
import ProgressBar from "@ramonak/react-progress-bar";
import { Card } from './Card';  // Adjust the path as necessary
import BottomPart from "./BottomPart.jsx"
import TopPart from "./TopPart.jsx"


function QuestionList() {
  const navigate = useNavigate();
  const [progressDiv1, setProgressDiv1] = useState(0);
  const [progressDiv2, setProgressDiv2] = useState(0);

  useEffect(() => {
    
    const c1q1 = localStorage.getItem('c1-q1');
    const c1q2 = localStorage.getItem('c1-q2');
    const c2q1 = localStorage.getItem('c2-q1');
    const c2q2 = localStorage.getItem('c2-q2');

    if (!c1q1 && !c1q2) {
      setProgressDiv1(0);
    } else if (c1q1 && !c1q2) {
      setProgressDiv1(50);
    } else if (c1q1 && c1q2) {
      setProgressDiv1(100);
    }

    if (!c2q1 && !c2q2) {
      setProgressDiv2(0);
    } else if (c2q1 && !c2q2) {
      setProgressDiv2(50);
    } else if (c2q1 && c2q2) {
      setProgressDiv2(100);
    }
  
    return () => {
      
    }
  }, [])
  

  const handleNavigateToSubmit = () => {
    navigate("/submit");
  };

  const handleNavigateToQuestion = (questionId) => {
    navigate(`/questions/${questionId}`);
  };

  const handleNavigateToQuestion2 = (questionId) => {
    navigate(`/questions2/${questionId}`);
  };

  return (
    <div className={`flex md:flex-row flex-col sm:py-1 py-10`}>
      <TopPart />
      <BottomPart />
  <button className="submit-button" onClick={handleNavigateToSubmit}>
    Submit a Question
  </button>
  <h2 className="q-list-title">Solidity: Beginner to Intermediate Smart Contracts</h2>

  

  <br/>
  <div className="q-list">
    <div className="q-item">
      <div className="q-info">
        <span className="q-name">questions part 1</span>
      </div>
      <ProgressBar completed={progressDiv1} bgColor="#007bff" isLabelVisible={false} /> 
      <br/>
      <button className="q-link" onClick={() => handleNavigateToQuestion('question1')}>
        Solve
      </button>

    </div>
    <div className="q-item">
      <div className="q-info">
        <span className="q-name">questions part 2</span>
      </div>
      <ProgressBar completed={progressDiv2} bgColor="#007bff" isLabelVisible={false}/>
      <br/>
      <button className="q-link" onClick={() => handleNavigateToQuestion2('question1')}>
        Solve
      </button>

    </div>
  </div>
</div>

  );
}

export default QuestionList;
