import React from "react";
import "./middlepart.css";
import LoginButton from "../../../../components/login-button/LoginButton";

import { useAuth0, loginWithRedirect } from "@auth0/auth0-react";
import { RedirectToSignUp } from "@clerk/clerk-react";

const MiddlePart = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <div className="">
        <div className="boxes flex flex-row justify-center items-center mt-16">
          <div className="leftBox flex flex-col justify-center items-center">
            <h2
              className="font-bold text-6xl"
              style={{ fontFamily: "Poppins" }}
            >
              🎓 Akademiq 🏆
            </h2>
            <br />
            <h4
              className="w-[28rem] text-[#594a4e] text-xl font-light"
              style={{ fontFamily: "Poppins" }}
            >
              Our platform revolutionizes education. Students access classes
              with unique codes, receive AI-generated summaries, and track
              progress through quizzes. Teachers create content, monitor
              engagement, and foster growth, all recorded seamlessly in MongoDB.
            </h4>
            <br />
            <input
              type="button"
              onClick={loginWithRedirect}
              className="getStartedBtn bg-[#4a4949] text-[#fff7f7] p-4 pr-6 pl-6  rounded-lg mr-[19rem]"
              style={{ fontFamily: "Poppins" }}
              value="Get Started!"
            />
          </div>
          <div className="boxSpacer ml-32 "></div>
          <div className="rightBox flex flex-col justify-center items-center">
            <img
              src="https://media.istockphoto.com/id/1242866654/photo/polygonal-brain-shape-of-an-artificial-intelligence-with-various-icon-of-smart-city-internet.jpg?s=612x612&w=0&k=20&c=CXB8vNqlHJ0ZotLJ67dIW0rTPh3APoogZOUF8MKx0Ck="
              height="520px"
              width="520px"
              className="rounded-lg"
              alt="image to showcase the ai in modern world"
            />
          </div>
        </div>
        <br />
        <hr
          className=""
          style={{ width: "100%", height: "1px", border: "1px solid gray" }}
        />
        <br />
        <center>
          <h2
            className="text-4xl font-semibold text-[#33272a]"
            style={{ fontFamily: "Poppins" }}
          >
            Features
          </h2>
          <br />

          <div className="features flex flex-col justify-center items-center">
            <div className="feature flex flex-row justify-center items-center border-gray-400 border-2 w-full p-2 rounded-sm m-1">
              <div className="textArea flex flex-col justify-center items-center">
                <h2
                  className="font-bold text-[#33272a] text-4xl hover:cursor-pointer"
                  style={{ fontFamily: "Poppins" }}
                >
                  {" "}
                  Unique classes system{" "}
                </h2>
                <h4
                  style={{ fontFamily: "glegoo" }}
                  className="text-sm mt-4 font-light w-96"
                >
                  {" "}
                  The Unique classes system allow students to join classes using
                  class codes provided by the teacher and get resources and
                  tests online!{" "}
                </h4>
              </div>
              <div className="divSpacer mx-[10rem]"></div>
              <div className="imageArea flex flex-col justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1585974738771-84483dd9f89f?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="900px"
                  width="320px"
                  className="rounded-sm hover:scale-105 transition-all hover:cursor-pointer"
                />
              </div>
            </div>

            <div className="feature flex flex-row justify-center items-center border-gray-400 border-2 w-full p-2 rounded-sm m-1">
              <div className="imageArea flex flex-col justify-center items-center">
                <img
                  src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="900px"
                  width="320px"
                  className="rounded-sm hover:scale-105 transition-all hover:cursor-pointer"
                />
              </div>
              <div className="divSpacer mx-[10rem]"></div>
              <div className="textArea flex flex-col justify-center items-center">
                <h2
                  className="font-bold text-[#33272a] text-4xl hover:cursor-pointer"
                  style={{ fontFamily: "Poppins" }}
                >
                  {" "}
                  AI notes, quizzes, and flash-cards{" "}
                </h2>
                <h4
                  style={{ fontFamily: "glegoo" }}
                  className="text-sm mt-4 font-light w-96"
                >
                  {" "}
                  It uses GEMINI api to make custom ai generated notes,
                  flash-cards and quizzes.{" "}
                </h4>
              </div>
            </div>
            <div className="feature flex flex-row justify-center items-center border-gray-400 border-2 w-full p-2 rounded-sm m-1">
              <div className="textArea flex flex-col justify-center items-center">
                <h2
                  className="font-bold text-[#33272a] text-4xl hover:cursor-pointer"
                  style={{ fontFamily: "Poppins" }}
                >
                  {" "}
                  Illustrative Teacher Dashboard{" "}
                </h2>
                <h4
                  style={{ fontFamily: "glegoo" }}
                  className="text-sm mt-4 font-light w-96"
                >
                  {" "}
                  Based on the quizzes that the teacher is sending, the teacher
                  can get the response of the class in an illustrive format
                  (DASHBOARD).{" "}
                </h4>
              </div>
              <div className="divSpacer mx-[10rem]"></div>
              <div className="imageArea flex flex-col justify-center items-center">
                <img
                  src="https://plus.unsplash.com/premium_photo-1661764570116-b1b0a2da783c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  height="900px"
                  width="320px"
                  className="rounded-sm hover:scale-105 transition-all hover:cursor-pointer"
                />
              </div>
            </div>
          </div>
        </center>
        <br />
      </div>
    </>
  );
};

export default MiddlePart;
