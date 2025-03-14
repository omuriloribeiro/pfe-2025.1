export function Dado({ valor }){
    const imagens = {
      1: "dado_1.png",
      2: "dado_2.png",
      3: "dado_3.png",
      4: "dado_4.png",
      5: "dado_5.png",
      6: "dado_6.png",
    };
  
    return (
      <div className="flex flex-col items-center">
        <img src={imagens[valor]} alt={`Dado ${valor}`} className="w-23 h-24" />
        <p className="text-lg font-semibold mt-2">Valor: {valor}</p>
      </div>
    );
  };