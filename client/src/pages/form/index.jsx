import React from 'react';
import List from './List'
import axios from '../../util/axios'
import CreateForm from './createForm';
import UpdateForm from './UpdateForm';
import { useRouter } from 'next/router';
import { Context } from '../../store/Context'



const Form = () => {
    const [forms, setForms] = React.useState([])
    const [isOpen, setIsOpen] = React.useState(false)
    const [editObj, setEditObj] = React.useState({})

    const [user] = React.useContext(Context)

    const router = useRouter()


    React.useEffect(() => {
        if (Object.keys(user).length === 0) {
            router.push('/login')
        }
        getData()
    }, [])


    async function getData() {
        try {
            const { data } = await axios.get('forms')
            if (data.data.length !== 0) {
                setForms(data.data)
            }
        } catch (err) {
            console.log('err', err)
        }
    }


    function addHandler() {
        if (Object.keys(user).length === 0) {
            router.push('/login')
        }
        setIsOpen(!isOpen)
    }

    function editHandler(item) {
        if (Object.keys(user).length === 0) {
            router.push('/login')
        }
        setEditObj(item)
    }



    return (
        <>
            {Object.keys(editObj).length === 0 && !isOpen && <List
                forms={forms}
                addHandler={addHandler}
                editHandler={editHandler}
            />}

            {Object.keys(editObj).length !== 0 && <UpdateForm
                data={editObj}
                closeHandler={() => setEditObj({})}
                successHandler={() => {
                    setEditObj({});
                    getData();
                }}
            />}

            {isOpen && <CreateForm
                closeHandler={() => setIsOpen(!isOpen)}
                successHandler={() => {
                    setIsOpen(false);
                    getData();
                }}
            />}



        </>
    )
}
export default Form