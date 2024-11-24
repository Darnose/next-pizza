'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox, RangeSlider } from '../shared';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  const { ingredients, loading, selectedIds, OnAddId } = useFilterIngredients();

  const items = ingredients.map((ingredient) => ({
    text: ingredient.name,
    value: ingredient.id.toString(),
  }));

  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox name="top" text="Можно собирать" value="1" />
        <FilterCheckbox name="t213" text="Новинки" value="2" />
      </div>

      {/* Фильтр цен */}
      <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
        <p className="font-bold mb-3">Цена от и до</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" placeholder="0" min={0} max={1000} defaultValue={0} />
          <Input type="number" placeholder="1000" min={100} value={500} max={1000} />
        </div>
        <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} />
        <CheckboxFiltersGroup
          title="Ингредиенты"
          name="ingredients"
          className="mt-5"
          limit={6}
          defaultItems={items.slice(0, 6)}
          items={items}
          loading={loading}
          onClickCheckbox={OnAddId}
          selectedIds={selectedIds}
        />
      </div>
    </div>
  );
};
