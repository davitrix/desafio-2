function ContactSection() {
  return (
    <section className="section bg-light" id="contact">
      <div className="container">
        <h2 className="section-title">Contáctanos</h2>
        <form className="row g-3 justify-content-center">
          <div className="col-md-4">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre"
              required
            />
          </div>
          <div className="col-md-4">
            <input
              type="email"
              className="form-control"
              placeholder="Correo electrónico"
              required
            />
          </div>
          <div className="col-8">
            <textarea
              className="form-control"
              rows={3}
              placeholder="Mensaje"
              required
            ></textarea>
          </div>
          <div className="col-8 text-center">
            <button type="submit" className="btn btn-eldorado">
              Enviar mensaje
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
export default ContactSection;
