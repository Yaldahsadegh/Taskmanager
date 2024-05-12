import axios from "axios";
import React, { useState, useEffect } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const Performance = () => {
  //DEFINE THE TASK OBJ
  interface TasksPerformance {
    newtask: number;
    inprocessTask: number;
    completedTask: number;
  }

  const options = {};
  const [taskPerformance, setTaskPerformance] =
    useState<TasksPerformance | null>(null);

  useEffect(() => {
    axios
      .get("http://localhost:4000/task/status/count")
      .then((response) => {
        setTaskPerformance(response.data.data as TasksPerformance);
      })
      .catch((err) => console.log(err));
  }, []);

  const data = {
    labels: ["New", "In Process", "Completed"],
    datasets: [
      {
        data: [
          taskPerformance?.newtask,
          taskPerformance?.inprocessTask,
          taskPerformance?.completedTask,
        ],
        backgroundColor: ["#4b80bd", "#1d2a57", "#1f7d0f"],
      },
    ],
  };

  return (
    <>
      Performance
      <div>
        {taskPerformance && (
          <div>
            <Doughnut data={data} options={options}></Doughnut>
          </div>
        )}
      </div>
    </>
  );
};

export default Performance;
