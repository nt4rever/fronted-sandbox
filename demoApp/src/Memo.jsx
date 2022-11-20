import React, { useContext, useMemo, useState } from "react";
import { AppContext } from "./contexts/appContext";

const Memo = () => {
  const { open } = useContext(AppContext);
  console.log(open);
  const [count, setCount] = useState(0);

  const getArray = useMemo(() => {
    let res = 0;
    for (let i = 1; i < count * 10000000; i++) {
      res += i;
    }
    return res;
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((x) => x + 1)}>{count}</button>
      <div>{getArray}</div>
    </div>
  );
};

export default Memo;
