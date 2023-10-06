import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
function GioHang() {
    return (
        <>
        <Header/>
        <Banner/>
        <div className="giohang">
        <h1>Giỏ hàng</h1>
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">Sản phẩm</th>
                    <th scope="col">Đơn giá</th>
                    <th scope="col">Số lượng</th>
                    <th scope="col">Thành tiền</th>
                </tr>
            </thead>
            <tbody className="table-group-divider">
                <tr>
                    <th scope="row">Xiaomi</th>
                    <td>100000</td>
                    <td>2</td>
                    <td>200000</td>
                    <td className="cap-xoa"><button className="btn btn-danger">Xoá</button><br /><button className="btn btn-success">Cập nhật</button></td>
                </tr>
                <tr>
                    <th scope="row">SamSung</th>
                    <td>50000</td>
                    <td>5</td>
                    <td>250000</td>
                    <td className="cap-xoa"><button className="btn btn-danger">Xoá</button><br /><button className="btn btn-success">Cập nhật</button></td>
                </tr>
                <tr>
                    <th scope="row">Iphone</th>
                    <td>30000</td>
                    <td>4</td>
                    <td>120000</td>
                    <td className="cap-xoa"><button className="btn btn-danger">Xoá</button><br /><button className="btn btn-success">Cập nhật</button></td>
                </tr>
            </tbody>
        </table>
        <div>
            <button className="btn btn-warning" id="mua-hang">Tiếp tục mua hàng</button>
            <button className="btn btn-warning" id="thanh-toan">Thanh toán</button>
        </div>
        </div>
        <Footer/>
        </>
    )
}
export default GioHang;