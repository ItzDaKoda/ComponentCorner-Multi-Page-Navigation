import './Footer.css'


function Footer({ storeName, address, email, phone }) {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h3>{storeName}</h3>

        <p>{address}</p>
        <p>Email: <a href={`mailto:${email}`}>{email}</a></p>
        <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>

        <p className="footer-copy">
          © {new Date().getFullYear()} {storeName}. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
