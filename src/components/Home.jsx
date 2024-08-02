import React from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <>
      <div>Home Page</div>
      <button onClick={() => navigate('order-summary', { replace: true })}>
        Place Order
      </button>
    </>
  );
}

export default Home;

/* ----NOTE:
1]Navigate le chgia page lai forward ra back ward move garna help garxa
2] navigate garda page reload hudaina
3] jati page visit gareu tyo sabai page HISTORY STACK ma save bhayera basxa. Example: home ma click garera Profile page ma pugem bhane history stack ma [Home,Profile] bhayera stack ma basxa.
4] {replace:true} le chai HISTORY STACK maprevious page ko name lai cahi current page ko name le replace garxa.
    Example:
    # (Without replace:true)
    [ Home ]  --initial state
    [ Home, OrderSummary ]  --after navigating to OrderSummary
    [ Home ]  --after going back from OrderSummary

    # (With replace:true)
    [ Home ]  --initial state
    [ OrderSummary ]  --Home is replaced with OrderSummary
    --Going back does nothing because there's no entry before OrderSummary



  */
