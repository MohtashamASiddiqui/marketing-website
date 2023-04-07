import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "../../globalStyles";
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  Topline,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
} from "./InfoSection.elements";

const InfoSection = ({
  primary,
  lightBg,
  imgStart,
  lightTopline,
  lightTextDesc,
  buttonLabel,
  description,
  headline,
  lightText,
  topLine,
  img,
  alt,
  start,
}) => {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Topline lightTopline={lightTopline}>{topLine}</Topline>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <Link to="/sign-up">
                  <Button big fontBig primary={primary}>
                    {buttonLabel}
                  </Button>
                </Link>
              </TextWrapper>
            </InfoColumn>
            <ImgWrapper start={start}>
              <Img src={img} alt={alt}></Img>
            </ImgWrapper>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
};

export default InfoSection;
