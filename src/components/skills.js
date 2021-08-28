import React from "react";
import SkillItem from "./skillItem";
import SessionTitle from "./sessionTitle";
import cIcon from "../assets/skillsIcon/c.svg";
import gitIcon from "../assets/skillsIcon/git.svg";
import javaIcon from "../assets/skillsIcon/java.svg";
import jsIcon from "../assets/skillsIcon/js.svg";
import reactJsIcon from "../assets/skillsIcon/react.svg";
import springIoIcon from "../assets/skillsIcon/springio.svg";
import herokuIcon from "../assets/skillsIcon/heroku.svg";
import kafkaIcon from "../assets/skillsIcon/kafka.svg";
import oracleIcon from "../assets/skillsIcon/oracle.svg";
import sqsIcon from "../assets/skillsIcon/sqs.svg";
import s3Icon from "../assets/skillsIcon/s3.svg";
import "../styles/skills.css";

function Skills() {
  return (
    <div className="skills-container">
      <div className="skills">
        <SessionTitle title={"Skills and technologies."} color={"--color-6"}/>

        <div className="skills-content">
          <p>I have professional experience with the technologies below:</p>
          <div className="skill-box">
            <SkillItem img={javaIcon} text={"Java"}/>
            <SkillItem img={springIoIcon} text={"Spring Boot"}/>
            <SkillItem img={oracleIcon} text={"Oracle SQL"}/>
            <SkillItem img={gitIcon} text={"Git"}/>
            <SkillItem img={kafkaIcon} text={"Apache Kafka"}/>
            <SkillItem img={s3Icon} text={"AWS S3 Bucket"}/>
            <SkillItem img={sqsIcon} text={"AWS SQS"}/>
          </div>

          <p>I also had contact with other technologies during my college years and in my personal projects:</p>
          <div className="skill-box">
            <SkillItem img={herokuIcon} text={"Heroku"}/>
            <SkillItem img={cIcon} text={"C"}/>
            <SkillItem img={jsIcon} text={"Javascript"}/>
            <SkillItem img={reactJsIcon} text={"ReactJS"}/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
