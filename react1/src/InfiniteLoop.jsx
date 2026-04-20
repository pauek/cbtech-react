import { useEffect, useState } from "react";

export default function InfiniteLoop() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount((count) => count + 1);
  }, []);

  return <div>{count}</div>;
}
