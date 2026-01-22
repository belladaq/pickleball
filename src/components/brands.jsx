
import "./Brands.css";

function Brands() {
  const brandData = [
    {
      name: "Selkirk",
      code: "ADV-YVONNED",
      description: "Use this code for a discount",
    },
    {
      name: "PickleLuxe",
      code: "",
      description: "Use this code at checkout",
    },
    // Add more brands here if needed
  ];

  return (
    <div className="brands-container">
      <h1>Brand Partnerships</h1>
      <div className="brands-grid">
        {brandData.map((brand, index) => (
          <div key={index} className={`brand-card ${brand.name.toLowerCase()}`}>
            <h3>{brand.name}</h3>
            <p>{brand.description}</p>
            {brand.code && <p className="discount-code">Code: {brand.code}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Brands;
