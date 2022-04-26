import './footer.css';

function Footer() {
  const footerYear = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &copy; {footerYear}</p>
      <p>Courtesy:Sidehustle 1st React Js Capstone Project</p>
      <p>Created by Group 33</p>
    </footer>
  );
}

export default Footer;
