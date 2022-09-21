
import React, { useState, useEffect } from "react";
import {useParams } from 'react-router-dom';
import axios from "axios";
import VisitorForm from "./visitor_form.js";
import URL from "./url.js";
const UpdateVisitor = () => {
const [formValues, setFormValues] = useState({
	firstname: "",
	lastname: "",
});
const { id } = useParams();


const onSubmit = (visitorObject) => {
	axios
	.patch(
		`${URL}/visitors/${id}`,
		visitorObject
	)
	.then((res) => {
		if (res.status === 200) {
		alert("Visitor's Attributes successfully updated");
		
		} else Promise.reject();
	})
	.catch((err) => alert("Something went wrong"));
};


useEffect(() => {
	axios
	.get(
		`${URL}/visitors/${id}`
	)
	.then((res) => {
		const { firstname, lastname } = res.data;
		setFormValues({ firstname, lastname });
	})
	.catch((err) => console.log(err));
}, []);


return (
	<VisitorForm initialValues={formValues} onSubmit={onSubmit} enableReinitialize>
	Update Visitor
	</VisitorForm>
);
};

export default UpdateVisitor;
