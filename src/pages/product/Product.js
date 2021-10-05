import { Link } from 'react-router-dom';
import './Product.css';
import Chart from './../../components/chart/Chart';
import { productData } from '../../dummy-data';
import { Publish } from '@material-ui/icons';

const Product = () => {
  return (
    <div className='product'>
      <div className='productTitleContainer'>
        <h1 className='productTitle'>Product</h1>
        <Link to='/newProduct'>
          <button className='productAddButton'>Add</button>
        </Link>
      </div>
      <div className='productTop'>
        <div className='productTopLeft'>
          <Chart data={productData} datakey='Sales' title='Sales Performance' />
        </div>
        <div className='productTopRight'>
          <div className='productInfoTop'>
            <img
              src='https://www.reliancedigital.in/medias/Apple-12-Smartphones-491901536-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMzUwODd8aW1hZ2UvanBlZ3xpbWFnZXMvaDEyL2g2My85NDA3NzQ2MjQ0NjM4LmpwZ3w0OTc2MTIyMWJlODAwMmE1ZDcyY2VlZGQxZGEwMTIxNTJkZDM2NWUyZjM2OWZlMmNiMTRjN2FkMTE5YWE0ZjVj'
              alt=''
              className='productInfoImg'
            />
            <span className='productName'>Iphone 12</span>
          </div>
          <div className='productInfoBottom'>
            <div className='productInfoItem'>
              <span className='productInfoKey'>id:</span>
              <span className='productInfoValue'>123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>sales:</span>
              <span className='productInfoValue'>5123</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>active:</span>
              <span className='productInfoValue'>yes</span>
            </div>
            <div className='productInfoItem'>
              <span className='productInfoKey'>in stock:</span>
              <span className='productInfoValue'>no</span>
            </div>
          </div>
        </div>
      </div>
      <div className='productBottom'>
        <form className='productForm'>
          <div className='productFormLeft'>
            <label>Product Name</label>
            <input type='text' placeholder='Iphone 12' />
            <label>In Stock</label>
            <select name='inStock' id='inStock'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
            <label>In Stock</label>
            <select name='active' id='active'>
              <option value='yes'>Yes</option>
              <option value='no'>No</option>
            </select>
          </div>
          <div className='productFormRight'>
            <div className='productUpload'>
              <img
                src='data:image/jpeg;base64,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'
                alt=''
                className='productUploadImg'
              />
              <label htmlFor='file'>
                <Publish />
              </label>
              <input type='file' id='file' style={{ display: 'none' }} />
            </div>
            <button className='productButton'>Update</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Product;
