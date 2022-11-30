import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllProducts } from "../../store/product";
import { fetchAllUserPurchases } from "../../store/purchase";
import PurchaseHistoryEditForm from "../PurchaseHistoryEditModal/PurchaseHistoryEditForm";

const PurchaseHistory = () => {
    const dispatch = useDispatch()
    const sessionUserId = useSelector(state => state.session?.user.id)

    useEffect(()=> {
        dispatch(fetchAllProducts())
        dispatch(fetchAllUserPurchases(sessionUserId))
    }, [])

    // const allProducts = useSelector(state => Object.values(state.products?.allProducts))
    const orderHistory = useSelector(state => Object.values(state.purchases?.userPurchases))

    // if (!allProducts.length) return null
    // if (!orderHistory.length) return null

    // const mapOrderHistory = orderHistory.map(indPurchase => indPurchase.purchase_join?.map(item => item = item.product_id))
    // if (!mapOrderHistory.length) return null

    // const idsToProduct = mapOrderHistory.map((orderList) => orderList?.map(indId => indId = Object.values(allProducts[indId-1])))
    // if (!idsToProduct.length) return null

    return (
        <div>
        {orderHistory.map((order) =>
            <div key={order.id} className='order-card'>
                {<img src= {order.purchase_join[0].product_details.img_url1}></img>}
                {<img src= {order.purchase_join[1] ? order.purchase_join[1].product_details.img_url1 : 'https://i.imgur.com/poY9Fmm.png' }></img>}
                {<img src= {order.purchase_join[2] ? order.purchase_join[2].product_details.img_url1 : 'https://i.imgur.com/poY9Fmm.png'}></img>}
                {order.purchase_join.map((item) =>
                        <div key={item.id}>
                            {item.product_details.name}
                        </div>
                )}

                {order.shipping_instructions}
                <PurchaseHistoryEditForm order={order}/>
                <h4>Total</h4>
                ${order.pretax_total_price}
                <h1>order end</h1>
            </div>
            )}
        </div>
    )
}

export default PurchaseHistory
