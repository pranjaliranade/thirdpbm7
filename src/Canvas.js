import React, { useEffect, useRef } from 'react';
import { StaticCanvas } from 'fabric';
import {FabricImage} from 'fabric';

const AnnotationCanvas = ({ image }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = new StaticCanvas(canvasRef.current);
    if (image) {
      FabricImage.fromURL(image, (img) => {
        canvas.setWidth(img.width);
        canvas.setHeight(img.height);
        canvas.setBackgroundImage(img, canvas.renderAll.bind(canvas));
      });
    }

    // Add drawing tools
    const addDrawingTools = () => {
      canvas.isDrawingMode = true;
      canvas.freeDrawingBrush.width = 5;
      canvas.freeDrawingBrush.color = '#00BFFF';
    };

    addDrawingTools();

    return () => {
      canvas.dispose();
    };
  }, [image]);

  return (
    <div>
      <canvas ref={canvasRef} />
    </div>
  );
};

export default AnnotationCanvas;
