import { useEffect } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contact me";
  }, []);
  return (<div className="contact-full-container"></div>);
}
export default Contact;
