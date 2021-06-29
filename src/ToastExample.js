import { Button, useToasts } from "@geist-ui/react";

export default function ToastExample() {
  const [toast, setToast] = useToasts();

  const click = (type) => {
    setToast({ text: "Lorem ipsum", type });
  };

  return (
    <div>
      <Button onClick={() => click("secondary")}> Display</Button>
      <Button onClick={() => click("error")}> Show error</Button>
    </div>
  );
}
