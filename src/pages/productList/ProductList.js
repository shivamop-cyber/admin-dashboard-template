import './ProductList.css';
import { DataGrid } from '@material-ui/data-grid';
import { useState } from 'react';
import { DeleteOutline } from '@material-ui/icons';
import { productRows } from '../../dummy-data';
import { Link } from 'react-router-dom';

const ProductList = () => {
  const [data, setData] = useState(productRows);

  const handleDelete = (id) => {
    setData((prevData) => {
      return prevData.filter((data) => data.id !== id);
    });
  };
  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='productListItem'>
            <img src={params.row.img} alt='' className='productListImage' />
            {params.row.name}
          </div>
        );
      },
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 200,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      sortable: false,
      width: 160,
    },
    {
      field: 'action',
      headerName: 'Action',
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={'/product/' + params.row.id}>
              <button className='productListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='productListDelete'
              onClick={handleDelete.bind(null, params.row.id)}
            />
          </>
        );
      },
    },
  ];
  return (
    <div className='productList'>
      <DataGrid
        rows={data}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  );
};

export default ProductList;
