import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import './Chart.css'

const Chart = ({title, data, dataKey, grid}) => {
    


  return (
    <div className='container'>
        <div className='chart'>
         <h3 className='title'>{title}</h3>
         {/* the chart -- starts here */}
         <ResponsiveContainer width="100%" aspect={4/1.25}>
             <LineChart data={data}>
                <XAxis dataKey="name" stroke='#5550bd' />
                <Line type="monotone" dataKey={dataKey} stroke='#5550bd'/>
                <Tooltip/>
                {grid && <CartesianGrid strokeDasharray="3 3" />}
             </LineChart>
         </ResponsiveContainer>
        </div>
    </div>
  )
}

export default Chart