import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import "../static/css/HomeBody.css";
import "../static/css/footer.css";

function Footer() {
  useEffect(() => {
    document.title = "nolwoldn";
  }, []);
  let [text, changeLink] = useState(-1);
  const links = [
    {
      Text: "Home",
      link: "/",
    },
    {
      Text: "Contact",
      link: "/contact",
    },
    {
      Text: "Github",
      link: "https://github.com/nolwoldn/",
    },
    {
      Text: "Projects",
      link: "/projects",
    },
  ];
  return (
    <div className="footer">
      <p>
        {links.map((item, idx) => (
          <NavLink key={idx} className="footerLinks" to={item.link}>
            {item.Text}
          </NavLink>
        ))}
      </p>
      <div className="extraContent"></div>
    </div>
  );
}

function Home() {
  useEffect(() => {
    document.title = "nolwoldn";
  }, []);
  const words = [
    {
      text: "a student",
      color: "#c834b9",
    },
    {
      text: "a programmer",
      color: "#018c9be4",
    },
    {
      text: "a jobless child",
      color: "rgb(210, 230, 78)",
    },
  ];

  const typingSpeed = 100;
  const delSpeed = 70;
  const pauseDuration = 1500;
  const speedDivident = 3000;

  const [text, setText] = useState("");
  const [crrColor, setColor] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex].text;
    setColor(words[wordIndex].color);

    let timerDuration = isDeleting
      ? speedDivident / delSpeed
      : speedDivident / typingSpeed;

    const textCycle = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, text.length + 1));
      } else {
        setText(currentWord.substring(0, text.length - 1));

        if (text === "") {
          setIsDeleting(false);

          setWordIndex((prev) => (prev + 1) % words.length);
          return;
        }
      }

      if (!isDeleting && text === currentWord) {
        const pauseTimer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(pauseTimer);
      }
    };

    const timer = setTimeout(textCycle, timerDuration);
    return () => clearTimeout(timer);
  }, [text, wordIndex, isDeleting]);

  return (
    <div id="home-full-container">
      <div className="mainBody">
        <div className="spokenComponent">
          <h3 id="MainHeading" className="spokenText">
            Hi, I'm nolwoldn, and I'm{" "}
            <span className="spokenText" style={{ color: crrColor }}>
              {text}
            </span>
            <span
              className="spokenText"
              id="cursor"
              style={{ color: crrColor }}
            >
              |
            </span>
          </h3>
          <p className="spokenText paragraphs">
            I'm a learing{" "}
            <strong className="paragraphs spokenText">student</strong> so I know
            I'm not knowledgble enough so{" "}
            <em className="paragraphs spokenText">please teach me</em>.
          </p>
          <p className="paragraphs spokenText">
            Right now I'm learing in{" "}
            <strong className="paragraphs spokenText">Addis Ababa</strong> so if
            I can work over seas it would be great.
          </p>
          <p className="paragraphs spokenText">
            Since I'm learning I don't have many big{" "}
            <em className="paragraphs spokenText">projects</em> but I have some
            ambitous projects which you can see on the{" "}
            <a className="link" href="../projects">
              Projects
            </a>{" "}
            section.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
