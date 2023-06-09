import React from "react";
import styled from "@emotion/styled";
import { Box, Stack } from "@mui/material";
import blue from "../Assets/images/blue.gif";
import { SvgIcon } from "@mui/material";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";

const commonStyles = {
  padding: "1rem",
  width: "100%",
};

const HeroLeft = () => {

  const ImageContainer = styled(Box)`
    display: flex;
    justify-content: center;
    height: 80vh;

    @media (max-width: 767px) {
      height: 50vh;
      margin-bottom: 3.5rem;
    }
  `;

  const IMG = styled.img`
    max-height: 100%;
    max-width: 100%;
  `;

  return (
    <ImageContainer sx={commonStyles}>
      <IMG src={blue} className="blue" alt="cool" />
    </ImageContainer>
  );
};

const HeroRight = () => {

  const TextContainer = styled(Box)`
    display: flex;
    justify-content: flex-start;
    height: 80vh;

    @media (max-width: 767px) {
      margin-top: 3.0rem;
      height: 20vh;
    }
  `;

  const SubTitle = styled.h3`
    text-align: left;
    color: #808080;
    margin-top: 0.5rem;
    margin: 0;
    font-size: 2rem;

    @media (max-width: 767px) {
      margin-top: 0.4rem;
      font-size: 1rem;
    }
  `;

  const Title = styled.h3`
    text-align: left;
    color: white;
    margin: 0;
    font-size: 6rem;

    @media (max-width: 767px) {
      font-size: 1.5rem;
    }
  `;

  const pulseStyle = {
    animation: "pulse 1.5s infinite",
    
  };

  const pulseAnimation = `@keyframes pulse {
    0% {
      opacity: 1;
      transform: scale(1);
    }
    50% {
      opacity: 0.5;
      transform: scale(1.2);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }`;

  const hideAnimationStyle = `@media (max-width: 768px) {
    .hide-animation {
      display: none;
    }
  }`;

  return (
    <TextContainer sx={commonStyles}>
      <Stack>
        <Stack direction="row">
        <SvgIcon
            component={DirectionsRunIcon}
            viewBox="0 0 24 24"
            color="primary"
            style={pulseStyle}
          />
          <SvgIcon
            component={DirectionsRunIcon}
            viewBox="0 0 24 24"
            color="primary"
            style={pulseStyle}
            className="hide-animation"
          />
          <SvgIcon
            component={DirectionsRunIcon}
            viewBox="0 0 24 24"
            color="primary"
            style={pulseStyle}
            className="hide-animation"
          />
          <SvgIcon
            component={DirectionsRunIcon}
            viewBox="0 0 24 24"
            color="primary"
            style={pulseStyle}
            className="hide-animation"
          />
          <SvgIcon
            component={DirectionsRunIcon}
            viewBox="0 0 24 24"
            color="primary"
            style={pulseStyle}
            className="hide-animation"
          />
          <SvgIcon
            component={DirectionsRunIcon}
            viewBox="0 0 24 24"
            color="primary"
            style={pulseStyle}
            className="hide-animation"
          />
          <style>{pulseAnimation}</style>
          <style>{hideAnimationStyle}</style>
        </Stack>
        <SubTitle>
          INTO THE
        </SubTitle>
        <Title>
          STREAMVERSE
        </Title>
      </Stack>
    </TextContainer>
  );
};

const Hero = () => {
  const AppContainer = styled(Box)`
    display: flex;
    flex-direction: column-reverse;

    @media (min-width: 768px) {
      flex-direction: row;
    }
  `;

  const LeftContainer = styled(Box)`
    background-color: black;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  `;

  const RightContainer = styled(Box)`
    background-color: black;
    width: 100%;

    @media (min-width: 768px) {
      width: 50%;
    }
  `;

  return (
    <AppContainer>
      <LeftContainer>
        <HeroLeft />
      </LeftContainer>
      <RightContainer>
        <HeroRight />
      </RightContainer>
    </AppContainer>
  );
};

export default Hero;
