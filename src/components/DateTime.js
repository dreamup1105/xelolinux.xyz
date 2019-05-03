import { useState, useEffect } from "react";
import styled from "styled-components";

const DateTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    const updateDateId = setInterval(
      (function updateDate() {
        const dateInstance = new Date();
        const timeString = `${days[dateInstance.getDay()]}, ${
          months[dateInstance.getMonth()]
        } ${dateInstance.getDate()}, ${dateInstance.getFullYear()} | ${(
          "0" + dateInstance.getHours()
        ).substr(-2)}:${("0" + dateInstance.getMinutes()).substr(-2)}`;
        setCurrentTime(timeString);
        return updateDate;
      })(),
      30 * 1000
    );

    return () => {
      clearTimeout(updateDateId);
    };
  }, []);

  return (
    <Div>
      <P>{currentTime}</P>
    </Div>
  );
};

const Div = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  color: rgb(var(--white));
  padding: 0.5rem 1.5rem;
  margin-block: auto;
  border-radius: var(--border-radius);
  opacity: 0.9;
  height: fit-content;
  width: fit-content;
  background-color: rgba(var(--bar), 50%);
  backdrop-filter: blur(1rem);
  box-shadow: 0 0 12px -5px rgb(var(--black));

  position: absolute;
  inset: 0;
  margin: auto;

  & img {
    width: var(--icon-size);
    height: var(--icon-size);
  }
`;

const P = styled.p`
  font-size: var(--fz-5);
  white-space: nowrap;
  &.u {
    text-decoration: underline;
  }
`;

export default DateTime;
