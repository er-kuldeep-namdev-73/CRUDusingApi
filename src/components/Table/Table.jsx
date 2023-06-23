import React, { useState, useEffect } from "react";
import getApi from "../Api/Api";
const TableBind = () => {

    const [Products, setProducts] = useState([])

    function generateField(item) {

        if (typeof item == "string" && item.match(/(jpg|jpeg|png|webp)$/g)) {
            return <img src={item} alt="..." width={100} />
        }
        else if (typeof item !== "object") {
            if(typeof item==="boolean")
            {
                return item+'';
            }
            return item
        }
        else if (typeof item == "object" && !Array.isArray(item)) {

            return Object.keys(item).map((keyName) => {
                if (typeof item[keyName] != 'object') {
                    return <p><b>{keyName}</b>:{item[keyName]}<br /></p>
                }
                else {
                    return Object.keys(item[keyName]).length == 2 && Object.keys(item[keyName]).map((objName) => {
                        return <p>{objName}:{item[keyName][objName]}<br /></p>
                    })
                }
            })
        }
        else if (Array.isArray(item) && !item[0].match(/(jpg|jpeg|png|webp)$/g) && typeof item == "object") {

            return item.map(elem => {
                return <tr>{

                    Object.keys(elem).map(keyItem => {
                        return <span>{elem[keyItem]}</span>
                    })

                }
                </tr>
            })
        }
        else if (Array.isArray(item)) {
            return item.map((value => {

                if (typeof value == "string" && value.match(/(jpg|jpeg|png|webp)$/g)) {
                    return <td><img src={value} width={100} alt="..." /></td>
                }
                else {
                    return <td>{value}</td>
                }
            }))

        }

    }

    useEffect(() => {
        getApi("carts")
            .then(res => {
                setProducts(res[Object.keys(res)[0]])
            }).catch(err => console.log(err))
    }, [])

    // console.log(Products)

    return (
        <>
            <table border={1}>
                <thead>
                    <tr>
                        {
                            Products.length !== 0 && Object.keys(Products[0]).map((data, index) => {
                                return <th key={index}>{data}</th>
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.length !== 0 && Products.map((Product, index) => {
                            return (<tr key={index}>
                                {
                                    Object.values(Product).map((item, index) => (
                                        <td key={index}>
                                            {
                                                generateField(item)
                                            }
                                        </td>
                                    ))
                                }
                            </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    )

}
export default TableBind;