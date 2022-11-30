import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/product";
import { fetchAllUserPurchases } from "../../store/purchase";

const PurchaseHistory = () => {
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session?.user.id)

    useEffect(()=> {
        dispatch(fetchAllProducts())
        dispatch(fetchAllUserPurchases(sessionUserId))
    }, [])

    const allProducts = useSelector(state => Object.values(state.products?.allProducts))
    const orderHistory = useSelector(state => Object.values(state.purchases?.userPurchases))

    if (!allProducts.length) return null
    if (!orderHistory.length) return null

    const mapOrderHistory = orderHistory.map(indPurchase => indPurchase.purchase_join?.map(item => item = item.product_id))
    if (!mapOrderHistory.length) return null

    const idsToProduct = mapOrderHistory.map((orderList) => orderList?.map(indId => indId = Object.values(allProducts[indId-1])))
    if (!idsToProduct.length) return null






    return (
        <div>
        {orderHistory.map((order) =>
            <div key={order.id} className='order-card'>

            {<img src= {idsToProduct[order.id-1][0][3]}></img>}

            {/* done to list all item names */}
            {idsToProduct[order.id-1].map((item) =>
                <div key={item.id}>
                    {/* <img src= {item[3]} alt="Product's image" className='purchase-history-splash-image'></img> */}
                    {item[6]}
                </div>
            )}

            {order.shipping_instructions}
            {/* // attach edit and delete buttons for this
            // make a separate component for this feature and then append the price and shipping instructions after the fact */}
            ${order.pretax_total_price}
            <h1>order end</h1>
            </div>
            )}
        </div>
    )
}

export default PurchaseHistory
