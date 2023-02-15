import React from 'react'
import { Routes, Route } from "react-router-dom";
import PDFViewer from './PDFViewe';

export default function AppRouter() {
    return (
        <div className="App">
            <Routes>
                <Route path="/https://main.d1jftbglgnbj16.amplifyapp.com/LaNocheDeAnoche" element={<PDFViewer url="http://www.edutecne.utn.edu.ar/tutoriales/PDF-crear_links_en_documento.pdf" />} />
                <Route path="*" element={<h1>404 Not Found</h1>} />
            </Routes>
        </div>
    )
}
