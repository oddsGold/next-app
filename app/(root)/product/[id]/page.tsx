import {prisma} from "@/prisma/prisma-client";
import {notFound} from "next/navigation";
import {Container, PizzaImage, Title} from "@/components/shared";
import {GroupVariants} from "@/components/shared/group-variants";

export default async function ProductPage({params: {id}}: { params: { id: string } }) {

    const product = await prisma.product.findFirst({where: {id: Number(id)}});

    if (!product) {
        return notFound();
    }

    return (
        <Container className="flex flex-col my-10">
            <div className="flex flex-1">
                <PizzaImage imageUrl={product.imageUrl} size={40}/>

                <div className="w-[490px] bg-[#FCFCFC] p-7">
                    <Title text={product.name} size="md" className="font-extrabold mb-1"/>

                    <p className="text-gray-400">Lorem ipsum dolor sit amet, consectetur.</p>

                    <GroupVariants selectedValue="2"
                                   items={
                                       [
                                           {
                                               name: 'Small',
                                               value: '1'
                                           },
                                           {
                                               name: 'Middle',
                                               value: '2'
                                           },
                                           {
                                               name: 'Big',
                                               value: '3',
                                               disabled: true
                                           }
                                       ]
                                   }/>
                </div>
            </div>
        </Container>
    )
}