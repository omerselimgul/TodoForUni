import Navbar from "../Components/Navbar/Navbar"
import SideBar from "../Components/SideBar/SideBar"

const MainLayout=({children})=>{
    return(
        <div>
        <Navbar/>

        <SideBar/>
            <div className="MainlayoutContainer">
                {children}
            </div>

        </div>

    )
}
export default MainLayout