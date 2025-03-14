export function Dado({ valor }){
    const imagens = {
      1: "dado_1.jpeg",
      2: "dado_2.jpeg",
      3: "dado_3.jpeg",
      4: "dado_4.jpeg",
      5: "dado_5.jpeg",
      6: "dado_6.jpeg",
    };
  
    return (
      <div className="flex flex-col items-center">
        <img src={imagens[valor]} alt={`Dado ${valor}`} className="w-23 h-24" />
        <p className="text-lg font-semibold mt-2">Valor: {valor}</p>
      </div>
    );
  };