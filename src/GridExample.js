import { Text, Grid } from "@geist-ui/react";

function MockComponent({ number }) {
  return (
    <div style={{ backgroundColor: "blue", width: "100%", height: "100px" }}>
      <Text>{number}</Text>
    </div>
  );
}

export default function GridExample() {
  return (
    <div>
      <Grid.Container gap={3} justify="center">
        <Grid sm={10} xs={2}>
          <MockComponent number={1} />
        </Grid>
        <Grid sm={6} xs={2}>
          <MockComponent number={2} />
        </Grid>
        <Grid sm={9} xs={2}>
          <MockComponent number={3} />
        </Grid>
        <Grid xs>
          <MockComponent number={4} />
        </Grid>
      </Grid.Container>
    </div>
  );
}
