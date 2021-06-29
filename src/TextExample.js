import { Text } from "@geist-ui/react";

export default function TextExample() {
  return (
    <div>
      <Text>Standard Text page </Text>
      <Text h1>Next.js</Text>
      <Text size="2em">The React Framework for production </Text>
      <Text b>Great for blogs</Text>
      <Text blockquote> Incredibly easy</Text>
      <Text type={"success"}> Try it out</Text>
    </div>
  );
}
