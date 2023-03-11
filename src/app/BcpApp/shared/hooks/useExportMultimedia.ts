import { useRef, useState } from "react";
import { useRecompenseContext } from "@/app/BcpApp/store/context";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

const NAME_PDF_IMG: string = "RecompensaTotal_";

export const useExportMultimedia = () => {
  const { app } = useRecompenseContext();
  const [loading, setLoading] = useState<boolean>(false);
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
    const $app = document.getElementById("app") as HTMLElement;

    // Modificamos estilos al hacer la captura
    changeClasses("remove");

    // Empezamos cargando el pdf
    setLoading(true);

    html2canvas($app, {
      logging: true,
      useCORS: true,
    }).then((canvas) => {
      const imgWidth = 210;
      const pageHeight = 295;
      const imgHeight = (canvas.height * imgWidth) / canvas.width;
      let heightLeft = imgHeight;
      let position = 0;
      heightLeft -= pageHeight;

      const doc = new jsPDF({
        orientation: "p",
        unit: "mm",
        encryption: {
          userPassword: app.dni,
          ownerPassword: "797233232#2ewwe24",
          userPermissions: ["print", "copy"],
        },
      });

      doc.addImage(canvas, "PNG", 0, position, imgWidth, imgHeight, "", "FAST");
      while (heightLeft >= 0) {
        position = heightLeft - imgHeight;
        doc.addPage();
        doc.addImage(
          canvas,
          "PNG",
          0,
          position,
          imgWidth,
          imgHeight,
          "",
          "FAST"
        );
        heightLeft -= pageHeight;
      }
      doc.save(NAME_PDF_IMG + app.uid + ".pdf");

      // Devolvemos las clases y los estilos seran los de un inicio
      changeClasses("add");

      // Quitamos el Loader, ya se genero el PDF
      setLoading(false);
    });
  };

  const exportImg = () => {
    setLoading(true);
    setShowViewImage(true);

    setTimeout(() => {
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
          setLoading(false);
        })
        .catch((err) => console.log(err));
    }, 1000);
  };

  const elementsRef = {
    mailRef,
    imageRef,
    refNavigate,
  };

  return { exportPdf, exportImg, loading, elementsRef, showViewImage };
};