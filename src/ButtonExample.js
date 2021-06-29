import { Button, Text, Image } from "@geist-ui/react";
import { useState } from "react";

export default function ButtonExample() {
  const [number, setNumber] = useState(0);
  return (
    <div>
      <Text>{number}</Text>
      <Button
        size="small"
        type={"success"}
        onClick={() => setNumber((number) => number + 1)}
      >
        +
      </Button>
      <Button
        size="large"
        type={"error"}
        ghost
        onClick={() => setNumber((number) => number - 1)}
      >
        -
      </Button>
      <Button disabled> Click me</Button>
    </div>
  );
}
