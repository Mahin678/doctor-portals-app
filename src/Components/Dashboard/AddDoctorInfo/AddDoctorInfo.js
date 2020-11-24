import React, { useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const AddDoctorInfo = () => {
    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);
    const handleBlur = e => {
        // const newInfo = { ...info };
        // newInfo[e.target.name] = e.target.value;
        // setInfo(newInfo);
        const newInfo = { ...info }
        newInfo[e.target.name] = e.target.value;
        setInfo(newInfo);
    }

    const handleFileChange = (e) => {
        // const newFile = e.target.files[0];
        // setFile(newFile);
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const handleSubmit = (e) => {
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('email', info.email)

        fetch('http://localhost:5000/addDoctors', {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(data => {
                console.log(data)
            })
            .catch(error => {
                console.error(error)
            })
        // const formData = new FormData()
        // console.log(info);
        // formData.append('file', file);
        // formData.append('name', info.name);
        // formData.append('email', info.email);

        // fetch('https://salty-plateau-71286.herokuapp.com/addADoctor', {
        //     method: 'POST',
        //     body: formData
        // })
        //     .then(response => response.json())
        //     .then(data => {
        //         console.log(data)
        //     })
        //     .catch(error => {
        //         console.error(error)
        //     })
        e.preventDefault()
    }

    return (
        <section className="container-fluid row">
            <Sidebar />
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#F4FDFB" }}>
                <h5 className="text-brand">Add a Doctor</h5>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <label for="exampleInputEmail1">Email address</label>
                        <input onBlur={handleBlur} name="email" type="email" className="form-control" aria-describedby="emailHelp" placeholder="Enter email" />

                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Name</label>
                        <input name="name" onBlur={handleBlur} type="name" className="form-control" placeholder="Name" />
                    </div>
                    <div className="form-group">
                        <label for="exampleInputPassword1">Upload A IMAGE</label>
                        <input name="file" onChange={handleFileChange} type="file" className="form-control" placeholder="File" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </section>
    );
};

export default AddDoctorInfo;