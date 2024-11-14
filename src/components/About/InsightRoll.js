import React from "react";

const InsightRoll = ({ insights }) => {
    return (
        <div className="w-full overflow-hidden bg-accent dark:bg-accentDark text-light dark:text-dark whitespace-nowrap">
            <div className="flex items-center justify-center w-full py-2 text-sm font-semibold tracking-wider capitalize sm:py-3 sm:text-base animate-roll">
                {insights.map((text) => (
                    <div>
                        {text} <span className="px-4"></span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InsightRoll;
