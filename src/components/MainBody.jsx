import React from "react";
import SideBar from "./SideBar";

const MainBody = () => {
  return (
    <main className="max-w-[1100px] mx-auto   shadow-md my-10">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="col-span-2 bg-white p-16 text-box">
          <p>
            Hello and welcome. My name is Dr Mark and I am a psychic spellcaster
            and life coach with over 20years of experience. I am also a natural
            born intuitive empath who has helped thousands of people find their
            purpose and their path in life.{" "}
          </p>
          <p>
            I specialize in intuitive and tarot readings,cleansing and
            protection rituals,curse/hex removal,job/promotion/prosperity
            spells,Legal court case issues,Fertility/Pregnancy spell and
            different kind of spells.I can help you with my powerful spells and
            herbs, just be prepared for a spectacular transformation in your
            life.
          </p>
          <p>
            <br />
            My readings are direct, honest, and to the point. I assure you that
            with each reading you will have my complete confidentiality. I am
            non-judgmental and I want you to feel comfortable to ask anything
            you want to ask. Believe me when I say I have heard it all.
          </p>
          <p>
            Today may be your lucky day! Prepare yourself for a spectacular and
            overall transformation. If you are ready to open your heart and mind
            to me in the ancient art of white magic, then write down your one
            and most important request. I am awaiting your command. Do you feel
            you have obstacles in your life then the power and greatness of my
            Spell will help you achieve your goal, and will destroy any
            obstacles you have in your life, if any enemy try to come into your
            way of success then by this great spell no one will try to succeed
            in bringing you down in anyway .Its time for a change in your life.
          </p>
          <p>
            <br />
            Patience and belief are the key to success. Sometimes we get too
            impatient wanting to see results, and when we don’t see them right
            away, we begin to discredit ourselves or the practitioners to cast
            the spell, and this can ruin things because the spirits working on
            the spell may get annoyed at you for doubting them, and refuse to
            carry on with the spell and giving you the results that you seek.
            Sometimes it takes a while to see results, and just because you can
            physically see the results that you seek, doesn’t mean that things
            behind the scenes are not being set into motion.
          </p>
          <p />
        </div>
        <div>
            <SideBar/>
        </div>
      </div>
    </main>
  );
};

export default MainBody;
