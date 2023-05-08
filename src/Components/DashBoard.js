import Base from "../Base/Base";
import "./Add.css";

function DashBoard({ stuData, techData }) {

    return (
        <Base
            heading={"Dashboard"}
        >

            <h1><b>
                Teachers and Students porfile Management
            </b></h1>

            <div className="container" style={{marginTop:"2.5rem"}}>
                <div className="row">
                    <div className="col-6">
                        <div className="card">
                            <h1 className="length">
                                {stuData.length}
                            </h1>
                            <h1 className="lengthof">
                                Students
                            </h1>
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="card">
                            <h1 className="length">
                                {techData.length}
                            </h1>
                            <h1 className="lengthof">
                                Teachers
                            </h1>
                        </div>
                    </div>
                </div>
            </div>

        </Base>
    );

}

export default DashBoard