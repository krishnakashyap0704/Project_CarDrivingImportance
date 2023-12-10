import { Button, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginProfile } from "../Services/RegistrationApi";

export function LicenceDetails(){
    const [formData,setFormData]=useState({name:"",vehicleNumber:""});
    const [loginError,setLoginError]=useState(false);
    const [isSubmitted,setIsSubmitted]=useState(false);

    const handleChange=(e)=>{
        setFormData({...formData,[e.target.name]:e.target.value});
    }
    const handleSubmit=async(e)=>{
        e.preventDefault();
        try {
          const result= await Details(formData, params.vehicleNumber);
          console.log(result);
        } catch (error) {
            console.log(error);
            setLoginError(true);
        }
    }

    const populateStudentState=async()=>{
        try {
            const result=await fetchStudentByRoll(params.roll);
            setFormData(result.student);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(()=>{
        populateStudentState();
    },[]);

    return (
        <Container className="d-flex align-items-center justify-content-center" style={{ height: '56vh' }}>
            <Form onSubmit={handleSubmit} style={{ width: '300px' }}>
                <h2 className="mb-3">Login</h2>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name" placeholder="Enter your Full Name" onChange={handleChange}/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Vechile Number</Form.Label>
                    <Form.Control type="text" name="vechileNumber" placeholder="Enter your Vechile Number" onChange={handleChange}/>
                </Form.Group><br/>

                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
        </Container>
    );
}