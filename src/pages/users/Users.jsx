import { DataGrid } from '@mui/x-data-grid';
import { DeleteOutline } from '@mui/icons-material';
import { usersData } from '../../dummyData';
import './users.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';


const Users = () => {
    const [data, setData] = useState(usersData); 
    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', 
            headerName: 'User', 
            width: 220, 
            renderCell: (params)=>{
                return (
                    <div className='user-avatar'>
                        <img src={params.row.avatar} alt="avatar" />
                        {params.row.username}
                    </div>
                );
            } 
        },
        { field: 'email', headerName: 'Email', width: 200 },
        { field: 'status', headerName: 'Status', width: 150 },
        { field: 'transaction', headerName: 'Transaction', width: 150 },
        { field: 'actions', 
            headerName: 'Action', 
            width: 150,
            renderCell: (params)=>{
                return (
                    <>
                        <Link to={"/user/" + params.row.id}>
                            <button className='editUser'>Edit</button>
                        </Link>
                        <DeleteOutline className='deleteUser' onClick={() => handleDelete(params.row.id)} />
                    </>
                );
            } 
        },
    ];

    

 

  return (
    <div className='users' style={{ height: 590, width: '100%' }}>
        <DataGrid 
            rows={data}
            columns={columns}
            pageSize={9}
            rowsPerPageOptions={[9]}
            checkboxSelection
            disableSelectionOnClick
        />
    </div>
  )
}

export default Users