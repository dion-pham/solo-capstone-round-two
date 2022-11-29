import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link,Redirect } from "react-router-dom";
import { fetchAllProducts } from "../../store/product";
import { fetchAllUserPurchases } from "../../store/purchase";

const PurchaseHistory = () => {
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session.user.id)

    useEffect(()=> {
        dispatch(fetchAllProducts())
        dispatch(fetchAllUserPurchases(sessionUserId))
    }, [])


    const allProducts = useSelector(state => Object.values(state.products.allProducts))

    const orderHistory = useSelector(state => Object.values(state.purchases.userPurchases))
    const mapOrderHistory = orderHistory.map(indPurchase => indPurchase.purchase_join.map(item => item = item.product_id))
    // console.log(mapOrderHistory, '@@@@@@@')
    const idsToProduct = mapOrderHistory.map((orderList) => orderList.map(indId => indId = allProducts[indId-1]) )
    console.log(idsToProduct, 'idsToProduct!!!!!!!!')

    return (
        <div>
        {orderHistory.map((order) =>
            <div key={order.id} className='order-card'>
                {order.id}
                {order.shipping_instructions}
                {/* attach edit and delete buttons for this */}
                ${order.pretax_total_price}
            </div>
        )}
    </div>
    )
}


export default PurchaseHistory
