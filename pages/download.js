async function downloadPDF(filePath) {
    try {
      const response = await fetch("/download_file", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ file_path: filePath }),
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
  
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "bridge_report.pdf"; // Change filename as needed
      document.body.appendChild(a);
      a.click();
      a.remove();
    } catch (error) {
      console.error("Download failed:", error);
    }
  }
  
  
  