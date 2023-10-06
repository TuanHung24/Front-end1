import SanPham from './product';
function Products(props)
{
    const listSanPhams=props.member.ds_san_pham.map(function(item)
    {
        return (
                <SanPham member={item}/>
        );
    });
    return(
        <>
        <h2 className='ten-loai-san-pham'>{props.member.ten}</h2>
        <div id='products'>{listSanPhams}</div>
        </>
    )
}

export default Products;