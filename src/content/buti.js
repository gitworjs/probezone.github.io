import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/buti.css"; // 스타일 파일을 import
import "../assets/css/noscript.css";
import "../assets/css/main.css";

function Buti() {
  const location = useLocation();
  const { username, textareaValue } = location.state;

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Result", {
      state: { testText, username, textareaValue },
    });
  };

  const [selectedValues, setSelectedValues] = useState([]);

  const [testText, setTestText] = useState([
    {
      label:
        "1번. 나는 명확한 지침과 잘 훈련된 조직에서 최상의 능률을 발휘하며,충성할 만한 사람이나 집단에 헌신한다.",
      value: "",
    },
    {
      label:
        "2번. 나는 문제나 관심사에 깊이 통찰하며 집중적으로 생각하며, 이를 이해하는 데 시간을 투자한다.",
      value: "",
    },
    {
      label:
        "3번. 나는 이성적이고 지적으로 모든 것을 판단하며, 주변 세계를 냉철하게 관찰한다.",
      value: "",
    },
    {
      label:
        "4번. 결과에 대한 두려움이 있지만, 모든 일에서 안전과 신뢰를 중요하게 생각한다.",
      value: "",
    },
    {
      label:
        "5번. 나는 미래에 대한 열정을 가지고 있으며, 어린아이처럼 명량하고 순진한 기질을 가지고 있다.",
      value: "",
    },
    {
      label: "6번. 나는 모든 일을 깊이 생각하고, 원칙에 따라 완벽을 추구한다.",
      value: "",
    },
    {
      label:
        "7번. 나는 갈등을 피하며, 조화와 평화를 중요하게 생각하는 평화주의자이다.",
      value: "",
    },
    {
      label:
        "8번. 나는 원만하고 태평한 성격으로, 감정의 동요가 적어 사람들과 편안하게 지낸다.",
      value: "",
    },
    {
      label:
        "9번. 권위나 규칙보다는 개인의 생각과 판단을 중시하며, 개인생활에 더 큰 관심을 가진다.",
      value: "",
    },
    {
      label: "10번. 나는 다른 사람들과 함께 일하는 것을 좋아한다.",
      value: "",
    },
    {
      label:
        "11번. 일상적인 현실에 만족하지 않고, 자극적이고 재미있는 활동을 즐긴다.",
      value: "",
    },
    {
      label:
        "12번. 나는 지도자로서의 강한 기질과 영향력을 가지고 있으며, 의사 결정 시에도 이를 발휘한다.",
      value: "",
    },
    {
      label:
        "13번. 나는 사람들에게 자주 칭찬하고, 사람들의 호감과 만족을 위해 지속적으로 노력한다.",
      value: "",
    },
    {
      label: "14번. 나는 근면하며, 책임감과 정의감이 강하다.",
      value: "",
    },
    {
      label:
        "15번. 나는 몽상가적이며, 본인의 감정과 행동 동기에 대해 깊게 고민하고 회의적으로 생각하기도 한다.",
      value: "",
    },
    {
      label:
        "16번. 나는 실패를 두려워하고, 사람들에 대한 배려보다는 일의 성과를 우선시한다.",
      value: "",
    },
    {
      label: "17번. 나는 자제력이 있으며 다른 사람들의 신임을 얻을 수 있다.",
      value: "",
    },
    {
      label:
        "18번. 나는 상황에 빠르게 적응하면서도, 일의 성취와 성공을 중요하게 생각한다.",
      value: "",
    },
    {
      label:
        "19번. 나는 친한 사람과의 관계를 중요하게 생각하여 영원한 우정을 유지하려고 노력한다.",
      value: "",
    },
    {
      label:
        "20번. 나는 능력을 최대한 발휘하기 위해 많은 시간을 투자하며, 결과와 목표 달성을 최우선으로 생각한다.",
      value: "",
    },
    {
      label:
        "21번. 나는 감성적이며 예술가적인 기질을 가지고 있어 혼자서의 시간과 독특한 취미를 즐긴다.",
      value: "",
    },
    {
      label:
        "22번. 나는 사람들을 지시하고 동기를 부여하며, 자기 주장이 강하고 공격적인 성향을 가지고 있다.",
      value: "",
    },
    {
      label: "23번. 나는 수용적이며 친구들의 의견에 동조하는 편이다.",
      value: "",
    },
    {
      label:
        "24번. 나는 강한 자신감으로 어려운 주제도 이야기하며, 사람들을 설득하고 통제한다.",
      value: "",
    },
    {
      label:
        "25번. 나는 변화와 모험을 추구하며, 위험을 감수하는 새로운 경험을 갈망한다.",
      value: "",
    },
    {
      label:
        "26번. 나는 주위 환경과 감정에 민감하게 반응하며, 때로는 이방인처럼 느끼거나 혼자 우울해진다.",
      value: "",
    },
    {
      label:
        "27번. 나의 관심사는 다른 사람들을 도와주고, 나에게 의지하는 것을 좋아한다.",
      value: "",
    },
  ]);

  const handleValueChange = (value, index) => {
    const newTestText = [...testText]; // testText 배열을 복사합니다.
    // console.log(newTestText);
    newTestText[index].value = value; // 클릭된 인덱스의 value를 업데이트합니다.
    setTestText(newTestText); // 업데이트된 testText 배열을 상태로 설정합니다.

    const updatedSelectedValues = [...testText]; // selectedValues 배열을 복사합니다.
    if (!updatedSelectedValues.includes(index)) {
      // 인덱스가 이미 선택되어 있는지 확인합니다.
      updatedSelectedValues.push(index); // 인덱스를 추가합니다.
    } else {
      // 인덱스가 이미 선택되어 있는 경우
      updatedSelectedValues.splice(updatedSelectedValues.indexOf(index), 1); // 인덱스를 제거합니다.
    }
    setSelectedValues(updatedSelectedValues); // 업데이트된 selectedValues 배열을 상태로 설정합니다.
  };

  const handleResultButtonClick = () => {
    // 선택된 값이 모두 존재하는지 확인합니다.
    const allValuesExist = testText.every((item) => item.value !== "");
    if (allValuesExist) {
      // 모든 값이 존재할 때 실행할 로직을 여기에 추가합니다.
      handleButtonClick();
    } else {
      // 값이 하나라도 존재하지 않을 때 알림을 표시할 수 있습니다.
      alert("Please answer all questions.");
    }
  };

  return (
    <div className="centered-content">
      <div className="content">
        <p>나의 마인드뷰티 컬러는?</p>
        <p>
          1. 전혀그렇지 않다 2. 대체로 그렇지 않다 3.보통이다 <br />
          4.대체로 그렇다 5.매우 그렇다
        </p>
        <div className="scrollable-container">
          <div>
            {testText.map((item, index) => (
              <div key={index}>
                <p>{item.label}</p>
                <div className="button-container">
                  {[1, 2, 3, 4, 5].map((number) => (
                    <button
                      key={number}
                      style={{
                        border: "1px solid #ffffff", // 테두리 두께와 색상을 지정합니다.
                        backgroundColor: item.value === number ? "gray" : "",
                      }}
                      onClick={() => handleValueChange(number, index)}
                    >
                      <span>{number}</span>
                    </button>
                  ))}
                </div>
                <br />
              </div>
            ))}
          </div>
        </div>
        <div className="result">
          <div style={{ width: "100%" }}>
            <button
              onClick={handleResultButtonClick}
              title="결과"
              style={{
                color: "#ffffff",
              }}
            >
              <span>결과</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Buti;
