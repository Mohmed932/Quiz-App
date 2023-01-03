import React from "react";
import "./Result.css";
import { Questions } from "../Questions";
import { motion } from "framer-motion";

const Result = ({ Correct, setshow }) => {
  return (
    <div className="Result">
      <h4>Congratulations you made it to the end!!!</h4>
      <h3>
        You answered {Correct} / {Questions.length} questions correct
      </h3>
      <motion.button
        whileTap={{ scale: 0.9 }}
        whileHover={{ opacity: 0.4 }}
        onClick={() => setshow(true)}
      >
        Play Again
      </motion.button>
    </div>
  );
};

export default Result;
