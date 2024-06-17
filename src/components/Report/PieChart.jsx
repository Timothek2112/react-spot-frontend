import React from "react";
import { Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

const PieChart = ({ question, survey, ...props }) => {
  const Data = question.answerVariants.map((variant) => {
    const answersForVar = survey.answers.filter(
      (answer) =>
        answer.questionId == question.id && answer.answerVariantId == variant.id
    );
    return { title: variant.title, count: answersForVar.length };
  });
  const pieChartData = {
    labels: Data.map((el) => el.title),
    datasets: [
      {
        data: Data.map((el) => el.count),
        backgroundColor: ["#f00", "#fa0", "#ffeb33", "#00a2ff", "#03ff68"],
        hoverBackgroundColor: ["#f00", "#fa0", "#ffeb33", "#00a2ff", "#03ff68"],
      },
    ],
  };
  const pieChart = (
    <div className="w-full h-full">
      <Pie
        type="pie"
        options={{
          responsive: true,
          maintainAspectRatio: true,
          width: 250,
          radius: 75,
          plugins: {
            legend: {
              display: true,
              position: "bottom",
            },
          },
        }}
        data={pieChartData}
      />
    </div>
  );
  return pieChart;
};
export default PieChart;
