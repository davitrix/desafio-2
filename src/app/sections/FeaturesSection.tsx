function FeaturesSection() {
  return (
    <section className="section" id="features">
      <div className="container">
        <h2 className="section-title">¿Por qué elegir Eldorado?</h2>
        <div className="row">
          <div className="col-md-4 feature">
            <div className="feature-icon">💸</div>
            <h5>Transferencias rápidas</h5>
            <p>
              Envía y recibe dinero en minutos, sin demoras ni complicaciones.
            </p>
          </div>
          <div className="col-md-4 feature">
            <div className="feature-icon">🔒</div>
            <h5>Seguridad garantizada</h5>
            <p>Tus fondos y datos están protegidos con la mejor tecnología.</p>
          </div>
          <div className="col-md-4 feature">
            <div className="feature-icon">🌎</div>
            <h5>Alcance global</h5>
            <p>Opera en múltiples países y monedas con total facilidad.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FeaturesSection;
