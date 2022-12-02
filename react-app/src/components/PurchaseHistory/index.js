import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import { fetchAllProducts } from "../../store/product";
import { fetchAllUserPurchases } from "../../store/purchase";
import PurchaseHistoryEditForm from "../PurchaseHistoryEditModal/PurchaseHistoryEditForm";
import './PurchaseHistory.css'
import '../Cart/Cart.css'

const PurchaseHistory = () => {
    const dispatch = useDispatch()
    const sessionUser = useSelector(state => state.session.user)
    const sessionUserId = useSelector(state => state.session.user.id)


    useEffect(() => {
        dispatch(fetchAllProducts())
        dispatch(fetchAllUserPurchases(sessionUserId))
    }, [])


    // const allProducts = useSelector(state => Object.values(state.products?.allProducts))
    const orderHistory = useSelector(state => Object.values(state.purchases?.userPurchases))

    if (!sessionUserId) return <Redirect to="/" />;

    // const mapOrderHistory = orderHistory.map(indPurchase => indPurchase.purchase_join?.map(item => item = item.product_id))
    // const idsToProduct = mapOrderHistory.map((orderList) => orderList?.map(indId => indId = Object.values(allProducts[indId-1])))

    let accountOrderHistory;
    orderHistory.length ? accountOrderHistory = (
        <table className="table-container">
            <thead className='table-header'>
                <tr>
                    <th scope='row' colspan='1'></th>
                    <th scope='row'>
                        <div className="header-2">
                            <div>
                                Account Details:
                            </div>
                            <div className="user-full-name">
                                <div>
                                    {sessionUser.first_name}
                                </div>
                                <div>
                                    {sessionUser.last_name}
                                </div>
                            </div>
                        </div>
                    </th>
                    <th scope='row'>Item List</th>
                    <th scope='row'>Shipping Information</th>
                    <th scope='row'>Total Price</th>
                </tr>
            </thead>
            <tbody className="table-body">
                {orderHistory.map((order) =>
                    <tr className="order-table-row">
                        <td className="table-column-1a">
                            <div>
                                {<img src={order.purchase_join[0].product_details.img_url1}></img>}
                            </div>
                        </td>
                        <td className="table-column-2a">
                            <div>
                                <div>
                                    Order # {order.id}
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="table-column-3" id='order-column-3'>
                                {order.purchase_join.map((item) =>
                                    <ul key={item.id} className='order-column-3-ul'>
                                        <li className="item-list">
                                            <Link className="item-list-link" to={`/products/${item.product_id}`} >
                                                {item.product_details.name}
                                            </Link>
                                        </li>
                                    </ul>
                                )}
                            </div>

                        </td>
                        <td className="table-column-4">
                            <div className="order-column-4">
                                <div>
                                    "{order.shipping_instructions}"
                                </div>
                                <div>
                                    <PurchaseHistoryEditForm order={order} />
                                </div>
                            </div>
                        </td>
                        <td className="table-column-5a">
                            <div>
                                <div >
                                    <h3 className="order-history-price">
                                    ${order.pretax_total_price}
                                    </h3>
                                </div>
                            </div>
                        </td>
                    </tr>
                )}
            </tbody>
        </table >
    ) :
        accountOrderHistory = (
            <h1>
                You have no orders, {sessionUser.first_name}! Browse around for something you'll like.
            </h1>
        )

    return (
        <div className="cart-container">
            <h1 className="cart-title">Order History</h1>
            <div className="cart-render">
                {accountOrderHistory}
            </div>
        </div>
    )
}

export default PurchaseHistory
