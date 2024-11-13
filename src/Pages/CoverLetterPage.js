// CoverLetterPage.js
import React, { useEffect } from "react";
import swal from "sweetalert";

function CoverLetterPage() {
  useEffect(() => {
    const showDownloadPrompt = () => {
      swal({
        title: "Download Cover Letter",
        text: "Would you like to download Oluwayemisi Oladosu's Cover Letter?",
        icon: "info",
        buttons: {
          cancel: "No, thanks",
          download: {
            text: "Yes, download",
            value: "download",
          },
        },
      }).then((value) => {
        if (value === "download") {
          // Trigger the download of the cover letter
          const link = document.createElement("a");
          link.href = "/cover_letter.pdf"; // Replace with the actual path
          link.download = "Oluwayemisi_Oladosu_Cover_Letter.pdf";
          document.body.appendChild(link);
          link.click();
          document.body.removeChild(link);
        }
      });
    };

    // Show the download prompt when the component mounts
    showDownloadPrompt();
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-purple-700 mb-4">Oluwayemisi Oladosu's Cover Letter</h1>
      <div className="border-2 border-purple-700 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="/cover_letter.pdf" // Replace with the actual path
          title="Oluwayemisi Oladosu Cover Letter"
          className="w-full h-[600px]"
        ></iframe>
      </div>
    </div>
  );
}

export default CoverLetterPage;
