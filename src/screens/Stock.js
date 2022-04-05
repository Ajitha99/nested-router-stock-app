import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {getStockData} from '../services/constants';
import '../styles/stock.css';
const Stock = () =>{
    const [data, setData] = useState([])
    const { symbol } = useParams();

    console.log(symbol);
    
   
    useEffect(() =>{
        const fetchData = async () =>{
            const res = await getStockData(symbol);
            console.log("I am here" + symbol);
            console.log(res);
            setData(res);
        }
        fetchData();
    }, [])

    function numFormatter(num) {
        if(num >= 999 && num < 1000000){
            return (num/1000).toFixed(0) + 'K'; // convert to K for number from > 1000 < 1 million 
        }
        else if(num >= 1000000 && num < 1000000000){
            return (num/1000000).toFixed(0) + 'M'; // convert to M for number from > 1 million  and less than 1000 M
        }
        else if(num < 1000000000000) {
            return Math.round((num/1000000000)) + "B";//convet to M for the number billions
        }
        else if(num < 900){
            return num; // if value < 1000, nothing to do
        }
    }

    console.log(data);
    return(
        <div className="main-stock">
            <div className="parent-flex">
                    <table>
                        <thead>
                            <th colSpan="2"><h2 className="title-h2">{data.symbol} DATA </h2></th>
                            {/* <th colSpan="1"></th> */}
                        </thead>
                        <tbody>
                            <tr>
                                <td className="heading-td"><h5 className="stock-h5">Symbol</h5></td>
                                <td className="data-td"><h5 className="stock-data">{data.symbol}</h5></td>
                            </tr>
                            <tr>
                                <td className="heading-td"><h5 className="stock-h5">Company Name</h5></td>
                                <td className="data-td"><h5 className="stock-data">{data.companyName}</h5></td>
                            </tr>
                            <tr>
                                <td className="heading-td"><h5 className="stock-h5">Primary Exchange</h5></td>
                                <td className="data-td"><h5 className="stock-data">{data.primaryExchange}</h5></td>
                            </tr>
                            <tr>
                                <td className="heading-td"><h5 className="stock-h5">latest Price</h5></td>
                                <td className="data-td"><h5 className="stock-data">${data.latestPrice}</h5></td>
                            </tr>
                            <tr>
                                <td className="heading-td"><h5 className="stock-h5">52wk High</h5></td>
                                <td className="data-td"><h5 className="stock-data">${data.week52High}</h5></td>
                            </tr>
                            <tr>
                                <td className="heading-td"><h5 className="stock-h5">52wk Low</h5></td>
                                <td className="data-td"><h5 className="stock-data">${data.week52Low}</h5></td>
                            </tr>
                            <tr>
                                <td className="heading-td"><h5 className="stock-h5">Market Cap</h5></td>
                                <td className="data-td"><h5 className="stock-data">{numFormatter(data.marketCap)}</h5></td>
                                {/* <td><h5 className="stock-data">{data.marketCap}</h5></td> */}
                            </tr>
                        </tbody>
                    </table>
                </div>
        </div>
    )
}
    
    export default Stock;
    

     // const tempsym = symbol;
    // console.log(tempsym);
    // const tempData =  props.data
    // console.log (tempData);
    // let newResult = tempData.filter(function(ele){
    //     return ele.symbol === tempsym;
    // })
    // console.log(newResult);
   
    // return(
    //     <div>
    //     <div><h4>{newResult[0].symbol} DATA </h4>
    //             <h3>Time Stamp: {Date().toLocaleString()}</h3>
    //             <h3>Symbol : {newResult[0].symbol}</h3>
    //             <h3>{newResult[0].companyName}</h3>
    //             <h3>Primary Exchange: {newResult[0].primaryExchange}</h3>
    //             <h3>latest Price: {newResult[0].latestPrice}</h3>
    //             <h3>52wk High: {newResult[0].week52High}</h3>
    //             <h3>52wk Low: {newResult[0].week52Low}</h3>
    //             <h3>Market Cap: {newResult[0].marketCap}</h3>
    //         </div>
      
    //     </div>
    //     )

    // {/* <h3><span>Symbol : </span>{data.symbol}</h3> */}
    //            {/* <h3><span>Company Name:</span>{data.companyName}</h3> */}
    //            {/* <h3><span>Primary Exchange: </span>{data.primaryExchange}</h3>
    //            <h3><span>latest Price: </span>{data.latestPrice}</h3>
    //            <h3><span>52wk High:</span> {data.week52High}</h3>
    //            <h3><span>52wk Low:</span> {data.week52Low}</h3>
    //            <h3><span>Market Cap: </span>{data.marketCap}</h3> */}