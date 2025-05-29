import { Currency } from "@/app/core/interfaces/currency";
import Image from "next/image";

async function CurrenciesPage() {
  const fetchCurrencies = async () => {
    const response = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch currencies");
    }
    const currencies: Currency[] = await response.json();
    return currencies;
  };

  const currencies = await fetchCurrencies();

  return (
    <div className="container py-4">
      <div className="row g-4 justify-content-center">
        {currencies.map((currency) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={currency.id}>
            <div className="card h-100 text-center shadow-sm">
              <div className="card-body d-flex flex-column align-items-center">
                <Image
                  width={48}
                  height={48}
                  src={currency.image}
                  alt={currency.name}
                  className="mb-2"
                />
                <h5 className="card-title mb-1">{currency.name}</h5>
                <span
                  className="text-muted text-uppercase mb-2"
                  style={{ fontSize: "0.9em" }}
                >
                  {currency.symbol}
                </span>
                <div className="fw-bold mt-2">
                  ${currency.current_price.toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CurrenciesPage;
