import React, { useEffect } from "react";
import Instructions from "./Instructions";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import "../SignUpPage/SignUp.css";

const FigureViewer = () => {
    const { protoclusterName } = useParams();
    console.log(protoclusterName);
    const [searcParams] = useSearchParams();
    const navigate = useNavigate();

    const isLAB = searcParams.get("lab") === "true";

    useEffect(() => {
        if (window.x3dom?.reload) {
            window.x3dom.reload();
        }
    }, [isLAB]);

    // Next thing to do is add blobs
    // Make a selection checkbox and then go into vedo and make the new LABs, I will just append or remove "-LAB" to the protoclusterName 
    // then call this again, with the selection checkbox True if "LAB"

    const handleToggle = (e) => {
        const checked = e.target.checked;

        const newParam = checked ? "?lab=true" : "";

        navigate(`/protoclusters/${protoclusterName}${newParam}`);
    };

    return (
        <>
        <div className="container py-4">
            <div className="row justify-content-center">
                {/* Figure Section */}
                <div className="col-lg-8 col-md-9 col-sm-12">
                    <div
                        className="mt-4"
                        style={{ position: "relative", width: "100%", height: "600px" }}
                        dangerouslySetInnerHTML={{
                            __html: `
                            <x3d width="100%" height="600px">
                                <scene>
                                <inline url="${process.env.PUBLIC_URL}/${protoclusterName}${isLAB ? "-LAB" : ""}.x3d"></inline>
                                </scene>
                            </x3d>
                            `,
                        }}
                        />

                    <div className="d-flex justify-content-center mt-2 mb-1">
                        <div className="form-check" style={{ marginBottom: "0px"}}>
                            <input className="form-check-input" type="checkbox" id="labCheckbox" 
                                   checked={isLAB} onChange={handleToggle} style={{ marginRight: "6px"}}/>
                            <label className="form-check-label" htmlFor="labCheckbox">
                                Show LAB
                            </label>
                        </div>
                    </div>
                                        
                    <h5 className="text-center mb-4 mt-4">Nothing shows up above this line?</h5>
                    <p className="small">1. Try refreshing the page.</p>
                    <p className="small">
                        2. Enable your browser to load local files:
                        <br />
                        <strong>Firefox</strong>: type <code>about:config</code> in the URL bar and
                        change <code>privacy.file_unique_origin</code> from <code>True</code> to <code>False</code>
                        <br />
                        <strong>Chrome</strong>: from terminal type:
                        <code>google-chrome --enable-webgl --allow-file-access-from-files</code>
                        (see{" "}
                        <a href="https://cmatskas.com/interacting-with-local-data-files-using-chrome/">
                        here
                        </a>)
                    </p>
                </div>

                {/* Instructions Section */}
                <div className="col-lg-4 col-md-3 col-sm-12 mt-md-0">
                    <Instructions />
                </div>
            </div>
        </div>
        </>
    );
}

export default FigureViewer;