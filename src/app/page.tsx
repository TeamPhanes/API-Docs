'use client';

import { useState } from 'react';
import Image from 'next/image';
import ApiDetailList from '@/app/components/modal/ApiDetailList';
import Modal from '@/app/components/modal/Modal';
import { DataType } from '@/data/Data';
import { ExampleData } from '@/data/ExampleData';
import AuthorizationIcon from '@/public/authorization_icon.svg';
import ChevronDown from '@/public/gray_chevron_down.svg';

const methodColorMap: Record<string, string> = {
  GET: 'text-blue-500',
  POST: 'text-green-500',
  PATCH: 'text-yellow-500',
  DELETE: 'text-red-500',
};

export default function Home() {
  const [openStates, setOpenStates] = useState<Record<string, boolean>>({});
  const [openModals, setOpenModals] = useState<Record<string, boolean>>({});

  const openModal = (pathKey: string) => {
    setOpenModals((prev) => ({ ...prev, [pathKey]: true }));
  };

  const closeModal = (pathKey: string) => {
    setOpenModals((prev) => ({ ...prev, [pathKey]: false }));
  };
  const toggleOpen = (key: string) => {
    setOpenStates((prev) => ({
      ...prev,
      [key]: !prev[key],
    }));
  };

  return (
    <main className="relative mx-10 xl:mx-auto my-20 h-full max-w-xl">
      <div>
        {Object.entries(DataType ?? ExampleData).map(([largeKey, methods]) => (
          <div key={largeKey}>
            <button
              type="button"
              onClick={() => toggleOpen(largeKey)}
              className="w-full bg-bgLine py-2 px-4 border-[1px] border-border rounded-md mb-4 flex justify-between items-center"
            >
              <h2 className="text-2xl">{largeKey}</h2>
              <Image
                src={ChevronDown}
                alt="화살표"
                width={24}
                height={24}
                className={`transition-transform transform duration-300 w-6 h-6 ${openStates[largeKey] ? 'rotate-180' : 'rotate-0'}`}
              />
            </button>

            {openStates[largeKey] && (
              <div
                className={`${openStates[largeKey] ? 'animate-dropdownIn' : 'animate-dropdownOut'}`}
              >
                {Object.entries(methods).map(([methodKey, paths]) => (
                  <div
                    key={methodKey}
                    className="w-full bg-bgLine py-2 px-4 border-[1px] border-border rounded-md mb-2"
                  >
                    <h2
                      className={`font-semibold text-xl ${
                        methodColorMap[methodKey]
                      }`}
                    >
                      [ {methodKey} ]
                    </h2>
                    <div className="grid xl:grid-cols-3 grid-cols-1">
                      {Object.entries(paths).map(([pathKey, response]) => {
                        const headersItem = response.find(
                          (item) => item.label === 'Headers'
                        );
                        const hasAuthorization =
                          headersItem?.content?.Authorization;
                        return (
                          <>
                            <button
                              className="bg-bgCard m-2 rounded-md border-border border-[1px] relative"
                              onClick={() => openModal(pathKey)}
                            >
                              {hasAuthorization && (
                                <Image
                                  src={AuthorizationIcon}
                                  alt="자물쇠"
                                  width={24}
                                  height={24}
                                  className="w-6 h-6 absolute top-2 right-2"
                                />
                              )}
                              <h3 className="text-xl p-4 break-all whitespace-pre-line">
                                {pathKey}
                              </h3>
                            </button>
                            <Modal
                              isOpen={openModals[pathKey]}
                              onClose={() => closeModal(pathKey)}
                            >
                              <ApiDetailList items={response} />
                            </Modal>
                          </>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </main>
  );
}
