import './WidgetLg.css'

const WidgetLg = () => {

  // component within component
  const Button = ({type}) => {
    return <button className={'wl-btn ' + type}>
      {type}
    </button>
  } 

  return (
    <div className='widget-lg'>
      <span className="title">Transactions</span>
      <table className="table">
        <tr className="tr">
          <th className="th">Customer</th>
          <th className="th">Date</th>
          <th className="th">Amount</th>
          <th className="th">Status</th>
        </tr>
        <tr className="tr">
          <td className="customer">
            <img src="https://i.pinimg.com/564x/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg" alt="Customer" className="cust-img" />
            <span className="name">Vivianne</span>
          </td>
          <td className="date">Wed Mar 2, 2021</td>
          <td className="price">$ 122.00</td>
          <td className="status">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="tr">
          <td className="customer">
            <img src="https://i.pinimg.com/564x/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg" alt="Customer" className="cust-img" />
            <span className="name">Beth</span>
          </td>
          <td className="date">Wed Mar 2, 2021</td>
          <td className="price">$ 122.00</td>
          <td className="status">
            <Button type="Approved"/>
          </td>
        </tr>
        <tr className="tr">
          <td className="customer">
            <img src="https://i.pinimg.com/564x/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg" alt="Customer" className="cust-img" />
            <span className="name">Katie</span>
          </td>
          <td className="date">Wed Mar 2, 2021</td>
          <td className="price">$ 122.00</td>
          <td className="status">
            <Button type="Declined"/>
          </td>
        </tr>
        <tr className="tr">
          <td className="customer">
            <img src="https://i.pinimg.com/564x/63/f7/e9/63f7e99d2bdb21c005ce2debca4c3a9e.jpg" alt="Customer" className="cust-img" />
            <span className="name">Jordan</span>
          </td>
          <td className="date">Wed Mar 2, 2021</td>
          <td className="price">$ 122.00</td>
          <td className="status">
            <Button type="Pending"/>
          </td>
        </tr>
      </table>
    </div>
  )
}

export default WidgetLg