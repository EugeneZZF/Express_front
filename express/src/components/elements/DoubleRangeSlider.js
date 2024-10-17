import React from "react";
import styles from "./DoubleRangeSlider.module.css";
import ReactSlider from "react-slider";
import styled from "styled-components";

// Переносим StyledSlider за пределы функции компонента
const StyledSlider = styled(ReactSlider)`
  width: 360px;
  height: 8px;
`;

const StyledThumb = styled.div`
  height: 25px;
  width: 25px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  cursor: grab;
  background-image: url("/images/Catalog/point.svg");
  z-index: 2;
`;

const StyledTrack = styled.div`
  top: 0;
  bottom: 0;
  background: ${(props) =>
    props.index === 2 ? "#fff" : props.index === 1 ? "#49D46F" : "#fff"};
  border-radius: 999px;
`;

export default function DoubleRangeSlider({ value, min, max, setValue }) {
  const handleInputChange = (index, newValue) => {
    const updatedValue = [...value];
    updatedValue[index] = newValue;
    setValue(updatedValue);
  };

  const Thumb = (props, state) => {
    const { key, ...restProps } = props; // Извлекаем key из props

    return (
      <StyledThumb key={key} {...restProps} className={styles.exampleThumb}>
        {/* {state.valueNow} */}
      </StyledThumb>
    );
  };

  const Track = (props, state) => {
    const { key, ...restProps } = props; // Извлекаем key из props

    return <StyledTrack key={key} {...restProps} index={state.index} />;
  };

  return (
    <div className={styles.cont}>
      <div className={styles.input_cont_soim}>
        <input
          className={styles.input_soim}
          type="number"
          value={value[0]}
          onChange={(e) => handleInputChange(0, Number(e.target.value))}
        />
        <input
          className={styles.input_soim}
          type="number"
          value={value[1]}
          onChange={(e) => handleInputChange(1, Number(e.target.value))}
        />
      </div>
      <StyledSlider
        className={styles.horizontalSlider}
        value={value}
        min={min}
        max={max}
        onBeforeChange={(value, index) =>
          console.log(`onBeforeChange: ${JSON.stringify({ value, index })}`)
        }
        onChange={(newValue, index) => {
          setValue(newValue);
        }}
        onAfterChange={(value, index) =>
          console.log(`onAfterChange: ${JSON.stringify({ value, index })}`)
        }
        renderTrack={Track}
        renderThumb={Thumb}
      />
    </div>
  );
}
