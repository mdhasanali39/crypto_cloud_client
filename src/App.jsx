import { Link, Outlet } from "react-router-dom";
import PaymentForm from "./components/paymentForm/PaymentForm";

function App() {

  // const url = "https://pay.cryptocloud.plus/pos/i9pLbe1f36yBMrpE"

  const url = 'https://api.cryptocloud.plus/v2/invoice/create?locale=en';
const headers = new Headers({
    'Authorization': 'Token eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1dWlkIjoiTWpZek9URT0iLCJ0eXBlIjoicHJvamVjdCIsInYiOiJlMTk2YWZiOWI3Yzc1ZWZmNTY0MDkxYTRlMzRiNDllZTFmMDk3MWVjODE5YThjMzRiMTZkMzgwYTRjMjRjZWM1IiwiZXhwIjo4ODEyODE5ODY5MH0.WRvCl9aSvqeFe_F-AlcjfkWBit5IxmSf5tNZ2gF0rjM',
    'Content-Type': 'application/json'
});
const data = {
    amount: 100,
    shop_id: 'i9pLbe1f36yBMrpE',
    currency: 'USD'
};

const handlePay = () =>{
  fetch(url, {
    method: 'POST',
    headers,
    body: JSON.stringify(data)
})
.then(response => {
    if (response.ok) {
        return response.json();
    }
    return Promise.reject('Creation Error');
})
.then(data => {
    console.log('Success:', data);
})
.catch(error => {
    console.error('Fail:', error);
});
}



  return (
    <>
     <div>
      <Outlet/>
      <h2 className='text-center'>crypto cloud app</h2>
      <div className="flex justify-center items-center my-4">
        {/* <button onClick={handlePay} className="font-semibold px-5 py-2 text-white rounded bg-blue-400" >Pay Now</button> */}

<PaymentForm/>

        {/* <a href={"https://pay.cryptocloud.plus/pos/i9pLbe1f36yBMrpE"} className="fontsemibold px-5 py-2 text-white rounded bg-blue-400" >Pay Now</a> */}
      </div>
     </div>
    </>
  )
}


export default App
