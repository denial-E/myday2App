import React from 'react';
import Home from './components/Home';
// import CompA from './components/CompA';
// import CompB from './components/CompB';
// import CompC from './components/CompC';

const App = () => {
 const arrobj=[
    {
    title:"FREE",
    price:"$0/month",
    user:"Single User",
    data:"50GB Storage",
    project:"Unlimited Public Project",
    community:"community Access",
    private:"Unlimited Private Project",
    support:"Dedicated Phone Support",
    domain:"Free Subdomain",
    status:"monthly status Reports",
    },
    {
      title:"PLUS",
      price:"$9/month",
      user:"5 Users",
      data:"50GB Storage",
      project:"Unlimited Public Project",
      community:"community Access",
      private:"Unlimited Private Project",
      support:"Dedicated Phone Support",
      domain:"Free Subdomain",
      status:"monthly status Reports",
    },
    {
      title:"PRO",
      price:"$49/month",
      user:"Unlimited Users",
      data:"50GB Storage",
      project:"Unlimited Public Project",
      community:"community Access",
      private:"Unlimited Private Project",
      support:"Dedicated Phone Support",
      domain:"Free Subdomain",
      status:"monthly status Reports",
    },
   ]
  return (
    <div>
      
      {/* <h1>App Component</h1> */}
      {/* <CompA  arr={arr} a={a}/> */}
      {/* <CompB obj={obj}/> */}
      {/* <CompC objarr={objarr}/> */}
      <Home   arrobj={ arrobj}/>
      
    </div>
  );
};

export default App;