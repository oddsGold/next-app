import {Container, Filters, Title, TopBar} from "@/components/shared";
import {ProductCard} from "@/components/shared/product-card";
import {ProductGroupList} from "@/components/shared/products-group-list";

export default function Home() {
  return (
      <>
          <Container className="mt-10">
              <Title text="Все пиццы" size="lg" className="font-extrabold" />
          </Container>

          <TopBar />

          <Container className="mt-10 pb-14">
              <div className="flex gap-[80px]">
                  <div className="w-[250px]">
                     <Filters />
                  </div>

                  <div className="flex-1">
                      <div className="flex flex-col gap-16">
                          <ProductGroupList
                              title="Pizzas"
                              items={[
                                  {
                                      id: 1,
                                      name: "Чизбергер-пицца",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 2,
                                      name: "Чизбергер-пицца",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 3,
                                      name: "Чизбергер-пицца",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 4,
                                      name: "Чизбергер-пицца",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 5,
                                      name: "Чизбергер-пицца",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 6,
                                      name: "Чизбергер-пицца",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF9050501F3FA690A64053F5F07626.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                              ]}
                              categoryId={1}
                          />

                          <ProductGroupList
                              title="Combo"
                              items={[
                                  {
                                      id: 1,
                                      name: "Дэнвич с говядиной",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF023C30BF9E6BA72D6ABB6375A56D.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 2,
                                      name: "Дэнвич с говядиной",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF023C30BF9E6BA72D6ABB6375A56D.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 3,
                                      name: "Дэнвич с говядиной",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF023C30BF9E6BA72D6ABB6375A56D.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 4,
                                      name: "Дэнвич с говядиной",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF023C30BF9E6BA72D6ABB6375A56D.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 5,
                                      name: "Дэнвич с говядиной",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF023C30BF9E6BA72D6ABB6375A56D.jpg",
                                      price: 550,
                                      items: [{price: 550}]
                                  },
                                  {
                                      id: 6,
                                      name: "Дэнвич с говядиной",
                                      imageUrl: "https://media.dodostatic.net/image/r:292x292/11EF023C30BF9E6BA72D6ABB6375A56D.jpg",
                                      price: 550,
                                      items: [{price: 550}]
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
