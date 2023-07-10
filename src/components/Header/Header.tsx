import classes from './Header.module.css';
import banner1920 from './Green1920Banner.png'
import banner1080 from './Green1080Banner.png'

const Header = (props: { orientation: "landscape" | "portrait" }) => {
    if (props.orientation === "landscape") {
        return (
            <header className={classes.header}>
                <img src={banner1920} alt="banner1920" />
            </header>
        )
    } else {
        return (
            <header className={classes.header}>
                <img src={banner1080} alt="banner1080" />
            </header>
        )
    }
};

export default Header;