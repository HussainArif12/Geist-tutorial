import { Collapse, Text } from "@geist-ui/react";

export default function CollapseExample() {
  return (
    <div>
      <Collapse.Group>
        <Collapse title="How are you?" subtitle="The definite answer">
          <Text> I'm fine!</Text>
          <Text b> How are you though?</Text>
        </Collapse>
        <Collapse
          title="What is your website"
          subtitle={<Text b> The definite answer</Text>}
        >
          <Text> It's on Medium</Text>
        </Collapse>
      </Collapse.Group>
    </div>
  );
}
