import React from "react";

export const MainContainer = ({ children }) => {
    return (
    <div className="container mx-auto px-8 py-10 bg-rem-bg overflow-y-auto shadow-2xl min-h-[100dvh]">
      { children }
    </div>
    )
}