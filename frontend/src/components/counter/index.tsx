import { useEffect, useState } from "react";

import { Container, BlackDiv } from "./style";

const Counter = () => {
  const [cnt, setCnt] = useState(0);
  const onIncrease = () => setCnt(cnt + 1);
  const onDecrease = () => setCnt(cnt - 1);

  const [isDup, setIsDup] = useState<boolean | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/customer/login", { method: "POST", body: JSON.stringify({ cno: "2", passwd: "2" }) }).then((data) => {
      data.json().then((d) => {
        console.log(d, d.message);
        if (d.message == "OK") {
          setIsDup(false);
        } else {
          setIsDup(true);
        }
      });
    });
  }, [cnt]);

  return (
    <Container>
      <h1>{"plusMinus page"}</h1>
      <div>
        <button onClick={onIncrease}>{"+1"}</button>
        <button onClick={onDecrease}>{"-1"}</button>
      </div>
      <p>{cnt}</p>
      {!isDup && <div>{"123123"}</div>}
      <BlackDiv />
    </Container>
  );
};

export default Counter;
