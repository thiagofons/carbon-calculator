import "../../styles/main.sass";
import "../../styles/components/layout/footer.sass";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="invite">
        <h2>Participe dos nossos Projetos!</h2>
        <p>
          Você pode se aproximar do Instituto Terrazul sendo um voluntário ou
          parceiro. Fale conosco!
        </p>
        <button className="blue__btn">Contatos</button>
      </section>
      <section className="contact__info">
        <header>
          <h2>INSTITUTO TERRAZUL</h2>
        </header>

        <main className="contact">
          <p>Ilha da Gigóia, Barra da Tijuca – Rio de Janeiro – RJ – Brasil</p>
          <p>22.640-310</p>
          <p>E-mail: terrazul@institutoterrazul.org.br</p>
        </main>
      </section>
    </footer>
  );
};

export default Footer;
