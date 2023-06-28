import logo from './logo.svg';
import './App.css';
import Pricecard from './components/Pricecard/Pricecard';


const pricing_detils = [{

  price:0,
  priceType:'Free',
  features:[
    {features:"Single User",isAvailable:true},
    {features:"5GB Storage",isAvailable:true},
    {features:"Unlimited Public Projects",isAvailable:true},
    {features:"Community Access",isAvailable:true},
    {features:"Unlimited Private Projects",isAvailable:false},
    {features:"Dedicated Phone Support",isAvailable:false},
    {features:"Free Subdomain",isAvailable:false},
    {features:"Monthly Status Reports",isAvailable:false},
  ]

},{
  price:100,
  priceType:'PAID',
  features:[
    {features:"Single User",isAvailable:true},
    {features:"5GB Storage",isAvailable:false},
    {features:"Unlimited Public Projects",isAvailable:true},
    {features:"Community Access",isAvailable:false},
    {features:"Unlimited Private Projects",isAvailable:true},
    {features:"Dedicated Phone Support",isAvailable:false},
    {features:"Free Subdomain",isAvailable:true},
    {features:"Monthly Status Reports",isAvailable:false},
  ]
},{
  price:200,
  priceType:'PAID',
  features:[
    {features:"Single User",isAvailable:true},
    {features:"5GB Storage",isAvailable:true},
    {features:"Unlimited Public Projects",isAvailable:true},
    {features:"Community Access",isAvailable:true},
    {features:"Unlimited Private Projects",isAvailable:true},
    {features:"Dedicated Phone Support",isAvailable:true},
    {features:"Free Subdomain",isAvailable:true},
    {features:"Monthly Status Reports",isAvailable:true},
  ]
}];

function App() {

  return (

    <div className="App">
       <section className="pricing py-5">
      <div className="container">
        <div className="row">
      
      {pricing_detils.map((d,i) => <Pricecard key={`price_cards_${i}`}data = {d}/>)}
       
 
        </div>
      </div>
    </section>
  

 
     
    </div>
  );
}

export default App;
