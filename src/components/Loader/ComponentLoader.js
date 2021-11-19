import { css } from "@emotion/react";
import MoonLoader from "react-spinners/MoonLoader";

const override = css`
  display: block;
  margin: 0 auto;
`;

export default function ComponentLoader() {
  return (
    <MoonLoader css={override} size={100} color={"#A56B74"} speedMultiplier={0.7} /> 
  )
}