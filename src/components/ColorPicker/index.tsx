import { Button } from 'antd';
import React, { useEffect } from 'react';
import { TwitterPicker } from 'react-color';
import { useState } from 'react';
import type { ColorResult } from 'react-color';

import './index.css';

const COLOR_LIST = ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'];

interface ColorPickerProps {
  onChange: (colorHex: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = (props) => {

  const { onChange } = props;

  const [openColorPanel, setOpenColorPanel] = useState(false);
  const [selectedColor, setSelectedColor] = useState(COLOR_LIST[0]);

  const  handleClickButton = (e: MouseEvent) => {
    e.stopPropagation();
    setOpenColorPanel(!openColorPanel);
  }

  const  closeColorPickerPanel = (e: MouseEvent) => {
    setOpenColorPanel(false);
  }

  const handleColorChange = (color: ColorResult) => {
    setSelectedColor(color.hex);
    if (onChange && typeof onChange === 'function') {
      onChange(selectedColor);
    }
  }

  const addDocumentListener = () => {
    document.body.addEventListener('click', closeColorPickerPanel);
  }

  const removeDocumentListener = () => {
    document.body.removeEventListener('click', closeColorPickerPanel);
  }

  useEffect(() => {
    if (openColorPanel) {
      addDocumentListener();
    } else {
      removeDocumentListener();
    }

    return () => removeDocumentListener();
  }, [openColorPanel]);

  return (
    <div className="color-picker">
        <Button shape="circle" size="large" onClick={handleClickButton} >
          <span style={{
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            backgroundColor: selectedColor
          }}></span>
        </Button>
        {
          openColorPanel && <TwitterPicker color={selectedColor} onChangeComplete={handleColorChange} />
        }
    </div>
  );
}

export default ColorPicker;