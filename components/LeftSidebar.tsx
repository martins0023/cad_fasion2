"use client";

import { useMemo } from "react";
import Image from "next/image";

import { getShapeInfo } from "@/lib/utils";

const LeftSidebar = ({ allShapes }: { allShapes: Array<any> }) => {
  // memoize the result of this function so that it doesn't change on every render but only when there are new shapes
  const memoizedShapes = useMemo(
    () => (
      <section className='sticky left-0 flex h-full min-w-[227px] select-none flex-col overflow-y-auto border-t border-primary-grey-200 bg-primary-black pb-20 text-primary-grey-300 max-sm:hidden'>
        <h3 className='border border-primary-grey-200 px-5 py-4 text-xs uppercase'>
          Layers
        </h3>
        <div className='flex flex-col'>
          {allShapes?.map((shape: any) => {
            const info = getShapeInfo(shape[1]?.type);

            return (
              <div
                key={shape[1]?.objectId}
                className='group my-1 flex items-center gap-2 px-5 py-2.5 hover:cursor-pointer hover:bg-primary-green hover:text-primary-black'
              >
                <Image
                  src={info?.icon}
                  alt='Layer'
                  width={16}
                  height={16}
                  className='group-hover:invert'
                />
                <h3 className='text-sm font-semibold capitalize'>
                  {info.name}
                </h3>
              </div>
            );
          })}
          <div className='flex flex-row border border-primary-grey-200 px-5 py-4 text-xs uppercase'>
            <a href="https://drive.google.com/drive/folders/1YsX1FxnfeKw-C5g1SQjqUv2PXfYolWZu?usp=sharing" className="flex">
              <h4 className='mt-1 cursor-pointer group-hover:invert'>
                Download Assets
              </h4>
              <Image
                src='/assets/icon.svg'
                alt='Assets'
                width={25}
                height={25}
                className="ml-2"
              />
            </a>
          </div>
        </div>
      </section>
    ),
    [allShapes?.length]
  );

  return memoizedShapes;
};

export default LeftSidebar;
