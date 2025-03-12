export default function Story({ usuario, imagem }) {
    return (
      <div className="story">
        <img src={imagem} alt={usuario} />
        <p>{usuario}</p>
      </div>
    );
  }
  