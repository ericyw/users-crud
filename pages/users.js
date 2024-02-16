import React, { useState, useEffect } from "react";
import EditableTable from "./EditableTable";
import axios from "axios";

const Users = () => {
    const columns = [
        {
            Header: "User ID",
            accessor: "id",
        },
        {
            Header: "User Name",
            accessor: "userName",
            editEnable: true,
        },
        {
            Header: "phone Number",
            accessor: "phoneNumber",
            editEnable: true
        },
        {
            Header: "Email",
            accessor: "email",
            editEnable: true,
        },
        {
            Header: "Gender",
            accessor: "gender",
            editEnable: true
        },
        {
            Header: "Status",
            accessor: "status",
            editEnable: true
        },
        {
            Header: "Type",
            accessor: "type",
            editEnable: true
        }, 
        {
            Header: "Description",
            accessor: "desc",
            editEnable: true
        },
        {
        Header: "Action",
        id: "action",
        disableSortBy: true,
        Cell: ({ row, column, cell }) =>
            row.original.isEditing ? (
            <>
                <button onClick={() => handleButtonClick("save", row.original)}>
                Save
                </button>
                <button onClick={() => handleButtonClick("cancel", row.original)}>
                Cancel
                </button>
            </>
            ) : (
            <button onClick={() => handleButtonClick("edit", row.original)}>
                Edit
            </button>
            ),
        },
        {
            Header: "Delete",
            id: "delete",
            disableSortBy: true,
            Cell: ({ row, column, cell }) =>
                    <button onClick={() => handleButtonClick("delete", row.original)}>
                        Delete
                    </button>
        }
    ];

    const [data, setData] = useState([]); 
    const[req, setReq] = useState([]);

    useEffect(() => {
        getUserData(req);
        console.log("Data updated:", data);
    }, [req], [data]);


    async function getUserData(req) {
        await axios('http://localhost:3000/api/crud')
        .then(response => {
            // 更新组件状态
            setData(response.data);
          })
        
    }

    function updateUser(req) {
        axios({
            method: 'PUT',
            url: 'http://localhost:3000/api/crud',
            data: req
        });        
    }

    function deleteUser(req) {
        axios({
            method: 'delete',
            url: 'http://localhost:3000/api/crud',
            data: req
        })
        refreshPage();
    }

    function refreshPage() {
        window.location.reload(true);
      }

    function filterDeletedData(prevData, rowData) {
        
        const filteredRowData = prevData.filter(data => data.id !== rowData.id);
        return filteredRowData;
    }

    const handleButtonClick = (action, row) => {

        const newData = data.map((rowData) => {


        if (rowData.id === row.id) {
            if (action === "edit") {
                return { ...rowData, isEditing: true, prevData: { ...rowData } };
            
            } else if (action === "cancel") {
                return { ...rowData, isEditing: false, ...rowData.prevData };
            
            } else if (action === "save") {
                
                const { prevData, ...updatedRowData } = rowData;

                updateUser(rowData);
                return { ...updatedRowData, isEditing: false };
            
            } else if (action === "delete") {

                const { prevData, ...updatedRowData } = rowData;
                // const filteredRowData = filterDeletedData(data, rowData);
                
                deleteUser(rowData);
                
                // return { ...filteredRowData, isEditing: false };
            }
        }        

        console.log("row data : " + JSON.stringify(rowData));
        
        return rowData;
        });
        
        setData(newData);
    };

    return (
        <div className="App">
        <EditableTable
            columns={columns}
            data={data}
            setData={setData}
            handleButtonClick={handleButtonClick}
        />

        {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
        </div>
    );
};



export default Users;
