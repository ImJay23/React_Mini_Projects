import { useState } from 'react'

function ColorButton({ btnColor = 'black', btnClick, selectedBg, btnText }) {
  const colorStyles = {
    red: { bg: "bg-red-500", ringColor: "ring-red-400" },
    green: { bg: "bg-green-500", ringColor: "ring-green-400" },
    orange: { bg: "bg-orange-500", ringColor: "ring-orange-400" },
    yellow: { bg: "bg-yellow-500", ringColor: "ring-yellow-400" },
    pink: { bg: "bg-pink-500", ringColor: "ring-pink-400" },
    black: { bg: "bg-black", ringColor: "ring-black" },
    blue: { bg: "bg-blue-500", ringColor: "ring-blue-400" },
    gray: { bg: "bg-gray-500", ringColor: "ring-gray-400" },
  };

  const { bg, ringColor } = colorStyles[btnColor] || colorStyles.gray;
  const isSelected = bg === selectedBg;

  return (
    <button
      type="button"
      className={`px-4 py-1 border-0 text-white rounded-full transition duration-200 ease-in-out
        ${bg}
        ${isSelected ? `ring-2 ring-offset-2 scale-105 ${ringColor} ring-offset-white` : ""}
      `}
      onClick={() => btnClick(bg)}
    >
      {btnText}
    </button>
  );
}

const BackgroundChanger=() =>{
    const colors = ['red', 'green', 'orange', 'yellow', 'pink', 'black', 'blue']

    const [bgColor, setBgColor] = useState('bg-red-400')

    const btnClick = (bg_color) => {
        setBgColor(bg_color)
    }

    return (
<div className={`page-contaier justify-end ${bgColor}`}>
  <div className="inline-flex w-full justify-start md:justify-center overflow-x-auto gap-3 p-3 bg-white/80 rounded-t-md">
    {colors.map((color, idx) => (
        <ColorButton key={idx} btnText={color} btnColor={color} btnClick={btnClick} selectedBg={bgColor}/>
    ))}
  </div>
</div>


    )
}

export default BackgroundChanger;
