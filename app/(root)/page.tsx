import {Container, Filters, Title, TopBar} from "@/shared/components/shared";
import {ProductGroupList} from "@/shared/components/shared/products-group-list";
import {Suspense} from "react";
import {findPizzas, GetSearchParams} from "@/shared/lib/find-pizzas";
import {Stories} from "@/shared/components/shared/stories";

export default async function Home({ searchParams }: { searchParams: GetSearchParams }) {
    const categories = await findPizzas(searchParams);

    return (
        <>
            <Container className="mt-10">
                <Title text="Все пиццы" size="lg" className="font-extrabold"/>
            </Container>

            <TopBar categories={categories.filter((category) => category.products.length > 0)} />

            <Stories />

            <Container className="mt-10 pb-14">
                <div className="flex gap-[80px]">
                    <div className="w-[250px]">
                        <Suspense><Filters/></Suspense>
                    </div>

                    <div className="flex-1">
                        <div className="flex flex-col gap-16">
                            {categories.map((category) =>
                                    category.products.length > 0 && (
                                        <ProductGroupList
                                            key={category.id}
                                            categoryId={category.id}
                                            title={category.name}
                                            items={category.products}
                                        />
                                    )
                                )
                            }
                        </div>
                    </div>
                </div>
            </Container>
        </>
    );
}
