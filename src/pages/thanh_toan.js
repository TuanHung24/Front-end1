import '../bootstrap-5.2.3-dist/css/bootstrap.min.css';
import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
function ThanhToan() {
    return (
        <>
        <Header/>
        <Banner/>
        <div className='thanhtoan'>
            <h1>Thanh toán</h1>
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
                        <th scope="row">Iphone</th>
                        <td>100000</td>
                        <td>2</td>
                        <td>200000</td>
                        <td className="cap-xoa"><button className="btn btn-danger">Xoá</button><br/><button className="btn btn-success">Cập nhật</button></td>
                    </tr>
                    <tr>
                        <th scope="row">SamSung</th>
                        <td>50000</td>
                        <td>5</td>
                        <td>250000</td>
                        <td className="cap-xoa"><button className="btn btn-danger">Xoá</button><br/><button className="btn btn-success">Cập nhật</button></td>
                    </tr>
                    <tr>
                        <th scope="row">Xiaomi</th>
                        <td>30000</td>
                        <td>4</td>
                        <td>120000</td>
                        <td className="cap-xoa"><button className="btn btn-danger">Xoá</button><br/><button className="btn btn-success">Cập nhật</button></td>
                    </tr>
                </tbody>
            </table>
            <form>
                <div className="mb-3">
                    <span>Thông tin người nhập hàng:</span>
                </div>
                <div className="mb-3">
                    <label for="ho_ten" className="form-label">Họ tên:</label>
                    <input type="text" className="form-control" id="ho-ten"/>
                </div>
                <div className="mb-3" >
                    <label for="dien_thoai" className="form-label">Điện thoại:</label>
                    <input type="text" className="form-control" id="dien-thoai"/>
                </div>
                <div className="mb-3">
                    <label for="dia_chi" className="form-label">Địa chỉ:</label>
                    <input type="text" className="form-control" id="dia-chi"/>
                </div>
                <div className="mb-3">
                    <span>Phương thức thanh toán:</span>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
                        <label className="form-check-label" for="flexRadioDefault1">
                            COD
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
                        <label className="form-check-label" for="flexRadioDefault2">
                            Chuyển khoản qua ngân hàng
                        </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
                        <label className="form-check-label" for="flexRadioDefault3">
                            Chuyển khoản qua MoMo
                        </label>
                </div>
                <button className="btn btn-warning">Thanh toán</button>
            </form>
            </div>
            <Footer/>
        </>
    )
}

export default ThanhToan;