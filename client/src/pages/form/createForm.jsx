import React from 'react';
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import axios from '../../util/axios'


const CreateForm = ({ closeHandler, successHandler }) => {
    const [name, setName] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [lat, setLat] = React.useState()
    const [lon, setLon] = React.useState()


    async function submitHandler(e) {
        e.preventDefault()

        try {
            await axios.post('forms', { name, location, description, lat, lon })
            successHandler()
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            {/* <div className='d-flex justify-content-between mt-2'>
                <h3>Add new Form</h3>
            </div> */}

            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Button type='submit me-3'>Save</Button>
                    <Button type='reset' onClick={() => closeHandler()}>Cancel</Button>
                </FormGroup>

                <FormGroup>
                    <Label for="name">
                        Name
                    </Label>
                    <Input
                        id="name"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Type here.."
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="location">
                        Jurisdiction/City/Region
                    </Label>
                    <Input
                        id="location"
                        type="text"
                        value={location}
                        onChange={(e) => setLocation(e.target.value)}
                        placeholder="Type here.."
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="description">
                        Site Description
                    </Label>
                    <Input
                        id="description"
                        type="textarea"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Type here.."
                        required
                    />
                </FormGroup>


                <FormGroup>
                    <Label for="lat">
                        latitude
                    </Label>
                    <Input
                        id="lat"
                        type="number"
                        value={lat}
                        onChange={(e) => setLat(e.target.value)}
                        placeholder="Type here.."
                        required
                    />
                </FormGroup>

                <FormGroup>
                    <Label for="lon">
                        longitude
                    </Label>
                    <Input
                        id="lon"
                        type="number"
                        value={lon}
                        onChange={(e) => setLon(e.target.value)}
                        placeholder="Type here.."
                        required
                    />
                </FormGroup>
            </Form>
        </>
    )
}
export default CreateForm;