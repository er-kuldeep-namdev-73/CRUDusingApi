import React, { useState, useEffect } from "react";
import getApi from "../Api/getApi";
import Delete from "../Form-Control/Delete/Delete";
import Edit from "../Form-Control/Edit/Edit";
import Create from "../Form-Control/Create/Create"
const TableBind = () => {

    const [Products, setProducts] = useState([])

    function generateField(item) {
        return Object.keys(item).map(keyName => {
            return  (<>
            <td>
                
                {
                    (typeof item[keyName] === "object") ? generateField(item[keyName]) :
                        (typeof item[keyName] === "string" && item[keyName].match(/(jpg|png|jpeg|webp|gif)$/g)) ? <img src={`${item[keyName]}`} width={100} alt="loading" /> : item[keyName] + ""
                }
            </td>
            </>
            )
        })
    }

    useEffect(() => {
        getApi()
            .then(res => {
                Array.isArray(res) ? setProducts(res) : 
                setProducts(res[Object.keys(res)[0]])
            }).catch(err => console.log(err))
    }, [])

    return (
        <>
			<Create data={Products} setProducts={setProducts}/>
            <table className="table table-striped table-bordered">
                <thead>
                    <tr index={Products.id}>
                        {
                            Products.length !== 0 && Object.keys(Products[0]).map((data, index) => {
                                return <>
                                    <th key={index}>{data}</th>
                                </>
                            })
                        }
                        <th colSpan={2}>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.length !== 0 && Products.map((Product, index) => {
                            return (<tr key={index}>
                                {
                                    generateField(Product)
                                }
                                <td><Edit id={Product.id} data={Product} setProducts={setProducts}/></td>
                                <td><Delete id={Product.id} data={Product} setProducts={setProducts}/></td>

                            </tr>)
                        }
                        )}
                </tbody>
            </table>
        </>
    )



}
export default TableBind;