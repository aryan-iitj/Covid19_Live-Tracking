import React,{useEffect,useState} from 'react'
import {Card} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const Covid = () => {

    const [data,setData] = useState([]);
    const getCovidData = async () => {
        try{
            const res = await fetch('https://api.covid19india.org/data.json');
            const actualdata= await res.json();
            console.log(actualdata.statewise[0]);
            setData(actualdata.statewise[0]);
        }
        catch(err){
            console.log(err);
        }
    }
        

    useEffect(() => {
        getCovidData();
    }, [])

    return (

        <div className="bg-dark text-white">
            
        
            <h1 className="text-center p-2 m-5">🔴 LIVE </h1>
            <h2 className="text-center p-2 m-2"> COVID-19 CORONAVIRUS TRACKER</h2>
            
            <div class="container-fluid ">
            <div class="row justify-content-evenly">
                <div class="col-sm-3  ">
                    <div className="card text-white bg-primary mb-3 " style={{width: '18rem'}}>
                        <div className="card-header">Our Counter</div>
                        <div className="card-body">
                            <h5 className="card-title">India</h5>
                            <p className="card-text"></p>
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div className="card text-white bg-success mb-3" style={{width: '18rem'}}>
                        <div className="card-header">Total recovered</div>
                        <div className="card-body">
                        <h5 className="card-title">{data.recovered}</h5>
                        
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div className="card text-white bg-warning mb-3" style={{width: '18rem'}}>
                        <div className="card-header">Total active</div>
                        <div className="card-body">
                            <h5 className="card-title">{data.active}</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <div class="row justify-content-evenly">
                <div class="col-sm-3">
                    <div className="card text-white bg-secondary mb-3" style={{width: '18rem'}}>
                        <div className="card-header">Total deaths</div>
                        <div className="card-body">
                            <h5 className="card-title">{data.deaths}</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div className="card text-white bg-danger mb-3" style={{width: '18rem'}}>
                        <div className="card-header">Total confirmed</div>
                        <div className="card-body">
                            <h5 className="card-title">{data.confirmed}</h5>
                            
                        </div>
                    </div>
                </div>
                <div class="col-sm-3">
                    <div className="card text-white bg-info mb-3" style={{width: '18rem'}}>
                        <div className="card-header">Total lastupdatedtime</div>
                        <div className="card-body">
                            <h5 className="card-title">{data.lastupdatedtime}</h5>
                            
                        </div>
                    </div>
                </div>
            </div>
            </div>

            
            

            
        </div>
    )
}

export default Covid
