import React, { useEffect, useState } from "react";

function CountUp({ end }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (count < end) {
      const counter = setInterval(() => {
        setCount((prevCount) => (prevCount + 1 > end ? end : prevCount + 1));
      }, 50);
      return () => clearInterval(counter);
    }
  }, [count, end]);

  const formatNumber = (number) => {
    return number.toLocaleString("fa-IR");
  };

  return <span>{formatNumber(count)}</span>;
}

export default CountUp;
