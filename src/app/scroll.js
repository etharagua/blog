'use client'

import { FaCaretSquareUp } from "react-icons/fa";
import ScrollToTop from "react-scroll-up";

function Scroll() {
    return (
        <ScrollToTop
            showUnder={160}
            style={{ bottom: "2rem", right: "2rem" }}
        >
            <span title="Ir arriba">
                <FaCaretSquareUp className="text-4xl" 
            />
            </span>
        </ScrollToTop>
    )
}

export default Scroll;