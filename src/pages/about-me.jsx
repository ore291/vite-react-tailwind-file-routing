import React from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import MainBody from "../components/MainBody";

const AboutMe = () => {
  return (
    <>
      <Header
        title="About Me"
        bgImg="https://drjamespsychicspells.com/wp-content/uploads/2020/08/IMG-20200827-WA0024.jpg"
      />
      <MainBody>
        <h5 style={{ textAlign: "justify" }} className="text-xl">
          <strong>ABOUT&nbsp;ME&nbsp;</strong>
        </h5>
        <strong>&nbsp;</strong>
        <p style={{ textAlign: "justify" }}>
          You are welcome to my Webpage. My Name is <strong>Dr Mark</strong>, i
          have been a psychic spellcaster for over 20years now I also went
          further to learn more about this in India. and i have helped series of
          people all over the continent, and my spells has really worked out for
          different people, and it has been 100% accurate.
        </p>
        <p style={{ textAlign: "justify" }}>
          Its been over 20years that I have worked so hard to satisfy my clients
          all over the world. What i need here are real people who really know
          what they want, and people who are ready to make their wish come
          through, no matter what it takes. But if I feel that you're serious
          and really need my help, then I will make my possible means and effort
          to make your dreams come true,helping you is my number one priority.
          My spells are not for free, as you will be required to pay for
          materials.
        </p>
        <p style={{ textAlign: "justify" }}>
          Prices are different for every problem.. I compiled a list of spells
          which i am specialized in, and in which I had amazing results also. I
          get information from all over the world with the spirits and the
          ancestors. Wherever you live, I can help you with any trouble or
          circumstances you find yourself on.
        </p>
        My beliefs is: To any problem there is always a solution to it. My
        spells are{" "}
        <strong>
          Harmless 100% Guarantee and Confidential tremendously influential
        </strong>{" "}
        and a positive answer from them will immediately solve your problem with
        no after effect.
        <h5>
          <strong>HOW DOES MY SPELL WORKS</strong>
        </h5>
        <p style={{ textAlign: "justify" }}>
          When you contact me for help, then i am going to take account of every
          information you will be sending to me after i have made you known the
          kind of spell that would suit your situation.
        </p>
        Every detail of your story is exciting because the solution is right
        here with me in this temple. And after i have your information, then i
        am going to put them inside the tavern of my oracle, and then put them
        inside the burning pot for the ancestors to take charge of the
        situation, before i can start in the spell casting in proper. because
        it's also helps me to cast your spell in accordance with your very
        needs. do not come here and play with my time and powers.
        <p style={{ textAlign: "justify" }}>
          When I’m determined to cast a spell for you that suits with your
          situation,then I will get ready for your spell. normally, all items
          and materials are always available in the Ancestral Market where the
          items are been sold, but after the consultation for you, then i will
          have to order some specific material which will be used in casting the
          spell for you. To ensure that your spell is going to work.
        </p>
        <p>
          {" "}
          When the spell is casted,you have nothing to do but to wait
          confidently and with assurance for the results to come. because its
          100% Guaranteed Harmless And Confidential. Generally, It takes from 24
          HOURS to 2 or 7days, due to the type of spell you order here in my
          temple. but at times it can be slower, depending on the kind of the
          situation. During this stage,I always keep in contact with my clients,
          because they are not always familiar with the spell procedure,and tell
          them what to do.
        </p>
        <div className="about-footer bg-black/40 bg-blend-overlay">
          <div className="text-center flex flex-col justify-between items-center">
            <div className="about-header mb-[15px]  ">
              ASSURANCE OF MY SERVICES
            </div>
            <div className="mb-4 px-5 text-[#252525]">
              <div>
                <p style={{ textAlign: "justify" }}>
                  <span style={{ textAlign: "center" }}>
                    <span
                      style={{ lineHeight: "1.5", backgroundColor: "#f2c314" }}
                    >
                      It's been over 20years that I have worked really hard to
                      satisfy my clients all over the world
                    </span>
                  </span>
                </p>
                <p style={{ textAlign: "center" }} />
              </div>
            </div>
            <div className="mb-4 col-container space-y-3">
              <div className="w-40 h-14 bg-[#f2c314] cursor-pointer group row-container">
                <Link to="/">
                  <p className="text-3xl font-bold text-white group-hover:text-link-color transition-all duration-150 ease-out">
                    Solution
                  </p>
                </Link>
              </div>

              <div className="w-48 h-14 bg-black  cursor-pointer group row-container">
                <Link to="/testimonies">
                  <p className="text-3xl font-bold text-white  transition-all duration-150 ease-out">
                    Testimonies
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </MainBody>
    </>
  );
};

export default AboutMe;
