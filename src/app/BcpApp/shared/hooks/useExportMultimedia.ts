import { useRef, useState } from "react";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import { ILoading } from "@/app/BcpApp/domain";

const NAME_PDF_IMG: string = "RecompensaTotal_";
const INIT_LOADING: ILoading = {
  state: false,
  text: "",
};

export const useExportMultimedia = () => {
  const { app } = useRecompenseContext();  
  const [loading, setLoading] = useState<ILoading>(INIT_LOADING);
  const [showViewImage, setShowViewImage] = useState<boolean>(false);

  const mailRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const refNavigate = useRef<HTMLDivElement>(null);

  type typeClass = "add" | "remove";
  const changeClasses = (type: typeClass) => {
    const $html = document.querySelector("html") as HTMLHtmlElement;
    const $body = document.querySelector("body") as HTMLBodyElement;
    const $mail = mailRef.current as HTMLDivElement;
    const $image = imageRef.current as HTMLDivElement;
    const $navigate = refNavigate.current as HTMLDivElement;

    const prop: typeClass = type === "remove" ? "add" : "remove";

    $mail?.classList[type](
      "animate__animated",
      "animate__fadeIn",
      "animate__fast"
    );
    $image?.classList[type](
      "animate__animated",
      "animate__fadeIn",
      "animate__fast"
    );
    $html.classList[prop]("overflow-hidden");
    $body.classList[prop]("overflow-hidden");
    $navigate.classList[prop]("invisible");
  };

  const exportPdf = () => {
    const $app = mailRef.current as HTMLDivElement;

    // Modificamos estilos al hacer la captura
    changeClasses("remove");

    setLoading({ state: true, text: "Exportando PDF" });

    html2canvas($app, {
      logging: true,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 210;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let position = 0;
      console.log({ imgWidth, imgHeight });
      const doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        format: [imgHeight, imgWidth],
        // encryption: {
        //   userPassword: app.dni,
        //   ownerPassword: "797233232#2ewwe24",
        //   userPermissions: ["print", "copy"],
        // },
      });

      
      doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
      doc.link(0, 0, imgWidth, imgHeight, { url: "https://www.youtube.com/" });
      doc.save(NAME_PDF_IMG + app.uid + ".pdf");

      // Devolvemos las clases y los estilos seran los de un inicio
      changeClasses("add");

      setLoading({ state: false });
    });
  };

  const exportImg = () => {
    setLoading({ state: true, text: "Generando imagen" });
    setShowViewImage(true);

    const generateImg = () => {
      const $image = imageRef.current as HTMLDivElement;

      // Modificamos estilos al hacer la captura
      changeClasses("remove");

      html2canvas($image, {
        logging: true,
        useCORS: true,
      })
        .then((canvas) => {
          const $a = document.createElement("a") as HTMLAnchorElement;
          $a.href = canvas
            .toDataURL("image/jpeg")
            .replace("image/jpeg", "image/octet-stream");
          $a.download = NAME_PDF_IMG + app.uid + ".jpg";
          $a.click();

          // Devolvemos las clases y los estilos seran los de un inicio
          changeClasses("add");
          setShowViewImage(false);
          setLoading({ state: false });
        })
        .catch((err) => console.log(err));
    };

    setTimeout(() => {
      generateImg();
    }, 1000);
  };

  const elementsRef = {
    mailRef,
    imageRef,
    refNavigate,
  };

  return { exportPdf, exportImg, loading, elementsRef, showViewImage };
};
