import AboutStyled, { Aboutdiv, AboutImg, AboutLi } from "./AboutStyled";
const About = () => {
  return (
    <>
      <AboutStyled>
        <AboutImg
          src="https://deviniciative.files.wordpress.com/2019/01/developers-icon-23.jpg?w=272"
          alt=""
        />
        <Aboutdiv>
          <h4 style={{ textAlign: "center" }}>About Software Developer</h4>

          <AboutLi>I'm Mustafa.</AboutLi>
          <AboutLi>
            I'm currently learning Full-Stack Development Languages.
          </AboutLi>
          <AboutLi>I've already known JS,ReactJS,ReactNative</AboutLi>
          <AboutLi>I also enjoy digging into challenge code.</AboutLi>
          <AboutLi>Send email mehelx5207@gmail.com</AboutLi>
        </Aboutdiv>
      </AboutStyled>
    </>
  );
};

export default About;