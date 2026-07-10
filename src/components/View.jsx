import React, { useEffect, useState } from 'react'
import NavigationBar from './NavigationBar'
import axios from 'axios'

const View = () => {
      const [cardata, changeData] = useState([])

      const fetchData = ()=>{
        axios.get("https://raw.githubusercontent.com/anishpdm/demo-json-api/refs/heads/main/car-data.json")
        .then( (response)=>{
            changeData(response.data)
        } ).catch((err) => {
    console.log(err);
})
      }  

      useEffect(
        ()=>{
            fetchData()
        },[]
      )

    return (
        <div>
            <NavigationBar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                        <div className="row g-3">
                            {cardata.map(
                                (value, index) => {
                                    return(
                                    <div className="col col-12 col-sm-6 col-md-6 col-lg-4 col-xl-4 col-xxl-4" key={index}>

                                        <div className="card">
                                            <img src= {value.image} height="300px" alt="..." />
                                            <div className="card-body">
                                                <h6 className="card-title">Brand: {value.brand}</h6>
                                                <h6 className="card-title">Model: {value.model}</h6>
                                                <h6 className="card-title">Fuel Type: {value.fuelType}</h6>
                                                <h6 className="card-title">Price: {value.price}</h6>
                                                <h6 className="card-title">Color: {value.color}</h6>
                                                <h6 className="card-title">Manufacturing Year: {value.year}</h6>
                                                <a href="#" class="btn btn-success">View</a>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}

                        </div>
                    </div>
                </div>
            </div>


        </div>
)}

export default View