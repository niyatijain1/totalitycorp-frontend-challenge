import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import girl from '../assests/smiling-gorgeous-woman-pointing-fingers-right-inviting-people-showing-logo-banner-standing-beige-background.jpg'
import CartItem from '../components/CartItem';
import { ToastContainer, toast } from 'react-toastify';
import ShippingForm from '../components/ShippingForm'
import PaymentForm from '../components/PaymentForm'
import OrderConfirmation from '../components/OrderConfirmation';




const Cart = () => {


  const userInfo = useSelector((state) => state.shopoholics.userInfo);
  const productData = useSelector((state) => state.shopoholics.productData);
  const [totalAmt, setTotalAmt] = useState("");
  const [showShippingForm, setShowShippingForm] = useState(false);
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState(false);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  const handleCheckout = () => {
    console.log("handleCheckout is called");
    if (userInfo) {
      setShowShippingForm(true);
    } else {
      toast.error("Please sign in to Checkout");
    }
  };

  const handlePaymentSuccess = () => {
    setOrderConfirmed(true)
  };

  return (
    <div>
      <img className="w-full h-70 object-cover" src={girl} alt="girl" />
      <div className='max-w-screen-xl mx-auto py-20 flex'>
        <CartItem />
        <div className='w-1/3 bg-[#fafafa] py-6 px-4'>
          <div className='flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6'>
            <h2 className='text-2xl font-medium'>cart totals</h2>
            <p className='flex items-center gap-4 text-base'>
              Subtotal(" ")
              <span className='font-titlefont font-bold text-lg'>$ {totalAmt} </span>
            </p>
            <p className='flex items-start gap-4 text-base'>
              Free shipping available only on Shopoholics.
            </p>
          </div>
          <p className='font-titleFont font-semibold flex justify-between mt-6'>Total <span className='text-xl font-bold'>$ {totalAmt}</span></p>
          <button onClick={handleCheckout} className='text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300'
          >proceed to checkout </button>
          {showShippingForm && (
            <ShippingForm
              onNext={() => setShowPaymentForm(true)}
            />
          )}
          {showPaymentForm && (
            <PaymentForm
              totalAmount={totalAmt}
              onPaymentSuccess={handlePaymentSuccess}
              userInfo={userInfo}
            />
          )}
          {orderConfirmed && <OrderConfirmation />}

        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark" />
    </div>
  )
}

export default Cart
