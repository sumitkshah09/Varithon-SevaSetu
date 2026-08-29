
import { useState } from "react";
import { useLanguage } from "../language/languageContext";

import "./LanguageSwitcher.css";

export default function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();

  const [open, setOpen] = useState(false);

  const languages = [
    {
      code: "en",
      name: "English",
    },
    {
      code: "mr",
      name: "मराठी",
    },
    {
      code: "hi",
      name: "हिन्दी",
    },
  ];

  const selectedLanguage = languages.find(
    (item) => item.code === language
  );

  return (
    <div className="language-switcher">

      <button
        className="language-button"
        onClick={() => setOpen(!open)}
      >
        🌐 {selectedLanguage?.name} ▾
      </button>

      {open && (
        <div className="language-dropdown">

          {languages.map((item) => (
            <button
              key={item.code}
              className={`language-option ${
                language === item.code ? "selected" : ""
              }`}
              onClick={() => {
                setLanguage(item.code);
                setOpen(false);
              }}
            >
              <span>{item.name}</span>

              {language === item.code && (
                <span>✓</span>
              )}
            </button>
          ))}

        </div>
      )}

    </div>
  );
}

