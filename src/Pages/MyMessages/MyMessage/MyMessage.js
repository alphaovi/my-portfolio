import React from 'react';

const MyMessage = ({ singleMessage, i }) => {
    const {contractorName, email, message} = singleMessage;
    return (
        <div className="overflow-x-auto">
            <table className="table w-full">
                {/* head */}
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Message</th>
                        <th>Read</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className="hover">
                        <th>{i + 1}</th>
                        <td>{contractorName}</td>
                        <td>{email}</td>
                        <td>{message}</td>
                        <td>X</td>
                        <td>X</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default MyMessage;