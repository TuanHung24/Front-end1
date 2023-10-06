import { NavLink } from "react-router-dom";

function Product(props)
{
    return(
        <>
        <div className="product">
        <img src={props.member.img} className="img"/>
        <p>Tên sản phẩm: <span className="gia">{props.member.name}</span></p>
        <p>Giá: <span className="gia">{props.member.price}</span></p>
        <NavLink to="/thanh-toan" className="btn btn-danger">Mua ngay</NavLink>
        <NavLink to="/gio-hang" className="btn btn-danger">Thêm vào giỏ</NavLink>
        </div>
        </>
    )
}

export default Product;