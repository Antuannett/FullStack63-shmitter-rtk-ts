import Sidebar from "./Sidebar.tsx";
import Content from "./Content.tsx";

const Body = () => {
    return (
        <div className={'body'}>
            <Sidebar/>
            <Content/>
        </div>
    )
}

export default Body;