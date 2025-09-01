import { MonitorCog, Moon, Sun } from "lucide-react";
import { useState, useEffect } from "react";

const DarkMode = () => {
  const [theme, setTheme] = useState("light");

  // Apply theme to <html> and save in localStorage
  const applyTheme = (newTheme) => {
    const root = document.documentElement;
    root.classList.remove("light", "dark");

    if (newTheme === "auto") {
      const systemDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      root.classList.add(systemDark ? "dark" : "light");
    } else {
      root.classList.add(newTheme);
    }

    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  // On mount → read theme from localStorage or default to "light"
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light"; // 👈 default = light
    applyTheme(savedTheme);

    // Listen for system theme changes if "auto" is set
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = () => {
      if (savedTheme === "auto") {
        applyTheme("auto");
      }
    };
    mediaQuery.addEventListener("change", handleChange);

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const modeBtn = [{icon:Sun, value:"light"}, {icon:Moon, value:"dark"}, {icon:MonitorCog, value:"auto"}]

  return (
    <div className="flex items-center rounded-full border-gray-100 border-2 px-2 py-1 gap-1"> 
        {modeBtn?.map((item, idx)=>(
            <button type='button' key={idx} className={`text-black dark:text-white border-2 bg-transparent hover:border-gray-100 ${theme === item.value ?"border-gray-100":" border-transparent"} rounded-full p-0.5`} onClick={()=>applyTheme(item.value)}>
                {<item.icon className="h-4"/>}
            </button>
        ))}
    </div>
  );
};

export default DarkMode;