import React from 'react';
import { Ingredient } from '@prisma/client';
import { Api } from '@/services/api-client';

interface ReturnProps {
  ingredients: Ingredient[];
  loading: boolean;
}

export const useFilterIngredients = (): ReturnProps => {
  const [ingredients, setIngredients] = React.useState<Ingredient[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    Api.ingredients
      .getAll()
      .then((data) => {
        setIngredients(data);
        setLoading(true);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  });

  return { ingredients, loading };
};
