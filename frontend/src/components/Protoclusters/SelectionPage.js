import Navbar from '../Navbar.jsx';
import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import "../SignUpPage/SignUp.css";

// {!authenticatedUser ? (<h1>Please login to view this page.</h1>) :
//(<ReconstructionsTable authenticatedUser={authenticatedUser}/>)

// First going to have the image of what structures are here
// Then going to have a note that those in red are still to come
// Then going to have a selection menu that lets you choose a field and redshift
// Then going to have a selection menu that lets you choose a structure
// Then there is going to be a button that says 'view' so that you can see it

// This view button will move to another page that will show a basic reconstruction 
// (basically the same as my viewer from before)
// then i will have selection options that will allow the user to show LABs if wanted

const SelectionPage = () => {
    const navigate = useNavigate();

    // Using object literal notation
    let dictionary = {};
    dictionary["COSMOS/N419"] = [];
    dictionary["COSMOS/N501"] = ["COSMOS-z3.1-A", "COSMOS-z3.1-C"];
    dictionary["XMM-LSS/N419"] = [];
    dictionary["XMM-LSS/N501"] = [];
    console.log(dictionary);

    const [field, setField] = useState("");
    const [structure, setStructure] = useState("");
    // how to make a dict thing with values

    // Need to have 
    const handleFieldChange = (event) => {
        setField(event.target.value);
    };

    const handleStructureChange = (event) => {
        setStructure(event.target.value);
    };

    const handleSubmit = async (e) => {
        navigate(`/protoclusters/${structure}`);
        return;
    }

    return (
        <>
            <Navbar/>
            <div className="mt-4" style={{ position: "relative", width: "100%", height: "100%" }}>
            <img
                width="933.66"
                height="744.1"
                loading="lazy"
                sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
                src={`${process.env.PUBLIC_URL}/cosmos_xmm_3d_structures_all.png`}
                alt="GXX" />
            </div>
            <div className="mt-1">
                <p>Protocluster candidates in the COSMOS and XMM-LSS fields.<br/>
                <span style={{ color: 'orange'}}>Orange:</span> structures from Ramakrishnan et al. (2025b).<br/>
                <span style={{ color: 'red'}}>Red:</span> structures from Ortiz et al. (in prep).
                <span style={{ color: 'red'}}> *To be added</span></p>
            </div>
            <div className="mt-6">
                <h4>Select a protocluster to view:</h4>
            </div>
            <div className="mt-2 d-flex justify-content-center align-items-center" style={{ gap: "2rem" }}>
                <div>
                    <div style={{ marginBottom: "0.5rem", fontWeight: "bold" }}>Field</div>
                    <select id="field" value={field} onChange={handleFieldChange} style={{ minWidth: "200px", height: "30px", padding: "4px" }}>
                        <option value="">None</option>
                        {Object.keys(dictionary).map((key) => (
                            <option key={key} value={key}>
                                {key}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <div style={{ marginBottom: "0.5rem", fontWeight: "bold"}}>Protocluster</div>
                    <select id="structure" value={structure} onChange={handleStructureChange} style={{ minWidth: "200px", height: "30px", padding: "4px" }}>
                        <option value="">None</option>
                        {(dictionary[field] || []).map((value) => (
                            <option key={value} value={value}>
                                {value}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="mt-3 form-group-button">
                <button className="btn btn-primary" style={{width: "100px"}} onClick={handleSubmit}
                    >View
                </button>
            </div>
        </>
    );
};

export default SelectionPage;