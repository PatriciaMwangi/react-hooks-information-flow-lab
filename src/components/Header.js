

export default function Header({onDarkModeClick,isDarkMode}){
  
   
    return (
        <div className={"App " + (isDarkMode ? "dark" : "light")}>

        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"} Mode
        </button>
        </div>
    )
}