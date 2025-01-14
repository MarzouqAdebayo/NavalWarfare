import styled from "styled-components";
import { Timeline } from "../../types";

const MainWindow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  text-align: center;
`;

const InitWindow = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  text-align: center;
  position: relative;
`;

const ConnectionIndicator = styled.div<{ isConnected: boolean }>`
  position: absolute;
  top: 5px;
  right: 5px;
  height: 20px;
  width: 20px;
  border-radius: 50%;
  background-color: ${(props) => (props.isConnected ? "#15803d" : "#b91c1c")};
`;

const PlayerForm = styled.form`
  display: flex;
  font-size: 1.5rem;
  flex-direction: column;
  margin: 3rem auto;
  padding: 2rem 0;
  & > * {
    margin-top: 1rem;
  }
  & > button {
    margin: 1rem auto;
    padding: 0.8rem;
    cursor: pointer;
  }
  & > input {
    padding: 0.5rem;
  }
`;

const MenuWindow = styled.div`
  display: flex;
  height: 100%;
  width: 100%;
  text-align: center;
  flex-direction: column;
  animation: fadeinslow 2s ease-in;
  margin: auto;
  width: 100%;
  position: relative;
`;

const MenuTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const MenuOptionsContainer = styled.div``;

const MenuOption = styled.button`
  padding: 0.5rem;
  margin: auto;
  font-size: 1.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
  }
`;

const LoaderWrapper = styled.div<{ show: boolean }>`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: ${(props) => (props.show ? "45" : "-45")};
  background-color: rgb(2, 0, 36);
  font-size: 2rem;
`;

const LoaderContainer = styled.div`
  position: relative;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const LoaderCancelButton = styled.button`
  padding: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
  }
`;

const SetupWindow = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  animation: fadeinslow 2s ease-in;
  margin: auto;
  width: 100%;
`;

const SetupTitle = styled.h1`
  font-size: 3rem;
  @media (max-width: 900px) {
    font-size: 2rem;
  }
`;

const AxisButton = styled.button`
  padding: 0.5rem;
  margin: auto;
  font-size: 1.5rem;
  @media (max-width: 900px) {
    font-size: 1rem;
    padding: 0.5rem 0.8rem;
  }
`;

const GridOverlayContainer = styled.div`
  width: 100%;
  height: 36rem;
  position: relative;
  margin: 1rem auto 0;
  @media (max-width: 900px) {
    height: 22rem;
  }
`;

const SetupGridContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  left: 0;
  right: 0;
`;

const GameBoardGrid = styled.div`
  display: grid;
  position: relative;
  margin: 0 auto;
  grid-template: repeat(10, 3rem) / repeat(10, 3rem);
  text-align: center;
  gap: 2px;
  @media (max-width: 1050px) {
    grid-template: repeat(10, 2rem) / repeat(10, 2rem);
  }
`;

const Cell = styled.div<{
  position: string;
  highlight: boolean;
  timeline: Timeline;
  board: string;
  shot: boolean;
  cursor: string;
}>`
  border: 1px solid white;
  height: 100%;
  width: 100%;
  transition: 0.3s;
  position: ${(props) => props.position};
  background-color: ${(props) =>
    props.highlight ? "rgba(255, 255, 255, 0.7)" : ""};
  &:hover {
    background-color: ${(props) =>
      props.timeline === Timeline.GameStart && props.board === "friendly"
        ? "transparent"
        : props.board === "enemy" && !props.shot
          ? "rgba(60, 255, 60, 0.6)"
          : props.shot
            ? "rgba(255, 60, 60, 0.6)"
            : props.highlight
              ? ""
              : "rgba(255, 60, 60, 0.6)"};
    cursor: ${(props) => props.cursor};
  }
`;

const GameStartContainer = styled.div`
  position: relative;
  display: grid;
  grid-template-rows: 4rem auto 32rem;
  grid-template-columns: 1fr 1fr;
  margin: 2% auto 4rem;
  width: 100%;
  max-width: 1200px;
  animation: fadein 2s;
  @media (max-width: 1050px) {
    grid-template-rows: auto auto 22rem;
  }
  @media (max-width: 750px) {
    grid-template-columns: 1fr;
    grid-template-rows: 6rem auto 22rem auto 22rem;
  }
`;

const WatersContainer = styled.div<{ row: string }>`
  height: 100%;
  width: 100%;
  position: relative;
  display: flex;
  @media (max-width: 750px) {
    grid-row: ${(props) => props.row};
  }
`;

const HudWindow = styled.div`
  display: flex;
  margin: auto;
  height: 100%;
  text-align: center;
  grid-column: 1 / span 2;
  width: 70%;
  border: 1px solid #ddd;
  border-radius: 1rem;
  background: rgb(55, 55, 55);
  background: linear-gradient(
    90deg,
    rgba(55, 55, 55, 1) 0%,
    rgba(41, 41, 41, 1) 29%,
    rgba(41, 41, 41, 1) 76%,
    rgba(56, 56, 56, 1) 100%
  );
  font-family: "Special Elite", monospace;
  font-size: 1.4rem;
  @media (max-width: 1050px) {
    font-size: 1rem;
    padding: 10px;
  }
  @media (max-width: 750px) {
    grid-column: 1 / span 1;
    grid-row: 1 / span 1;
  }
`;

const VolumeContainer = styled.div<{ timeline: Timeline }>`
  display: flex;
  animation: fadeinslow 5s;
  position: absolute;
  top: ${(props) => (props.timeline === Timeline.Init ? "0" : "-3rem")};
  right: ${(props) => (props.timeline === Timeline.Init ? "" : "3rem")};
  @media (max-width: 450px) {
    right: ${(props) => (props.timeline === Timeline.Init ? "" : "1.5rem")};
  }
`;

const LabelContainer = styled.div<{ row: string }>`
  display: flex;
  width: 100%;
  text-align: center;
  @media (max-width: 750px) {
    grid-row: ${(props) => `${props.row} / span 1`};
  }
`;

export {
  MainWindow,
  InitWindow,
  MenuWindow,
  MenuTitle,
  MenuOptionsContainer,
  MenuOption,
  LoaderWrapper,
  LoaderContainer,
  LoaderCancelButton,
  ConnectionIndicator,
  PlayerForm,
  SetupWindow,
  SetupTitle,
  GameBoardGrid,
  SetupGridContainer,
  AxisButton,
  Cell,
  GridOverlayContainer,
  GameStartContainer,
  HudWindow,
  LabelContainer,
  WatersContainer,
  VolumeContainer,
};
