"use client";

import { useState } from 'react';
import { IoSend } from 'react-icons/io5';
import { UploadIcon } from '../../atoms/icons/UploadIcon.atom';

interface InputProps {
  placeholder?: string;
  onSend?: (message: string) => void;
}

const InputMolecule: React.FC<InputProps> = ({
  placeholder = "Ask me about genes: literature, public data sources, MOSAIC data, etc.",
  onSend,
}) => {
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && onSend) {
      onSend(inputValue);
      setInputValue('');
    }
  };

  return (
    <div className="w-full max-w-3xl mx-auto">
      <form onSubmit={handleSubmit} className="relative">
        <div className="relative">
          <div className="relative">
            <div className="relative h-40">
              <textarea
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder={placeholder}
                className="w-full h-full pl-5 pr-5 pt-3 pb-3 text-gray-700 bg-white rounded-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-300 border-0 resize-none placeholder:text-[var(--text-color2)]"
              />
              <div className="absolute bottom-4 right-4">
                <button
                  type="submit"
                  disabled={!inputValue.trim()}
                  className="p-2 bg-[#b8b2ab] rounded-lg text-white hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <UploadIcon size={20} />
                </button>
              </div>
            </div>

            {/* Gradient progress bar */}
            <div className="absolute -bottom-px left-0 right-0 h-2.5 bg-gradient-to-r from-teal-400 via-yellow-400 to-pink-500 rounded-b-2xl overflow-hidden"></div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default InputMolecule;