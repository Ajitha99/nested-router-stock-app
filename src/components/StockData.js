
import {useNavigate} from 'react-router-dom'
import '../styles/stockdata.css'


    
  function StockData({ data }){
    const navigate = useNavigate();

    console.log("Iam in stockdata")
    
    return(
        <div>
          <div className = "stockdata-maindiv" onClick={() => navigate(`/stockhome/${data.symbol}`)}>
              <div className="stockdata-div1">
                  <h5>{data.symbol}</h5>
                  <h6 className='comp-name'>{data.companyName}</h6>   
              </div>
              <div className="stockdata-div2">
                  <h6>${data.latestPrice}</h6>
                  <button className= {data.change > 0 ? 'background-green': 'background-red'} >{data.change}%</button>
              </div>    
          </div>
      </div>
    )
}
export default StockData;


// import { useEffect, useState } from 'react';
// function StockData({symbol}){
    // const [stockData, setStockData] = useState([data])
    //newline
    // const tempData = [...stockData, data]

     //uncommented useeffect
    // useEffect(() =>{
    //      setStockData(tempData);
    // },[])
   
    
    // /console.log(data.symbol);

// {/* <div onClick={() => navigate(`/stockhome/${symbol}`)}>{symbol}</div> */}
//           {/* {
//             stockData.map((element, index) =>{
//               return(
//               <div onClick={() => navigate(`/stockhome/${element.symbol}`)}>
//                     <h5>symbol: {element.symbol}</h5>
//                     <h6>companyName: {element.companyName} </h6> 
//                     <h6>Price:  {element.latestPrice}</h6>
//                     <h6>change: {element.change}</h6> 
//                 </div>
//                 )
               
//             })
//           } */}