import "./Button.css"



function Button({children, onClick}) {
    return <button
            type="button"
            className="btn btn-primary mioButton"
            onClick={onClick}>
            {children}
        </button>
}

// <Button> sono il children </Button>

export default Button