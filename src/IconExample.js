import { Text, Button } from "@geist-ui/react";
import * as Icon from "@geist-ui/react-icons";

export default function IconExample() {
  return (
    <div>
      <Text>Go down</Text>
      <Icon.ArrowDown size="8em" />
      <Icon.ArrowUp color="blue" size="8em" />
      <Text>
        Follow us on :<Icon.Facebook />
      </Text>
      <Text>
        Or <Icon.Instagram />
      </Text>
      <Button icon={<Icon.ArrowUp />} type="success">
        Go up
      </Button>
    </div>
  );
}
