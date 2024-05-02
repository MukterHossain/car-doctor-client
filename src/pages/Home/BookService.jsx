import { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";


const BookService = () => {
    const service = useLoaderData()
    const {title, _id, price,img} = service;
    const {user} = useContext(AuthContext)

    const handleBookService = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const date = form.date.value;
        const email = user?.email;
        const booking = {
            customerName :name,
            email,
            date,
            img,
            service: title,
            service_id: _id,
            price: price
        }
        console.log(booking);
        fetch('http://localhost:5000/bookings', {
            method:'POST',
            headers:{
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.insertedId){
                alert('service book successfully')
            }
        })
    }



    return (
        <div>
            <h2 className="text-3xl text-center">Book service: {title}</h2>

            <div className="mx-24">
                <form onSubmit={handleBookService} className="card-body">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text"> Name</span>
                            </label>
                            <input type="text" name="name" placeholder=" Name" className="input input-bordered" defaultValue={user?.displayName} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Date</span>
                            </label>
                            <input type="date" name="date" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="Email" className="input input-bordered" defaultValue={user?.email} />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Due amount</span>
                            </label>
                            <input type="text" className="input input-bordered" defaultValue={'$'+ price} />
                        </div>
                    </div>
                    <div className="form-control mt-6">
                        <input className="btn btn-primary btn-block" type="submit" value="Order Confirm" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookService;