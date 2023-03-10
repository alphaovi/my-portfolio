import React, { useContext } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';

const Contact = () => {

    const { user } = useContext(AuthContext);

    const handleContact = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = `${form.firstName.value} ${form.lastName.value}`;
        const email = user?.email || "unregisterd";
        const message = form.message.value;

        const contractors = {
            contractorName: name,
            email,
            message

        }

        fetch("http://localhost:5000/contacts", {
            method: 'POST',
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(contractors)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.acknowledged){
                alert("You Just Successfully send your message")
                form.reset();
            }
        })
        .catch(err => console.log(err))

    }

    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleContact}>
                        <div className="card-body">

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input name="firstName" type="text" placeholder="First Name" className="input input-bordered"  />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input name="lastName" type="text" placeholder="Last Name" className="input input-bordered"  />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input name="email" type="text" placeholder="Email" defaultValue={user?.email} className="input input-bordered" disabled />
                            </div>

                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Your Message</span>
                                </label>
                                <textarea name="message" placeholder="Message" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn">Submit</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;