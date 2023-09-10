import { useEffect, useRef, useState } from "react";
import { CardProductComponent } from "../components/CardProductComponent";
import { getProducts } from "../firebase/Catalogue";
import { useSearchParams } from "react-router-dom";
import { Card } from "@material-tailwind/react";
import { ButtonLink } from "../components/ButtonLink";

export function Catalogue(props) {

    const divCocinas = useRef()

    const [cocinas, setCocinas] = useState([])

    const getCocinas = async () => {
        let data = await getProducts("Cocinas")
        setCocinas(data)
    }

    const viewAllCocinas = () => {

        console.log("all cocinas")
        console.log(divCocinas.current)

    }

    const leftDisplacementDivCocinas = () => {
        divCocinas.current.scrollLeft -= window.innerWidth
    }

    const rightDisplacementDivCocinas = () => {
        divCocinas.current.scrollLeft += window.innerWidth
    }

    useEffect(() => {
        getCocinas()
    }, [])

    return (

        <>
            <br />
            <b className="p-5 ml-5 text-light-blue-700">Cocinas</b>
            <div ref={divCocinas} className="catalogue-stock">

                <button
                    className="button-direction button-direction-left"
                    onClick={leftDisplacementDivCocinas}>{"<"}</button>
                <button
                    className="button-direction button-direction-right"
                    onClick={rightDisplacementDivCocinas}>{">"}</button>

                {cocinas.map(cocina =>
                    <CardProductComponent
                        id={cocina.id}
                        title={cocina.titulo}
                        price={cocina.precio}
                        description={cocina.descripcion}
                        offer={cocina.oferta}
                        offerPrice={cocina.precioOferta}
                        img={cocina.img}
                    />)
                }
            </div>
            <div className="flex justify-center mt-2">
                <ButtonLink onClick={viewAllCocinas} />
            </div>
            <br />
            <b className="p-5 ml-5 text-light-blue-700">Campanas</b>
            <div className="catalogue-stock">
                {cocinas.map(cocina =>
                    <CardProductComponent
                        id={cocina.id}
                        title={cocina.titulo}
                        price={cocina.precio}
                        description={cocina.descripcion}
                        img={cocina.img}
                    />)}
            </div>
        </>
    )

}