import { Text, Spinner } from "@geist-ui/react";
import { useEffect, useState } from "react";

export default function SpinnerExample() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2 * 1000);
  }, []);

  return (
    <div>{loading ? <Spinner size="large" /> : <Text> Loaded!</Text>}</div>
  );
}
