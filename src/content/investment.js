import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "../assets/css/author.css"; // 스타일 파일을 import

function Investment() {
  const location = useLocation();
  const { username } = location.state;
  const [textareaValue, setTextareaValue] = useState(""); // textarea 값의 state 추가

  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/Buti", {
      state: { username, textareaValue },
    });
  };

  const handleResultButtonClick = () => {
    // textareaValue가 비어있는지 여부를 확인합니다.
    if (textareaValue.trim() !== "") {
      // textareaValue가 비어있지 않으면 실행할 로직을 여기에 추가합니다.
      handleButtonClick();
    } else {
      // textareaValue가 비어있으면 알림을 표시할 수 있습니다.
      alert("Please answer all questions.");
    }
  };

  return (
    <div>
      <div className="content">
        <p>
          <span>아웃사이드 뷰티, 이너 뷰티, 마인드 뷰티</span>
          <br />
          중에 투자하고 있는 것은?
          <br />
          <textarea
            type="text"
            className="white-input"
            value={textareaValue}
            onChange={(e) => setTextareaValue(e.target.value)}
          />
        </p>
        <div className="result">
          <div style={{ width: "100%" }}>
            <button
              onClick={handleResultButtonClick}
              title="결과"
              style={{
                color: "#ffffff",
              }}
            >
              <span>테스트 시작!!</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Investment;
//   return (
//     // Header
//     <div>
//       <section id="header">
//         <div className="inner">
//           <span className="icon solid major fa-cloud"></span>
//           <h1>
//             Hi, I'm <strong>Photon</strong>, another fine
//             <br />
//             little freebie from <a href="http://html5up.net">HTML5 UP</a>.
//           </h1>
//           <p>
//             Accumsan feugiat mi commodo erat lorem ipsum, sed magna
//             <br />
//             lobortis feugiat sapien sed etiam volutpat accumsan.
//           </p>
//           <ul className="actions special">
//             <li>
//               <a href="#one" className="button scrolly">
//                 Discover
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* One */}
//       <section id="one" className="main style1">
//         <div className="container">
//           <div className="row gtr-150">
//             <div className="col-6 col-12-medium">
//               <header className="major">
//                 <h2>
//                   Lorem ipsum dolor adipiscing
//                   <br />
//                   amet dolor consequat
//                 </h2>
//               </header>
//               <p>
//                 Adipiscing a commodo ante nunc accumsan et interdum mi ante
//                 adipiscing. A nunc lobortis non nisl amet vis sed volutpat
//                 aclacus nascetur ac non. Lorem curae et ante amet sapien sed
//                 tempus adipiscing id accumsan.
//               </p>
//             </div>
//             <div className="col-6 col-12-medium imp-medium">
//               <span className="image fit">
//                 <img src="images/pic01.jpg" alt="" />
//               </span>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Two */}
//       <section id="two" className="main style2">
//         <div className="container">
//           <div className="row gtr-150">
//             <div className="col-6 col-12-medium">
//               <ul className="major-icons">
//                 <li>
//                   <span className="icon solid style1 major fa-code"></span>
//                 </li>
//                 <li>
//                   <span className="icon solid style2 major fa-bolt"></span>
//                 </li>
//                 <li>
//                   <span className="icon solid style3 major fa-camera-retro"></span>
//                 </li>
//                 <li>
//                   <span className="icon solid style4 major fa-cog"></span>
//                 </li>
//                 <li>
//                   <span className="icon solid style5 major fa-desktop"></span>
//                 </li>
//                 <li>
//                   <span className="icon solid style6 major fa-calendar"></span>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-6 col-12-medium">
//               <header className="major">
//                 <h2>
//                   Lorem ipsum dolor adipiscing
//                   <br />
//                   amet dolor consequat
//                 </h2>
//               </header>
//               <p>
//                 Adipiscing a commodo ante nunc accumsan interdum mi ante
//                 adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
//                 nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
//                 Adipiscing id accumsan adipiscing ipsum.
//               </p>
//               <p>
//                 Blandit faucibus proin. Ac aliquam integer adipiscing enim non
//                 praesent vis commodo nunc phasellus cubilia ac risus accumsan.
//                 Accumsan blandit. Lobortis phasellus non lobortis dit varius mi
//                 varius accumsan lobortis. Blandit ante aliquam lacinia lorem
//                 lobortis semper morbi col faucibus vitae integer placerat
//                 accumsan orci eu mi odio tempus adipiscing adipiscing adipiscing
//                 curae consequat feugiat etiam dolore.
//               </p>
//               <p>
//                 Adipiscing a commodo ante nunc accumsan interdum mi ante
//                 adipiscing. A nunc lobortis non nisl amet vis volutpat aclacus
//                 nascetur ac non. Lorem curae eu ante amet sapien in tempus ac.
//                 Adipiscing id accumsan adipiscing ipsum.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Three */}
//       <section id="three" className="main style1 special">
//         <div className="container">
//           <header className="major">
//             <h2>Adipiscing amet consequat</h2>
//           </header>
//           <p>Ante nunc accumsan et aclacus nascetur ac ante amet sapien sed.</p>
//           <div className="row gtr-150">
//             <div className="col-4 col-12-medium">
//               <span className="image fit">
//                 <img src="images/pic02.jpg" alt="" />
//               </span>
//               <h3>Magna feugiat lorem</h3>
//               <p>
//                 Adipiscing a commodo ante nunc magna lorem et interdum mi ante
//                 nunc lobortis non amet vis sed volutpat et nascetur.
//               </p>
//               <ul className="actions special">
//                 <li>
//                   <a href="#" className="button">
//                     More
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-4 col-12-medium">
//               <span className="image fit">
//                 <img src="images/pic03.jpg" alt="" />
//               </span>
//               <h3>Magna feugiat lorem</h3>
//               <p>
//                 Adipiscing a commodo ante nunc magna lorem et interdum mi ante
//                 nunc lobortis non amet vis sed volutpat et nascetur.
//               </p>
//               <ul className="actions special">
//                 <li>
//                   <a href="#" className="button">
//                     More
//                   </a>
//                 </li>
//               </ul>
//             </div>
//             <div className="col-4 col-12-medium">
//               <span className="image fit">
//                 <img src="images/pic04.jpg" alt="" />
//               </span>
//               <h3>Magna feugiat lorem</h3>
//               <p>
//                 Adipiscing a commodo ante nunc magna lorem et interdum mi ante
//                 nunc lobortis non amet vis sed volutpat et nascetur.
//               </p>
//               <ul className="actions special">
//                 <li>
//                   <a href="#" className="button">
//                     More
//                   </a>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Four */}
//       <section id="four" className="main style2 special">
//         <div className="container">
//           <header className="major">
//             <h2>Ipsum feugiat consequat?</h2>
//           </header>
//           <p>Sed lacus nascetur ac ante amet sapien.</p>
//           <ul className="actions special">
//             <li>
//               <a href="#" className="button wide primary">
//                 Sign Up
//               </a>
//             </li>
//             <li>
//               <a href="#" className="button wide">
//                 Learn More
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       {/* Footer */}
//       <section id="footer">
//         <ul className="icons">
//           <li>
//             <a href="#" className="icon brands alt fa-twitter">
//               <span className="label">Twitter</span>
//             </a>
//           </li>
//           <li>
//             <a href="#" className="icon brands alt fa-facebook-f">
//               <span className="label">Facebook</span>
//             </a>
//           </li>
//           <li>
//             <a href="#" className="icon brands alt fa-instagram">
//               <span className="label">Instagram</span>
//             </a>
//           </li>
//           <li>
//             <a href="#" className="icon brands alt fa-github">
//               <span className="label">GitHub</span>
//             </a>
//           </li>
//           <li>
//             <a href="#" className="icon solid alt fa-envelope">
//               <span className="label">Email</span>
//             </a>
//           </li>
//         </ul>
//         <ul className="copyright">
//           <li>&copy; Untitled</li>
//           <li>
//             Design: <a href="http://html5up.net">HTML5 UP</a>
//           </li>
//         </ul>
//       </section>
//     </div>
//   );
// }

// export default TestScreen;
