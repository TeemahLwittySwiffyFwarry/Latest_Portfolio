// ResumePage.js
import React, { useEffect } from "react";
import swal from "sweetalert";

function ResumePage() {
  useEffect(() => {
    const showDownloadPrompt = () => {
      swal({
        title: "Download Resume",
        text: "Would you like to download Oluwayemisi Oladosu's Resume?",
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
          // Trigger the download of the resume
          const link = document.createElement("a");
          link.href = "/resume.pdf"; // Replace with the actual path
          link.download = "Oluwayemisi_Oladosu_Resume.pdf";
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
      <h1 className="text-2xl font-bold text-purple-700 mb-4">Oluwayemisi Oladosu's Resume</h1>
      <div className="border-2 border-purple-700 rounded-lg overflow-hidden shadow-lg">
        <iframe
          src="/resume.pdf" // Replace with the actual path
          title="Oluwayemisi Oladosu Resume"
          className="w-full h-[600px]"
        ></iframe>
      </div>
    </div>
  );
}

export default ResumePage;
