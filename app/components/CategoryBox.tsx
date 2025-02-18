"use client";

import {IconType} from "react-icons";
import React, {useCallback} from "react";
import {useRouter, useSearchParams} from "next/navigation"
import queryString from "query-string";

interface CategoryBoxProps {
    icon: IconType;
    label: string;
    selected?: boolean;
}

const CategoryBox: React.FC<CategoryBoxProps> = ({
    icon: Icon,
    label,
    selected
}) => {
  const router = useRouter();
  const params = useSearchParams();

  const handleClick = useCallback(() => {
      let currentQuery = {};

      if (params) {
          currentQuery = queryString.parse(params.toString());
      }

      const updateQuery: any = {
          ...currentQuery,
          category: label
      }

      if (params?.get('category') === label) {
          delete updateQuery.category
      }

      const url = queryString.stringifyUrl({
          url: '/',
          query: updateQuery
      }, {skipNull: true});

      router.push(url);
  }, [label, params, router])

  return (
      <div
          onClick={handleClick}
          className={`
            flex 
            flex-col 
            items-center 
            justify-center 
            gap-2
            p-3
            border-b-2
            hover:text-neutral-800
            transition
            cursor-pointer
            ${selected ? 'border-b-neutral-800 text-neutral-800' : 'border-transparent text-neutral-500'}
          `}
      >
          <Icon size={26} />
          <div className="font-medium text-sm">
              {label}
          </div>
      </div>
  )
}

export default CategoryBox