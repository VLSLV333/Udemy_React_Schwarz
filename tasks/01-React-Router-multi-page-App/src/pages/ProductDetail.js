import { useParams, Link } from 'react-router-dom'

const ProductDetail = () => {
    const params = useParams()

    const dynamicURLPart = params.productID


    return (
        <>
        <h1>Product Details!</h1>
        <p>{dynamicURLPart}</p>

{/*If relative='route' this button will just jump to parent element (check in createBrowserRouter in App.js)*/}
{/*If relative='path' this button will just check link to current page and remove one pease after last /      */}
        <p><Link to='..' relative='path'>Back</Link></p>
        </>
    )
}

export default ProductDetail