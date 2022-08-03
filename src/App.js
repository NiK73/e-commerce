import './App.css';
import Header from './Header'
import Home from './Home'
import Cart from './Cart'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() { 
  var cartItems = [
    { 
    "name":"Potato", 
    "id":1, 
    "price":30, 
    "available":1, 
    "vendor":"Himachal Pvt Ltd", 
    "category":"Vegtables",
    "image":"https://media.istockphoto.com/photos/three-potatoes-picture-id157430678?k=20&m=157430678&s=612x612&w=0&h=dfYLuPYwA50ojI90hZ4jCgKZd5TGnqf24UCVBszoZIA=" 
    }, 
    { 
    "name":"Banana", 
    "id":2, 
    "price":50, 
    "available":1, 
    "category":"Fruits",
    "vendor": "Organic farms",
    "image":"https://image.shutterstock.com/image-photo/bunch-bananas-isolated-on-white-260nw-1722111529.jpg" 
     
    },
    { 
    "name":"Drumsticks", 
    "id":3, 
    "price":20, 
    "available":0, 
    "category":"Vegetables", 
    "vendor":"Mallikarjuna farms",
    "image":"https://www.bigbasket.com/media/uploads/p/l/10000109_18-fresho-drumstickmoringa.jpg" 
    },
    {
    "name":"Orange", 
    "id":4, 
    "price":25, 
    "available":1,
    "vendor":"Nagpur farms", 
    "category":"Fruits",
    "image":"https://media.istockphoto.com/photos/orange-isolated-on-white-background-clipping-path-full-depth-of-field-picture-id1194662606?k=20&m=1194662606&s=612x612&w=0&h=Q3bHkLexn71hPlUJQSPhazlJiL-xpeVGwOAFwO67WcU=" 
    }
    ]
    
  return (
    <Router>
      <div className="App">
        <Header 
          cartItems={cartItems} />
        <Routes>
          <Route path="/cart" element={<Cart cartItems={cartItems} />} />
          <Route path="/" element={<Home cartItems={cartItems} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
