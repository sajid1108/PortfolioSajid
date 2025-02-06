import "../styles/About.css";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaSquareJs } from "react-icons/fa6";
import { FaPhp } from "react-icons/fa";
import { RiReactjsFill } from "react-icons/ri";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaLaravel } from "react-icons/fa";
function About() {
  return (
    <section id="about">
      <div className="wrapper">
        <h3>About Me</h3>
        <p>
          Hi guys, my name is Sajid Abdul Fatah, usually called Sajid. Now I am
          still a student. I started studying from the 10th grade of vocational
          school. I want to be serious in this field, especially as a front end
          developer.
        </p>
        <h4>Programming Language & Tools</h4>
        <div className="skills">
          <FaHtml5 />
          <FaCss3Alt />
          <FaSquareJs />
          <FaPhp />
          <RiReactjsFill />
          <RiTailwindCssFill />
          <FaLaravel />
        </div>
      </div>
    </section>
  );
}

export default About;
