import React, { useState } from "react";
import { Icon } from '@iconify/react';
import { Dropdown, ButtonGroup } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";


export default function LangSelector(props) {
  const options = [
    { value: "English", icon: "twemoji-flag-for-flag-united-kingdom" },
    { value: "Suomi", icon: "twemoji-flag-for-flag-finland" },
  ];

  const [langValue, setLangValue] = useState(options[0].value);

  function handlclick(n) {
    setLangValue(options[n].value);
    if(n == 0) {
        props.selectLang(window.$primaryLanguage);
    } else {
        props.selectLang(window.$secondaryLanguage);
    }
  }


  return (
    <div className="lang-selector">
      <Dropdown as={ButtonGroup}>
        <Dropdown.Toggle
          className=" bg-transparent btn-outline-secondary border-0 d-flex align-items-center gap-2"
          id="lng-dropdown"
        >
          <Icon icon={options.find(o => o.value === langValue).icon} width="30" height="30" />
            <span className="lang-value">{langValue}</span>
        </Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item onClick={() => handlclick(0)}>
            {options[0].value}
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handlclick(1)}>
            {options[1].value}
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

