import {Link} from "react-router-dom";

function SideNav({user, setUser}) {

    function handleLogoutClick() {
        fetch("/logout", {method: "DELETE"}).then((r) => {
            if (r.ok) {
                setUser(null);
            }
        });   
    }

    return (
       <div id="sidenav">
          <div id="about">
                <Link 
                    to="/about" 
                    style={{ textDecoration: "none",
                             color: "white" }} 
                >
                    About
                </Link>
            </div> 
            <div id="home">
                <Link 
                    to="/" 
                    style={{ textDecoration: "none",
                             color: "white" }}
                >
                    Home
                </Link>
            </div>
            <div id="logout">
                <Link 
                    to="/" 
                    style={{ textDecoration: "none",
                             color: "white" }} 
                    onClick={handleLogoutClick}
                >
                    Logout
                </Link>
            </div> 
        </div>     
    );
}

export default SideNav;