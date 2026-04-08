export type Brand = 'iPhone' | 'Samsung' | 'Tecno' | 'Accessoires';

export interface Product {
  id: string;
  brand: Brand;
  name: string;
  price: string;
  image: string;
}

export const products: Product[] = [
  { id: 'ip17pm', brand: 'iPhone', name: 'iPhone 17 Pro Max', price: '1 350 000 CFA', image: 'https://picsum.photos/seed/ip17pm/600/800' },
  { id: 'ip16p', brand: 'iPhone', name: 'iPhone 16 Pro', price: '1 100 000 CFA', image: 'https://picsum.photos/seed/ip16p/600/800' },
  { id: 'ip15', brand: 'iPhone', name: 'iPhone 15', price: '750 000 CFA', image: 'https://picsum.photos/seed/ip15/600/800' },
  { id: 'ip14pm', brand: 'iPhone', name: 'iPhone 14 Pro Max', price: '850 000 CFA', image: 'https://picsum.photos/seed/ip14pm/600/800' },
  { id: 'ip13', brand: 'iPhone', name: 'iPhone 13', price: '500 000 CFA', image: 'https://picsum.photos/seed/ip13/600/800' },
  { id: 'ip11', brand: 'iPhone', name: 'iPhone 11', price: '250 000 CFA', image: 'https://picsum.photos/seed/ip11/600/800' },
  { id: 'ip7', brand: 'iPhone', name: 'iPhone 7', price: '80 000 CFA', image: 'https://picsum.photos/seed/ip7/600/800' },
  
  { id: 's24u', brand: 'Samsung', name: 'Samsung Galaxy S24 Ultra', price: '1 150 000 CFA', image: 'https://picsum.photos/seed/s24u/600/800' },
  { id: 's23u', brand: 'Samsung', name: 'Samsung Galaxy S23 Ultra', price: '850 000 CFA', image: 'https://picsum.photos/seed/s23u/600/800' },
  { id: 'zfold5', brand: 'Samsung', name: 'Samsung Galaxy Z Fold 5', price: '1 200 000 CFA', image: 'https://picsum.photos/seed/zfold5/600/800' },
  
  { id: 'tphv', brand: 'Tecno', name: 'Tecno Phantom V Fold', price: '650 000 CFA', image: 'https://picsum.photos/seed/tphv/600/800' },
  { id: 'tcam20', brand: 'Tecno', name: 'Tecno Camon 20 Premier', price: '280 000 CFA', image: 'https://picsum.photos/seed/tcam20/600/800' },
  { id: 'tspark10', brand: 'Tecno', name: 'Tecno Spark 10 Pro', price: '120 000 CFA', image: 'https://picsum.photos/seed/tspark10/600/800' },
  
  { id: 'a1', brand: 'Accessoires', name: 'AirPods Pro 2', price: '180 000 CFA', image: 'https://picsum.photos/seed/airpods/600/800' },
  { id: 'a2', brand: 'Accessoires', name: 'Galaxy Buds 2 Pro', price: '140 000 CFA', image: 'https://picsum.photos/seed/buds/600/800' },
  { id: 'a3', brand: 'Accessoires', name: 'Enceinte JBL Charge 5', price: '110 000 CFA', image: 'https://picsum.photos/seed/jbl/600/800' },
  { id: 'a4', brand: 'Accessoires', name: 'Chargeur Rapide 20W', price: '15 000 CFA', image: 'https://picsum.photos/seed/chargeur/600/800' },
];

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  phone: string;
  image: string;
}

export const team: TeamMember[] = [
  { id: 't1', name: 'Amadou', role: 'Expert Apple', phone: '+22300000001', image: 'https://picsum.photos/seed/amadou/400/400?grayscale' },
  { id: 't2', name: 'Fatoumata', role: 'Spécialiste Samsung', phone: '+22300000002', image: 'https://picsum.photos/seed/fatoumata/400/400?grayscale' },
  { id: 't3', name: 'Oumar', role: 'Conseiller Tecno', phone: '+22300000003', image: 'https://picsum.photos/seed/oumar/400/400?grayscale' },
  { id: 't4', name: 'Awa', role: 'Accessoires & Audio', phone: '+22300000004', image: 'https://picsum.photos/seed/awa/400/400?grayscale' },
  { id: 't5', name: 'Ibrahim', role: 'Service Client', phone: '+22300000005', image: 'https://picsum.photos/seed/ibrahim/400/400?grayscale' },
];
