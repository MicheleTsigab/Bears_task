
import React, { useState} from "react";
import axios from 'axios';
import VisitorForm from "./visitor_form.js";
import URL from "./url.js";

const CreateVisitor = () => {
const [formValues] =
	useState({ firstname: '', lastname: '' })
const onSubmit = visitorObject => {
	axios.post(
`${URL}/visitors`,
	visitorObject)
	.then(res => {
		if (res.status === 200)
		alert('Visitor successfully created')
		else
		Promise.reject()
	})
	.catch(err => alert('Something went wrong'))
}
	

return(
	<VisitorForm initialValues={formValues}
	onSubmit={onSubmit}
	enableReinitialize>
	Create Visitor
	</VisitorForm>
)
}

export default CreateVisitor
