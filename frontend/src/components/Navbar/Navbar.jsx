import { Container, Logo, LogOutIcon, Name } from "./styles";
import logOutIcon from "../../assets/icons/logout.svg"
import { useUserData } from "../../store/userContext";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const { user } = useUserData()
    const navigate = useNavigate()
    // eslint-disable-next-line no-unused-vars
    const [cookies, setCookies, removeCookie] = useCookies()

    const logOut = () => {
        removeCookie('user')
        navigate('/login')
    }

    return (
        <Container>
            <Logo src="/logo2.svg" alt="logo" />
            <div style={{display: "flex", height: "100%", alignItems: "center"}}>
                <Name>{user.name}</Name>
                <LogOutIcon src={logOutIcon} alt="Log out" onClick={() => logOut()} />
            </div>
        </Container>
    )
}

export default Navbar;
