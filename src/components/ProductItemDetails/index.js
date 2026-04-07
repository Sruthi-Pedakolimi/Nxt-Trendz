// Write your code here
import {Component} from 'react'
import Cookies from 'js-cookie'
import {Link} from 'react-router-dom'
import Header from '../Header'
import './index.css'

class ProductItemDetails extends Component {
  state = {selectedProductDetails: '', similarItems: []}

  componentDidMount() {
    this.getProductItemDetails()
  }

  ProductItemDetails = async () => {
    const {match} = this.props
    const {id} = match.params
    const jwtToken = Cookies.get('jwt_token')
    const apiURL = `https://apis.ccbp.in/products/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiURL, options)
    const data = await response.json()
    console.log(data)
    this.setState({
      selectedProductDetails: productDetails,
      similarItems: similarProducts,
    })
  }

  renderProductDetails = () => {
    const {selectedProductDetails} = this.state
  }
  render() {
    return <div>{<Header />}</div>
  }
}

export default ProductItemDetails
