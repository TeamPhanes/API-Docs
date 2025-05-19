'use client';

import { useState } from 'react';
import Image from 'next/image';
import CompleteIcon from '@/public/complete_icon.svg';
import CopyIcon from '@/public/copy_icon.svg';

type CopyButtonProps = {
  textToCopy: string;
};

export default function CopyButton({ textToCopy }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('글자를 복사하는데 실패했습니다.: ', err);
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="mr-3 xl:mr-5 text-sm hover:text-gray-700 flex items-center gap-1"
    >
      <Image
        src={copied ? CompleteIcon : CopyIcon}
        alt="Copy Icon"
        width={14}
        height={14}
        className="w-[14px] h-[14px]"
      />
      {copied ? 'Complete!' : 'Copy'}
    </button>
  );
}
