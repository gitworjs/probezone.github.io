import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Bar } from "react-chartjs-2";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);

function Result() {
  const location = useLocation();
  const { testText, username, password, textareaValue } = location.state;

  //   testText.map((item, index) => {
  //     console.log("index:", index);
  //     console.log("value:", item.value);
  //   });

  // 그룹별 인덱스 리스트 정의
  const groups = [
    [5, 13, 16],
    [9, 12, 26],
    [15, 17, 19],
    [14, 20, 25],
    [1, 2, 8],
    [0, 3, 18],
    [4, 10, 24],
    [11, 21, 23],
    [6, 7, 22],
  ];
  const newSum = []; // 새로운 배열을 선언하여 합계 값을 담을 준비를 합니다.

  // 각 그룹에 속한 인덱스의 value 값을 더하는 함수
  const sumValuesInGroup = (groupIndexes) => {
    return groupIndexes.reduce((sum, index) => {
      // 해당 인덱스의 value 값을 가져옵니다. 값이 존재하지 않으면 0으로 대체합니다.
      const value = testText[index]?.value || 0;
      return sum + parseInt(value); // 해당 인덱스의 value 값을 더합니다.
    }, 0); // 초기값은 0으로 설정합니다.
  };

  // 각 그룹의 결과를 담을 배열
  const groupSums = groups.map((groupIndexes) => {
    return sumValuesInGroup(groupIndexes);
  });

  const data = {
    labels: [
      "1항목",
      "2항목",
      "3항목",
      "4항목",
      "5항목",
      "6항목",
      "7항목",
      "8항목",
      "9항목",
    ],
    datasets: [
      {
        label: "결과 차트",
        data: groupSums,
        backgroundColor: [
          `rgba(255, 99, 132, 0.7)`, // Red
          `rgba(54, 162, 235, 0.7)`, // Blue
          `rgba(255, 206, 86, 0.7)`, // Yellow
          `rgba(75, 192, 192, 0.7)`, // Green
          `rgba(153, 102, 255, 0.7)`, // Purple
          `rgba(255, 159, 64, 0.7)`, // Orange
          `rgba(255, 0, 0, 0.7)`, // Red
          `rgba(0, 255, 0, 0.7)`, // Green
          `rgba(0, 0, 255, 0.7)`, // Blue
        ],
        borderColor: [
          `rgba(255, 99, 132, 0.2)`, // Red
          `rgba(54, 162, 235, 0.2)`, // Blue
          `rgba(255, 206, 86, 0.2)`, // Yellow
          `rgba(75, 192, 192, 0.2)`, // Green
          `rgba(153, 102, 255, 0.2)`, // Purple
          `rgba(255, 159, 64, 0.2)`, // Orange
          `rgba(255, 0, 0, 0.2)`, // Red
          `rgba(0, 255, 0, 0.2)`, // Green
          `rgba(0, 0, 255, 0.2)`, // Blue
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    scales: {
      x: {
        type: "category", // x축의 스케일을 category로 설정
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  groupSums.forEach((sum, index) => {
    newSum.push({ sum, index }); // 합계 값과 해당 그룹의 인덱스를 객체로 묶어서 새로운 배열에 추가합니다.
  });

  return (
    <div>
      <h2
        style={{
          color: "#ffffff",
        }}
      >
        결과 페이지
      </h2>
      <div>
        <p>
          이름: {username}
          <br />
          투자: {textareaValue}
        </p>
      </div>
      <Bar data={data} width={100} height={50} options={options} />
    </div>
  );
}

export default Result;
