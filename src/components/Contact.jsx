function Contact() {
  return (
    // Section: Contact v.2
    <section className="contact-section">
        {/* Section heading */}
        <h2 className="h1-responsive font-weight-bold text-center my-4">Contáctenos</h2>
        {/* Section description */}
        <p className="text-center w-responsive mx-auto mb-5">¿Tiene alguna consulta? Por favor no dude en contactarnos y nuestro equipo le responderá a la brevedad. Muchas gracias por confiar en nosotros.</p>
        <div className="row">
            {/* Grid column Form*/}
            <div className="col-md-6 mb-md-0 mb-5 grid-column-form">
                <form id="contact-form" name="contact-form" action="mail.php" method="POST">
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-6">
                            <div className="md-form mb-0">
                                <input type="text" id="name" name="name" className="form-control" />
                                <label for="name" className="">Nombre</label>
                            </div>
                        </div>
                        {/* Grid column */}
                        {/* Grid column */}
                        <div class="col-md-6">
                            <div class="md-form mb-0">
                                <input type="text" id="email" name="email" className="form-control" />
                                <label for="email" className="">Email</label>
                            </div>
                        </div>
                        {/* Grid column */}
                    </div>
                    {/* Grid row */}
                    {/* Grid row */}
                    <div className="row">
                        <div className="col-md-12">
                            <div class="md-form mb-0">
                                <input type="text" id="subject" name="subject" className="form-control" />
                                <label for="subject" className="">Asunto</label>
                            </div>
                        </div>
                    </div>
                    {/* Grid row */}
                    {/* Grid row */}
                    <div className="row">
                        {/* Grid column */}
                        <div className="col-md-12">
                            <div className="md-form">
                                <textarea type="text" id="message" name="message" rows="2" className="form-control md-textarea"></textarea>
                                <label for="message">Mensaje</label>
                            </div>
                        </div>
                    </div>
                    {/* Grid row */}
                </form>
                <div className="text-center text-md-left">
                    <a className="btn btn-details" onclick="document.getElementById('contact-form').submit();">ENVIAR</a>
                </div>
                <div className="status"></div>
            </div>
            {/* Grid column */}
            {/* Grid column */}
            <div className="col-md-5 text-center">
                <ul className="list-unstyled mb-0">
                    <li><i className="fas fa-map-marker-alt fa-2x"></i>
                        <p>San Francisco, CA 94126, USA</p>
                    </li>
                    <li><i className="fas fa-phone mt-4 fa-2x"></i>
                        <p>+ 01 234 567 89</p>
                    </li>
                    <li><i className="fas fa-envelope mt-4 fa-2x"></i>
                        <p>contact@mdbootstrap.com</p>
                    </li>
                </ul>
                <img className="img-contact" src="https://st3.depositphotos.com/8950810/17657/v/450/depositphotos_176577880-stock-illustration-cute-smiling-funny-robot-chat.jpg" alt="" />
            </div>
            {/* Grid column */}
        </div>
    </section>
  )
}

export default Contact;
