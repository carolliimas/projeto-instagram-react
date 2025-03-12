export default function Stories() {
    const stories = [
      { usuario: "ana_s2", imagem: "assets/ana.png" },
      { usuario: "joao_dev", imagem: "assets/joao.png" },
      { usuario: "maria_art", imagem: "assets/maria.png" },
    ];
  
    return (
      <div className="stories">
        {stories.map((story, index) => (
          <Story key={index} usuario={story.usuario} imagem={story.imagem} />
        ))}
      </div>
    );
  }
  