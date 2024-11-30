import React from "react";
import styled from "styled-components";
import SwitchSelector from "react-switch-selector";

const Container = styled.div({
  width: 92,
  height: 40,
});

const ToggleButton = (props) => {
  const { options, initialSelectedIndex, backgroundColor, onChange } = props;
  return (
    <Container>
      <SwitchSelector
        onChange={onChange}
        options={options}
        initialSelectedIndex={initialSelectedIndex}
        backgroundColor={backgroundColor}
        selectionIndicatorMargin={0}
      />
    </Container>
  );
};

export default ToggleButton;
