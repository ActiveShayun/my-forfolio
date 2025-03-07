import { useContext, useRef, useState } from 'react';
import { dataProvider } from '../../../Provider/DataProvider';
import ProjectDetails from './ProjectDetails';


const Developments = ({ p }) => {
    const { details } = useContext(dataProvider)
    console.log('ddd', details);
    const [projectDetails, setProjectDetails] = useState([])
    console.log(p);
    const modalRef = useRef(null)
    console.log('mmm', modalRef);

    const handleShowDetails = (category) => {
        console.log(category);
        const singleData = details.filter(d => d.category === category)
        console.log('satisfies', singleData);
        setProjectDetails(singleData)
    }

    return (
        <div >
            <div data-aos="zoom-in" className="w-full max-w-sm mx-auto shadow-xl rounded-2xl overflow-hidden">
                <img
                    src={p.demo}
                    alt="Project Name"
                    className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                    <h3 className="text-xl font-semibold mb-2">{p.category}</h3>

                    <button className="btn"
                        onClick={() => {
                            handleShowDetails(p.category);
                            modalRef.current.showModal()
                        }}>
                        View More / Details
                    </button>

                </div>
            </div>
            <dialog ref={modalRef} id="my_modal_3" className="modal">
                <div className="modal-box">
                    {
                        projectDetails.map(d =>
                            <ProjectDetails key={d.category} d={d} />)
                    }
                    <form method="dialog">
                        {/* if there is a button in form, it will close the modal */}
                        <button className="btn btn-sm btn-circle btn-ghost absolute left-2 bottom-2">✕</button>
                    </form>

                </div>
            </dialog>
        </div >
    );
};

export default Developments;