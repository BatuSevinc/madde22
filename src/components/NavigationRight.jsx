import searchBarEmoji from "../assets/Union.png";

const NavigationRight = () => {

  return (
    <div className="navigationRight">
      <img src={searchBarEmoji} alt="searchBarEmoji" />
      <input className="search" id="search" type="text" name="Search" placeholder="Etkinlik Ara"
      />

    </div>
  );
};

export default NavigationRight;
