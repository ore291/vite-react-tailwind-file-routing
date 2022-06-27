import React, { useState } from "react";
import Header from "../components/Header";
import MainBody from "../components/mainBody";
import TestimonialCard from "../components/TestimonialCard";

const Testimonies = () => {
  const [testimonies, setTestimonies] = useState([
    "I wanted to thank you for the miracle you have brought to my life. I was so broke and so weak for so long that I felt I have a miserable 😩 life and I keen loosing everyone , everything   and you did an amazing job with  a great money spell and  cleansing for me . I felt better, just three days after the cleansing spell  and Money spell now I have a lot of money in my bank account , than I had in over a year” thanks Dr Mark",

    "What a wake-up call! Thank you for being there to take care of me and to guide the way. Thank you for respecting the choices I made… and not insisting that I must do this and never give up  on me like the other spell caster did . Thank you for respecting the choices I made regarding lottery spells, and not insisting I must go in that direction… Also, thank you for doing this lottery spell for me and make my dream come through. Dr. Mark, that was very, very special. You made everything a very positive experience. . I’ve changed my  whole life is not like the same ,and I’m so happy Dr Mark",

    "I was afraid that finding a highly skilled spell caster  on Instagram  like this  wouldn’t be possible — that I would have to go to Keep looking for who to help me win lottery maybe until I found some physically. I was wrong. Dr. Mark  is a Great  spell caster  who is world-class. He works online here as . And he’s a major blessing. He approaches did the spell perfectly which I won more than $300000 like an artist approaches a painting. He cares about his patients and he takes time to do the job right.Thanks so much Dr mark you will never be forgotten in my life,",
    "I am sending this note to send my heartfelt gratitude. Thanks for easing my pain to bring back my husband into my life and make making experiencing the sweetness of marriage and thank you for encouraging me  when I was down. You have done what other spells caster   would not have done. Continue to be a blessing to others through your profession ❤️",

    "You take the time to listen and to make your patients feel valued and respected, treating others as you would want to be treated. I thank God often for you. Thank you for who you are and for the brilliant spell caster  you are. You are truly a remarkable Dr Mark and professional that we respect and trust.  And…i really enjoy your service for the money spell since then I have been financially free thanks so much Dr mark",

    "Thank you for taking care of that crusty old farmer whom I call my father. I cannot tell you how relieved I was when my mum told me he is finally free from the sickness the Doctors said he can’t be cure . You saved him from for life I won’t forget the day I hit your page Dr mark … all my parents could talk about was ‘Dr. Mark .’ You are an amazing person who has no problem conveying your care and commitment to your patients We will always be grateful for your help!  ~ Sarah",

    "I will forever remember your wonderful spells  and care for both me and  my family . Thank you for your excellent service. May God bless you.",

    "Thanks for being a great doctor who just tells it like it is . Your honesty is appreciated!” “What a wonderful blessing and encouragement you are. I don’t have words to thank you enough Dr mark for the spell 💕",

     "I’m so grateful to ‘ Dr. Mark ’ … thank you!” For the love spell to get my love life into my life ~ AF",
     
    "I have just found the right spell caster who has brought back my happiness by helping me get my ex back after 2years and i must thank Dr Mark who has play a very vital part of my life making me a great person and the most happiest person today you are a great man who is bless by God with victory spell caster, after Dr Mark  has help me get my ex back he also help me recover what i have lost from me i must thank Dr Mark  for the life he has restored back for me and my happiness. Now i am doing well in my work happily with my wife, Dr Mark is a very great spell caster",

   


  ]);

  return (
    <>
      <Header
        title="Testimonies"
        bgImg="https://drjamespsychicspells.com/wp-content/uploads/2020/08/cropped-IMG-20200827-WA0019-1.jpg"
      />
      <MainBody>
        <div className="grid grid-cols-1 gap-y-2">
          {testimonies.map((testimony, index) => (
            <TestimonialCard text={testimony} img={index + 1} />
          ))}
        </div>
      </MainBody>
    </>
  );
};

export default Testimonies;
