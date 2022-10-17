
export const Footer = () => {
    const date = new Date().getFullYear()
    return(
        <footer>
            <div className="footer-wrapper">
                <p>Copyright {date}</p>
            </div>
        </footer>
    )
}