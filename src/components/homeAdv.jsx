import CardHome from "./advPage/cardHome";
const HomeAdv = () => {
  return (
    <div className="containerHomeAdv">
      <div className="homeNav">
        <div className="navIcon">
          <img src="/img/info.png" alt="info" className="infoIcon" />
        </div>
        <div className="navTitle">What is Home Page Advertisement</div>
      </div>
      <div className="homeBody">
        <section>
          <div>Where it does Appear ? </div>
          <p>
            in Main home page for All Browsers, at the Top of Real-estate List,
            when any user click on it , it will redirect him to your own
            real-estates list Page. as well, all of your added banners will
            appear at the TOP of your real-estate list page for your own review
            and in case you like to edit any of them,
          </p>
        </section>
        <section>
          <div>How to Design your Banner ? </div>
          <p>
            <br />
            You Can add your Distinguished image and description to Create the
            Banner, as well you Can edit it any time from your Home Page.
          </p>
        </section>
        <section>
          <div>Maximize your marketing Activities and visitors</div>
          <p>
            by Adding ( New Home Page Advertisemnet ) , you will have a chance
            to get more visitors to your Page , Your real-estates as well any of
            your New ( Business Activities ), as well; This Feature allows you
            to See how much ( Viewers ) Saw any of your ( added banners )
          </p>
        </section>
        <section>
          <div>
            <br />
            Example of home page banner
            <br />
            <br />
          </div>
        </section>
        <CardHome />
      </div>
    </div>
  );
};
export default HomeAdv;
