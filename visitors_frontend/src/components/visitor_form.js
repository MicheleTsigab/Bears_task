import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { FormGroup, Button,FormLabel } from "react-bootstrap";

const VisitorForm = (props) => {
const validationSchema = Yup.object().shape({
	firstname: Yup.string(),
	lastname: Yup.string(),
});

return (
	<div className="form-wrapper">
	<Formik {...props} validationSchema={validationSchema}>
		<Form className="row m-4">
		<FormGroup className="col-6">
			<FormLabel htmlFor="firstname" className="col-6">First Name:</FormLabel>
			<Field name="firstname" type="text"
				className="form-control col-6" />
			<ErrorMessage
			name="firstname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
        <FormGroup className="col-6">
		<FormLabel htmlFor="lastname" className="col-6">Last Name:</FormLabel>
			<Field name="lastname" type="text"
				className="form-control col-6" />
			<ErrorMessage
			name="lastname"
			className="d-block invalid-feedback"
			component="span"
			/>
		</FormGroup>
		
		<Button className="col-auto" variant="primary" size="lg"
			block="block" type="submit">
			{props.children}
		</Button>
		</Form>
	</Formik>
	</div>
);
};

export default VisitorForm;
