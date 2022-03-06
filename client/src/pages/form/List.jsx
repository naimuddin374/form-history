import React from 'react';
import { Table, Button } from "reactstrap";
import { dateTime } from '../../util/helper'



const List = ({ forms, addHandler, editHandler }) => {



    return (
        <>
            <div className='d-flex justify-content-between mt-2'>
                <Button size='sm' onClick={() => addHandler()}>Add new</Button>
            </div>

            <Table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Location</th>
                        <th>Description</th>
                        <th>Latitude</th>
                        <th>Longitude</th>
                        <th>Created At</th>
                        <th>Created By</th>
                        <th>Updated By</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {forms.length !== 0 && forms.map((item, i) =>
                        <tr key={item._id}>
                            <th scope="row">{++i}</th>
                            <td>{item.name}</td>
                            <td>{item.location}</td>
                            <td>{item.description}</td>
                            <td>{item.lat}</td>
                            <td>{item.lon}</td>
                            <td>{dateTime(item.createdAt)}</td>
                            <td>{item.createdBy?.name}</td>
                            <td>{item.updatedBy?.name}</td>
                            <td>
                                <Button
                                    onClick={() => editHandler(item)}
                                >Edit</Button>
                            </td>
                        </tr>)}
                </tbody>
            </Table>
        </>
    )
}
export default List;