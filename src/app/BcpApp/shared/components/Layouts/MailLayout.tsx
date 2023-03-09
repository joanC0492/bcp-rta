import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import "animate.css";

interface IProps {
  children: React.ReactNode;
}
export const MailLayout: React.FC<IProps> = ({ children }) => {
  const [scrollTop, setScrollTop] = useState(0);

  const listRef = useRef<HTMLAnchorElement>(null);
  const pdfRef = useRef<HTMLButtonElement>(null);
  const mailRef = useRef<HTMLDivElement>(null);

  const exportPdf = () => {
    const app = document.getElementById("app") as HTMLElement;

    const $mail = mailRef.current as HTMLDivElement;
    const $list = listRef.current as HTMLAnchorElement;
    const $pdf = pdfRef.current as HTMLButtonElement;

    // Modificamos estilos al hacer la captura
    $mail.classList.remove(
      "scroll",
      "animate__animated",
      "animate__fadeIn",
      "animate__fast"
    );
    $list.classList.add("invisible");
    $pdf.classList.add("invisible");

    html2canvas(app, {
      logging: true,
      useCORS: true,
    }).then((canvas) => {
      // let formato = "a3";
      let formato = "multiple";
      // formato = "one";

      if (formato === "a4") {
        /*
          let imgWidth: number = 210;
          let imgHeight: number = (canvas.height * imgWidth) / canvas.width;
          console.log({ canvas, imgWidth, imgHeight });
          const imgData = canvas.toDataURL("image/jpg");
          // const pdf = new jsPDF("p", "mm", "a4");
          const pdf = new jsPDF();
          pdf.addImage(imgData, "JPG", 0, 0, imgWidth, imgHeight);
          pdf.save("nuevo_pdf:v.pdf");
        */
      } else if (formato === "multiple") {
        const imgWidth = 210;
        const pageHeight = 295;
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        let heightLeft = imgHeight;
        let position = 0;
        heightLeft -= pageHeight;
        // const doc = new jsPDF("p", "mm",{
        const doc = new jsPDF({
          orientation: "p",
          unit: "mm",
          encryption: {
            userPassword: "bcp-1",
            ownerPassword: "797233232#2ewwe24",
            userPermissions: ["print", "copy"],
          },
        });
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
        doc.save("Downld.pdf");
      } else if (formato === "one") {
        // let imgWidth: number = 270;
        let imgWidth: number = 446;
        let imgHeight: number = (canvas.height * imgWidth) / canvas.width;
        const imgData = canvas.toDataURL("image/jpg", 0.5);
        // imgWidth = 446;
        // console.log({ imgWidth, imgHeight });

        const pdf = new jsPDF({
          orientation: "p",
          unit: "px",
          encryption: {
            userPassword: "bcp-2",
            ownerPassword: "797233232#2ewwe24",
            userPermissions: ["print", "copy"],
          },
        });

        let width = pdf.internal.pageSize.getWidth();
        // let height = pdf.internal.pageSize.getHeight();
        imgHeight = (canvas.height * width) / canvas.width;
        // pdf.addImage(imgData, "JPG", 0, 0, imgWidth, imgHeight);
        // console.log({ width, height });
        pdf.addImage(imgData, "JPG", 0, 0, width, imgHeight);
        pdf.save("nuevo_pdf:v.pdf");
      }

      // Devolvemos las clases y los estilos seran los de un inicio
      $mail.classList.add(
        "scroll",
        "animate__animated",
        "animate__fadeIn",
        "animate__fast"
      );
      $list.classList.remove("invisible");
      $pdf.classList.remove("invisible");
    });
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement, UIEvent>) => {
    const top = e.currentTarget.scrollTop;
    if (top <= 474) {
      setScrollTop(top);
    }
  };
  document.documentElement.style.setProperty("--h-img", -scrollTop - 26 + "px");
  
  return (
    <>
      <div style={{ position: "fixed", left: "15px", top: "15px" }}>
        <Link
          ref={listRef}
          to={"lista-de-usuarios"}
          className="btn btn-outline-primary me-3">
          List de usuarios
        </Link>
        <button
          ref={pdfRef}
          type="button"
          className="btn btn-outline-primary"
          onClick={exportPdf}>
          Generar PDF
        </button>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-flex justify-content-center py-4">
              <div
                ref={mailRef}
                id="mail"
                className="mail scroll animate__animated animate__fadeIn animate__fast"
                onScroll={handleScroll}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
