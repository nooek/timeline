import { useEffect, useRef, useState } from "react";
import axios from "axios"
import { Container } from "./styles";
import DaysGen from "./DaysGen/DaysGen";
import { useUserData } from "../../store/userContext";

const Days = ({ setMemoryForm, setShowMemories, date, setDate, setMemories, memories }) => {
  const [daysInMonth, setDaysInMonth] = useState(0)
  const [mouse, setMouse] = useState({
    down: false,
    onDiv: false
  });
  const { user } = useUserData()
  const daysContainerRef = useRef();

  useEffect(() => {
    setDaysInMonth(new Date(date.year, date.month, 0).getDate())
    console.log("CHAMADO")
    if (user.email) {
      axios.get("http://localhost:8080/memory/date", {
        params: {
          email: user.email,
          month: date.month,
          year: date.year
        }
      }).then(res => {
        console.log(res.data)
        setMemories(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }, [date, setMemories, user])

  const move = (e) => {
    e.preventDefault();
    if (!mouse.down) return;
    daysContainerRef.current.scrollLeft -= e.movementX;
  };

  return (
    <Container
      ref={daysContainerRef}
      onMouseEnter={() => setMouse({ ...mouse, onDiv: true })}
      onMouseLeave={() => setMouse({ down: false, onDiv: false })}
      onMouseDown={(e) => setMouse({ down: true })}
      onMouseUp={() => setMouse({ down: false })}
      onMouseMove={(e) => move(e)}
    >
      <DaysGen setMemoryForm={setMemoryForm} setShowMemories={setShowMemories} date={date} setDate={setDate} memories={memories} daysInMonth={daysInMonth} />
    </Container>
  );
};

export default Days;
