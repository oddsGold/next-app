'use server';

import {CheckoutFormValues} from "@/shared/constants";
import {prisma} from "@/prisma/prisma-client";
import {OrderStatus} from "@prisma/client";
import { cookies } from 'next/headers';
import {PayOrderTemplate} from "@/shared/components/shared/email-temapltes";
// import {sendEmail} from "@/shared/lib";

export async function createOrder(data: CheckoutFormValues) {

    try{
        const cookieStore = cookies();
        const cartToken = cookieStore.get('cartToken')?.value;

        if (!cartToken) {
            throw new Error('Cart token not found');
        }

        const userCart = await prisma.cart.findFirst({
            include: {
                user: true,
                items: {
                    include: {
                        ingredients: true,
                        productItem: {
                            include: {
                                product: true,
                            },
                        },
                    },
                },
            },
            where: {
                token: cartToken,
            },
        });

        /* Если корзина не найдена возращаем ошибку */
        if (!userCart) {
            throw new Error('Cart not found');
        }

        /* Если корзина пустая возращаем ошибку */
        if (userCart?.totalAmount === 0) {
            throw new Error('Cart is empty');
        }

        const order = await prisma.order.create({
            data: {
                token: cartToken,
                fullName: data.firstName + ' ' + data.lastName,
                email: data.email,
                phone: data.phone,
                address: data.address,
                comment: data.comment,
                totalAmount: userCart.totalAmount,
                status: OrderStatus.PENDING,
                items: JSON.stringify(userCart.items),
            }
        });

        /* Очищаем корзину */
        await prisma.cart.update({
            where: {
                id: userCart.id,
            },
            data: {
                totalAmount: 0,
            },
        });

        await prisma.cartItem.deleteMany({
            where: {
                cartId: userCart.id,
            },
        });

        // const paymentData = await createPayment({
        //     amount: order.totalAmount,
        //     orderId: order.id,
        //     description: 'Оплата заказа #' + order.id,
        // });
        //
        // if (!paymentData) {
        //     throw new Error('Payment data not found');
        // }
        //
        // await prisma.order.update({
        //     where: {
        //         id: order.id,
        //     },
        //     data: {
        //         paymentId: paymentData.id,
        //     },
        // });
        //
        // const paymentUrl = paymentData.confirmation.confirmation_url;

        // Отправка email через API маршрут

        const response = await fetch(`${process.env.NEXT_PUBLIC_SITE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                to: data.email,
                subject: `Next Pizza / Pay for your order #${order.id}`,
                orderId: order.id,
                totalAmount: order.totalAmount,
                paymentUrl: 'https://intervals.icu',
            }),
        });

        const responseData = await response.json();

        return 'https://intervals.icu/?w=2025-03-10';

    }catch(err){

    }
}