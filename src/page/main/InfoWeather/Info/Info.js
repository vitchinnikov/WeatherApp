import React from "react";
import styled from "styled-components";

import Header from "./header/Header";
import Body from "./body/Body";

const Wrapper = styled.div({
  padding: "67px 70px 90px 66px",
});

function Info() {
  return (
    <Wrapper>
      <Header />
      <Body />
    </Wrapper>
  );
}

export default Info;
