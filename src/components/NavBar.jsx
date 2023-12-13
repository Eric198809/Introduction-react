
const NavBar = ({PrevClick, NextClick}) => {
    return (
        <div>
            <button onClick={PrevClick}>Precedent</button>
            <button onClick={NextClick}>Suivant</button>
        </div>
    );
};

export default NavBar;
