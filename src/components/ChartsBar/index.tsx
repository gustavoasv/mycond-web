import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import * as C from "./style";

type Items = {
  name: string;
  uv: number;
  pv: number;
};

const data: Array<Items> = [
  { name: "", uv: 200, pv: 80 },
  { name: "", uv: 300, pv: 190 },
  { name: "", uv: 500, pv: 490 },
  { name: "", uv: 100, pv: 190 },
  { name: "", uv: 70, pv: 190 },
  { name: "", uv: 20, pv: 190 },
  { name: "", uv: 60, pv: 190 },
  { name: "", uv: 300, pv: 190 },
];

export const RenderLineChart = () => {
  return (
    <C.ChartArea>
      <LineChart width={1080} height={400} data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid stroke="#eee" strokeDasharray="5 5" />
        <Line type="monotone" dataKey="uv" stroke="#8884d8" color="red" />
        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
      </LineChart>
    </C.ChartArea>
  );
};
