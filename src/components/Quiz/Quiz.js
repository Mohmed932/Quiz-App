import React, { Fragment, useState } from "react";
import "./Quiz.css";
import { motion } from "framer-motion";
import { Questions } from "../Questions";
import Result from "../Result/Result";
const Quiz = () => {
  const [number, setNumber] = useState(0);
  const [Correct, setCorrect] = useState(0);
  const [show, setshow] = useState(true);
  const handelNumber = ({ isCorrect }) => {
    setNumber(number + 1);
    if (isCorrect) {
      setCorrect(Correct + 1);
    }
    if (number + 2 > Questions.length) {
      setNumber(0);
      setshow(!show);
    }
  };

  return (
    <Fragment>
      {show ? (
        <div className="Quiz">
          <span className="Quiz-title">
            Question
            <motion.span
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              {number + 1}
            </motion.span>
            /{Questions.length}
          </span>
          <div className="quest">
            <motion.h1
              className="Quiz-quest"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {Questions[number].text}
            </motion.h1>
          </div>
          <div className="answer-text">
            {Questions[number].options.map(({ id, isCorrect, text }) => (
              <div className="answer" key={id}>
                <motion.h3
                  onClick={() => handelNumber({ isCorrect })}
                  initial={{ opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ opacity: 0.4 }}
                >
                  {text}
                </motion.h3>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <Result Correct={Correct} setshow={setshow} />
      )}
    </Fragment>
  );
};

export default Quiz;
