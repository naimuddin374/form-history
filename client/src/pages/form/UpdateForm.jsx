import React from 'react';
import { Form, Button, FormGroup, Label, Input } from "reactstrap";
import axios from '../../util/axios'


const UpdateForm = ({ closeHandler, successHandler, data }) => {
    const [name, setName] = React.useState('')
    const [location, setLocation] = React.useState('')
    const [description, setDescription] = React.useState('')
    const [lat, setLat] = React.useState()
    const [lon, setLon] = React.useState()

    React.useEffect(() => {
        setName(data.name)
        setLocation(data.location)
        setDescription(data.location)
        setLat(data.lat)
        setLon(data.lon)
    }, [data])


    async function submitHandler(e) {
        e.preventDefault()

        try {
            await axios.put(`forms/${data._id}`, { name, location, description, lat, lon })
            successHandler()
        } catch (err) {
            console.log(err)
        }
    }


    return (
        <>
            <Form onSubmit={submitHandler}>
                <FormGroup>
                    <Button type='submit me-3'>Update</Button>
                    <Button
                        type='reset'
                        onClick={closeHandler}
                    >Cancel</Button>
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
                        type="text"
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
                        type="text"
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
export default UpdateForm;