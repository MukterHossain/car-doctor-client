import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";


const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className="mt-10">
            <div className="text-center">
                <h2 className="text-3xl  font-bold text-orange-500">Our Services</h2>
                <h2 className="text-5xl  font-bold text-orange-500">Our Service Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which dont look even slightly believable. </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }

            </div>
            <div className="text-center py-6">
                <button className="btn btn-outline btn-secondary">More Services</button>
            </div>

        </div>
    );
};

export default Services;