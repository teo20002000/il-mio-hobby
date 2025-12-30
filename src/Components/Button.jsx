import "./Button.css"
function Button({children, callback}) {
    return <button  className="mioButton" onClick={callback}>
            {children}
        </button>
}

export default Button