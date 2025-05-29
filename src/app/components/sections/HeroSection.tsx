import Image from "next/image";
import HeroImg from "../../assets/images/hero-es.webp";

function HeroSection() {
  return (
    <section className="hero">
      <div className="container hero-flex">
        <div className="hero-content">
          <h1 className="hero-title">
            La forma más fácil de mover tu dinero al extranjero
          </h1>
          <p className="hero-highlight">
            Compra, vende y transfiere dinero internacionalmente de manera
            rápida, segura y sin complicaciones.
          </p>
          <p className="hero-subtitle">
            Envía dinero a más de 100 países con las mejores tasas y sin
            comisiones ocultas.
          </p>
          <div className="hero-btns">
            <a href="#" className="btn btn-eldorado btn-lg">
              Comenzar ahora
            </a>
            <a href="#" className="btn btn-outline-eldorado btn-lg">
              Ver tarifas
            </a>
          </div>
        </div>
        <div className="d-none d-md-flex hero-image">
          <Image
            width={800}
            height={400}
            src={HeroImg}
            alt="Transferencia internacional"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
