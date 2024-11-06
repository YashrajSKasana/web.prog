import Services from '../comp/Services';
import "./SerPage.css"

function SerPage() {
    return (
        <div className="SerPageBody">
            <div className="serHeder">
                <div className="HadingContainer" >
                    <h1>Services</h1>
                    <div className="under-line"></div>
                </div>
                <img src="/images/man-architect-engineer-showing-drawing-building-vector-24560172.jpg" alt="serHederImg" className="serHederImg" />

            </div>
            <Services HadingOff={true} />
        </div>
    )
};

export default SerPage;