
import "./Brands.css";

function Brands() {
  const brandData = [
  {
    name: "Selkirk",
    code: "ADV-YVONNED",
    descript: "Pickleball paddles, clothing, gear and more",
    description: "Use code for 10% off in giftcards",
    url: "https://www.selkirk.com",
    autoApply: "https://www.selkirk.com/discount/ADV-YVONNED"
  },
  {
    name: "PickleLuxe",
    code: "8DAYSPB",
    descript: "High quality Pickleball jewelry",
    description: "Use code for 10% off and free shipping",
    url: "https://www.pickleluxe.com",
    autoApply: "https://www.pickleluxe.com/?discount=8DAYSPB"
  },
  {
    name: "CourtGirl",
    code: "8DAYSCG",
    descript: "Pickleball, golf, and tennis pouches, bags, paddles, and more",
    description: "Use code for 20% off",
    url: "https://www.courtgirl.com",
    autoApply: "https://www.courtgirl.com/discount/8DAYSCG"
  },
  {
    name: "Corporate Events",
    code: null,
    description:
      "Contact Yvonne directly for up to 50% off corporate or country club bulk orders.",
    url: null
  }
];

  return (
    <div className="brands-container">
      <h1>Brand Partnerships</h1>
      <div className="brands-grid">
        {brandData.map((brand, index) => (
          <div key={index} className={`brand-card ${brand.name.toLowerCase()}`}>
            <h3>{brand.name}</h3>
            <p>{brand.descript}</p>
            <p>{brand.description}</p>
            {brand.code && <p className="discount-code">Code: {brand.code}</p>}

            {brand.url && (
            <a href={brand.autoApply || brand.url} target="_blank" rel="noopener noreferrer" className="brand-link" >
            Shop {brand.name}
            </a>
        )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
