import { useState } from 'react'

function ColorButton({ btnColor = 'black', btnClick, ...props }) {
    const colorClasses = {
        red: "bg-red-500",
        green: "bg-green-500",
        orange: "bg-orange-500",
        yellow: "bg-yellow-500",
        pink: "bg-pink-500",
        black: "bg-black",
        blue: "bg-blue-500",
        
    }

    const ringColor = `ring-${btnColor}-100`


    return (
        <button
            type='button'
            className={`px-4 py-1 border-0 text-white rounded-full ${colorClasses[btnColor] || "bg-gray-500"} ${colorClasses[btnColor] === props.selectedBg ? `ring-2 ring-offset-2 scale-105 ring-${btnColor}-400` : ""}`}
            onClick={() => { btnClick(colorClasses[btnColor] || 'bg-white'); }}
        >
            {props.btnText}
        </button>)
}

function BackgroundChanger() {
    const colors = ['red', 'green', 'orange', 'yellow', 'pink', 'black', 'blue']

    const [bgColor, setBgColor] = useState('bg-white')

    const btnClick = (bg_color) => {
        setBgColor(bg_color)
    }

    const bgColorClass = `bg-${bgColor}-500`

    return (
        <>
            <div className={`h-[100vh] w-[100vw] flex flex-col ${bgColor}`}>
                <div className={`flex flex-wrap justify-center mt-auto gap-3 p-2 rounded-xl bg-white`}>
                    {colors.map((color, idx) => (
                        <ColorButton key={idx} btnText={color} btnColor={color} btnClick={btnClick} selectedBg={bgColor}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export default BackgroundChanger;
