import presidentImg from '../assets/president.jpg';

export default function President() {
  return (
    <section className="president container-wide">
      <div className="president-layout">
        {/* TOP: Centered circular photo */}
        <div className="president-photo">
          <img
            src={presidentImg}
            alt="Geetha Padaki, President of Amar Seva Sangam USA"
          />
        </div>

        {/* BOTTOM: Text paragraphs */}
        <div className="president-content">
          <h2>Message From The President </h2>
          <p className="president-org">Amar Seva Sangam USA</p>

          <p>
            <strong>Dear Friends and Well-Wishers,</strong>
          </p>

          <p>
            It is with gratitude and purpose that I share an important
            milestone—the incorporation of Amar Seva Sangam USA and the receipt
            of our 501(c)(3) nonprofit status. This step strengthens the
            long-standing mission of Amar Seva Sangam in India, in partnership
            with Handicare Intl., a Canadian registered charity of over 30 years,
            to serve persons with disabilities and special needs with compassion,
            dignity, and inclusion.
          </p>

          <p>
            Amar Seva Sangam USA is committed to building awareness and
            mobilizing resources to support programs in rehabilitation,
            education, healthcare, and livelihood development. As a U.S.-based
            organization, we serve as a bridge—connecting generous hearts and
            meaningful action across borders to create lasting impact.
          </p>

          <p>
            I invite you to be part of this mission. Your donations and support
            will directly enable life-changing services, helping individuals with
            disabilities lead more independent and dignified lives. Together, we
            can transform compassion into tangible outcomes.
          </p>

          <p>
            Thank you to our board members, volunteers, donors, and partners for
            believing in this vision. I encourage you to join us—through your
            contributions, advocacy, and engagement—as we uphold the founding
            spirit of Amar Seva Sangam.
          </p>

          <p className="president-signoff">
            With sincere appreciation,
            <br />
            <strong>Geetha Padaki</strong>
            <br />
            President
            <br />
            Amar Seva Sangam USA
          </p>
        </div>
      </div>
    </section>
  );
}
