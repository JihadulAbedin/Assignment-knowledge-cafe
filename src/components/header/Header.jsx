
import "./header.css"

const Header = () => {
    const userImage = "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    return (
        <>
            <div className="logo">
                <h1>Knowladge Cafe</h1>
            </div>
            <div className="userImage">
                <img src={userImage} alt="" />
            </div>
        </>
    );
};

export default Header;