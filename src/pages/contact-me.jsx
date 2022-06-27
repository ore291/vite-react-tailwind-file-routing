import React from "react";
import Header from "../components/Header";
import MainBody from "../components/mainBody";

const ContactMe = () => {
  return (
    <>
      <Header
        title="Contact me"
        bgImg="https://drjamespsychicspells.com/wp-content/uploads/2020/08/cropped-IMG-20200827-WA0019-1.jpg"
      />
      <MainBody>
          <div className="flex flex-col justify-center items-start space-y-5">
               <p>Send me a Mail:</p>
        <a href="mailto:drmarkspells8@gmail.com" className="text-link-color hover:text-link-color/80">Mail me!</a>
          </div>
       
      </MainBody>
    </>
  );
};

export default ContactMe;
