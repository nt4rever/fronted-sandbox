import GrapesJS from "grapesjs";
import { useEffect, useRef, useState } from "react";
import { CVProps, FirstCV } from "../Templates/FristCV";
import { ColorResult, SketchPicker } from "react-color";
import "grapesjs/dist/css/grapes.min.css";
import "./index.css";
import useClickOutSide from "../../hooks/useClickOutSide";

const cVSample: CVProps = {
  email: "levantanald@gmail.com",
  firstName: "Le Van",
  lastName: "Tan",
};

type TypeColor =
  | "primaryText"
  | "sectionTitle"
  | "monogramBackground"
  | "monogramText"
  | "background";

const Builder = () => {
  const [editor, setEditor] = useState<GrapesJS.Editor>();
  const [scheme, setScheme] = useState({
    primaryText: "#000000",
    sectionTitle: "#fff",
    monogramBackground: "#fbbc05",
    monogramText: "#fff",
    background: "#000000",
  });
  const [currentOptionColor, setCurrentOptionColor] =
    useState<TypeColor>("background");
  const { nodeRef: colorTabRef } = useClickOutSide(() => {
    if (colorPickerRef && colorPickerRef.current) {
      colorPickerRef.current.style.display = "none";
    }
  });
  const colorPickerRef = useRef<HTMLDivElement>(null);
  const cv = FirstCV(cVSample);

  useEffect(() => {
    if (editor) {
      editor.Css.addRules(
        `:root {
        --primaryText: ${scheme.primaryText};
        --sectionTitle: ${scheme.sectionTitle};
        --monogramBackground: ${scheme.monogramBackground};
        --monogramText: ${scheme.monogramText};
        --background: ${scheme.background};
      }`
      );
    }
  }, [editor, scheme]);

  useEffect(() => {
    if (!editor) {
      const editor = GrapesJS.init({
        container: "#gjs",
        storageManager: false,
        height: "80vh",
        width: "auto",
        components: cv.html,
        style: cv.css,
      });
      const panels = editor.Panels;
      panels.getPanels().forEach((e) => {
        panels.removePanel(e);
      });
      setEditor(editor);
    }
    return () => {
      editor?.destroy();
    };
  }, [editor]);

  const handleExport = () => {
    if (editor) {
      const html = editor.getHtml();
      const css = editor.getCss();
      const template = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>CV</title>
        <style>
        ${css}
        </style>
      </head>
        ${html}
      </html>
      `;
      console.log({ template });
    }
  };

  const handleColorButton = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const offsetLeft = event.currentTarget.offsetLeft;
    const ariaDetails = event.currentTarget.getAttribute("aria-details");
    if (typeof ariaDetails === "string" && (ariaDetails as TypeColor))
      setCurrentOptionColor(ariaDetails as TypeColor);
    if (colorPickerRef && colorPickerRef.current) {
      colorPickerRef.current.style.display = "block";
      colorPickerRef.current.style.left = `${offsetLeft}px`;
    }
  };

  const handleColorPicker = (color: ColorResult) => {
    setScheme((values) => {
      return { ...values, [currentOptionColor]: color.hex };
    });
  };

  return (
    <>
      <button
        className="border border-cyan-700 text-cyan-800
       hover:bg-slate-100
        hover:text-cyan-700 py-1 px-3 rounded-md duration-150 mb-3"
        onClick={handleExport}
      >
        Export
      </button>
      <div ref={colorTabRef} className="inline-block relative">
        <button
          className="border hover:bg-slate-100 py-1 px-3 ml-1 rounded-md duration-150 mb-3"
          style={{
            borderColor: scheme.primaryText,
            color: scheme.primaryText,
          }}
          onClick={handleColorButton}
          aria-details="primaryText"
        >
          primaryText
        </button>

        <button
          className="border hover:bg-slate-100 py-1 px-3 ml-1 rounded-md duration-150 mb-3"
          style={{
            borderColor: scheme.background,
            color: scheme.background,
          }}
          onClick={handleColorButton}
          aria-details="background"
        >
          background
        </button>
        <button
          className="border bg-slate-600 py-1 px-3 ml-1 rounded-md duration-150 mb-3"
          style={{
            borderColor: scheme.sectionTitle,
            color: scheme.sectionTitle,
          }}
          onClick={handleColorButton}
          aria-details="sectionTitle"
        >
          sectionTitle
        </button>
        <div className="absolute z-[1000] hidden" ref={colorPickerRef}>
          <SketchPicker
            color={scheme[currentOptionColor]}
            onChangeComplete={handleColorPicker}
          />
        </div>
      </div>

      <div id="gjs"></div>
    </>
  );
};

export default Builder;
