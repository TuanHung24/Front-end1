import Header from "../components/header";
import Footer from "../components/footer";
import Banner from "../components/banner";
import Products from "../components/products";
import '../App.css';
import '../bootstrap-5.2.3-dist/css/bootstrap.min.css';
import '../bootstrap-5.2.3-dist/js/bootstrap.bundle.min.js';


const dsLoaiSanPham = [
    {
        ten: 'Loai san pham Iphone',
        ds_san_pham: [
            {
                img: 'avtBanner/dienthoai1.jpg',
                name: 'Iphone 13',
                price: 350000
            },
            {
                img: 'avtBanner/dienthoai1.jpg',
                name: 'Iphone 13',
                price: 350000
            },
            {
                img: 'avtBanner/dienthoai1.jpg',
                name: 'Iphone 13',
                price: 350000
            },
            {
                img: 'avtBanner/dienthoai1.jpg',
                name: 'Iphone 13',
                price: 350000
            }
        ]
    },
    {
        ten: 'Loai san pham SamSung',
        ds_san_pham: [
            {
                img: 'avtBanner/dienthoai2.jpg',
                name: 'Samsung',
                price: 450000
            },
            {
                img: 'avtBanner/dienthoai2.jpg',
                name: 'Samsung',
                price: 450000
            },
            {
                img: 'avtBanner/dienthoai2.jpg',
                name: 'Samsung',
                price: 450000
            },
            {
                img: 'avtBanner/dienthoai2.jpg',
                name: 'Samsung',
                price: 450000
            }
        ]
    },
    {
        ten: 'Loai san pham Xiaomi',
        ds_san_pham: [
            {
                img: 'avtBanner/dienthoai3.jpeg',
                name: 'Xiaomi',
                price: 550000
            },
            {
                img: 'avtBanner/dienthoai3.jpeg',
                name: 'Xiaomi',
                price: 550000
            },
            {
                img: 'avtBanner/dienthoai3.jpeg',
                name: 'Xiaomi',
                price: 550000
            },
            {
                img: 'avtBanner/dienthoai3.jpeg',
                name: 'Xiaomi',
                price: 550000
            }
        ]
    }
];
function Trangchu(props)
{
    // const [dsLoaiSanPham, setDSLoaiSanPham]=useState([])
    // useEffect(()={
    //     fetch('http://localhost:9000/get-data.php')
    //     .then(response=response.json())
    //     .then(json=setDSLoaiSanPham(json))
    // },[]);
    const listMember=dsLoaiSanPham.map(function(item)
    {
        return (
            <Products member={item}/>
        );
    });
   return(
    <>
    <Header/>
    <Banner/>
    <div className="products">{listMember}</div>
    <Footer/>
    </>
   )
}

export default Trangchu;