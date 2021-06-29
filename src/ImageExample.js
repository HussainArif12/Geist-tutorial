import { Image, Text, Display } from "@geist-ui/react";

export default function ImageExample() {
  return (
    <div>
      <Text>A keyboard:</Text>
      {/* <Display caption={<Text> A simple Windows keyboard</Text>}>
        <Image
          width={540}
          height={160}
          src="https://deelay.me/3000/https://wallpapercave.com/wp/wp4947509.jpg"
        />
      </Display> */}
      <Image.Browser url="https://medium.com/">
        <Image
          width={540}
          height={160}
          src="https://wallpapercave.com/wp/wp4947509.jpg"
        />
      </Image.Browser>
    </div>
  );
}
