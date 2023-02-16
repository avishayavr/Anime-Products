import React from 'react'

export default function CheckoutSuccessPage() {
  return (
    <div className='flex flex-col items-center'> 
    <h6 className='text-2xl font-bold'>Checkout Successful !</h6>
    <p>Your order might take some time to process.</p>
    <p>Check your order status at your profile after about 10mins.</p>
    <p>
      Incase of any inqueries contact the support at{" "}
      <strong>support@onlineshop.com</strong>
    </p></div>
  )
}
