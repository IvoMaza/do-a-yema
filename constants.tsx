
import React from 'react';
import { Producer, Order, ProductionType } from './types';

export const PRODUCERS_DATA: Producer[] = [
  {
    id: '1',
    name: 'Granja La Clarita',
    location: 'Luján, Buenos Aires',
    productionType: ProductionType.CageFree,
    rating: 4.8,
    certifications: ['SENASA', 'Libre de Jaula'],
    imageUrl: 'https://picsum.photos/seed/granjaclarita/400/300',
    description: 'Somos una granja familiar dedicada a la cría de gallinas en libertad, asegurando un producto de alta calidad y bienestar animal. Nuestros huevos son frescos y deliciosos.',
    products: [
      { id: 'p1', name: 'Huevos Camperos (Docena)', price: 1500, unit: 'docena', description: 'Huevos frescos de gallinas criadas en libertad.', imageUrl: 'https://picsum.photos/seed/huevosclarita/400/300' },
      { id: 'p2', name: 'Maple de Huevos Camperos (30u)', price: 3500, unit: 'maple', description: 'Ideal para familias y pequeños comercios.', imageUrl: 'https://picsum.photos/seed/mapleclarita/400/300' },
    ],
    reviews: [
      { id: 'r1', author: 'Ana G.', rating: 5, comment: '¡Los mejores huevos que probé! La yema es súper anaranjada.' },
      { id: 'r2', author: 'Restaurante Sabor Criollo', rating: 5, comment: 'Calidad constante y excelente servicio de entrega.' },
    ],
  },
  {
    id: '2',
    name: 'Huevos del Sol Orgánicos',
    location: 'Capilla del Señor, Buenos Aires',
    productionType: ProductionType.Organic,
    rating: 4.9,
    certifications: ['Certificación Orgánica Argentina', 'SENASA'],
    imageUrl: 'https://picsum.photos/seed/granjadelsol/400/300',
    description: 'Nuestra producción es 100% orgánica, con gallinas alimentadas con pasturas y granos libres de pesticidas. Cuidamos el medio ambiente y la salud de nuestros clientes.',
    products: [
      { id: 'p3', name: 'Huevos Orgánicos (Docena)', price: 2200, unit: 'docena', description: 'Certificados orgánicos, de sabor inigualable.', imageUrl: 'https://picsum.photos/seed/huevosorganicos/400/300' },
      { id: 'p4', name: 'Claras Pasteurizadas Orgánicas (500ml)', price: 1800, unit: 'botella', description: 'Perfectas para repostería y dietas altas en proteína.', imageUrl: 'https://picsum.photos/seed/clarasorganicas/400/300' },
    ],
    reviews: [
      { id: 'r3', author: 'Carlos Fit', rating: 5, comment: 'Excelente producto para mis batidos. La certificación me da confianza.' },
      { id: 'r4', author: 'Panadería Dulce Aroma', rating: 4, comment: 'Buena calidad, aunque a veces hay demoras en la entrega.' },
    ],
  },
  {
    id: '3',
    name: 'El Pastoril de Areco',
    location: 'San Antonio de Areco, Buenos Aires',
    productionType: ProductionType.PastureRaised,
    rating: 4.7,
    certifications: ['SENASA'],
    imageUrl: 'https://picsum.photos/seed/granjapastoril/400/300',
    description: 'Gallinas que pastorean libremente en grandes praderas. Creemos en un sistema regenerativo que produce huevos nutritivos y cuida la tierra.',
    products: [
      { id: 'p5', name: 'Huevos de Pastoreo (Docena)', price: 1800, unit: 'docena', description: 'Huevos de gallinas que viven al aire libre todo el día.', imageUrl: 'https://picsum.photos/seed/huevospastoreo/400/300' },
    ],
    reviews: [
      { id: 'r5', author: 'Juana M.', rating: 5, comment: 'Se nota la diferencia en el sabor y el color. Valen cada peso.' },
    ],
  },
];

export const MOCK_ORDERS: Order[] = [
    { id: 'o1', customerName: 'Panadería La Central', items: [{ productName: 'Maple de Huevos Camperos', quantity: 5 }], status: 'pending', deliveryDate: '2024-08-15' },
    { id: 'o2', customerName: 'Gimnasio Full Body', items: [{ productName: 'Claras Pasteurizadas Orgánicas', quantity: 10 }], status: 'confirmed', deliveryDate: '2024-08-16' },
    { id: 'o3', customerName: 'Familia Ramirez', items: [{ productName: 'Huevos de Pastoreo (Docena)', quantity: 2 }], status: 'delivered', deliveryDate: '2024-08-12' },
];

export const EggIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-brand-yellow" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM7 7a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1zm6 0a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" transform="scale(1.2, 1) translate(-2, -1.5) rotate(-15 10 10)" />
        <path d="M10 2a6 6 0 00-3.6 10.84 8.01 8.01 0 007.2 0A6 6 0 0010 2z" transform="scale(0.8, 1.1) translate(-2, -0.5)" />
    </svg>
);
