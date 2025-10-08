import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

const Ratingchart = ({ rating }) => {
  return (
    <div className="w-full h-[300px] bg-white p-4 rounded-xl shadow pb-7 ">
      <h2 className="text-lg font-bold mb-3">Ratings</h2>

      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          layout="vertical"
          data={rating}
          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" />
          <YAxis
            dataKey="name"
            type="category"
            axisLine={false}
            tickLine={false}
            width={70}
          />
          <Tooltip />
          <Bar dataKey="count" fill="#FF8C00" barSize={20} radius={[5, 5, 5, 5]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Ratingchart;
