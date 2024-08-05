import { Container, Filters, Title, TopBar } from '@/components/shared';
import { ProductsGroupList } from '@/components/shared/products-group-list';

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <Title text="Все пиццы" size="lg" className="font-extrabold" />
      </Container>
      <TopBar />
      <Container className="mt-10 pb-14">
        <div className="flex gap-[80px]">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          {/* Список товаров */}
          <div className="flex-1">
            <div className="flex flex-col gap-16">
              <ProductsGroupList
                title="Пиццы"
                items={[
                  {
                    id: 1,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 8,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 9,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                ]}
                categoryId={1}
              />
              <ProductsGroupList
                title="Комбо"
                items={[
                  {
                    id: 1,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 2,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 3,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 4,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 5,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 6,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 7,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 8,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                  {
                    id: 9,
                    name: 'Пицца-Сырная',
                    imageUrl:
                      'https://media.dodostatic.net/image/r:292x292/11EE7D610D2925109AB2E1C92CC5383C.avif',
                    items: [{ price: 200 }],
                  },
                ]}
                categoryId={2}
              />
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
