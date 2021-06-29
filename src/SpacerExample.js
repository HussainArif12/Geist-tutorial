import { Text, Spacer, Button, Container } from "@geist-ui/react";

function MockComponent({ number }) {
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "100px" }}>
      <Text>{number}</Text>
    </div>
  );
}

export default function SpacerExample() {
  return (
    <div>
      {/*   <Button type="success" />
      <Spacer y={4} />
      <Button type="error" /> */}
      <Container>
        <Button type="success" />
        <Spacer x={4} />
        <Button type="error" />
      </Container>
    </div>
  );
}
