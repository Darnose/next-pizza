import React from 'react';
import { Title } from './title';
import { FilterCheckbox, RangeSlider } from '../shared';
import { Input } from '../ui';
import { CheckboxFiltersGroup } from './checkbox-filters-group';

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={className}>
      <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

      {/* Верхние чекбоксы */}
      <div className="flex flex-col gap-4">
        <FilterCheckbox text="Можно собирать" value="1" />
        <FilterCheckbox text="Новинки" value="2" />
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
          title="Ингридиенты"
          className="mt-5"
          limit={6}
          defaultItems={[
            { text: 'Сырный соус', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Томаты', value: '3' },
            { text: 'Помидоры', value: '4' },
            { text: 'Лук', value: '5' },
            { text: 'Огурец', value: '6' },
            { text: 'Лосось', value: '7' },
            { text: 'Креветки', value: '8' },
            { text: 'Капуста', value: '9' },
          ]}
          items={[
            { text: 'Сырный соус', value: '1' },
            { text: 'Сыр', value: '2' },
            { text: 'Томаты', value: '3' },
            { text: 'Помидоры', value: '4' },
            { text: 'Лук', value: '5' },
            { text: 'Огурец', value: '6' },
            { text: 'Лосось', value: '7' },
            { text: 'Креветки', value: '8' },
            { text: 'Капуста', value: '9' },
          ]}
        />
      </div>
    </div>
  );
};
