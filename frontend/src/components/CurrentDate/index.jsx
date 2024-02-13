import { Container, DateText, DateContainer, LeftArrow, RightArrow } from "./styles";
import rightArrowIcon from "../../assets/icons/arrow-right.svg"
import { useEffect, useState } from "react";

const CurrentDate = ({ date, setDate }) => {
    const [monthName, setMonthName] = useState("")

    const lessMonths = () => {
        if (date.month === 1) {
            setDate({...date, month: 12, year: date.year - 1})
        } else {
            setDate({...date, month: date.month - 1})
        }
    }

    const moreMonths = () => {
        if (date.month === 12) {
            setDate({...date, month: 1, year: date.year + 1})
        } else {
            setDate({...date, month: date.month + 1})
        }
    }

    useEffect(() => {
        const d = new Date(date.year + "-" + date.month + "-" + date.day)
        setMonthName(d.toLocaleString('en-US', { month: 'long' }))
    }, [date])

    return (
        <Container>
            <DateContainer>
                <LeftArrow src={rightArrowIcon} onClick={() => lessMonths()} />
                <DateText>{monthName}</DateText>
                <RightArrow src={rightArrowIcon} onClick={() => moreMonths()} />
            </DateContainer>
            <DateContainer>
                <LeftArrow src={rightArrowIcon} onClick={() => setDate({...date, year: date.year - 1})} />
                <DateText>{date.year}</DateText>
                <RightArrow src={rightArrowIcon} onClick={() => setDate({...date, year: date.year + 1})} />
            </DateContainer>
        </Container>
    )
}

export default CurrentDate;
