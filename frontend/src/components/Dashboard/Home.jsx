import React, {useEffect} from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
    const location = useLocation();

    useEffect(() => {
        if (window.x3dom?.reload) {
            window.x3dom.reload();
        }
    }, [location]);
    
    return (
        <div>
            <section id="home">
                <div className="container my-5 py-5">
                    <div className="row d-flex align-items-center" style={{ minHeight: "600px" }}>
                        <div className="col-md-7">
                            <h3 className="fs-5">About Us</h3>
                            <h1 className="display-6">ODIN <span style={{ fontSize: "0.5em", color: "#000" }}>(One-hundred-deg^2 DECam Imaging in Narrowbands)</span></h1>
                            <hr/>
                            <p className="lead">
                            <strong>ODIN</strong> is a deep, wide-area imaging survey designed to study the large-scale
                            structure of the universe and galaxy formation at cosmic noon (z ≥ 2). Using custom narrowband 
                            filters with DECam, ODIN detects Lyman alpha emitting galaxies (LAEs) across 100 square degrees. 
                            For an overview of the survey and its science goals, see our{" "}
                            <a href="https://arxiv.org/abs/2309.10191" target="_blank" rel="noopener noreferrer"
                                style={{color: "var(--secondary-color)", textDecorationColor: "var(--secondary-color)"}}
                            >
                                overview paper
                            </a>.
                            </p>
                            <p className="lead">
                            This website provides interactive 3D visualizations of protoclusters detected in ODIN. These
                            structures are reconstructed from photometric LAEs combined  with spectroscopic redshifts
                            from the Dark Energy Spectroscopic Instrument (DESI), Keck Observatory, and the Gemini Telesopes. 
                            These models are produced using a probabilistic 3D reconstruction method described{" "}
                            <a href="https://arxiv.org/pdf/2511.11826" target="_blank" rel="noopener noreferrer"
                                style={{color: "var(--secondary-color)", textDecorationColor: "var(--secondary-color)"}}
                            >
                                here
                            </a>. Each visualization highlights the spatial distribution, extent, and morphology of high-redshift
                            protoclusters traced by LAEs.
                            </p>
                            <p className="lead">
                                To explore the reconstructions, click on the <span style={{ fontWeight: 500, fontStyle: "italic" }}>Protoclusters</span> tab above. 
                                Additional fields and protoclusters will be added as the ODIN survey continues.
                            </p>
                        </div>
                        <div className="col-md-5">
                            <div
                            className="mt-4"
                            style={{ position: "relative", width: "100%", height: "100%" }}
                            dangerouslySetInnerHTML={{
                                __html: `
                                <x3d width="100%" height="600px">
                                    <scene>
                                    <inline url="${process.env.PUBLIC_URL}/COSMOS-z3.1-A.x3d"></inline>
                                    </scene>
                                </x3d>
                                `,
                            }}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;