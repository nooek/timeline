import { useEffect, useLayoutEffect, useState } from "react";
import Days from "../../components/DateSlider/index.jsx";
import { Container, DateSliderContainer } from "./styles";
import MemoryForm from "../../components/MemoryForm/index.jsx";
import CurrentDate from "../../components/CurrentDate/index.jsx";
import MemoriesList from "../../components/MemoriesList/MemoriesList.jsx";
import Navbar from "../../components/Navbar/Navbar.jsx";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../store/userContext.js";

const Home = () => {
    const d = new Date();
    const [memories, setMemories] = useState({})
    const [date, setDate] = useState({
        month: d.getMonth() + 1,
        year: d.getFullYear(),
        day: d.getDate(),
        choosenDay: 1
    })
    const [memoryForm, setMemoryForm] = useState(false)
    const [showMemories, setShowMemories] = useState(false)
    const cookies = useCookies()
    const navigate = useNavigate()
    const { setUser } = useUserData()

    useEffect(() => {
        console.log(cookies[0])
        if (!cookies[0].user) {
            navigate("/login")
        }
    }, [cookies, navigate])

    useLayoutEffect(() => {
        if (cookies[0].user) {
            setUser(cookies[0].user)
        }
    }, [cookies, navigate, setUser])

    console.log(memories)

    if (cookies[0].user) {
        return (
            <Container>
                <Navbar />
                <DateSliderContainer>
                    <CurrentDate date={date} setDate={setDate} />
                    <Days setShowMemories={setShowMemories} setMemoryForm={setMemoryForm} date={date} setDate={setDate} setMemories={setMemories} memories={memories} />
                    {
                        memoryForm ? <MemoryForm setMemoryForm={setMemoryForm} date={date} memories={memories} setMemories={setMemories} /> : null
                    }
                </DateSliderContainer>
                { showMemories ? <MemoriesList date={date.choosenDay} memo={memories} setShowMemories={setShowMemories} /> : null }
            </Container>
        )
    }
}

export default Home;
