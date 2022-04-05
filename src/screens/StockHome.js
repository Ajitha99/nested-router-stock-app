
import { useState } from "react";
import {getStockData} from '../services/constants';
import StockData from "../components/StockData";
import '../styles/stockdata.css'

// import { useNavigate } from 'react-router-dom';

export default function StockHome(){
    const [stock, setStock] = useState([]);
    const [symbol,setSymbol] = useState('');
    // const [fields, setFields] = useState([])
    // const navigate = useNavigate();


    const handleOnChange = (e) => {
        e.preventDefault();
        setSymbol(e.target.value);
        console.log("symbol" + symbol);}

    async function handleOnClick(e){
        e.preventDefault();
        
        try {
            let res = await getStockData(symbol);
            console.log(res);
            if(res !== undefined){
                const newStock = [...stock,res]
                setStock(newStock);
            }
            else{
                alert("stock data is not available, try again!");
                //  navigate('/stockhome')
                }
            } catch (error) {
                console.log(error);
            }
    }

const renderPost = ()=>{
    return(
        stock.map((element,index) =>{
            return <StockData
            data = {element}
            key = {index}
           />
        })
     )
        }

   return(
       <div className="main-div">
            <div className="parent-div">
                <div>
                    <input className="stockhome-input" type="text" onChange={(e) =>{handleOnChange(e)}}/>
                    <button className="stockhome-button" onClick={(e) => handleOnClick(e)}>Get Stock</button>
                </div>
                <div className="stockdata-pdiv">{renderPost()}</div>
            </div>
       </div>
   )
}



// const { symbol, companyName,latestPrice, change} = res;
            // const temp1 = { symbol, companyName,latestPrice, change};
            // const temp2 = [...fields, temp1];
            // setFields(temp2);
                // navigate('/stockhome');

                // function checkmethod(symbol){
                //     const tempDatafilter = stock.filter(function(ele){
                //         return ele.symbol === symbol;
                //     });
                //     if(tempDatafilter) return true;
                //     else return false;
                // }
                
// {/* <div>
// <h3>Search History</h3>
// {
//     fields.map((element, index) =>{
//         return(
//             <div>
//                 <h5>symbol: {element.symbol}</h5>
//                 <h6>companyName: {element.companyName} </h6> 
//                 <h6>Price:  {element.latestPrice}</h6>
//                 <h6>change: {element.change}</h6> 
//             </div>
//         )
//     })
// }
// </div> */}

//   {/* {
//                     stock.map((element,index) =>{
//                                     return <StockData
//                                     data = {element}
//                                     key = {index}
//                                    />
//                                 })
//                 } */}