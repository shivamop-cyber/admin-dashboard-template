import './UserList.css';
import { useState } from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons';
import { userRows } from '../../dummy-data';
import { Link } from 'react-router-dom';

const UserList = () => {
  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData((prevData) => {
      return prevData.filter((data) => data.id !== id);
    });
  };

  const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'user',
      headerName: 'User',
      width: 200,
      renderCell: (params) => {
        return (
          <div className='userListUser'>
            <img src={params.row.avatar} alt='' className='userListImage' />
            {params.row.userName}
          </div>
        );
      },
    },
    {
      field: 'email',
      headerName: 'Email',
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
      field: 'transaction',
      headerName: 'Transaction Volume',
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
            <Link to={'/user/' + params.row.id}>
              <button className='userListEdit'>Edit</button>
            </Link>
            <DeleteOutline
              className='userListDelete'
              onClick={handleDelete.bind(null, params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className='userList'>
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

export default UserList;
