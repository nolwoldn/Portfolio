import { useEffect, useState } from "react";
import "../static/css/contactStyle.css";

function Contact() {
  useEffect(() => {
    document.title = "Contact me";
  }, []);
  const [textShadowPos , changeTextShadowPos] = useState({
    x: 10,
    y: 10,
  });

  useEffect(() => {
    const textShadowCalc = (event) => {
      const xP = (event.clientX - 750) / -20;
      const yP = (event.clientY - 270) / -25;

      changeTextShadowPos({ x: xP, y: yP });
    };

    window.addEventListener("mousemove" , textShadowCalc);

    return () => {window.removeEventListener("mousemove", textShadowCalc)}
  }, []);

  return (
    <div
      className="contact-full-container"
      style={{
        "--transX": `${textShadowPos.x}px`,
        "--transY": `${textShadowPos.y}px`,
      }}
    >
      <p className="text">uslkoorginal@gmail.com</p>
    </div>
  );
}
export default Contact;
